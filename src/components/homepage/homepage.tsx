import { PageWrapper } from "src/components/page-wrapper.tsx";
import { Navigation } from "src/components/navigation.tsx";
import { Hero } from "src/components/homepage/components/hero.tsx";
import { pageSections } from "src/components/homepage/homepage-sections";
import { Footer } from "src/components/footer";

export function Homepage() {
  return (
    <PageWrapper>
      <div data-component="header-grid-absolute-placeholder">
        {/* Header placeholder for absolute position */}
      </div>
      <Navigation
        tailwindLinkColorClass="text-white"
        tailwindPositionClass="absolute"
      />
      <div>
        <Hero />

        <main id="main">
          {pageSections.map((section) => (
            <section key={section.id} id={section.id} class="bg-white">
              {section.component}
            </section>
          ))}
        </main>
      </div>
      <Footer />
    </PageWrapper>
  );
}
