// app/[locale]/layout.tsx
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import LocaleProvider from '@/components/app/locale.provider';

export function generateStaticParams() {
  return [{locale: 'vi'}, {locale: 'en'}];
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  if (!['vi', 'en'].includes(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale} messages={messages}>
      {children}
    </LocaleProvider>
  );
}
