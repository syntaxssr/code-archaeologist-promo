/**
 * The repository, as texture.
 *
 * Hundreds of lines at a size nobody is meant to read — deliberately below the
 * legibility floor, because the point is the mass, not the words (MASTER.md §3
 * allows type this small only where it carries no meaning).
 *
 * Two modes. On the standby screen it simply drifts, unscanned: this is the
 * codebase as it sits before anything has looked at it. On the title a single
 * pass runs down it and one line ignites — the line the agent actually opened.
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

const noise = (r: number, seed: number) => lines[(r * 7 + 3 + seed) % lines.length];
/** A ragged left edge reads as a listing rather than a paragraph. */
const indent = (r: number) => ((r * 13) % 5) * 22;

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
  /** No pass and no find: the repository before anything has looked at it. */
  scan = true,
  /** Seconds for one drift cycle. The rows are rendered twice and the stack is
   *  pulled up by exactly half its height, so the loop has no seam. Omit it and
   *  the field is still. */
  drift,
  /** Where the column starts. A second field at a different offset fills the
   *  width — one column of code leaves two thirds of a 16:9 screen empty. */
  left = "7%",
  /** Shifts which line each row lands on, so two columns are not copies. */
  seed = 0,
}: {
  rows?: number;
  delay?: string;
  scanStart?: number;
  scanStep?: number;
  litLabel?: string;
  scan?: boolean;
  drift?: number;
  left?: string;
  seed?: number;
}) {
  // High in the field, so it stays clear of the cut at every aspect ratio the
  // hall might have. The pass reaches it early and then carries on to the
  // bottom — which is the point: everything else was looked at too, and there
  // was nothing else worth opening.
  const litRow = Math.floor(rows * 0.11);
  const litAt = scanStart + litRow * scanStep;

  const row = (r: number, key: string) => {
    if (scan && r === litRow) {
      return (
        <div
          key={key}
          data-scan-hit
          style={{ paddingLeft: left, "--scan-delay": `${litAt}ms` } as React.CSSProperties}
          className="relative"
        >
          <span
            data-enter
            style={{ "--enter-delay": `${litAt + 180}ms`, left: `calc(${left} - 26px)` } as React.CSSProperties}
            className="absolute top-1/2 h-[3px] w-[14px] -translate-y-1/2 bg-traced"
          />
          {LIT}
          {litLabel && (
            // Absolutely placed so the caption cannot change this row's height
            // and knock the whole field out of rhythm.
            <span
              data-enter
              style={{ "--enter-delay": `${litAt + 180}ms`, left: `calc(${left} + 53ch)` } as React.CSSProperties}
              className="absolute top-1/2 -translate-y-1/2 font-sans text-[17px] leading-none font-medium whitespace-nowrap text-muted"
            >
              {litLabel}
            </span>
          )}
        </div>
      );
    }

    // Noise. Hidden from assistive tech one row at a time rather than by hiding
    // the whole field, so the lit line and its caption — the only part that
    // means anything — still reach a screen reader.
    return (
      <div
        key={key}
        aria-hidden="true"
        {...(scan ? { "data-scan": "" } : { className: "text-texture" })}
        style={
          {
            paddingLeft: `calc(${left} + ${indent(r)}px)`,
            ...(scan ? { "--scan-delay": `${scanStart + r * scanStep}ms` } : null),
          } as React.CSSProperties
        }
      >
        {noise(r, seed)}
      </div>
    );
  };

  const stack = Array.from({ length: rows }, (_, r) => row(r, `a${r}`));

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
      {drift ? (
        <div
          data-drift
          style={{ animation: `drift ${drift}s linear infinite` }}
          className="will-change-transform"
        >
          {stack}
          {Array.from({ length: rows }, (_, r) => row(r, `b${r}`))}
        </div>
      ) : (
        stack
      )}
    </div>
  );
}
