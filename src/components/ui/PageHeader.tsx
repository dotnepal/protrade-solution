import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  intro?: ReactNode;
}

export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-latte/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-14 pt-16 sm:px-8 md:grid-cols-12 md:pb-20 md:pt-24 lg:px-10">
        <h1 className="text-5xl sm:text-6xl md:col-span-8 lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="prose-body self-end text-lg text-charcoal md:col-span-4">
            {intro}
          </p>
        )}
      </div>
    </header>
  );
}
