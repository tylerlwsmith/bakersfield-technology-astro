import type { ReactNode } from "preact/compat";

export function FadeIn({ children }: { children: ReactNode }) {
  return (
    <div
      data-component="fade-in"
      data-visible="false"
      class="
        transform-gpu transition ease-out duration-300
        motion-reduce:!opacity-100 motion-reduce:!translate-x-0
        data-[visible=false]:translate-x-6 data-[visible=false]:opacity-0
        data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100
      "
    >
      {children}
    </div>
  );
}
