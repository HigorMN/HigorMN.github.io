import type { ReactNode } from 'react';

type ExternalLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

export default function ExternalLink({
  children,
  className,
  href,
}: ExternalLinkProps) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
      <span className="sr-only"> (abre em uma nova aba)</span>
    </a>
  );
}
