import type { ReactNode } from "preact/compat";

export function Container({ children }: { children: ReactNode }) {
  return <div class="max-w-3xl mx-auto">{children}</div>;
}
