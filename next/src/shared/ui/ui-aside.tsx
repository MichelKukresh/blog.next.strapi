import clsx from "clsx";

const assideItems = [
  { label: "Black", href: "/" },
  { label: "Red", href: "/" },
  { label: "Gray", href: "/" },
];

export function UiAside() {
  return (
    <aside className="">
      <ul className={clsx("flex flex-col gap-2")}>
        {assideItems.map((item, index) => (
          <li key={index} className="p-1">
            <a href={item.href} className={clsx("flex flex-col gap-2 rounded-2xl bg-amber-400 p-1")}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
