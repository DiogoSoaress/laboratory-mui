import { type ReactNode } from "react";
import Link from "next/link";
import css from "./styles.module.css";

const SafeLink = ({
  children,
  isDisabled = false,
}: {
  href: string;
  children: ReactNode;
  isDisabled?: boolean;
}) => {
  const finalHref = "https://www.safe.global";

  return (
    <Link
      href={finalHref}
      target="_blank"
      className={`${isDisabled ? css.disabled : ""}`}
    >
      {children}
    </Link>
  );
};

export default SafeLink;
