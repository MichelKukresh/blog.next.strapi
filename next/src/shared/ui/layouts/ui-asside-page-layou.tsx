import { ReactNode } from "react";

export function UiAssidePageLayout({ header }: { header: ReactNode }) {
    return (
        <>
            {header}
            <main>
                <div> <section>section</section>
                    <section>section</section>
                    <section>section</section>
                    <section>section</section></div><div><aside>aside</aside></div>

            </main>
            <footer>footer</footer>
        </>
    );
}
