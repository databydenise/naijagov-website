interface AppPlaceholderProps {
  /** Becomes the page's only <h1>. */
  title: string;
  description: string;
}

/** Stands in for a signed-in page that has not been built yet. */
function AppPlaceholder({ title, description }: AppPlaceholderProps) {
  return (
    <div>
      <h1 className="text-[40px] text-ink">{title}</h1>
      <p className="mt-2 max-w-[60ch] text-base leading-relaxed text-ink-muted">
        {description}
      </p>
    </div>
  );
}

export { AppPlaceholder };
