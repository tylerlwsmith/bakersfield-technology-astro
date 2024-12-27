import type { ReactNode } from "preact/compat";

import { Container } from "src/components/container";
import { FadeIn } from "src/components/fadein";

import GlobeAltIcon from "src/assets/heroicons/globe-alt.svg?react";
import DeviceMobileIcon from "src/assets/heroicons/device-mobile.svg?react";
import TemplateIcon from "src/assets/heroicons/template.svg?react";
import SortDescendingIcon from "src/assets/heroicons/sort-descending.svg?react";
import DesktopComputerIcon from "src/assets/heroicons/desktop-computer.svg?react";
import ClipboardListIcon from "src/assets/heroicons/clipboard-list.svg?react";
import ExclamationIcon from "src/assets/heroicons/exclamation.svg?react";
import LightBulbIcon from "src/assets/heroicons/light-bulb.svg?react";

const services = [
  {
    icon: <GlobeAltIcon class="w-8" />,
    serviceName: "Web development",
  },
  {
    icon: <DeviceMobileIcon class="w-8" />,
    serviceName: "Mobile development",
  },
  {
    icon: <TemplateIcon class="w-8" />,
    serviceName: "Custom applications",
  },
  {
    icon: <SortDescendingIcon class="w-8" />,
    serviceName: "Data automation",
  },
  {
    icon: <DesktopComputerIcon class="w-8" />,
    serviceName: "Website design",
  },
  {
    icon: <ClipboardListIcon class="w-8" />,
    serviceName: "Website audits",
  },
  {
    icon: <ExclamationIcon class="w-8" />,
    serviceName: "Application maintenance",
  },
  {
    icon: <LightBulbIcon class="w-8" />,
    serviceName: "White-label development",
  },
];

function ServiceComponent({ children }: { children: ReactNode }) {
  return (
    <div
      class="
        grid bg-gradient-to-br from-pink-600 to-purple-500 text-white
        py-4 rounded-2xl px-6 drop-shadow-lg w-full
      "
    >
      {children}
    </div>
  );
}

function ServiceName({ children }: { children: ReactNode }) {
  return (
    <div
      class="
        font-bold tracking-wide py-1 !leading-snug
        text-lg
        md:text-base
        xl:text-lg
      "
    >
      {children}
    </div>
  );
}

function IconWrapper({ children }: { children: ReactNode }) {
  return <div class="h-10 mb-1 w-8">{children}</div>;
}

export function Services() {
  return (
    <div class="bg-pink-50 pt-12 pb-16 overflow-hidden">
      <Container>
        <h2 class="text-pink-600 text-5xl font-black mb-6 text-center">
          Services!
        </h2>
        <div
          class="
            prose text-center text-gray-700 font-light mb-6
            text-2xl px-6
            sm:text-3xl sm:px-8
          "
        >
          <p>
            <strong class="font-normal">Bakersfield Technology</strong>'s
            services include:
          </p>
        </div>
      </Container>
      <ul
        data-component="services-list"
        class="
          grid pt-6 mx-auto gap-6 px-8
          xs:grid-cols-2 xs:px-4
          md:max-w-3xl md:grid-cols-4
          xl:max-w-7xl
        "
      >
        {services.map((service) => (
          <li key={service.serviceName} class="[&>*]:h-full">
            <FadeIn>
              <div class="flex h-full items-stretch">
                <ServiceComponent>
                  <IconWrapper>{service.icon}</IconWrapper>
                  <ServiceName>{service.serviceName}</ServiceName>
                </ServiceComponent>
              </div>
            </FadeIn>
          </li>
        ))}
      </ul>
    </div>
  );
}
