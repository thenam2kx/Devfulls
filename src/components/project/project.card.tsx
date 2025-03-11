import { motion } from "framer-motion"
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import GitHub from '@mui/icons-material/GitHub'
import Launch from '@mui/icons-material/Launch'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid2'
import Stack from '@mui/material/Stack'

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  repoUrl?: string
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, tags, image, demoUrl, repoUrl } = props
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex", alignItems: "stretch" }}>
      <motion.div variants={cardVariants}>
        <Card sx={{ display: "flex", flexDirection: "column", height: '100%' }}>
          <CardMedia component="img" height="200" image={image || "../../project/nestjs.png"} alt={title} />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
              {tags.map((tag: string) => (
                <Chip key={tag} label={tag} size="small" sx={{ mr: 1, mb: 1 }} />
              ))}
            </Box>
            <Stack spacing={3} direction="row" sx={{ mt: 2 }}>
              <Button size="small" startIcon={<Launch />} href={demoUrl || '/'} target="_blank" rel="noopener noreferrer">
                Demo
              </Button>
              <Button size="small" startIcon={<GitHub />} href={repoUrl || '/'} target="_blank" rel="noopener noreferrer">
                Code
              </Button>
              <Button size="small" startIcon={<GitHub />} href={repoUrl || '/'} target="_blank" rel="noopener noreferrer">
                Code
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  )
}

export default ProjectCard