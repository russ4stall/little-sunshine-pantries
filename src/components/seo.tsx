import React from 'react';

const defaultTitle = 'Little Sunshine Pantries';
const defaultDescription = 'Bringing joy through unconditional generosity and working to normalize giving from abundance.';

type SeoProps = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

export const Seo = ({
  children,
  description,
  title
}: SeoProps) => {
  return (
    <>
      <html className="h-full scroll-smooth bg-satin-linen-200 antialiased" lang="en" />
      <body className="flex h-full flex-col" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <title>{title ? `${title} | ${defaultTitle}` : defaultTitle}</title>
      <meta content={description ?? defaultDescription} name="description" />
      <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
      <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
      <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
      <link href="/site.webmanifest" rel="manifest" />
      <link color="#5bbad5" href="/safari-pinned-tab.svg" rel="mask-icon" />
      <meta content="#da532c" name="msapplication-TileColor" />
      <meta content="#ffffff" name="theme-color" />
      {children}
    </>
  );
};
