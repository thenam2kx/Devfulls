import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

interface IProps {
  tiktok: string,
  udemy: string,
  facebook: string
}

const SocialMedia = (props: IProps) => {
  const { tiktok, udemy, facebook } = props
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '24px',
      my: '24px'
    }}>
      <Link href={tiktok} target="_blank" title="Tiktok" sx={{ color: '#ec4899' }}>
        <LinkedInIcon sx={{ fontSize: '40px' }} />
      </Link>
      <Link href={udemy} target="_blank" title="Udemy" sx={{ color: '#ec4899' }}>
        <GitHubIcon sx={{ fontSize: '40px' }} />
      </Link>
      <Link href={facebook} target="_blank" title="Facebook" sx={{ color: '#ec4899' }}>
        <FacebookIcon sx={{ fontSize: '40px' }} />
      </Link>
    </Box>
  )
}

export default SocialMedia