import { Button } from "@/components/ui/button";
import { Sparkles } from "@/components/ui/icons";

interface DemoButtonProps {
  filled: boolean;
  filling: boolean;
  /** Id of the message explaining a failed fill, when there is one. */
  describedBy?: string;
  onFill: () => void;
  onClear: () => void;
}

/**
 * One element for both actions, so focus stays put when it flips between
 * filling and clearing. While filling it stays focusable and ignores clicks,
 * rather than going `disabled` and dropping focus to the page.
 */
function DemoButton({
  filled,
  filling,
  describedBy,
  onFill,
  onClear,
}: DemoButtonProps) {
  const handleClick = () => {
    if (filling) return;
    if (filled) onClear();
    else onFill();
  };

  return (
    <Button
      type="button"
      variant={filled ? "secondary" : "primary"}
      onClick={handleClick}
      aria-busy={filling || undefined}
      aria-disabled={filling || undefined}
      aria-describedby={describedBy}
      className="w-full narrow:w-auto aria-disabled:cursor-progress"
    >
      {filled ? (
        "Clear demo data"
      ) : (
        <>
          <Sparkles size={16} aria-hidden="true" />
          {filling ? "Filling…" : "Fill with demo data"}
        </>
      )}
    </Button>
  );
}

export { DemoButton };
