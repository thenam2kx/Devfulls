import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import { blogPost } from "./BlogDetail"; // Assuming this is where your blog post data is coming from
import ContentRenderer from "./content.renderer"; // Assuming this is the component that renders the blog content
import TagBlog from "./tag.blog"; // Assuming this is the component that renders the tags
import AuthorBioBlog from "./author.bio.blog"; // Assuming this is the component that renders the author bio
import NextPrevNav from "./next.prev.nav"; // Assuming this is the component that renders the next/prev navigation

interface IProps {
  isLoading: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
}


const ContentBlogDetail = (props: IProps) => {
  const { contentRef, isLoading } = props

  return (
    <>
      {isLoading ? (
        <Box sx={{ mb: 6 }}>
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              {i % 3 === 0 && (
                <Skeleton variant="text" sx={{ height: 40, mb: 2, mt: 4 }} />
              )}
              <Skeleton variant="text" sx={{ height: 20, mb: 1 }} />
              <Skeleton variant="text" sx={{ height: 20, mb: 1 }} />
              <Skeleton
                variant="text"
                sx={{ height: 20, mb: 1, width: "80%" }}
              />
            </React.Fragment>
          ))}
        </Box>
      ) : (
        <Fade in={true} timeout={1200}>
          <Box>
            {/* Blog content with enhanced typography and code highlighting */}
            <Box ref={contentRef}>
              <ContentRenderer content={blogPost.content} />
            </Box>

            {/* Tags section */}
            <TagBlog />

            {/* Author bio card */}
            <AuthorBioBlog />

            {/* Previous/Next navigation */}
            <NextPrevNav />
          </Box>
        </Fade>
      )}
    </>
  );
};

export default ContentBlogDetail;
