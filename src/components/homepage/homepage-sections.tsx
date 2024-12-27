import { Services } from "src/components/homepage/services";
import { Technologies } from "src/components/homepage/technologies";
import { WhoAmI } from "src/components/homepage/who-am-i";
import { Contact } from "src/components/homepage/contact";

interface PageSection {
  component: React.ReactNode;
  menuTitle: string;
  id: string;
}

export const pageSections: PageSection[] = [
  {
    component: <Services />,
    menuTitle: "Services",
    id: "services",
  },
  {
    component: <Technologies />,
    menuTitle: "Technologies",
    id: "technologies",
  },
  {
    component: <WhoAmI />,
    menuTitle: "About",
    id: "about",
  },
  {
    component: <Contact />,
    menuTitle: "Contact",
    id: "contact",
  },
];
