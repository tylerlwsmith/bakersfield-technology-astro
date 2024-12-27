import { pageSections } from "src/components/homepage/homepage-sections";

export function Navigation({
  tailwindLinkColorClass,
  tailwindPositionClass,
}: {
  tailwindLinkColorClass: string;
  tailwindPositionClass: string;
}) {
  return (
    <nav
      class={`
        flex left-0 right-0 top-0 py-8 px-4 md:px-8 z-10 items-center
        ${tailwindLinkColorClass}
        ${tailwindPositionClass}
      `}
    >
      <span
        class="
          sr-only inline-block top-8 left-5 border border-white z-20 text-white
          focus-within:not-sr-only focus-within:fixed
        "
      >
        <a href="#main" class="py-2 px-5 bg-pink-600">
          Skip To Content
        </a>
      </span>
      <a
        href="/"
        class="text-xl font-black"
        style="font-family: 'Montserrat Variable', sans-serif;"
      >
        Bakersfield Technology
      </a>
      <ul class="justify-end ml-auto hidden md:flex">
        {pageSections.map((section) => (
          <li key={section.id} class={"mx-4"}>
            <a
              class="border-b border-transparent hover:border-inherit transition-all p-1.5"
              href={"#" + section.id}
            >
              {section.menuTitle}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
