import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";

export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <Box component={'main'} sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: "rgb(13 18 36)" }}>
      <Container maxWidth='xl' sx={{ py: { xs: 8 } }}>
        <div>
          <h1>{t('title')}</h1>
          <Link href="/about">{t('about')}</Link>
        </div>
      </Container>
    </Box>
  );
}