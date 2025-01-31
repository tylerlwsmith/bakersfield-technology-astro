import styles from "./who-am-i.module.scss";

const links = [
  { title: "LinkedIn", link: "https://www.linkedin.com/in/tylerlwsmith/" },
  { title: "Resume", link: "https://resume.deadhandmedia.com" },
  { title: "GitHub", link: "https://github.com/tylerlwsmith" },
  { title: "Blog", link: "https://dev.to/tylerlwsmith" },
];

export function WhoAmI() {
  return (
    <div class="pt-16 pb-60 sm:pb-40 lg:pb-20 relative flex">
      <div class={styles.backgroundImage}></div>
      <div class={styles.gradient}></div>
      <div class={styles.offset}></div>
      <div class="relative max-w-3xl px-8 mx-auto lg:mx-0 w-full">
        <h2
          class="
            font-black mb-8 text-pink-600
            text-5xl
            sm:text-6xl
          "
        >
          Who am I?
        </h2>
        <div class="prose text-lg font-regular text-gray-500 not-antialiased leading-8 sm:leading-10">
          <p>
            My name is <strong>Tyler Smith</strong>. I was born and raised here
            in Bakersfield, then started my career in the tech industry while
            living in Sacramento in 2015. As I progressed in my career, I got to
            work on websites for some of the most well-funded ballot initiative
            campaigns in California's history, and I built tools that empowered
            voters and legislative decision-makers. When I went independent, my
            first client was Stan Lee of Marvel Comics fame.
          </p>
          <p>
            I returned to Bakersfield in 2019 and I'm eager to share my skills
            with the community that shaped who I am.
          </p>
        </div>
        <div class="flex flex-wrap mt-7 text-sm">
          <div class="text-gray-500 font-semibold pr-4 pb-1">
            <p>Check out my:</p>
          </div>
          <ul class="flex flex-wrap">
            {links.map((link) => (
              <li key={link.link} class="pr-4">
                <a href={link.link} class="text-pink-600 underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
