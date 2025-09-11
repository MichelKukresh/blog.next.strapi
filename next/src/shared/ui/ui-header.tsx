import clsx from "clsx";
import { UiLogo } from "./ui-logo";
import { ReactNode } from "react";

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
];

export function UiHeader({
  className,
}: {
  className?: string;
  right?: ReactNode;
}) {
  return (
    <header
      className={clsx(
        "w-full bg-[#085d89]",
        className,
      )}
    >
      <nav className={clsx("flex gap-[10px] ")}>
        <UiLogo className="h-10 w-auto" />

        {/* Навигационная панель */}
        <ul className={clsx("flex gap-[10px]")}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className=""
              >
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
