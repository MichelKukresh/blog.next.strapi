import clsx from "clsx";
import Image from "next/image";
import logo from "../../../public/logo.png";

export function UiLogo({ className }: { className?: string }) {
  return (
    <div className={clsx(className, "flex items-center gap-2 text-xl")}>
      <Shield className="w-12 h-12" />
    </div>
  );
}

export const Shield = ({ className }: { className?: string }) => (
  <Image src={logo} alt="Banner" width={150} />
);
