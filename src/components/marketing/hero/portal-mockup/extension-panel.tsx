import {
  ChevronRight,
  Close,
  Compass,
  FileText,
  HelpCircle,
  Settings,
  Sparkle,
  User,
  type Icon,
} from "@/components/ui/icons";
import { LogoMark } from "@/components/ui/logo";

/**
 * The extension panel as it would appear over the portal page. Decorative:
 * the rows are <div>s, the close glyph is not a button, and the subtree holds
 * no tab stops — the mockup root is aria-hidden. LogoMark rather than Logo,
 * because the lockup is an anchor and would be both a stray tab stop and a
 * link hidden from assistive tech.
 *
 * Row height is 48px against the spec's 52px, and the panel is 270px wide:
 * at 52px the five rows push the card past the bottom of the 720 x 470 frame.
 */

interface ActionRow {
  icon: Icon;
  label: string;
}

const ACTIONS: ActionRow[] = [
  { icon: Compass, label: "Explain this page" },
  { icon: User, label: "Fill my information" },
  { icon: FileText, label: "Show official requirements" },
  { icon: HelpCircle, label: "Need help with something else?" },
];

function Row({ icon: RowIcon, label }: ActionRow) {
  return (
    <div className="flex h-12 items-center gap-2 px-2.5">
      <RowIcon size={18} className="shrink-0 text-ink" aria-hidden="true" />
      <span className="flex-1 text-[12px] font-medium whitespace-nowrap text-ink">
        {label}
      </span>
      <ChevronRight
        size={14}
        className="shrink-0 text-ink-faint"
        aria-hidden="true"
      />
    </div>
  );
}

function ExtensionPanel() {
  return (
    // The panel's own shadow is lighter than the frame's. Two shadows in one
    // hero is a deliberate exception to the flat design: the overlap plus this
    // shadow is what reads as the panel sitting on top of the portal page.
    <div className="rounded-lg border border-rule bg-bg-surface p-3.5 shadow-[0_8px_20px_-8px_rgba(26,26,24,0.16)]">
      <div className="flex items-center gap-2">
        <LogoMark size="sm" className="text-green-900" />
        <span className="flex-1 text-[17px] font-bold tracking-[-0.01em] text-green-900">
          NaijaGov
        </span>
        <Close
          size={14}
          className="shrink-0 text-ink-muted"
          aria-hidden="true"
        />
      </div>

      <div className="mt-3 flex gap-2.5 rounded-lg bg-green-50 p-3">
        <Sparkle
          size={18}
          className="mt-px shrink-0 text-green-900"
          aria-hidden="true"
        />
        <div>
          <div className="text-[13px] leading-[1.3] font-bold text-ink">
            I can help you with this form.
          </div>
          <div className="mt-0.5 text-[12px] leading-[1.45] text-ink-muted">
            Tell me what you want to do, or choose an option below.
          </div>
        </div>
      </div>

      <div className="mt-2.5 divide-y divide-rule rounded-lg border border-rule">
        {ACTIONS.map((action) => (
          <Row key={action.label} {...action} />
        ))}
      </div>

      {/* Utility, not a fifth action — separated so it doesn't read as one. */}
      <div className="mt-2.5 rounded-lg border border-rule">
        <Row icon={Settings} label="How to install" />
      </div>
    </div>
  );
}

export { ExtensionPanel };
