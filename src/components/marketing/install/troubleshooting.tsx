const ISSUES = [
  {
    problem: "“Manifest file is missing or unreadable”",
    fix: "The wrong folder was selected. Click Load unpacked again and choose the folder that has manifest.json directly inside it.",
  },
  {
    problem: "There is no Load unpacked button",
    fix: "Developer mode is off. Switch it on (step 4) and the button appears.",
  },
  {
    problem: "Clicking the icon does nothing on the portal",
    fix: "Reload the portal tab. Tabs that were already open before the install don't have the extension yet.",
  },
  {
    problem: "A warning about developer-mode extensions",
    fix: "This is normal for an extension loaded from a folder. Close the warning and keep the extension turned on.",
  },
  {
    problem: "Installing a newer build",
    fix: "Download and unzip it over the old folder, then click the reload arrow on the NaijaGov Copilot card in the extensions page.",
  },
] as const;

/** Common failure points in the unpacked install, with the fix for each. */
function Troubleshooting() {
  return (
    <div className="rounded-lg border border-rule bg-bg-surface p-5 narrow:p-6">
      <h3 className="text-[18px] leading-tight font-bold tracking-[-0.01em] text-ink">
        If something goes wrong
      </h3>
      <dl className="mt-4 divide-y divide-rule">
        {ISSUES.map((issue) => (
          <div key={issue.problem} className="py-3.5 first:pt-0 last:pb-0">
            <dt className="text-[15px] font-medium text-ink">
              {issue.problem}
            </dt>
            <dd className="mt-1 text-sm leading-[1.55] text-ink-muted">
              {issue.fix}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export { Troubleshooting };
