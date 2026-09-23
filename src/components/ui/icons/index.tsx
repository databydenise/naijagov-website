/**
 * Every icon in the app comes through this module, so swapping the source
 * later touches one file. lucide ships 1.5px strokes on currentColor at 24px;
 * `size` on the component scales it — 16px is the project default.
 */
export {
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Menu,
  X as Close,
  Lock,
  Sparkle,
  Compass,
  User,
  FileText,
  // lucide 1.47 renamed HelpCircle; this is the same glyph.
  CircleQuestionMark as HelpCircle,
  Settings,
  Play,
} from "lucide-react"

export type { LucideIcon as Icon } from "lucide-react"
