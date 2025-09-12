import { UiMainPageLayout } from "@/shared/ui/layouts/ui-main-page-layout";
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
  )
}


export function HomePage() {
  return (
    <UiMainPageLayout header={<UiHeader />} sections={<Sections/>} footer={<UiFooter/>} />
  );
}
