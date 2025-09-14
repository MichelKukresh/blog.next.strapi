import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";
import "tailwindcss";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
   { label: "Article", href: "/article" },
];

export function UiHeader({
  className,
}: {
  className?: string;
  right?: ReactNode;
}) {

  return (
    <header className="w-full flex justify-center bg-[#085d89] ">     
      <nav className="max-w-[1280px] w-[1280px]  flex flex-row justify-between p-2">
        <UiLogo className="h-10 w-auto" />

    

        {/* Навигационная панель */}
        <ul className={clsx("flex gap-2")}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Дополнительный контент справа */}
      </nav>
    </header>
  );
}
