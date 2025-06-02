'use client';
import { IconButton, Menu, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import CheckIcon from '@mui/icons-material/Check';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { useState } from 'react';


const languages = [
  { code: 'en', label: 'English' },
  { code: 'vi', label: 'Tiếng Việt' },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams() as { locale: string };
  const currentLocale = params.locale;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const switchTo = (targetLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    segments[0] = targetLocale;
    const newPath = '/' + segments.join('/');

    router.push(newPath);
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} color="inherit" size="large" aria-label="Chọn ngôn ngữ">
        <TranslateIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        keepMounted
      >
        {languages.map((lang) => (
          <MenuItem
            key={lang.code}
            selected={lang.code === currentLocale}
            onClick={() => {
              handleCloseMenu();
              if (lang.code !== currentLocale) {
                switchTo(lang.code);
              }
            }}
          >
            <ListItemIcon>
              {lang.code === currentLocale ? <CheckIcon fontSize="small" /> : null}
            </ListItemIcon>
            <ListItemText>{lang.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
