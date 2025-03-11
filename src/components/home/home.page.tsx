"use client"
import { useEffect } from "react"
import { useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Box from '@mui/material/Box';
import WrapperProject from '@/components/project/wrapper.project';
import HomeAbout from '@/components/about/home.about';
import AppHeader from '@/components/app/app.header';
import AppFooter from '@/components/app/app.footer';
import WrapperSkills from '@/components/skills/wrapper.skills';
import WrapperContact from '@/components/contact/wrapper.contact';
import WrapperHero from '@/components/hero/wrapper.hero';


export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const HomePage = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <Box component={'main'} sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <AppHeader />

      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <WrapperHero />

        {/* About Section */}
        <HomeAbout ref={ref} controls={controls} />

        {/* Skills Section */}
        <WrapperSkills ref={ref} controls={controls} />

        {/* Projects Section */}
        <WrapperProject ref={ref} controls={controls} />

        {/* Contact Section */}
        <WrapperContact ref={ref} controls={controls} />
      </Box>

      <AppFooter />
    </Box>
  )
}

export default HomePage