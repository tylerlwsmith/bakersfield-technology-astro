import { Container } from "src/components/container";

export function Contact() {
  return (
    <div class="bg-pink-50 pt-14 pb-16 px-6">
      <Container>
        <div>
          <h2 class="text-pink-600 text-5xl font-black mb-5 text-center sr-only">
            Contact
          </h2>
          <div class="text-center font-light text-gray-900 mx-auto">
            <p
              class="
                mb-4 text-pink-600 font-black
                text-3xl
                sm:text-4xl
              "
              style="font-family: 'Montserrat Variable', sans-serif;"
            >
              Have a project in mind?
            </p>
            <p class="mb-8 text-xl sm:text-2xl">
              Get in touch and let's solve your problem together.
            </p>
            <a
              href="mailto:tyler@deadhandmedia.com"
              target="_blank"
              rel="noopener"
              class="
                inline-block tracking-widest border
                border-pink-600 bg-pink-600 text-white rounded-full
                hover:bg-white hover:border-pink-600 hover:text-pink-600  transition
                font-normal
                text-lg px-10 py-3
                sm:text-lg sm:px-12
              "
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
