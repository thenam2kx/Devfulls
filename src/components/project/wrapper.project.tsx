import Grid from "@mui/material/Grid2";
import ProjectCard from "./project.card";
import Container from '@mui/material/Container';
import { motion } from "framer-motion"
import Typography from '@mui/material/Typography';
import { fadeInUp, staggerChildren } from "../home/home.page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const WrapperProject = ({ ref, controls }: { ref: any, controls: any }) => {
  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={staggerChildren}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div variants={fadeInUp}>
          <Typography variant="h3" align="center" gutterBottom>
            Featured Projects
          </Typography>
        </motion.div>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
            tags={["Next.js", "TypeScript", "Stripe", "Material-UI"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="Task Management App"
            description="A collaborative task management application with real-time updates and team collaboration features."
            tags={["React", "Node.js", "Socket.io", "MongoDB"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="Personal Finance Dashboard"
            description="A dashboard for tracking personal finances, expenses, and investments with data visualization."
            tags={["Vue.js", "Express", "D3.js", "PostgreSQL"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="Weather Application"
            description="A weather application that provides real-time weather data and forecasts for locations worldwide."
            tags={["React", "Redux", "Weather API", "Styled Components"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="Blog Platform"
            description="A content management system for creating and managing blog posts with user authentication."
            tags={["Next.js", "Prisma", "NextAuth.js", "Vercel"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
          <ProjectCard
            title="Real Estate Listing"
            description="A real estate platform for listing and searching properties with filtering and map integration."
            tags={["React", "Node.js", "MongoDB", "Google Maps API"]}
            image="../../../project/nestjs.png"
            demoUrl="#"
            repoUrl="#"
          />
        </Grid>
      </Container>
    </motion.section>
  );
};

export default WrapperProject;
