import { useState } from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { alpha } from "@mui/material/styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useTheme } from "@mui/material/styles";
import { blogPost } from "./BlogDetail";


const AuthorBlog = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [liked, setLiked] = useState(false);
  const theme = useTheme();

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      alignItems={{ xs: "flex-start", sm: "center" }}
      sx={{
        mb: 4,
        p: 3,
        borderRadius: 3,
        bgcolor: alpha(theme.palette.background.paper, 0.7),
        backdropFilter: "blur(10px)",
        boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.05)}`,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src={blogPost.author.avatar}
          alt={blogPost.author.name}
          sx={{
            width: 64,
            height: 64,
            border: `2px solid ${theme.palette.primary.main}`,
            boxShadow: `0 0 0 4px ${alpha(theme.palette.primary.main, 0.1)}`,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: `0 0 0 6px ${alpha(theme.palette.primary.main, 0.2)}`,
            },
          }}
        />
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            sx={{
              fontSize: "1.1rem",
              color: theme.palette.text.primary,
            }}
          >
            {blogPost.author.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            {blogPost.author.role} • {blogPost.author.twitter}
          </Typography>
        </Box>
      </Stack>

      <Divider
        orientation="vertical"
        flexItem
        sx={{ display: { xs: "none", sm: "block" } }}
      />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 3 }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        sx={{ width: { xs: "100%", sm: "auto" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          sx={{
            color: alpha(theme.palette.text.primary, 0.7),
            "& svg": {
              color: theme.palette.primary.main,
            },
          }}
        >
          <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">
            {blogPost.publishDate} • {blogPost.readTime}
          </Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          sx={{
            color: alpha(theme.palette.text.primary, 0.7),
            "& svg": {
              color: theme.palette.primary.main,
            },
          }}
        >
          <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">{blogPost.views} views</Typography>
        </Box>

        <Stack direction="row" spacing={1}>
          <Tooltip title={liked ? "Remove like" : "Like this article"}>
            <IconButton
              size="small"
              onClick={() => setLiked(!liked)}
              sx={{
                color: liked
                  ? theme.palette.primary.main
                  : alpha(theme.palette.text.primary, 0.7),
                bgcolor: liked
                  ? alpha(theme.palette.primary.main, 0.1)
                  : "transparent",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  transform: "scale(1.05)",
                },
              }}
            >
              <ThumbUpIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title={bookmarked ? "Remove bookmark" : "Bookmark this article"}
          >
            <IconButton
              size="small"
              onClick={() => setBookmarked(!bookmarked)}
              sx={{
                color: bookmarked
                  ? theme.palette.primary.main
                  : alpha(theme.palette.text.primary, 0.7),
                bgcolor: bookmarked
                  ? alpha(theme.palette.primary.main, 0.1)
                  : "transparent",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  transform: "scale(1.05)",
                },
              }}
            >
              {bookmarked ? (
                <BookmarkIcon fontSize="small" />
              ) : (
                <BookmarkBorderIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Comment on this article">
            <IconButton
              size="small"
              sx={{
                color: alpha(theme.palette.text.primary, 0.7),
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.primary.main,
                  transform: "scale(1.05)",
                },
              }}
            >
              <CommentIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AuthorBlog;
