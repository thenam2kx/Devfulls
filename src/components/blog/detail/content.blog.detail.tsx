import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Skeleton from "@mui/material/Skeleton";
import ContentRenderer from "./content.renderer";
import TagBlog from "./tag.blog";
import AuthorBioBlog from "./author.bio.blog";
import NextPrevNav from "./next.prev.nav";

interface IProps {
  isLoading: boolean;
  contentRef: React.RefObject<HTMLDivElement | null>;
  infoBlogs: IBlog
}


const ContentBlogDetail = (props: IProps) => {
  const { contentRef, isLoading, infoBlogs } = props

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
              <ContentRenderer content={infoBlogs.content} />
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
