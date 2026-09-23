import {
  FileText,
  MousePointer,
  Shield,
  Sparkle,
  type Icon,
} from "@/components/ui/icons";

interface Step {
  icon: Icon;
  title: string;
  description: string;
}

/**
 * The four steps, in order. The displayed number comes from the position in
 * this array rather than a field, so it cannot drift out of step with it.
 */
const STEPS: Step[] = [
  {
    icon: MousePointer,
    title: "Click",
    description: "Add the NaijaGov extension to your browser.",
  },
  {
    icon: Sparkle,
    title: "Understand",
    description:
      "It reads the page, explains what you need, and finds official requirements.",
  },
  {
    icon: FileText,
    title: "Get It Done",
    description:
      "It helps you fill forms, highlights key fields, and guides you through the process.",
  },
  {
    icon: Shield,
    title: "Stay in Control",
    description: "It pauses when a security step needs your attention.",
  },
];

export { STEPS };
export type { Step };
