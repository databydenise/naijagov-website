/** Shown while the profile is empty. The header's button is its only control. */
function DemoNotice() {
  return (
    <section className="rounded-lg bg-green-50 p-5 narrow:p-6">
      <h2 className="text-base leading-snug font-bold tracking-normal text-green-900">
        This is a demo account
      </h2>
      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
        Nothing here is real or saved. Use &ldquo;Fill with demo data&rdquo; to
        see how NaijaGov keeps your details in one place.
      </p>
    </section>
  );
}

export { DemoNotice };
