import Skeleton from "@mui/material/Skeleton"
import Zoom from "@mui/material/Zoom"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useTheme, alpha } from "@mui/material/styles"
import { blogPost } from "./BlogDetail"


const HeroBlogDetail = () => {
  const theme = useTheme()
  const isLoading = false // Replace with your loading state

  return (
    <div>
      {isLoading ? (
          <Skeleton
            variant="rounded"
            sx={{
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              mb: 6,
              borderRadius: 4,
            }}
          />
        ) : (
          <Zoom in={true} timeout={1000}>
            <Paper
              elevation={8}
              sx={{
                borderRadius: { xs: 3, md: 6 },
                overflow: "hidden",
                mb: { xs: 4, md: 8 },
                transform: "translateY(0)",
                transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                "&:hover": {
                  transform: "translateY(-10px) scale(1.01)",
                  boxShadow: `0 20px 40px ${alpha(
                    theme.palette.common.black,
                    0.1
                  )}`,
                },
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(to bottom, transparent 70%, ${alpha(
                    theme.palette.common.black,
                    0.7
                  )} 100%)`,
                  zIndex: 1,
                }}
              />
              <Box
                component="img"
                src={blogPost.heroImage}
                alt="Blog hero image"
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: 500 },
                  display: "block",
                  objectFit: "cover",
                  transition: "transform 0.7s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 3, md: 4 },
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h4"
                  component="p"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                    maxWidth: "80%",
                  }}
                >
                  {blogPost.title}
                </Typography>
              </Box>
            </Paper>
          </Zoom>
        )}
    </div>
  )
}

export default HeroBlogDetail