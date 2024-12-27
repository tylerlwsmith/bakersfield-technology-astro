import type { ReactNode } from "preact/compat";

const tools = [
  "Laravel",
  "Django",
  "Ruby on Rails",
  "WordPress",
  "Docker",
  "Ansible",
  "Terraform",
  "React",
  "Next.js",
  "React Native",
  "Express.js",
  "Vue",
  "Svelte",
  "jQuery",
];

const languages = ["JavaScript", "Python", "PHP", "Ruby"];

function ListTitle({ children }: { children: ReactNode }) {
  return <h3 class="mb-2 text-lg sm:text-xl">{children}</h3>;
}

function List({ children }: { children: ReactNode }) {
  return <ul class="text-gray-500 mb-6 columns-2">{children}</ul>;
}

function ListItem({ children }: { children: ReactNode }) {
  return <li class="sm:text-lg sm:mb-1">{children}</li>;
}

export function Technologies() {
  return (
    <div class="pt-16 pb-6">
      <div class="max-w-2xl mx-auto px-8">
        <h2
          class="
					font-black mb-8 text-pink-600
					text-3xl
					xs:text-5xl
					sm:text-6xl
				"
        >
          Technologies
        </h2>

        <div class="prose text-xl font-light text-gray-500 not-antialiased leading-8 mb-8 max-w-xl">
          <p>
            Bakersfield Technology has experience with a wide variety of tools
            and languages. Here are some favorites.
          </p>
        </div>

        <ListTitle>Tools</ListTitle>
        <List>
          {tools.map((tool) => (
            <ListItem key={tool}>{tool}</ListItem>
          ))}
        </List>

        <ListTitle>Languages</ListTitle>

        <List>
          {languages.map((language) => (
            <ListItem key={language}>{language}</ListItem>
          ))}
        </List>

        <div class="text-sm pt-2 text-gray-500 leading-normal max-w-[350px]">
          <p>
            Don't see your organization's tools listed on here?{" "}
            <a href="#contact" class="underline">
              Get in touch
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
