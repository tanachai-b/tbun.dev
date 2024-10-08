import cx from "classnames";
import { HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";
import { Icon } from "src/common-components";

export function LinkButton({
  className,
  href,
  target,
  children,
  onClick,
}: {
  className?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      className={cx(
        "bg-black",
        "rounded-[10px]",

        "outline",
        "outline-[#00000000]",
        "outline-[0px]",

        "hover:outline-[#00000040]",
        "hover:outline-[10px]",
        "transition-all",

        "flex",
        "flex-row",
        "justify-center",
        "items-center",

        "px-[20px]",
        "py-[10px]",

        "text-white",
        "font-black",

        "group",

        "cursor-pointer",

        className,
      )}
      href={href}
      target={target}
      onClick={onClick}
    >
      <div className={cx("text-[15px]")}>{children}</div>

      <div className={cx("w-0")}>
        <div
          className={cx(
            "ml-[10px]",

            "relative",
            "left-[-20px]",
            "opacity-0",

            "group-hover:left-0",
            "group-hover:opacity-100",
            "transition-all",

            "grid",
            "text-[30px]",
          )}
        >
          <Icon icon={"arrow_forward"} />
        </div>
      </div>
    </a>
  );
}
