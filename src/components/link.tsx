import { GatsbyLinkProps, Link as GatsbyLink } from 'gatsby';
import React, { forwardRef } from 'react';

export const Link = forwardRef((
  props: { href: string | GatsbyLinkProps<never>['to']; } & Omit<GatsbyLinkProps<never>, 'to'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) => {
  const { href, ...rest } = props;
  return (
    <GatsbyLink {...rest} ref={ref as never} to={href} />
  );
});
