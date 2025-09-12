import { UiAssidePageLayout } from "@/shared/ui/layouts/ui-asside-page-layou";
import { UiAside } from "@/shared/ui/ui-aside";
import { UiFooter } from "@/shared/ui/ui-footer";
import { UiHeader } from "@/shared/ui/ui-header";

export function Sections() {
  return (
    <>
      <section>section</section>
      <section>section</section>
      <section>section</section>
      <section>section</section>
    </>
  );
}

export function BlogPage() {
  return (
    <UiAssidePageLayout
      header={<UiHeader />}
      sections={<Sections />}
      footer={<UiFooter />}
      aside={<UiAside/>}
    />
  );
}
