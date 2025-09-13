import { UiAssidePageLayout } from "@/shared/ui/layouts/ui-asside-page-layou";
import { UiAside } from "@/shared/ui/ui-aside";
import { UiFooter } from "@/shared/ui/ui-footer";
import { UiHeader } from "@/shared/ui/ui-header";
import Image from "next/image";
import banner1 from "../../public/banner1.png";
import banner2 from "../../public/banner1.png";

const article = {
  img: banner1,
  title: "What Traveling Greece For 2 Weeks Taught Me About Life",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
};

export function Sections() {
  return (
    <>
      <section></section>
      <section>section</section>
      <section>section</section>
      <section>section</section>
    </>
  );
}

export function Article() {
  return (
    <UiAssidePageLayout
      header={<UiHeader />}
      sections={<Sections />}
      footer={<UiFooter />}
      aside={<UiAside />}
    />
  );
}
