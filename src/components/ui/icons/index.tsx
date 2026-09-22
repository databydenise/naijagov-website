/**
 * Every icon in the app comes through this module, so swapping the source
 * later touches one file. lucide ships 1.5px strokes on currentColor at 24px;
 * `size` on the component scales it — 16px is the project default.
 */
export {
  ChevronDown,
  ArrowRight,
  Menu,
  X as Close,
} from "lucide-react"

export type { LucideIcon as Icon } from "lucide-react"
