'use client';

import {NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  locale: string;
  messages: any;
}

export default function LocaleProvider({children, locale, messages}: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
