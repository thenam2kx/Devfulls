// app/[locale]/page.tsx
'use client';
import {useLocale, useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

export default function HomePage() {
  const t = useTranslations('home');

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLanguage = (locale: string) => {
    const segments = pathname.split('/');
    segments[1] = locale;
    router.push(segments.join('/'));
  };

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </main>
  );
}
