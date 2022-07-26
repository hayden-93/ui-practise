import type { PropsWithChildren } from "react";
import type { LinkProps as NextLinkProps } from "next/link";

import { forwardRef } from "react";
import NextLink from "next/link";

interface LinkProps extends NextLinkProps {
  className?: string;
}

export const Link = forwardRef<HTMLAnchorElement, PropsWithChildren<LinkProps>>(
  ({ children, className, ...props }, forwardedRef) => (
    <NextLink ref={forwardedRef} {...props}>
      <a>{children}</a>
    </NextLink>
  )
);
Link.displayName = "Link";
