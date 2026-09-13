/**
 * The repository, as texture.
 *
 * Hundreds of lines at a size nobody is meant to read — deliberately below the
 * legibility floor, because the point is the mass, not the words (MASTER.md §3
 * allows type this small only where it carries no meaning). One line is lit,
 * and that one is the whole argument: this is what the agent actually opened.
 *
 * The lines are a fixed list walked deterministically, never randomised: a
 * random field would differ between the server and the client and the first
 * paint would tear.
 */

const lines = [
  "app/controllers/order_controller.py",
  "    def place_order(self, payload: OrderPayload) -> Order:",
  "        session = self.auth.verify(payload.token)",
  "app/services/order_service.py",
  "        return self.repo.save(order)",
  "app/services/payment_service.py",
  "    def charge(self, order: Order, method: PaymentMethod):",
  "        with self.pool.transaction() as tx:",
  "app/repositories/order_repository.py",
  "            tx.execute(INSERT_ORDER, order.as_row())",
  "app/lib/crypto.py",
  "    def sign(payload: bytes, key: bytes) -> str:",
  "app/lib/validate.py",
  "        raise ValidationError(field, reason)",
  "app/db/pool.py",
  "    def acquire(self, timeout: float = 5.0):",
  "app/db/query.py",
  "        cursor.execute(sql, params)",
  "app/middleware/auth.py",
  "    def verify_token(self, raw: str) -> Session:",
  "        if token.expires_at <= now(): raise Expired",
  "app/mailer/dispatch.py",
  "        queue.push(Message(to=user.email, tpl=tpl))",
  "vendor/legacy/report_builder.py",
  "        # TODO: nobody knows what this does any more",
  "config/settings.py",
  "    DATABASE_URL = env('DATABASE_URL')",
  "tests/test_order_service.py",
  "    def test_place_order_rejects_expired_token(self):",
  "app/controllers/auth_controller.py",
  "        return self.svc.login(form.username, form.password)",
  "app/services/notification_service.py",
  "        for sub in subscribers: sub.notify(event)",
];

/** The one line the agent opened. 49 characters, which is where the caption
 *  hangs from. */
const LIT = "        session = self.auth.verify(payload.token)";

export function CodeField({
  rows = 60,
  delay = "0ms",
  /** When the pass starts, in ms. It runs *before* the cut opens: once the band
   *  is over the middle of the field it hides 45% of the travel, and a wave
   *  that flickers at the top, vanishes, and reappears at the bottom reads as a
   *  glitch rather than a sweep. */
  scanStart = 150,
  /** Per-row stagger. 18ms over 60 rows is a pass of about one second — one
   *  movement, not a queue of sixty little ones. */
  scanStep = 18,
  litLabel,
}: {
  rows?: number;
  delay?: string;
  scanStart?: number;
  scanStep?: number;
  litLabel?: string;
}) {
  // High in the field, so it stays clear of the cut at every aspect ratio the
  // hall might have. The pass reaches it early and then carries on to the
  // bottom — which is the point: everything else was looked at too, and there
  // was nothing else worth opening.
  const litRow = Math.floor(rows * 0.11);
  const litAt = scanStart + litRow * scanStep;

  return (
    // The entrance flag lives on this element rather than on a wrapper: a
    // static wrapper around an absolutely positioned child has no height, and
    // once it is animated it becomes the containing block — which collapses
    // this field to zero and `overflow-hidden` then clips away every row.
    <div
      data-enter
      style={{ "--enter-delay": delay } as React.CSSProperties}
      className="absolute inset-0 overflow-hidden font-mono text-[13px] leading-[1.55] whitespace-pre select-none"
    >
      {Array.from({ length: rows }, (_, r) => {
        if (r === litRow) {
          return (
            <div
              key={r}
              data-scan-hit
              style={{ paddingLeft: "7%", "--scan-delay": `${litAt}ms` } as React.CSSProperties}
              className="relative"
            >
              <span
                data-enter
                style={{ "--enter-delay": `${litAt + 180}ms` } as React.CSSProperties}
                className="absolute top-1/2 left-[calc(7%-26px)] h-[3px] w-[14px] -translate-y-1/2 bg-traced"
              />
              {LIT}
              {litLabel && (
                // Absolutely placed so the caption cannot change this row's
                // height and knock the whole field out of rhythm.
                <span
                  data-enter
                  style={{ "--enter-delay": `${litAt + 180}ms` } as React.CSSProperties}
                  className="absolute top-1/2 left-[calc(7%+53ch)] -translate-y-1/2 font-sans text-[17px] leading-none font-medium whitespace-nowrap text-muted"
                >
                  {litLabel}
                </span>
              )}
            </div>
          );
        }

        // Noise. Hidden from assistive tech one row at a time rather than by
        // hiding the whole field, so the lit line and its caption — the only
        // part that means anything — still reach a screen reader.
        return (
          <div
            key={r}
            aria-hidden="true"
            data-scan
            style={
              {
                paddingLeft: `calc(7% + ${((r * 13) % 5) * 22}px)`,
                "--scan-delay": `${scanStart + r * scanStep}ms`,
              } as React.CSSProperties
            }
          >
            {lines[(r * 7 + 3) % lines.length]}
          </div>
        );
      })}
    </div>
  );
}
