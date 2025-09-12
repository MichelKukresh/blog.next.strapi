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
      <main>
        <div> {sections}</div>
        <div>
          {aside}
        </div>
      </main>
      {footer}
    </>
  );
}
