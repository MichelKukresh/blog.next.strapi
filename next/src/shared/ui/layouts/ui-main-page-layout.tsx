import { ReactNode } from "react";

export function UiMainPageLayout({
  header,
  sections,
  footer,
}: {
  header: ReactNode;
  sections: ReactNode;
  footer: ReactNode;
}) {
  return (
    <>
      {header}

     <h1 className="p-10 bg-customBlue">
    Hello world!
  </h1>

      <main className="w-full flex justify-center">
        <div className="max-w-[1024px] w-[1024px] bg-[#085d89]">{sections}</div>
      </main>
      {footer}
    </>
  );
}
