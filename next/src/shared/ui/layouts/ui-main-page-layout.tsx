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
      <main className="w-full">
        <div className="max-w-[1024px] bg-[#085d89]">{sections}</div>
      </main>
      {footer}
    </>
  );
}
