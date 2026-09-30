import Link from "next/link";
import { Info } from "@/components/ui/icons";
import { CopyAddress } from "./copy-address";

interface InstallStepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

/** One numbered step. The number is a marker; the title carries the meaning. */
function InstallStep({ number, title, children }: InstallStepProps) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 border-t border-rule py-6 first:border-t-0 first:pt-0 narrow:gap-5">
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-full border border-green-900 text-sm font-bold text-green-900"
      >
        {number}
      </span>
      <div>
        <h3 className="text-[18px] leading-tight font-bold tracking-[-0.01em] text-ink">
          <span className="sr-only">Step {number}: </span>
          {title}
        </h3>
        <div className="mt-2 space-y-3 text-[15px] leading-[1.6] text-ink-muted">
          {children}
        </div>
      </div>
    </li>
  );
}

interface InlineProps {
  children: React.ReactNode;
}

/** A quieter aside inside a step: something easy to get wrong. */
function Tip({ children }: InlineProps) {
  return (
    <p className="flex gap-2.5 rounded-md bg-green-50 px-3.5 py-3 text-sm leading-[1.55] text-ink">
      <Info size={16} aria-hidden="true" className="mt-0.5 text-green-900" />
      <span>{children}</span>
    </p>
  );
}

/** Inline name of something on screen: a file, folder, or button label. */
function Ui({ children }: InlineProps) {
  return <strong className="font-medium text-ink">{children}</strong>;
}

function StepList() {
  return (
    <ol>
      <InstallStep number={1} title="Download the extension">
        <p>
          Click <Ui>Download extension</Ui>. Your browser saves a file called{" "}
          <Ui>naijagov-extension.zip</Ui>, usually to your Downloads folder.
        </p>
      </InstallStep>

      <InstallStep number={2} title="Unzip the folder">
        <p>
          On a Mac, double-click the zip file. On Windows, right-click it,
          choose <Ui>Extract All…</Ui>, then click <Ui>Extract</Ui>. Either way
          you get a folder called <Ui>naijagov-extension</Ui>.
        </p>
        <Tip>
          Leave the folder where it is. The browser loads the extension from
          this folder every time it starts, so moving or deleting it removes
          the extension.
        </Tip>
      </InstallStep>

      <InstallStep number={3} title="Open your browser's extensions page">
        <p>
          Paste the address for your browser into the address bar and press{" "}
          <Ui>Enter</Ui>. Websites aren&apos;t allowed to link to this page, so
          it has to be pasted or typed.
        </p>
        <div className="space-y-2">
          <CopyAddress browser="Chrome" address="chrome://extensions" />
          <CopyAddress browser="Edge" address="edge://extensions" />
          <CopyAddress browser="Brave" address="brave://extensions" />
        </div>
      </InstallStep>

      <InstallStep number={4} title="Turn on Developer mode">
        <p>
          In Chrome and Brave, the <Ui>Developer mode</Ui> switch is in the
          top-right corner of the page. In Edge, it&apos;s in the left sidebar.
          Switch it on — this lets the browser load an extension from a folder
          instead of from the Web Store.
        </p>
      </InstallStep>

      <InstallStep number={5} title="Click Load unpacked and pick the folder">
        <p>
          A new row of buttons appears. Click <Ui>Load unpacked</Ui>, select
          the <Ui>naijagov-extension</Ui> folder you unzipped, and click{" "}
          <Ui>Select</Ui>. A <Ui>NaijaGov Copilot</Ui> card appears in the list
          of extensions.
        </p>
        <Tip>
          Select the folder that has <Ui>manifest.json</Ui> directly inside it.
          Windows sometimes extracts into a folder inside a folder of the same
          name — if so, open the outer one and select the inner one.
        </Tip>
      </InstallStep>

      <InstallStep number={6} title="Pin it to your toolbar">
        <p>
          Click the puzzle-piece <Ui>Extensions</Ui> icon beside the address
          bar, then click the pin next to <Ui>NaijaGov Copilot</Ui>. The green
          N icon now stays in your toolbar.
        </p>
      </InstallStep>

      <InstallStep number={7} title="Open it on the test portal">
        <p>
          Go to one of the{" "}
          <Link
            href="#try-it"
            className="rounded-sm text-green-900 underline underline-offset-4 outline-none hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            test pages below
          </Link>{" "}
          and click the NaijaGov icon in your toolbar. The assistant opens in a
          side panel on the right of the page.
        </p>
      </InstallStep>
    </ol>
  );
}

export { StepList };
