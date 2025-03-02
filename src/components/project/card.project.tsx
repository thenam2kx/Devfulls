'use client'
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@mui/material'
import Link from 'next/link'
import GitHubIcon from '@mui/icons-material/GitHub'
import WebIcon from '@mui/icons-material/Web'

interface IProps {
  imgPath: string
  title: string
  description: string
  githubLink: string
  demoLink: string
}

const ProjectCard = (props: IProps) => {
  return (
    <Card sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgb(13 18 36)' : '#fff',
      boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 3px 3px 3px rgba(27, 44, 104, 0.6274509804)' : '',
      border: '1px solid transparent',
      transition: 'all linear .15s',
      zIndex: 9,
      '&:hover': {
        borderColor: '#ec4899'
      }
    }}>
      <CardMedia
        component="img"
        image={props.imgPath}
        alt="project image"
        sx={{ maxHeight: 215, height: '100%' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography component={Link} href={'detail'} sx={{
          fontSize: '1.25rem',
          fontWeight: 500,
          letterSpacing: '0.0075em',
          lineHeight: 1.6,
          textDecoration: 'none',
          color: 'unset'
        }}>
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mt: 1 }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ p: '16px' }}>
        <Button
          variant="contained"
          color="primary"
          href={props.githubLink}
          target="_blank"
          startIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href={props.demoLink}
          target="_blank"
          startIcon={<WebIcon />}
          sx={{ ml: 1 }}
        >
          Demo
        </Button>
        <Button variant="text" LinkComponent={'a'} href='/project/detail'>Details</Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard