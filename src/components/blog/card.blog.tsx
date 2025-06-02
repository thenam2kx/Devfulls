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

interface IProps {
  blogData: IBlog
}

const CardBlog = (props: IProps) => {
  const { blogData } = props

  return (
    <Card sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', borderRadius: '0.5rem' }}>
      <CardMedia
        component="img"
        height="256"
        image={blogData.avatar || 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBhZWxsZXxlbnwwfHx8fDE2ODQ1NTY5MjE&ixlib=rb-4.0.3&q=80&w=1080'}
        alt="Paella dish"
      />
      <CardContent>
        <Typography component={Link} href={`/blogs/${blogData._id}`} sx={{
            fontSize: '1.2rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            color: 'text.primary',
            textDecoration: 'none',
        }}>
          {blogData.title}
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
          {blogData.content}
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