'use client';

import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

type To = string | { pathname?: string };

function hrefFrom(to: To) {
  return typeof to === 'string' ? to : to.pathname || '/';
}

export function Link({
  to,
  href,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to?: To;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <NextLink href={href || hrefFrom(to || '/')} suppressHydrationWarning {...props}>
      {children}
    </NextLink>
  );
}

export function NavLink({
  to,
  className,
  children,
  end,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: To;
  className?: string | ((state: { isActive: boolean }) => string);
  children: React.ReactNode;
  end?: boolean;
}) {
  const pathname = usePathname() || '/';
  const href = hrefFrom(to);
  const isActive = end ? pathname === href : pathname === href || pathname.startsWith(href + '/');
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <NextLink href={href} className={resolvedClassName} suppressHydrationWarning {...props}>
      {children}
    </NextLink>
  );
}

export function useLocation() {
  return { pathname: usePathname() || '/' };
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number) => {
    if (typeof to === 'number') {
      if (to < 0) router.back();
      return;
    }
    router.push(to);
  };
}

export function useParams() {
  const parts = (usePathname() || '/').split('/').filter(Boolean);
  const [section, value] = parts;
  if ((section === 'vault' || section === 'legal') && value) return { slug: value };
  return value ? { slug: value } : {};
}

export function BrowserRouter({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Route(_props: { path?: string; element?: React.ReactNode }) {
  return null;
}

export function Routes({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const routes = React.Children.toArray(children) as React.ReactElement<{ path?: string; element?: React.ReactNode }>[];
  const match = routes.find((route) => route.props.path && matches(route.props.path, pathname))
    || routes.find((route) => route.props.path === '*');

  return <>{match?.props.element ?? null}</>;
}

function matches(pattern: string, pathname: string) {
  if (pattern === '*') return true;
  if (pattern === pathname) return true;

  const patternParts = pattern.split('/').filter(Boolean);
  const pathParts = pathname.split('/').filter(Boolean);
  if (patternParts.length !== pathParts.length) return false;

  return patternParts.every((part, index) => part.startsWith(':') || part === pathParts[index]);
}
