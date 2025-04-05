import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { blogPost } from "./BlogDetail";

const TagBlog = () => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 8, mb: 6 }}>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 2,
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <LocalOfferIcon fontSize="small" />
        Tags
      </Typography>
      <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
        {blogPost.tags.map((tag) => (
          <Chip
            key={tag}
            label={`#${tag}`}
            size="medium"
            clickable
            sx={{
              borderRadius: "4px",
              fontWeight: 500,
              bgcolor: alpha(theme.palette.background.paper, 0.7),
              backdropFilter: "blur(4px)",
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              color: theme.palette.text.secondary,
              transition: "all 0.2s ease",
              "&:hover": {
                bgcolor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                transform: "translateY(-2px)",
              },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default TagBlog;
