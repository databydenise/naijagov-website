"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/ui/icons";

interface CopyAddressProps {
  /** Which browser this address is for, e.g. "Chrome". */
  browser: string;
  /** The internal page address, e.g. "chrome://extensions". */
  address: string;
}

type CopyState = "idle" | "copied" | "failed";

const STATUS: Record<CopyState, string> = {
  idle: "",
  copied: "Copied",
  failed: "Couldn't copy — select the address instead",
};

/**
 * A browser-internal address with a copy button. Websites cannot link to
 * chrome:// pages, so copying is the next best thing; the address itself is
 * plain selectable text in case the clipboard is unavailable.
 */
function CopyAddress({ browser, address }: CopyAddressProps) {
  const [state, setState] = useState<CopyState>("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setState("copied");
    } catch {
      setState("failed");
    }
    window.setTimeout(() => setState("idle"), 2500);
  };

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <span className="w-14 text-sm text-ink-muted">{browser}</span>
      <code className="rounded-sm border border-rule bg-bg-surface px-2 py-1 font-mono text-sm text-ink select-all">
        {address}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${browser} address, ${address}`}
        className="inline-flex size-8 items-center justify-center rounded-sm text-ink-muted outline-none transition-colors duration-150 hover:bg-green-50 hover:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {state === "copied" ? (
          <Check size={16} aria-hidden="true" />
        ) : (
          <Copy size={16} aria-hidden="true" />
        )}
      </button>
      <span role="status" className="text-sm text-green-900">
        {STATUS[state]}
      </span>
    </div>
  );
}

export { CopyAddress };
export type { CopyAddressProps };
