import background from 'public/section.svg'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useTranslation } from "@/config/i18n/server";
import LanguageSwitcher from '@/components/language.switcher';
import ThemeSelect from '@/components/theme/select.theme';
import AppHeader from '@/components/header/app.header';


export default async function Home() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation("vi", "common");


  return (
    <Box component={'main'}>
      <Box
        sx={{
          width: '100%',
          height: '500px',
          backgroundImage: `url(${background})`,
          position: 'absolute',
          top: 0,
          zIndex: 0
        }}
      />
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        {/* <h1>{t("welcome")}</h1> */}
        <AppHeader />
        <LanguageSwitcher />
        <ThemeSelect />
      </Container>

    </Box>
  );
}
