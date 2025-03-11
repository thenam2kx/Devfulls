import SkillBadge from "@/components/skills/skill.badge";
import Grid from "@mui/material/Grid2";
import Container from '@mui/material/Container';
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography';
import useTheme from '@mui/material/styles/useTheme';
import { fadeInUp, staggerChildren } from "../home/home.page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WrapperSkills = ({ ref, controls }: { ref: any, controls: any }) => {
  const theme = useTheme()
  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div variants={fadeInUp}>
          <Typography variant="h3" align="center" gutterBottom>
            Skills & Technologies
          </Typography>
        </motion.div>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <SkillBadge name="JavaScript" level="Expert" />
          <SkillBadge name="TypeScript" level="Expert" />
          <SkillBadge name="React" level="Expert" />
          <SkillBadge name="Next.js" level="Expert" />
          <SkillBadge name="Node.js" level="Advanced" />
          <SkillBadge name="Express" level="Advanced" />
          <SkillBadge name="MongoDB" level="Advanced" />
          <SkillBadge name="PostgreSQL" level="Intermediate" />
          <SkillBadge name="GraphQL" level="Intermediate" />
          <SkillBadge name="Docker" level="Intermediate" />
          <SkillBadge name="AWS" level="Intermediate" />
          <SkillBadge name="Material-UI" level="Expert" />
        </Grid>
      </Container>
    </motion.section>
  );
};

export default WrapperSkills;
