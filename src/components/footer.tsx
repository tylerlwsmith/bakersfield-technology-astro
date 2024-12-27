function currentYear() {
  return new Date().toLocaleDateString("en-us", {
    year: "numeric",
    timeZone: "America/Los_Angeles",
  });
}

export function Footer() {
  return (
    <footer class="bg-gray-900 px-10 py-4 text-gray-300 text-center text-md flex justify-between">
      <div>
        ©
        <a href="https://deadhandmedia.com/" class="text-pink-500 underline">
          Tyler Smith
        </a>
        {" " + currentYear()}
      </div>
      <div>
        <a href="/privacy-policy" class="text-pink-500">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}