import type { ReactNode } from "preact/compat";
import heroImage from "./hero.jpg";
import { FadeIn } from "src/components/fadein";

function InsetBackground() {
  return (
    <div
      class="z-0 inset-0 absolute bg-no-repeat bg-cover bg-center opacity-30 mix-blend-soft-light sm:bg-fixed"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    ></div>
  );
}

function CenteredContainer({ children }: { children: ReactNode }) {
  return (
    <div class="max-w-[1000px] w-full mx-auto relative z-10">{children}</div>
  );
}

function ConstrainedWidth({ children }: { children: ReactNode }) {
  return (
    <div
      class="
        mx-auto text-center
        sm:mx-0 sm:text-left
        sm:max-w-md
        md:max-w-2xl
      "
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <header
      data-component="hero"
      class="
        overflow-hidden
        flex items-center
        min-h-screen bg-gradient-to-br
        from-pink-600 to-purple-500 text-white
        px-6 sm:px-10 pt-24 pb-20 relative
      "
    >
      <InsetBackground />
      <CenteredContainer>
        <ConstrainedWidth>
          <FadeIn>
            <h1
              class="
								font-black tracking-wide mb-8
								text-[12vw] leading-[1.0em]
								sm:text-7xl
								md:text-8xl
							"
            >
              Bakersfield Technology
            </h1>
          </FadeIn>
          <FadeIn>
            <p class="text-lg sm:text-2xl font-light tracking-wider mb-14">
              Building technology for Bakersfield's digital needs
            </p>
          </FadeIn>
          <FadeIn>
            <a
              href="#services"
              class="
								inline-block tracking-widest border border-white rounded-full
								hover:bg-white hover:text-pink-600 transition
								text-regular px-10 py-3
								sm:text-lg sm:px-12
							"
            >
              Learn More
            </a>
          </FadeIn>
        </ConstrainedWidth>
      </CenteredContainer>
    </header>
  );
}
