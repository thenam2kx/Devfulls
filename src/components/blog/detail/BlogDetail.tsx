"use client";

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { alpha, useTheme } from "@mui/material/styles";
import "highlight.js/styles/atom-one-dark.css";
import HeaderBlogDetail from "./header.blog.detail";
import SocialSidebar from "./social.sidebar";
import HeroBlogDetail from "./hero.blog.detail";
import AppBreadcrumbs from "@/components/app/app.breadcrumbs";
import ContentBlogDetail from "./content.blog.detail";

// Sample blog data - in a real app, this would come from an API or props
export const blogPost = {
  title: "Understanding Modern Web Development Frameworks",
  subtitle:
    "A deep dive into the technologies shaping the future of web development",
  publishDate: "April 2, 2025",
  readTime: "8 min read",
  views: "3.2K",
  likes: 142,
  comments: 38,
  author: {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=50&width=50",
    role: "Senior Developer",
    bio: "Alex has been developing web applications for over 10 years and specializes in React and modern JavaScript frameworks. He is passionate about creating performant and accessible web experiences.",
    twitter: "@alexjohnson",
    website: "alexjohnson.dev",
  },
  categories: ["Web Development", "React", "JavaScript"],
  tags: [
    "frontend",
    "frameworks",
    "performance",
    "architecture",
    "best practices",
  ],
  heroImage: "/placeholder.svg?height=500&width=1000",
  content: `
    <p>Modern web development has evolved significantly over the past decade. Frameworks like React, Angular, and Vue have revolutionized how developers build interactive user interfaces.</p>
    
    <h2>The Rise of Component-Based Architecture</h2>
    <p>One of the most significant shifts in modern web development has been the move toward component-based architecture. This approach allows developers to build encapsulated components that manage their own state, then compose them to make complex UIs.</p>
    
    <p>Components are reusable, which means you can use the same component in multiple places in your application, or even across different applications. This reusability leads to more consistent UIs and faster development cycles.</p>
    
    <figure>
      <img src="/placeholder.svg?height=300&width=600" alt="Component architecture diagram" />
      <figcaption>Modern component architecture enables better code organization and reusability</figcaption>
    </figure>
    
    <h2>State Management</h2>
    <p>As applications grow in complexity, managing state becomes increasingly challenging. Libraries like Redux, MobX, and Recoil have emerged to help developers manage application state in a predictable way.</p>
    
    <p>These state management solutions provide a centralized store for all the data your application needs. This makes it easier to debug and test your application, as the data flow becomes more predictable.</p>
    
    <pre><code class="language-javascript">
// Example of Redux state management
import { createStore } from 'redux';

// Reducer function
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create store
const store = createStore(counterReducer);

// Dispatch actions
store.dispatch({ type: 'INCREMENT' });
console.log(store.getState()); // { count: 1 }
    </code></pre>
    
    <blockquote>
      <p>"The future of web development is about creating fast, accessible, and engaging user experiences across all devices."</p>
      <cite>— Sarah Chen, Web Performance Engineer at Google</cite>
    </blockquote>
    
    <h2>Server-Side Rendering and Static Site Generation</h2>
    <p>Performance and SEO considerations have led to the popularity of server-side rendering (SSR) and static site generation (SSG). Frameworks like Next.js and Gatsby have made it easier to implement these techniques.</p>
    
    <pre><code class="language-typescript">
// Example of a Next.js page with SSG
import { GetStaticProps } from 'next';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface BlogPageProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  // Fetch data at build time
  const res = await fetch('https://api.example.com/posts');
  const posts = await res.json();
  
  return {
    props: { posts },
    // Re-generate at most once per hour
    revalidate: 3600,
  };
};

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
    </code></pre>
    
    <p>SSR renders the HTML on the server before sending it to the client, which can lead to faster initial page loads and better SEO. SSG takes this a step further by generating HTML at build time, which can be served from a CDN for even better performance.</p>
    
    <h2>The Importance of Performance Optimization</h2>
    <p>With users expecting faster and more responsive web applications, performance optimization has become a critical aspect of modern web development. Techniques like code splitting, lazy loading, and image optimization are essential for delivering a great user experience.</p>
    
    <p>Modern frameworks and build tools have built-in support for these optimization techniques, making it easier for developers to create high-performance applications.</p>
    
    <h3>Key Performance Metrics</h3>
    <ul>
      <li><strong>First Contentful Paint (FCP)</strong>: Measures the time from navigation to when the browser renders the first bit of content from the DOM.</li>
      <li><strong>Largest Contentful Paint (LCP)</strong>: Measures loading performance. To provide a good user experience, LCP should occur within 2.5 seconds of when the page first starts loading.</li>
      <li><strong>Cumulative Layout Shift (CLS)</strong>: Measures visual stability. Pages should maintain a CLS of less than 0.1.</li>
    </ul>
    
    <h2>Accessibility Considerations</h2>
    <p>Building accessible web applications is not just a nice-to-have feature—it's essential for ensuring that your application can be used by everyone, including people with disabilities.</p>
    
    <pre><code class="language-jsx">
// Example of accessible React component
import React from 'react';

function AccessibleButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      aria-label="Submit form"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {children}
    </button>
  );
}

export default AccessibleButton;
    </code></pre>

    <p>Modern frameworks provide tools and patterns for building accessible applications, but it's up to developers to implement them correctly. This includes using semantic HTML, providing alternative text for images, ensuring sufficient color contrast, and making sure your application can be navigated using a keyboard.</p>
  `,
  relatedPosts: [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      excerpt:
        "Learn how to use React Hooks to simplify your components and reuse stateful logic.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 25, 2025",
      author: "Jamie Smith",
      category: "React",
    },
    {
      id: 2,
      title: "CSS-in-JS: Styled Components vs. Emotion",
      excerpt:
        "A comparison of the two most popular CSS-in-JS libraries for React applications.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 18, 2025",
      author: "Taylor Wilson",
      category: "CSS",
    },
    {
      id: 3,
      title: "Building Accessible Web Applications",
      excerpt:
        "Best practices for ensuring your web applications are accessible to all users.",
      image: "/placeholder.svg?height=200&width=300",
      date: "March 10, 2025",
      author: "Morgan Lee",
      category: "Accessibility",
    },
  ],
  nextPost: {
    title: "The Future of Frontend Development: What's Next After React?",
    slug: "/blog/future-of-frontend-development",
  },
  previousPost: {
    title: "10 Performance Optimization Techniques Every Developer Should Know",
    slug: "/blog/performance-optimization-techniques",
  },
};

export default function BlogDetail() {
  const theme = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const contentRef = useRef<HTMLDivElement>(null);
  const headingRefs = useRef<{ [key: string]: HTMLElement }>({});

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Calculate scroll percentage
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent * 100);

      // Set scrolled state for visual effects
      setScrolled(scrollTop > 100);

      // Determine active section for table of contents
      if (contentRef.current) {
        const headings = contentRef.current.querySelectorAll("h2, h3");
        let currentSection = "";

        Array.from(headings).forEach((heading) => {
          const top = heading.getBoundingClientRect().top;
          if (top < 200) {
            currentSection = heading.textContent || "";
          }
        });

        if (currentSection) {
          setActiveSection(currentSection);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Extract headings for table of contents
  const [tableOfContents, setTableOfContents] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    if (!isLoading && contentRef.current) {
      const headings = contentRef.current.querySelectorAll("h2, h3");
      const toc: { id: string; text: string; level: number }[] = [];

      headings.forEach((heading, index) => {
        const text = heading.textContent || `Section ${index + 1}`;
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const level = heading.tagName === "H2" ? 2 : 3;

        // Add id to the heading for linking
        heading.id = id;

        // Store reference to the heading element
        headingRefs.current[text] = heading as HTMLElement;

        toc.push({ id, text, level });
      });

      setTableOfContents(toc);
    }
  }, [isLoading]);

  // Scroll to section when clicking on TOC item
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  // Custom gradient colors
  const primaryGradient = `linear-gradient(135deg, ${
    theme.palette.primary.main
  } 0%, ${alpha(theme.palette.primary.main, 0.8)} 100%)`;
  const accentGradient = `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`;
  const backgroundGradient = `radial-gradient(circle at top right, ${alpha(
    theme.palette.primary.main,
    0.05
  )} 0%, transparent 70%)`;


  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        pb: 10,
        background: backgroundGradient,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: alpha(theme.palette.primary.main, 0.03),
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: alpha(theme.palette.secondary.main, 0.03),
          zIndex: 0,
        },
      }}
    >
      {/* Reading progress bar */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          zIndex: 1100,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: `${scrollProgress}%`,
            background: accentGradient,
            transition: "width 0.1s ease",
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: 4, md: 8 },
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Breadcrumbs navigation */}
        <AppBreadcrumbs />

        {/* Blog header */}
        <HeaderBlogDetail />

        {/* Hero image with advanced effects */}
        <HeroBlogDetail />

        {/* Social sharing sidebar */}
        <SocialSidebar scrolled={scrolled} />

        <Grid container spacing={4}>
          {/* Main content */}
          <Grid size={{ xs: 12, md: 8 }}>
            <ContentBlogDetail isLoading={isLoading} contentRef={contentRef} />
          </Grid>

          {/* Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            {isLoading ? (
              <Skeleton
                variant="rounded"
                sx={{
                  width: "100%",
                  height: 600,
                  borderRadius: 4,
                }}
              />
            ) : (
              <Fade in={true} timeout={1500}>
                <Box>
                  <Box
                    component={Paper}
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      position: "sticky",
                      top: 100,
                      mb: 4,
                      background: `linear-gradient(135deg, ${alpha(
                        theme.palette.background.paper,
                        0.9
                      )} 0%, ${alpha(
                        theme.palette.background.paper,
                        0.7
                      )} 100%)`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: primaryGradient,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        position: "relative",
                        pb: 2,
                        mb: 3,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: 40,
                          height: 3,
                          borderRadius: 1.5,
                          bgcolor: theme.palette.primary.main,
                        },
                      }}
                    >
                      Table of Contents
                    </Typography>

                    <Box component="nav" aria-label="table of contents">
                      <Stack spacing={1}>
                        {tableOfContents.map((item) => (
                          <Button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            sx={{
                              justifyContent: "flex-start",
                              pl: item.level === 3 ? 4 : 2,
                              py: 1,
                              borderRadius: 2,
                              color:
                                activeSection === item.text
                                  ? theme.palette.primary.main
                                  : theme.palette.text.secondary,
                              bgcolor:
                                activeSection === item.text
                                  ? alpha(theme.palette.primary.main, 0.1)
                                  : "transparent",
                              fontWeight:
                                activeSection === item.text ? 600 : 400,
                              textTransform: "none",
                              transition: "all 0.2s ease",
                              borderLeft:
                                activeSection === item.text
                                  ? `3px solid ${theme.palette.primary.main}`
                                  : "3px solid transparent",
                              "&:hover": {
                                bgcolor: alpha(
                                  theme.palette.primary.main,
                                  0.05
                                ),
                                color: theme.palette.primary.main,
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize:
                                  item.level === 3 ? "0.875rem" : "1rem",
                                fontWeight: "inherit",
                              }}
                            >
                              {item.text}
                            </Typography>
                          </Button>
                        ))}
                      </Stack>
                    </Box>
                  </Box>


                  <Box
                    component={Paper}
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 4,
                      position: "sticky",
                      top: 350,
                      background: `linear-gradient(135deg, ${alpha(
                        theme.palette.background.paper,
                        0.9
                      )} 0%, ${alpha(
                        theme.palette.background.paper,
                        0.7
                      )} 100%)`,
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(
                        theme.palette.primary.main,
                        0.1
                      )}`,
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: accentGradient,
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="h2"
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        position: "relative",
                        pb: 2,
                        mb: 3,
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: 40,
                          height: 3,
                          borderRadius: 1.5,
                          background: accentGradient,
                        },
                      }}
                    >
                      Related Articles
                    </Typography>

                    <Stack spacing={3}>
                      {blogPost.relatedPosts.map((post) => (
                        <Card
                          key={post.id}
                          sx={{
                            boxShadow: "none",
                            transition: "all 0.3s ease",
                            "&:hover": {
                              transform: "translateY(-4px) scale(1.02)",
                              boxShadow: 3,
                            },
                            bgcolor: "transparent",
                            border: `1px solid ${alpha(
                              theme.palette.divider,
                              0.1
                            )}`,
                            borderRadius: 3,
                            overflow: "hidden",
                          }}
                        >
                          <CardActionArea>
                            <Box sx={{ position: "relative" }}>
                              <CardMedia
                                component="img"
                                height="140"
                                image={post.image}
                                alt={post.title}
                              />
                              <Box
                                sx={{
                                  position: "absolute",
                                  top: 10,
                                  right: 10,
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: "4px",
                                  bgcolor: alpha(
                                    theme.palette.common.black,
                                    0.6
                                  ),
                                  backdropFilter: "blur(4px)",
                                  color: "white",
                                  fontSize: "0.75rem",
                                  fontWeight: 500,
                                }}
                              >
                                {post.category}
                              </Box>
                              <Box
                                sx={{
                                  position: "absolute",
                                  bottom: 0,
                                  left: 0,
                                  right: 0,
                                  height: "50%",
                                  background:
                                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                                }}
                              />
                            </Box>
                            <CardContent>
                              <Typography
                                variant="caption"
                                color="primary"
                                sx={{
                                  fontWeight: 500,
                                  display: "block",
                                  mb: 0.5,
                                }}
                              >
                                {post.date} • By {post.author}
                              </Typography>
                              <Typography
                                variant="h6"
                                component="h3"
                                gutterBottom
                                sx={{
                                  fontWeight: 700,
                                  fontSize: "1.1rem",
                                  lineHeight: 1.3,
                                  mb: 1,
                                  transition: "color 0.2s ease",
                                  "&:hover": {
                                    color: theme.palette.primary.main,
                                  },
                                }}
                              >
                                {post.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{
                                  overflow: "hidden",
                                  textOverflow: "ellipsis",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                }}
                              >
                                {post.excerpt}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      ))}
                    </Stack>

                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        mt: 3,
                        borderRadius: 2,
                        py: 1.2,
                        fontWeight: 600,
                        textTransform: "none",
                        background: accentGradient,
                        boxShadow: `0 4px 14px ${alpha(
                          theme.palette.primary.main,
                          0.4
                        )}`,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          boxShadow: `0 6px 20px ${alpha(
                            theme.palette.primary.main,
                            0.6
                          )}`,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      View All Articles
                    </Button>
                  </Box>
                </Box>
              </Fade>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
