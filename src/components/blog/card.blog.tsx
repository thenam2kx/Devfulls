import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Link from 'next/link';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


const CardBlog = () => {
  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '0.5rem' }}>
      <CardMedia
        component="img"
        height="256"
        image="http://localhost:3000/avatar.svg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography component={Link} href={'/blogs/1'} sx={{
            fontSize: '1.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            color: 'text.primary',
            textDecoration: 'none',
        }}>
          {'http://localhost:3000/avatar.svg http://localhost:3000/avatar.svghttp://localhost:3000.svg'}
        </Typography>
        <Typography sx={{
          fontSize: '0.875rem',
          color: 'text.secondary',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
          overflow: 'hidden'
        }}>
          {'http://localhost:3000/avatar.svghttp://localhost:3000/avatar.svg'}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Stack direction="row" spacing={1}>
          <Chip icon={<FavoriteIcon />} label="12k" />
          <Chip icon={<ShareIcon />} label="12k" variant="outlined" />
        </Stack>
      </CardActions>
    </Card>
  )
}

export default CardBlog