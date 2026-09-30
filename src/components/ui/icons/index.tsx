/**
 * Every icon in the app comes through this module, so swapping the source
 * later touches one file. lucide draws on currentColor at 24px and `size`
 * scales it — 16px is the project default. Its stroke is 2; the 1.5 the
 * design calls for is applied once in globals.css, not per call site.
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
  MousePointer,
  Shield,
  // lucide 1.47 renamed HelpCircle; this is the same glyph.
  CircleQuestionMark as HelpCircle,
  Settings,
  Play,
  IdCard,
  History,
  Sparkles,
  LogOut,
  Download,
  ExternalLink,
  Copy,
  Check,
  Info,
} from "lucide-react"

export type { LucideIcon as Icon } from "lucide-react"
