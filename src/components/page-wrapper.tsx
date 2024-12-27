import type { ReactNode } from "preact/compat";

export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div class="grid-rows-[auto_1fr_auto] min-h-[100dvh] grid">{children}</div>
  );
}
