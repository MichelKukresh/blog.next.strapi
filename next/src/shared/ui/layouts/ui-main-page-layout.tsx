import { ReactNode } from "react";

export function UiMainPageLayout({ header }: { header: ReactNode }) {
    return (
        <>
            {header}
            <main>
                <section>section</section>
                <section>section</section>
                <section>section</section>
                <section>section</section>
            </main>
            <footer>footer</footer>
        </>
    );
}
