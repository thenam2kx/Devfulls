import BlogDetail from '@/components/blog/detail/BlogDetail'
import React from 'react'

export default async function BlogDetailPage () {
  return (
    <>
      <BlogDetail />
    </>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import {
//   Avatar,
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Chip,
//   Container,
//   Divider,
//   Fade,
//   Grid,
//   IconButton,
//   Link,
//   Paper,
//   Stack,
//   Typography,
//   useTheme,
//   alpha,
// } from "@mui/material"
// import {
//   AccessTime as AccessTimeIcon,
//   Bookmark as BookmarkIcon,
//   BookmarkBorder as BookmarkBorderIcon,
//   NavigateNext as NavigateNextIcon,
//   Facebook as FacebookIcon,
//   Twitter as TwitterIcon,
//   LinkedIn as LinkedInIcon,
//   Share as ShareIcon,
// } from "@mui/icons-material"

// // Sample blog data - in a real app, this would come from an API or props
// const blogPost = {
//   title: "Understanding Modern Web Development Frameworks",
//   publishDate: "April 2, 2025",
//   readTime: "8 min read",
//   author: {
//     name: "Alex Johnson",
//     avatar: "/placeholder.svg?height=50&width=50",
//     role: "Senior Developer",
//     bio: "Alex has been developing web applications for over 10 years and specializes in React and modern JavaScript frameworks.",
//   },
//   categories: ["Web Development", "React", "JavaScript"],
//   heroImage: "http://localhost:3000/project/chiilbeats.png",
//   content: `
//     <p>Modern web development has evolved significantly over the past decade. Frameworks like React, Angular, and Vue have revolutionized how developers build interactive user interfaces.</p>
    
//     <h2>The Rise of Component-Based Architecture</h2>
//     <p>One of the most significant shifts in modern web development has been the move toward component-based architecture. This approach allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
    
//     <p>Components are reusable, which means you can use the same component in multiple places in your application, or even across different applications. This reusability leads to more consistent UIs and faster development cycles.</p>
    
//     <h2>State Management</h2>
//     <p>As applications grow in complexity, managing state becomes increasingly challenging. Libraries like Redux, MobX, and Recoil have emerged to help developers manage application state in a predictable way.</p>
    
//     <p>These state management solutions provide a centralized store for all the data your application needs. This makes it easier to debug and test your application, as the data flow becomes more predictable.</p>
    
//     <h2>Server-Side Rendering and Static Site Generation</h2>
//     <p>Performance and SEO considerations have led to the popularity of server-side rendering (SSR) and static site generation (SSG). Frameworks like Next.js and Gatsby have made it easier to implement these techniques.</p>
    
//     <p>SSR renders the HTML on the server before sending it to the client, which can lead to faster initial page loads and better SEO. SSG takes this a step further by generating HTML at build time, which can be served from a CDN for even better performance.</p>
    
//     <blockquote>
//       "The future of web development is about creating fast, accessible, and engaging user experiences across all devices."
//     </blockquote>
    
//     <h2>The Importance of Performance Optimization</h2>
//     <p>With users expecting faster and more responsive web applications, performance optimization has become a critical aspect of modern web development. Techniques like code splitting, lazy loading, and image optimization are essential for delivering a great user experience.</p>
    
//     <p>Modern frameworks and build tools have built-in support for these optimization techniques, making it easier for developers to create high-performance applications.</p>
//   `,
//   relatedPosts: [
//     {
//       id: 1,
//       title: "Getting Started with React Hooks",
//       excerpt: "Learn how to use React Hooks to simplify your components and reuse stateful logic.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 25, 2025",
//       author: "Jamie Smith",
//     },
//     {
//       id: 2,
//       title: "CSS-in-JS: Styled Components vs. Emotion",
//       excerpt: "A comparison of the two most popular CSS-in-JS libraries for React applications.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 18, 2025",
//       author: "Taylor Wilson",
//     },
//     {
//       id: 3,
//       title: "Building Accessible Web Applications",
//       excerpt: "Best practices for ensuring your web applications are accessible to all users.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 10, 2025",
//       author: "Morgan Lee",
//     },
//   ],
// }

// const BlogDetailPage = () => {
//   const theme = useTheme()
//   const [bookmarked, setBookmarked] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Handle scroll effect for the progress bar
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       setScrolled(scrollTop > 100)
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // In a real app, you would parse the HTML content safely
//   // This is simplified for the example
//   const createMarkup = (html: string) => {
//     return { __html: html }
//   }

//   return (
//     <Box
//       sx={{
//         bgcolor: "background.default",
//         minHeight: "100vh",
//         pb: 10,
//       }}
//     >
//       {/* Reading progress bar */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 4,
//           zIndex: 1100,
//           bgcolor: alpha(theme.palette.primary.main, 0.2),
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             height: "100%",
//             width: scrolled ? `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` : "0%",
//             bgcolor: theme.palette.primary.main,
//             transition: "width 0.2s ease",
//           },
//         }}
//       />

//       <Container maxWidth="lg" sx={{ pt: 8 }}>
//         {/* Breadcrumbs navigation */}
//         <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mb: 4 }}>
//           <Link underline="hover" color="inherit" href="/">
//             Home
//           </Link>
//           <Link underline="hover" color="inherit" href="/blog">
//             Blog
//           </Link>
//           <Typography color="text.primary">Article</Typography>
//         </Breadcrumbs>

//         {/* Blog header */}
//         <Fade in={true} timeout={1000}>
//           <Box sx={{ mb: 6 }}>
//             <Typography
//               variant="h3"
//               component="h1"
//               gutterBottom
//               sx={{
//                 fontWeight: 800,
//                 fontSize: { xs: "2rem", md: "3rem" },
//                 lineHeight: 1.2,
//                 letterSpacing: "-0.02em",
//                 background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
//                 backgroundClip: "text",
//                 WebkitBackgroundClip: "text",
//                 color: "transparent",
//                 mb: 3,
//               }}
//             >
//               {blogPost.title}
//             </Typography>

//             <Stack
//               direction={{ xs: "column", sm: "row" }}
//               spacing={3}
//               alignItems={{ xs: "flex-start", sm: "center" }}
//               sx={{ mb: 4 }}
//             >
//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Avatar
//                   src={blogPost.author.avatar}
//                   alt={blogPost.author.name}
//                   sx={{
//                     width: 56,
//                     height: 56,
//                     border: `2px solid ${theme.palette.primary.main}`,
//                   }}
//                 />
//                 <Box>
//                   <Typography variant="subtitle1" fontWeight="bold">
//                     {blogPost.author.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {blogPost.author.role}
//                   </Typography>
//                 </Box>
//               </Stack>

//               <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" } }} />

//               <Stack direction="row" spacing={2} alignItems="center">
//                 <Box display="flex" alignItems="center">
//                   <AccessTimeIcon fontSize="small" sx={{ mr: 1, color: theme.palette.primary.main }} />
//                   <Typography variant="body2" color="text.secondary">
//                     {blogPost.publishDate} • {blogPost.readTime}
//                   </Typography>
//                 </Box>
//                 <IconButton
//                   size="small"
//                   onClick={() => setBookmarked(!bookmarked)}
//                   sx={{
//                     color: bookmarked ? theme.palette.primary.main : "inherit",
//                     transition: "all 0.2s ease",
//                     "&:hover": {
//                       transform: "scale(1.1)",
//                     },
//                   }}
//                 >
//                   {bookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
//                 </IconButton>
//               </Stack>
//             </Stack>

//             <Stack direction="row" spacing={1} sx={{ mb: 4, flexWrap: "wrap", gap: 1 }}>
//               {blogPost.categories.map((category) => (
//                 <Chip
//                   key={category}
//                   label={category}
//                   size="small"
//                   clickable
//                   sx={{
//                     borderRadius: "4px",
//                     fontWeight: 500,
//                     bgcolor: alpha(theme.palette.primary.main, 0.1),
//                     color: theme.palette.primary.main,
//                     "&:hover": {
//                       bgcolor: alpha(theme.palette.primary.main, 0.2),
//                     },
//                   }}
//                 />
//               ))}
//             </Stack>
//           </Box>
//         </Fade>

//         {/* Hero image with shadow and rounded corners */}
//         <Fade in={true} timeout={1500}>
//           <Paper
//             elevation={6}
//             sx={{
//               borderRadius: 4,
//               overflow: "hidden",
//               mb: 6,
//               transform: "translateY(0)",
//               transition: "transform 0.3s ease",
//               "&:hover": {
//                 transform: "translateY(-8px)",
//               },
//             }}
//           >
//             <Box
//               component="img"
//               src={blogPost.heroImage}
//               alt="Blog hero image"
//               sx={{
//                 width: "100%",
//                 height: "auto",
//                 display: "block",
//               }}
//             />
//           </Paper>
//         </Fade>

//         {/* Social sharing sidebar */}
//         <Box
//           sx={{
//             position: "fixed",
//             left: { xs: "auto", lg: "calc((100% - 1200px) / 2 - 70px)" },
//             right: { xs: 20, lg: "auto" },
//             bottom: { xs: 20, lg: "auto" },
//             top: { xs: "auto", lg: 250 },
//             display: "flex",
//             flexDirection: { xs: "row", lg: "column" },
//             gap: 1,
//             zIndex: 10,
//             p: 1,
//             borderRadius: 2,
//             bgcolor: alpha(theme.palette.background.paper, 0.8),
//             backdropFilter: "blur(8px)",
//             boxShadow: 2,
//           }}
//         >
//           <IconButton color="primary" size="small" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
//             <FacebookIcon />
//           </IconButton>
//           <IconButton color="primary" size="small" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
//             <TwitterIcon />
//           </IconButton>
//           <IconButton color="primary" size="small" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
//             <LinkedInIcon />
//           </IconButton>
//           <IconButton color="primary" size="small" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
//             <ShareIcon />
//           </IconButton>
//         </Box>

//         <Grid container spacing={4}>
//           {/* Main content */}
//           <Grid item xs={12} md={8}>
//             {/* Blog content with enhanced typography */}
//             <Box
//               sx={{
//                 typography: "body1",
//                 "& h2": {
//                   mt: 6,
//                   mb: 3,
//                   fontWeight: 700,
//                   fontSize: "1.75rem",
//                   color: theme.palette.text.primary,
//                   position: "relative",
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: -8,
//                     left: 0,
//                     width: 60,
//                     height: 3,
//                     borderRadius: 1.5,
//                     bgcolor: theme.palette.primary.main,
//                   },
//                 },
//                 "& p": {
//                   mb: 3,
//                   lineHeight: 1.8,
//                   fontSize: "1.05rem",
//                   color: alpha(theme.palette.text.primary, 0.85),
//                 },
//                 "& blockquote": {
//                   borderLeft: `4px solid ${theme.palette.primary.main}`,
//                   pl: 3,
//                   py: 1,
//                   my: 4,
//                   bgcolor: alpha(theme.palette.primary.main, 0.05),
//                   borderRadius: "0 8px 8px 0",
//                   fontStyle: "italic",
//                   color: alpha(theme.palette.text.primary, 0.9),
//                 },
//               }}
//               dangerouslySetInnerHTML={createMarkup(blogPost.content)}
//             />

//             {/* Author bio card */}
//             <Paper
//               elevation={2}
//               sx={{
//                 p: 3,
//                 mt: 8,
//                 mb: 6,
//                 borderRadius: 4,
//                 bgcolor: alpha(theme.palette.primary.main, 0.03),
//                 border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//               }}
//             >
//               <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
//                 <Avatar
//                   src={blogPost.author.avatar}
//                   alt={blogPost.author.name}
//                   sx={{
//                     width: 80,
//                     height: 80,
//                     border: `3px solid ${theme.palette.primary.main}`,
//                   }}
//                 />
//                 <Box>
//                   <Typography variant="h6" fontWeight="bold" gutterBottom>
//                     About {blogPost.author.name}
//                   </Typography>
//                   <Typography variant="body2" paragraph>
//                     {blogPost.author.bio}
//                   </Typography>
//                   <Button
//                     variant="outlined"
//                     size="small"
//                     sx={{
//                       borderRadius: 6,
//                       textTransform: "none",
//                       px: 2,
//                     }}
//                   >
//                     View all posts
//                   </Button>
//                 </Box>
//               </Stack>
//             </Paper>
//           </Grid>

//           {/* Sidebar */}
//           <Grid item xs={12} md={4}>
//             <Box
//               component={Paper}
//               elevation={2}
//               sx={{
//                 p: 3,
//                 borderRadius: 4,
//                 position: "sticky",
//                 top: 100,
//                 bgcolor: alpha(theme.palette.background.paper, 0.8),
//                 backdropFilter: "blur(8px)",
//               }}
//             >
//               <Typography
//                 variant="h5"
//                 component="h2"
//                 gutterBottom
//                 sx={{
//                   fontWeight: 700,
//                   position: "relative",
//                   pb: 1,
//                   mb: 3,
//                   "&::after": {
//                     content: '""',
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     width: 40,
//                     height: 3,
//                     borderRadius: 1.5,
//                     bgcolor: theme.palette.primary.main,
//                   },
//                 }}
//               >
//                 Related Articles
//               </Typography>

//               <Stack spacing={3}>
//                 {blogPost.relatedPosts.map((post) => (
//                   <Card
//                     key={post.id}
//                     sx={{
//                       boxShadow: "none",
//                       transition: "all 0.3s ease",
//                       "&:hover": {
//                         transform: "translateY(-4px)",
//                         boxShadow: 3,
//                       },
//                       bgcolor: "transparent",
//                       border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
//                       borderRadius: 3,
//                       overflow: "hidden",
//                     }}
//                   >
//                     <CardActionArea>
//                       <Box sx={{ position: "relative" }}>
//                         <CardMedia component="img" height="140" image={post.image} alt={post.title} />
//                         <Box
//                           sx={{
//                             position: "absolute",
//                             bottom: 0,
//                             left: 0,
//                             right: 0,
//                             height: "50%",
//                             background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
//                           }}
//                         />
//                       </Box>
//                       <CardContent>
//                         <Typography
//                           variant="caption"
//                           color="primary"
//                           sx={{
//                             fontWeight: 500,
//                             display: "block",
//                             mb: 0.5,
//                           }}
//                         >
//                           {post.date} • By {post.author}
//                         </Typography>
//                         <Typography
//                           variant="h6"
//                           component="h3"
//                           gutterBottom
//                           sx={{
//                             fontWeight: 700,
//                             fontSize: "1.1rem",
//                             lineHeight: 1.3,
//                             mb: 1,
//                           }}
//                         >
//                           {post.title}
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           sx={{
//                             overflow: "hidden",
//                             textOverflow: "ellipsis",
//                             display: "-webkit-box",
//                             WebkitLineClamp: 2,
//                             WebkitBoxOrient: "vertical",
//                           }}
//                         >
//                           {post.excerpt}
//                         </Typography>
//                       </CardContent>
//                     </CardActionArea>
//                   </Card>
//                 ))}
//               </Stack>

//               <Button
//                 variant="contained"
//                 fullWidth
//                 sx={{
//                   mt: 3,
//                   borderRadius: 2,
//                   py: 1.2,
//                   fontWeight: 600,
//                   textTransform: "none",
//                   boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
//                 }}
//               >
//                 View All Articles
//               </Button>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

// export default BlogDetailPage



// "use client"

// import React, { useState, useEffect, useRef } from "react"
// import {
//   Avatar,
//   Box,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Chip,
//   Container,
//   Divider,
//   Fade,
//   Grid,
//   IconButton,
//   Link,
//   Paper,
//   Stack,
//   Typography,
//   useTheme,
//   alpha,
//   Tooltip,
//   Zoom,
//   useMediaQuery,
//   Skeleton,
// } from "@mui/material"
// import {
//   AccessTime as AccessTimeIcon,
//   Bookmark as BookmarkIcon,
//   BookmarkBorder as BookmarkBorderIcon,
//   NavigateNext as NavigateNextIcon,
//   Facebook as FacebookIcon,
//   Twitter as TwitterIcon,
//   LinkedIn as LinkedInIcon,
//   Share as ShareIcon,
//   ThumbUp as ThumbUpIcon,
//   Comment as CommentIcon,
//   ArrowForward as ArrowForwardIcon,
//   ArrowBack as ArrowBackIcon,
//   Visibility as VisibilityIcon,
//   LocalOffer as LocalOfferIcon,
// } from "@mui/icons-material"

// // Sample blog data - in a real app, this would come from an API or props
// const blogPost = {
//   title: "Understanding Modern Web Development Frameworks",
//   subtitle: "A deep dive into the technologies shaping the future of web development",
//   publishDate: "April 2, 2025",
//   readTime: "8 min read",
//   views: "3.2K",
//   likes: 142,
//   comments: 38,
//   author: {
//     name: "Alex Johnson",
//     avatar: "/placeholder.svg?height=50&width=50",
//     role: "Senior Developer",
//     bio: "Alex has been developing web applications for over 10 years and specializes in React and modern JavaScript frameworks. He is passionate about creating performant and accessible web experiences.",
//     twitter: "@alexjohnson",
//     website: "alexjohnson.dev",
//   },
//   categories: ["Web Development", "React", "JavaScript"],
//   tags: ["frontend", "frameworks", "performance", "architecture", "best practices"],
//   heroImage: "/placeholder.svg?height=500&width=1000",
//   content: `
//     <p>Modern web development has evolved significantly over the past decade. Frameworks like React, Angular, and Vue have revolutionized how developers build interactive user interfaces.</p>
    
//     <h2>The Rise of Component-Based Architecture</h2>
//     <p>One of the most significant shifts in modern web development has been the move toward component-based architecture. This approach allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
    
//     <p>Components are reusable, which means you can use the same component in multiple places in your application, or even across different applications. This reusability leads to more consistent UIs and faster development cycles.</p>
    
//     <figure>
//       <img src="/placeholder.svg?height=300&width=600" alt="Component architecture diagram" />
//       <figcaption>Modern component architecture enables better code organization and reusability</figcaption>
//     </figure>
    
//     <h2>State Management</h2>
//     <p>As applications grow in complexity, managing state becomes increasingly challenging. Libraries like Redux, MobX, and Recoil have emerged to help developers manage application state in a predictable way.</p>
    
//     <p>These state management solutions provide a centralized store for all the data your application needs. This makes it easier to debug and test your application, as the data flow becomes more predictable.</p>
    
//     <blockquote>
//       <p>"The future of web development is about creating fast, accessible, and engaging user experiences across all devices."</p>
//       <cite>— Sarah Chen, Web Performance Engineer at Google</cite>
//     </blockquote>
    
//     <h2>Server-Side Rendering and Static Site Generation</h2>
//     <p>Performance and SEO considerations have led to the popularity of server-side rendering (SSR) and static site generation (SSG). Frameworks like Next.js and Gatsby have made it easier to implement these techniques.</p>
    
//     <p>SSR renders the HTML on the server before sending it to the client, which can lead to faster initial page loads and better SEO. SSG takes this a step further by generating HTML at build time, which can be served from a CDN for even better performance.</p>
    
//     <h2>The Importance of Performance Optimization</h2>
//     <p>With users expecting faster and more responsive web applications, performance optimization has become a critical aspect of modern web development. Techniques like code splitting, lazy loading, and image optimization are essential for delivering a great user experience.</p>
    
//     <p>Modern frameworks and build tools have built-in support for these optimization techniques, making it easier for developers to create high-performance applications.</p>
    
//     <h3>Key Performance Metrics</h3>
//     <ul>
//       <li><strong>First Contentful Paint (FCP)</strong>: Measures the time from navigation to when the browser renders the first bit of content from the DOM.</li>
//       <li><strong>Largest Contentful Paint (LCP)</strong>: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
//       <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability. Pages should maintain a CLS of less than 0.1.</li>
//     </ul>
    
//     <h2>Accessibility Considerations</h2>
//     <p>Building accessible web applications is not just a nice-to-have feature—it's essential for ensuring that your application can be used by everyone, including people with disabilities.</p>
    
//     <p>Modern frameworks provide tools and patterns for building accessible applications, but it's up to developers to implement them correctly. This includes using semantic HTML, providing alternative text for images, ensuring sufficient color contrast, and making sure your application can be navigated using a keyboard.</p>
//   `,
//   relatedPosts: [
//     {
//       id: 1,
//       title: "Getting Started with React Hooks",
//       excerpt: "Learn how to use React Hooks to simplify your components and reuse stateful logic.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 25, 2025",
//       author: "Jamie Smith",
//       category: "React",
//     },
//     {
//       id: 2,
//       title: "CSS-in-JS: Styled Components vs. Emotion",
//       excerpt: "A comparison of the two most popular CSS-in-JS libraries for React applications.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 18, 2025",
//       author: "Taylor Wilson",
//       category: "CSS",
//     },
//     {
//       id: 3,
//       title: "Building Accessible Web Applications",
//       excerpt: "Best practices for ensuring your web applications are accessible to all users.",
//       image: "/placeholder.svg?height=200&width=300",
//       date: "March 10, 2025",
//       author: "Morgan Lee",
//       category: "Accessibility",
//     },
//   ],
//   nextPost: {
//     title: "The Future of Frontend Development: What's Next After React?",
//     slug: "/blog/future-of-frontend-development",
//   },
//   previousPost: {
//     title: "10 Performance Optimization Techniques Every Developer Should Know",
//     slug: "/blog/performance-optimization-techniques",
//   },
// }

// export default function BlogDetail() {
//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"))
//   const isLarge = useMediaQuery(theme.breakpoints.up("xl"))

//   const [bookmarked, setBookmarked] = useState(false)
//   const [liked, setLiked] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [scrollProgress, setScrollProgress] = useState(0)
//   const [isLoading, setIsLoading] = useState(true)
//   const [activeSection, setActiveSection] = useState("")

//   const contentRef = useRef<HTMLDivElement>(null)
//   const headingRefs = useRef<{ [key: string]: HTMLElement }>({})

//   // Simulate loading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false)
//     }, 1000)

//     return () => clearTimeout(timer)
//   }, [])

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY
//       const winHeight = window.innerHeight
//       const docHeight = document.documentElement.scrollHeight

//       // Calculate scroll percentage
//       const scrollPercent = scrollTop / (docHeight - winHeight)
//       setScrollProgress(scrollPercent * 100)

//       // Set scrolled state for visual effects
//       setScrolled(scrollTop > 100)

//       // Determine active section for table of contents
//       if (contentRef.current) {
//         const headings = contentRef.current.querySelectorAll("h2, h3")
//         let currentSection = ""

//         Array.from(headings).forEach((heading) => {
//           const top = heading.getBoundingClientRect().top
//           if (top < 200) {
//             currentSection = heading.textContent || ""
//           }
//         })

//         if (currentSection) {
//           setActiveSection(currentSection)
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Extract headings for table of contents
//   const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([])

//   useEffect(() => {
//     if (!isLoading && contentRef.current) {
//       const headings = contentRef.current.querySelectorAll("h2, h3")
//       const toc: { id: string; text: string; level: number }[] = []

//       headings.forEach((heading, index) => {
//         const text = heading.textContent || `Section ${index + 1}`
//         const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-")
//         const level = heading.tagName === "H2" ? 2 : 3

//         // Add id to the heading for linking
//         heading.id = id

//         // Store reference to the heading element
//         headingRefs.current[text] = heading as HTMLElement

//         toc.push({ id, text, level })
//       })

//       setTableOfContents(toc)
//     }
//   }, [isLoading])

//   // Scroll to section when clicking on TOC item
//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id)
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 100,
//         behavior: "smooth",
//       })
//     }
//   }

//   // In a real app, you would parse the HTML content safely
//   // This is simplified for the example
//   const createMarkup = (html: string) => {
//     return { __html: html }
//   }

//   // Custom gradient colors
//   const primaryGradient = `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`
//   const accentGradient = `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`
//   const backgroundGradient = `radial-gradient(circle at top right, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 70%)`

//   return (
//     <Box
//       sx={{
//         bgcolor: "background.default",
//         minHeight: "100vh",
//         pb: 10,
//         background: backgroundGradient,
//         position: "relative",
//         overflow: "hidden",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: -100,
//           right: -100,
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           background: alpha(theme.palette.primary.main, 0.03),
//           zIndex: 0,
//         },
//         "&::after": {
//           content: '""',
//           position: "absolute",
//           bottom: -100,
//           left: -100,
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           background: alpha(theme.palette.secondary.main, 0.03),
//           zIndex: 0,
//         },
//       }}
//     >
//       {/* Reading progress bar */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           height: 4,
//           zIndex: 1100,
//           bgcolor: alpha(theme.palette.primary.main, 0.1),
//           "&::after": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             height: "100%",
//             width: `${scrollProgress}%`,
//             background: accentGradient,
//             transition: "width 0.1s ease",
//           },
//         }}
//       />

//       <Container
//         maxWidth="lg"
//         sx={{
//           pt: { xs: 4, md: 8 },
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         {/* Breadcrumbs navigation */}
//         <Fade in={!isLoading} timeout={800}>
//           <Breadcrumbs
//             separator={<NavigateNextIcon fontSize="small" />}
//             aria-label="breadcrumb"
//             sx={{
//               mb: 4,
//               "& .MuiBreadcrumbs-ol": {
//                 alignItems: "center",
//               },
//             }}
//           >
//             <Link
//               underline="hover"
//               color="inherit"
//               href="/"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               Home
//             </Link>
//             <Link
//               underline="hover"
//               color="inherit"
//               href="/blog"
//               sx={{
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               Blog
//             </Link>
//             <Typography
//               color="text.primary"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 0.5,
//               }}
//             >
//               <LocalOfferIcon sx={{ fontSize: 16 }} />
//               {blogPost.categories[0]}
//             </Typography>
//           </Breadcrumbs>
//         </Fade>

//         {/* Blog header */}
//         <Box sx={{ mb: { xs: 4, md: 8 } }}>
//           {isLoading ? (
//             <>
//               <Skeleton variant="text" sx={{ height: 60, mb: 1, width: "80%" }} />
//               <Skeleton variant="text" sx={{ height: 30, mb: 3, width: "60%" }} />
//               <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
//                 <Skeleton variant="circular" width={56} height={56} />
//                 <Box sx={{ width: "100%" }}>
//                   <Skeleton variant="text" sx={{ height: 20, width: "30%" }} />
//                   <Skeleton variant="text" sx={{ height: 16, width: "20%" }} />
//                 </Box>
//               </Stack>
//               <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
//                 <Skeleton variant="rounded" width={100} height={30} />
//                 <Skeleton variant="rounded" width={80} height={30} />
//                 <Skeleton variant="rounded" width={120} height={30} />
//               </Stack>
//             </>
//           ) : (
//             <Fade in={true} timeout={1000}>
//               <Box>
//                 <Box
//                   sx={{
//                     display: "inline-block",
//                     px: 2,
//                     py: 0.5,
//                     mb: 2,
//                     borderRadius: "4px",
//                     background: primaryGradient,
//                     color: "white",
//                     fontWeight: 500,
//                     fontSize: "0.875rem",
//                     boxShadow: `0 2px 10px ${alpha(theme.palette.primary.main, 0.3)}`,
//                     transform: "translateY(0)",
//                     transition: "transform 0.2s ease",
//                     "&:hover": {
//                       transform: "translateY(-2px)",
//                     },
//                   }}
//                 >
//                   {blogPost.categories[0]}
//                 </Box>

//                 <Typography
//                   variant="h1"
//                   component="h1"
//                   gutterBottom
//                   sx={{
//                     fontWeight: 800,
//                     fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem" },
//                     lineHeight: 1.1,
//                     letterSpacing: "-0.02em",
//                     background: accentGradient,
//                     backgroundClip: "text",
//                     WebkitBackgroundClip: "text",
//                     color: "transparent",
//                     mb: 2,
//                     textShadow: `0 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
//                   }}
//                 >
//                   {blogPost.title}
//                 </Typography>

//                 <Typography
//                   variant="h2"
//                   component="p"
//                   sx={{
//                     fontSize: { xs: "1.25rem", md: "1.5rem" },
//                     fontWeight: 400,
//                     color: alpha(theme.palette.text.primary, 0.8),
//                     mb: 4,
//                     maxWidth: "90%",
//                   }}
//                 >
//                   {blogPost.subtitle}
//                 </Typography>

//                 <Stack
//                   direction={{ xs: "column", sm: "row" }}
//                   spacing={3}
//                   alignItems={{ xs: "flex-start", sm: "center" }}
//                   sx={{
//                     mb: 4,
//                     p: 3,
//                     borderRadius: 3,
//                     bgcolor: alpha(theme.palette.background.paper, 0.7),
//                     backdropFilter: "blur(10px)",
//                     boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
//                     border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                   }}
//                 >
//                   <Stack direction="row" spacing={2} alignItems="center">
//                     <Avatar
//                       src={blogPost.author.avatar}
//                       alt={blogPost.author.name}
//                       sx={{
//                         width: 64,
//                         height: 64,
//                         border: `2px solid ${theme.palette.primary.main}`,
//                         boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           transform: "scale(1.05)",
//                           boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.2)}`,
//                         },
//                       }}
//                     />
//                     <Box>
//                       <Typography
//                         variant="subtitle1"
//                         fontWeight="bold"
//                         sx={{
//                           fontSize: "1.1rem",
//                           color: theme.palette.text.primary,
//                         }}
//                       >
//                         {blogPost.author.name}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: 0.5,
//                         }}
//                       >
//                         {blogPost.author.role} • {blogPost.author.twitter}
//                       </Typography>
//                     </Box>
//                   </Stack>

//                   <Divider orientation="vertical" flexItem sx={{ display: { xs: "none", sm: "block" } }} />

//                   <Stack
//                     direction={{ xs: "column", sm: "row" }}
//                     spacing={{ xs: 1, sm: 3 }}
//                     alignItems={{ xs: "flex-start", sm: "center" }}
//                     sx={{ width: { xs: "100%", sm: "auto" } }}
//                   >
//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       sx={{
//                         color: alpha(theme.palette.text.primary, 0.7),
//                         "& svg": {
//                           color: theme.palette.primary.main,
//                         },
//                       }}
//                     >
//                       <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
//                       <Typography variant="body2">
//                         {blogPost.publishDate} • {blogPost.readTime}
//                       </Typography>
//                     </Box>

//                     <Box
//                       display="flex"
//                       alignItems="center"
//                       sx={{
//                         color: alpha(theme.palette.text.primary, 0.7),
//                         "& svg": {
//                           color: theme.palette.primary.main,
//                         },
//                       }}
//                     >
//                       <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
//                       <Typography variant="body2">{blogPost.views} views</Typography>
//                     </Box>

//                     <Stack direction="row" spacing={1}>
//                       <Tooltip title={liked ? "Remove like" : "Like this article"}>
//                         <IconButton
//                           size="small"
//                           onClick={() => setLiked(!liked)}
//                           sx={{
//                             color: liked ? theme.palette.primary.main : alpha(theme.palette.text.primary, 0.7),
//                             bgcolor: liked ? alpha(theme.palette.primary.main, 0.1) : "transparent",
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               bgcolor: alpha(theme.palette.primary.main, 0.1),
//                               transform: "scale(1.05)",
//                             },
//                           }}
//                         >
//                           <ThumbUpIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title={bookmarked ? "Remove bookmark" : "Bookmark this article"}>
//                         <IconButton
//                           size="small"
//                           onClick={() => setBookmarked(!bookmarked)}
//                           sx={{
//                             color: bookmarked ? theme.palette.primary.main : alpha(theme.palette.text.primary, 0.7),
//                             bgcolor: bookmarked ? alpha(theme.palette.primary.main, 0.1) : "transparent",
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               bgcolor: alpha(theme.palette.primary.main, 0.1),
//                               transform: "scale(1.05)",
//                             },
//                           }}
//                         >
//                           {bookmarked ? <BookmarkIcon fontSize="small" /> : <BookmarkBorderIcon fontSize="small" />}
//                         </IconButton>
//                       </Tooltip>

//                       <Tooltip title="Comment on this article">
//                         <IconButton
//                           size="small"
//                           sx={{
//                             color: alpha(theme.palette.text.primary, 0.7),
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               bgcolor: alpha(theme.palette.primary.main, 0.1),
//                               color: theme.palette.primary.main,
//                               transform: "scale(1.05)",
//                             },
//                           }}
//                         >
//                           <CommentIcon fontSize="small" />
//                         </IconButton>
//                       </Tooltip>
//                     </Stack>
//                   </Stack>
//                 </Stack>

//                 <Stack
//                   direction="row"
//                   spacing={1}
//                   sx={{
//                     mb: 4,
//                     flexWrap: "wrap",
//                     gap: 1,
//                   }}
//                 >
//                   {blogPost.tags.map((tag) => (
//                     <Chip
//                       key={tag}
//                       label={`#${tag}`}
//                       size="small"
//                       clickable
//                       sx={{
//                         borderRadius: "4px",
//                         fontWeight: 500,
//                         bgcolor: alpha(theme.palette.background.paper, 0.7),
//                         backdropFilter: "blur(4px)",
//                         border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                         color: theme.palette.text.secondary,
//                         transition: "all 0.2s ease",
//                         "&:hover": {
//                           bgcolor: alpha(theme.palette.primary.main, 0.1),
//                           color: theme.palette.primary.main,
//                           transform: "translateY(-2px)",
//                         },
//                       }}
//                     />
//                   ))}
//                 </Stack>
//               </Box>
//             </Fade>
//           )}
//         </Box>

//         {/* Hero image with advanced effects */}
//         {isLoading ? (
//           <Skeleton
//             variant="rounded"
//             sx={{
//               width: "100%",
//               height: { xs: 200, sm: 300, md: 400 },
//               mb: 6,
//               borderRadius: 4,
//             }}
//           />
//         ) : (
//           <Zoom in={true} timeout={1000}>
//             <Paper
//               elevation={8}
//               sx={{
//                 borderRadius: { xs: 3, md: 6 },
//                 overflow: "hidden",
//                 mb: { xs: 4, md: 8 },
//                 transform: "translateY(0)",
//                 transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                 "&:hover": {
//                   transform: "translateY(-10px) scale(1.01)",
//                   boxShadow: `0 20px 40px ${alpha(theme.palette.common.black, 0.1)}`,
//                 },
//                 position: "relative",
//               }}
//             >
//               <Box
//                 sx={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   background: `linear-gradient(to bottom, transparent 70%, ${alpha(theme.palette.common.black, 0.7)} 100%)`,
//                   zIndex: 1,
//                 }}
//               />
//               <Box
//                 component="img"
//                 src={blogPost.heroImage}
//                 alt="Blog hero image"
//                 sx={{
//                   width: "100%",
//                   height: { xs: "auto", md: 500 },
//                   display: "block",
//                   objectFit: "cover",
//                   transition: "transform 0.7s ease",
//                   "&:hover": {
//                     transform: "scale(1.03)",
//                   },
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   p: { xs: 3, md: 4 },
//                   zIndex: 2,
//                 }}
//               >
//                 <Typography
//                   variant="h4"
//                   component="p"
//                   sx={{
//                     color: "white",
//                     fontWeight: 700,
//                     textShadow: "0 2px 10px rgba(0,0,0,0.3)",
//                     maxWidth: "80%",
//                   }}
//                 >
//                   {blogPost.title}
//                 </Typography>
//               </Box>
//             </Paper>
//           </Zoom>
//         )}

//         {/* Social sharing sidebar */}
//         <Box
//           sx={{
//             position: "fixed",
//             left: { xs: "auto", lg: isLarge ? "calc((100% - 1200px) / 2 - 80px)" : 20 },
//             right: { xs: 20, lg: "auto" },
//             bottom: { xs: 20, lg: "auto" },
//             top: { xs: "auto", lg: 250 },
//             display: "flex",
//             flexDirection: { xs: "row", lg: "column" },
//             gap: 1.5,
//             zIndex: 10,
//             p: 1.5,
//             borderRadius: 3,
//             bgcolor: alpha(theme.palette.background.paper, 0.8),
//             backdropFilter: "blur(10px)",
//             boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
//             border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//             transition: "all 0.3s ease",
//             opacity: scrolled ? 1 : 0,
//             transform: scrolled ? "translateY(0)" : "translateY(20px)",
//             visibility: scrolled ? "visible" : "hidden",
//           }}
//         >
//           <Tooltip title="Share on Facebook" placement={isMobile ? "top" : "right"}>
//             <IconButton
//               color="primary"
//               sx={{
//                 bgcolor: alpha(theme.palette.primary.main, 0.1),
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   bgcolor: alpha(theme.palette.primary.main, 0.2),
//                   transform: "scale(1.1)",
//                 },
//               }}
//             >
//               <FacebookIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Share on Twitter" placement={isMobile ? "top" : "right"}>
//             <IconButton
//               color="primary"
//               sx={{
//                 bgcolor: alpha(theme.palette.primary.main, 0.1),
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   bgcolor: alpha(theme.palette.primary.main, 0.2),
//                   transform: "scale(1.1)",
//                 },
//               }}
//             >
//               <TwitterIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Share on LinkedIn" placement={isMobile ? "top" : "right"}>
//             <IconButton
//               color="primary"
//               sx={{
//                 bgcolor: alpha(theme.palette.primary.main, 0.1),
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   bgcolor: alpha(theme.palette.primary.main, 0.2),
//                   transform: "scale(1.1)",
//                 },
//               }}
//             >
//               <LinkedInIcon />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Share via link" placement={isMobile ? "top" : "right"}>
//             <IconButton
//               color="primary"
//               sx={{
//                 bgcolor: alpha(theme.palette.primary.main, 0.1),
//                 transition: "all 0.2s ease",
//                 "&:hover": {
//                   bgcolor: alpha(theme.palette.primary.main, 0.2),
//                   transform: "scale(1.1)",
//                 },
//               }}
//             >
//               <ShareIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>

//         <Grid container spacing={4}>
//           {/* Main content */}
//           <Grid item xs={12} md={8}>
//             {isLoading ? (
//               <Box sx={{ mb: 6 }}>
//                 {[...Array(10)].map((_, i) => (
//                   <React.Fragment key={i}>
//                     {i % 3 === 0 && <Skeleton variant="text" sx={{ height: 40, mb: 2, mt: 4 }} />}
//                     <Skeleton variant="text" sx={{ height: 20, mb: 1 }} />
//                     <Skeleton variant="text" sx={{ height: 20, mb: 1 }} />
//                     <Skeleton variant="text" sx={{ height: 20, mb: 1, width: "80%" }} />
//                   </React.Fragment>
//                 ))}
//               </Box>
//             ) : (
//               <Fade in={true} timeout={1200}>
//                 <Box>
//                   {/* Blog content with enhanced typography */}
//                   <Box
//                     ref={contentRef}
//                     sx={{
//                       typography: "body1",
//                       "& h2": {
//                         mt: 8,
//                         mb: 4,
//                         fontWeight: 800,
//                         fontSize: "1.875rem",
//                         color: theme.palette.text.primary,
//                         position: "relative",
//                         paddingBottom: 2,
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 0,
//                           left: 0,
//                           width: 80,
//                           height: 4,
//                           borderRadius: 2,
//                           background: primaryGradient,
//                         },
//                       },
//                       "& h3": {
//                         mt: 6,
//                         mb: 3,
//                         fontWeight: 700,
//                         fontSize: "1.5rem",
//                         color: theme.palette.text.primary,
//                       },
//                       "& p": {
//                         mb: 4,
//                         lineHeight: 1.8,
//                         fontSize: "1.125rem",
//                         color: alpha(theme.palette.text.primary, 0.85),
//                       },
//                       "& blockquote": {
//                         borderLeft: `4px solid ${theme.palette.primary.main}`,
//                         pl: 4,
//                         py: 2,
//                         my: 6,
//                         mx: { xs: 0, md: 4 },
//                         bgcolor: alpha(theme.palette.primary.main, 0.05),
//                         borderRadius: "0 16px 16px 0",
//                         boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
//                         "& p": {
//                           fontStyle: "italic",
//                           fontSize: "1.25rem",
//                           color: alpha(theme.palette.text.primary, 0.9),
//                           mb: 1,
//                         },
//                         "& cite": {
//                           display: "block",
//                           fontSize: "0.875rem",
//                           color: alpha(theme.palette.text.primary, 0.6),
//                           textAlign: "right",
//                           fontStyle: "normal",
//                           fontWeight: 500,
//                         },
//                       },
//                       "& figure": {
//                         my: 6,
//                         mx: 0,
//                         "& img": {
//                           width: "100%",
//                           borderRadius: 3,
//                           boxShadow: `0 8px 30px ${alpha(theme.palette.common.black, 0.1)}`,
//                         },
//                         "& figcaption": {
//                           mt: 2,
//                           textAlign: "center",
//                           fontSize: "0.875rem",
//                           color: alpha(theme.palette.text.primary, 0.6),
//                           fontStyle: "italic",
//                         },
//                       },
//                       "& ul, & ol": {
//                         mb: 4,
//                         pl: 4,
//                         "& li": {
//                           mb: 2,
//                           fontSize: "1.125rem",
//                           color: alpha(theme.palette.text.primary, 0.85),
//                         },
//                       },
//                       "& strong": {
//                         color: theme.palette.text.primary,
//                         fontWeight: 600,
//                       },
//                     }}
//                     dangerouslySetInnerHTML={createMarkup(blogPost.content)}
//                   />

//                   {/* Tags section */}
//                   <Box sx={{ mt: 8, mb: 6 }}>
//                     <Typography
//                       variant="h6"
//                       component="h3"
//                       sx={{
//                         mb: 2,
//                         fontWeight: 700,
//                         display: "flex",
//                         alignItems: "center",
//                         gap: 1,
//                       }}
//                     >
//                       <LocalOfferIcon fontSize="small" />
//                       Tags
//                     </Typography>
//                     <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
//                       {blogPost.tags.map((tag) => (
//                         <Chip
//                           key={tag}
//                           label={`#${tag}`}
//                           size="medium"
//                           clickable
//                           sx={{
//                             borderRadius: "4px",
//                             fontWeight: 500,
//                             bgcolor: alpha(theme.palette.background.paper, 0.7),
//                             backdropFilter: "blur(4px)",
//                             border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                             color: theme.palette.text.secondary,
//                             transition: "all 0.2s ease",
//                             "&:hover": {
//                               bgcolor: alpha(theme.palette.primary.main, 0.1),
//                               color: theme.palette.primary.main,
//                               transform: "translateY(-2px)",
//                             },
//                           }}
//                         />
//                       ))}
//                     </Stack>
//                   </Box>

//                   {/* Author bio card */}
//                   <Paper
//                     elevation={4}
//                     sx={{
//                       p: 4,
//                       mt: 8,
//                       mb: 6,
//                       borderRadius: 4,
//                       background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
//                       backdropFilter: "blur(10px)",
//                       border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                       position: "relative",
//                       overflow: "hidden",
//                       "&::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         width: 6,
//                         height: "100%",
//                         background: primaryGradient,
//                       },
//                     }}
//                   >
//                     <Stack direction={{ xs: "column", sm: "row" }} spacing={4} alignItems="center">
//                       <Avatar
//                         src={blogPost.author.avatar}
//                         alt={blogPost.author.name}
//                         sx={{
//                           width: 100,
//                           height: 100,
//                           border: `3px solid ${theme.palette.primary.main}`,
//                           boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.2)}`,
//                           transition: "all 0.3s ease",
//                           "&:hover": {
//                             transform: "scale(1.05)",
//                             boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.3)}`,
//                           },
//                         }}
//                       />
//                       <Box>
//                         <Typography variant="h5" fontWeight="bold" gutterBottom>
//                           About {blogPost.author.name}
//                         </Typography>
//                         <Typography
//                           variant="body1"
//                           paragraph
//                           sx={{
//                             color: alpha(theme.palette.text.primary, 0.8),
//                             lineHeight: 1.7,
//                           }}
//                         >
//                           {blogPost.author.bio}
//                         </Typography>
//                         <Stack direction="row" spacing={2}>
//                           <Button
//                             variant="contained"
//                             size="small"
//                             sx={{
//                               borderRadius: 6,
//                               textTransform: "none",
//                               px: 3,
//                               py: 1,
//                               background: primaryGradient,
//                               boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
//                               transition: "all 0.2s ease",
//                               "&:hover": {
//                                 boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
//                                 transform: "translateY(-2px)",
//                               },
//                             }}
//                           >
//                             Follow
//                           </Button>
//                           <Button
//                             variant="outlined"
//                             size="small"
//                             sx={{
//                               borderRadius: 6,
//                               textTransform: "none",
//                               px: 3,
//                               py: 1,
//                               borderColor: alpha(theme.palette.primary.main, 0.5),
//                               "&:hover": {
//                                 borderColor: theme.palette.primary.main,
//                                 bgcolor: alpha(theme.palette.primary.main, 0.05),
//                               },
//                             }}
//                           >
//                             View all posts
//                           </Button>
//                         </Stack>
//                       </Box>
//                     </Stack>
//                   </Paper>

//                   {/* Previous/Next navigation */}
//                   <Box sx={{ mt: 8, mb: 6 }}>
//                     <Grid container spacing={3}>
//                       <Grid item xs={12} sm={6}>
//                         <Link href={blogPost.previousPost.slug} style={{ textDecoration: "none" }}>
//                           <Paper
//                             sx={{
//                               p: 3,
//                               height: "100%",
//                               borderRadius: 3,
//                               transition: "all 0.3s ease",
//                               border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
//                               "&:hover": {
//                                 transform: "translateY(-4px)",
//                                 boxShadow: 4,
//                                 bgcolor: alpha(theme.palette.primary.main, 0.02),
//                               },
//                               display: "flex",
//                               flexDirection: "column",
//                             }}
//                           >
//                             <Typography variant="caption" color="text.secondary" gutterBottom>
//                               Previous Article
//                             </Typography>
//                             <Stack direction="row" spacing={1} alignItems="center">
//                               <ArrowBackIcon fontSize="small" color="primary" />
//                               <Typography variant="subtitle1" fontWeight="medium" color="text.primary">
//                                 {blogPost.previousPost.title}
//                               </Typography>
//                             </Stack>
//                           </Paper>
//                         </Link>
//                       </Grid>
//                       <Grid item xs={12} sm={6}>
//                         <Link href={blogPost.nextPost.slug} style={{ textDecoration: "none" }}>
//                           <Paper
//                             sx={{
//                               p: 3,
//                               height: "100%",
//                               borderRadius: 3,
//                               transition: "all 0.3s ease",
//                               border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
//                               "&:hover": {
//                                 transform: "translateY(-4px)",
//                                 boxShadow: 4,
//                                 bgcolor: alpha(theme.palette.primary.main, 0.02),
//                               },
//                               display: "flex",
//                               flexDirection: "column",
//                               alignItems: "flex-end",
//                               textAlign: "right",
//                             }}
//                           >
//                             <Typography variant="caption" color="text.secondary" gutterBottom>
//                               Next Article
//                             </Typography>
//                             <Stack direction="row" spacing={1} alignItems="center">
//                               <Typography variant="subtitle1" fontWeight="medium" color="text.primary">
//                                 {blogPost.nextPost.title}
//                               </Typography>
//                               <ArrowForwardIcon fontSize="small" color="primary" />
//                             </Stack>
//                           </Paper>
//                         </Link>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </Box>
//               </Fade>
//             )}
//           </Grid>

//           {/* Sidebar */}
//           <Grid item xs={12} md={4}>
//             {isLoading ? (
//               <Skeleton
//                 variant="rounded"
//                 sx={{
//                   width: "100%",
//                   height: 600,
//                   borderRadius: 4,
//                 }}
//               />
//             ) : (
//               <Fade in={true} timeout={1500}>
//                 <Box>
//                   {/* Table of contents */}
//                   <Box
//                     component={Paper}
//                     elevation={4}
//                     sx={{
//                       p: 3,
//                       borderRadius: 4,
//                       position: "sticky",
//                       top: 100,
//                       mb: 4,
//                       background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
//                       backdropFilter: "blur(10px)",
//                       border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                       overflow: "hidden",
//                       "&::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         height: 4,
//                         background: primaryGradient,
//                       },
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       component="h2"
//                       gutterBottom
//                       sx={{
//                         fontWeight: 700,
//                         position: "relative",
//                         pb: 2,
//                         mb: 3,
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 0,
//                           left: 0,
//                           width: 40,
//                           height: 3,
//                           borderRadius: 1.5,
//                           bgcolor: theme.palette.primary.main,
//                         },
//                       }}
//                     >
//                       Table of Contents
//                     </Typography>

//                     <Box component="nav" aria-label="table of contents">
//                       <Stack spacing={1}>
//                         {tableOfContents.map((item) => (
//                           <Button
//                             key={item.id}
//                             onClick={() => scrollToSection(item.id)}
//                             sx={{
//                               justifyContent: "flex-start",
//                               pl: item.level === 3 ? 4 : 2,
//                               py: 1,
//                               borderRadius: 2,
//                               color:
//                                 activeSection === item.text ? theme.palette.primary.main : theme.palette.text.secondary,
//                               bgcolor:
//                                 activeSection === item.text ? alpha(theme.palette.primary.main, 0.1) : "transparent",
//                               fontWeight: activeSection === item.text ? 600 : 400,
//                               textTransform: "none",
//                               transition: "all 0.2s ease",
//                               borderLeft:
//                                 activeSection === item.text
//                                   ? `3px solid ${theme.palette.primary.main}`
//                                   : "3px solid transparent",
//                               "&:hover": {
//                                 bgcolor: alpha(theme.palette.primary.main, 0.05),
//                                 color: theme.palette.primary.main,
//                               },
//                             }}
//                           >
//                             <Typography
//                               variant="body2"
//                               sx={{
//                                 fontSize: item.level === 3 ? "0.875rem" : "1rem",
//                                 fontWeight: "inherit",
//                               }}
//                             >
//                               {item.text}
//                             </Typography>
//                           </Button>
//                         ))}
//                       </Stack>
//                     </Box>
//                   </Box>

//                   {/* Related articles */}
//                   <Box
//                     component={Paper}
//                     elevation={4}
//                     sx={{
//                       p: 3,
//                       borderRadius: 4,
//                       position: "sticky",
//                       top: 350,
//                       background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
//                       backdropFilter: "blur(10px)",
//                       border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//                       overflow: "hidden",
//                       "&::before": {
//                         content: '""',
//                         position: "absolute",
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         height: 4,
//                         background: accentGradient,
//                       },
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       component="h2"
//                       gutterBottom
//                       sx={{
//                         fontWeight: 700,
//                         position: "relative",
//                         pb: 2,
//                         mb: 3,
//                         "&::after": {
//                           content: '""',
//                           position: "absolute",
//                           bottom: 0,
//                           left: 0,
//                           width: 40,
//                           height: 3,
//                           borderRadius: 1.5,
//                           background: accentGradient,
//                         },
//                       }}
//                     >
//                       Related Articles
//                     </Typography>

//                     <Stack spacing={3}>
//                       {blogPost.relatedPosts.map((post) => (
//                         <Card
//                           key={post.id}
//                           sx={{
//                             boxShadow: "none",
//                             transition: "all 0.3s ease",
//                             "&:hover": {
//                               transform: "translateY(-4px) scale(1.02)",
//                               boxShadow: 3,
//                             },
//                             bgcolor: "transparent",
//                             border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
//                             borderRadius: 3,
//                             overflow: "hidden",
//                           }}
//                         >
//                           <CardActionArea>
//                             <Box sx={{ position: "relative" }}>
//                               <CardMedia component="img" height="140" image={post.image} alt={post.title} />
//                               <Box
//                                 sx={{
//                                   position: "absolute",
//                                   top: 10,
//                                   right: 10,
//                                   px: 1.5,
//                                   py: 0.5,
//                                   borderRadius: "4px",
//                                   bgcolor: alpha(theme.palette.common.black, 0.6),
//                                   backdropFilter: "blur(4px)",
//                                   color: "white",
//                                   fontSize: "0.75rem",
//                                   fontWeight: 500,
//                                 }}
//                               >
//                                 {post.category}
//                               </Box>
//                               <Box
//                                 sx={{
//                                   position: "absolute",
//                                   bottom: 0,
//                                   left: 0,
//                                   right: 0,
//                                   height: "50%",
//                                   background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
//                                 }}
//                               />
//                             </Box>
//                             <CardContent>
//                               <Typography
//                                 variant="caption"
//                                 color="primary"
//                                 sx={{
//                                   fontWeight: 500,
//                                   display: "block",
//                                   mb: 0.5,
//                                 }}
//                               >
//                                 {post.date} • By {post.author}
//                               </Typography>
//                               <Typography
//                                 variant="h6"
//                                 component="h3"
//                                 gutterBottom
//                                 sx={{
//                                   fontWeight: 700,
//                                   fontSize: "1.1rem",
//                                   lineHeight: 1.3,
//                                   mb: 1,
//                                   transition: "color 0.2s ease",
//                                   "&:hover": {
//                                     color: theme.palette.primary.main,
//                                   },
//                                 }}
//                               >
//                                 {post.title}
//                               </Typography>
//                               <Typography
//                                 variant="body2"
//                                 color="text.secondary"
//                                 sx={{
//                                   overflow: "hidden",
//                                   textOverflow: "ellipsis",
//                                   display: "-webkit-box",
//                                   WebkitLineClamp: 2,
//                                   WebkitBoxOrient: "vertical",
//                                 }}
//                               >
//                                 {post.excerpt}
//                               </Typography>
//                             </CardContent>
//                           </CardActionArea>
//                         </Card>
//                       ))}
//                     </Stack>

//                     <Button
//                       variant="contained"
//                       fullWidth
//                       sx={{
//                         mt: 3,
//                         borderRadius: 2,
//                         py: 1.2,
//                         fontWeight: 600,
//                         textTransform: "none",
//                         background: accentGradient,
//                         boxShadow: `0 4px 14px ${alpha(theme.palette.primary.main, 0.4)}`,
//                         transition: "all 0.3s ease",
//                         "&:hover": {
//                           boxShadow: `0 6px 20px ${alpha(theme.palette.primary.main, 0.6)}`,
//                           transform: "translateY(-2px)",
//                         },
//                       }}
//                     >
//                       View All Articles
//                     </Button>
//                   </Box>
//                 </Box>
//               </Fade>
//             )}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   )
// }

