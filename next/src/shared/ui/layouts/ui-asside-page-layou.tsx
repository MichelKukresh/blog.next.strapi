import { ReactNode } from "react";

export function SectionContainer() {}

export function UiAssidePageLayout({
  header,
  sections,
  footer,
  aside,
}: {
  header: ReactNode;
  sections: ReactNode;
  footer: ReactNode;
  aside: ReactNode;
}) {
  return (
    <>
      {header}
      <main className="w-full flex justify-center">
        <div className="max-w-[1024px] w-[1024px] bg-[#085d89] flex">          
          <div className="flex-grow">{sections}</div>          
          <div className="w-[300px]">{aside}</div>
        </div>
      </main>
      {footer}
    </>
  );
}
