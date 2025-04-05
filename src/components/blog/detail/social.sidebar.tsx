import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useTheme, alpha } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ShareIcon from "@mui/icons-material/Share";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IProps {
  scrolled: boolean;
}

const SocialSidebar = (props: IProps) => {
  const { scrolled } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <Box
      sx={{
        position: "fixed",
        left: {
          xs: "auto",
          lg: isLarge ? "calc((100% - 1200px) / 2 - 80px)" : 20,
        },
        right: { xs: 20, lg: "auto" },
        bottom: { xs: 20, lg: "auto" },
        top: { xs: "auto", lg: 250 },
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        gap: 1.5,
        zIndex: 10,
        p: 1.5,
        borderRadius: 3,
        bgcolor: alpha(theme.palette.background.paper, 0.8),
        backdropFilter: "blur(10px)",
        boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        transition: "all 0.3s ease",
        opacity: scrolled ? 1 : 0,
        transform: scrolled ? "translateY(0)" : "translateY(20px)",
        visibility: scrolled ? "visible" : "hidden",
      }}
    >
      <Tooltip title="Share on Facebook" placement={isMobile ? "top" : "right"}>
        <IconButton
          color="primary"
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.2),
              transform: "scale(1.1)",
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on Twitter" placement={isMobile ? "top" : "right"}>
        <IconButton
          color="primary"
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.2),
              transform: "scale(1.1)",
            },
          }}
        >
          <TwitterIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share on LinkedIn" placement={isMobile ? "top" : "right"}>
        <IconButton
          color="primary"
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.2),
              transform: "scale(1.1)",
            },
          }}
        >
          <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Share via link" placement={isMobile ? "top" : "right"}>
        <IconButton
          color="primary"
          sx={{
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            transition: "all 0.2s ease",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.2),
              transform: "scale(1.1)",
            },
          }}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default SocialSidebar;
