'use client'
import { motion } from "framer-motion"
import Grid from "@mui/material/Grid2"
import { Paper, Typography, Chip } from "@mui/material"

interface SkillBadgeProps {
  name: string
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
}

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "info"
      case "Intermediate":
        return "success"
      case "Advanced":
        return "secondary"
      case "Expert":
        return "warning"
      default:
        return "default"
    }
  }

  return (
    <Grid size={{ xs: 6, sm: 4, md: 3 }}>
      <motion.div variants={badgeVariants}>
        <Paper elevation={0} sx={{ p: 2, textAlign: "center" }}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <Chip
              label={level}
              color={
                getLevelColor(level) as "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"
              }
            />
          </motion.div>
        </Paper>
      </motion.div>
    </Grid>
  )
}

export default SkillBadge