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

/** The one line the agent opened. */
const LIT = "        session = self.auth.verify(payload.token)";

export function CodeField({ rows = 60, delay = "0ms" }: { rows?: number; delay?: string }) {
  // High in the field, so it lands in the strip above the cut rather than
  // behind the band or under the sign-off.
  const litRow = Math.floor(rows * 0.11);

  return (
    // The entrance flag lives on this element rather than on a wrapper: a
    // static wrapper around an absolutely positioned child has no height, and
    // once it is animated it becomes the containing block — which collapses
    // this field to zero and `overflow-hidden` then clips away every row.
    <div
      aria-hidden="true"
      data-enter
      style={{ "--enter-delay": delay } as React.CSSProperties}
      className="absolute inset-0 overflow-hidden select-none font-mono text-[13px] leading-[1.55] whitespace-pre"
    >
      {Array.from({ length: rows }, (_, r) => {
        const isLit = r === litRow;
        const text = isLit ? LIT : lines[(r * 7 + 3) % lines.length];
        // A ragged left edge reads as a listing rather than a paragraph.
        const indent = isLit ? 0 : ((r * 13) % 5) * 22;
        return (
          <div
            key={r}
            className={isLit ? "relative text-traced" : "text-texture"}
            style={{ paddingLeft: `calc(7% + ${indent}px)` }}
          >
            {isLit && (
              <span className="absolute left-[calc(7%-26px)] top-1/2 h-[3px] w-[14px] -translate-y-1/2 bg-traced" />
            )}
            {text}
          </div>
        );
      })}
    </div>
  );
}
