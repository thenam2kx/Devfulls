import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid2'
import CardBlog from '@/components/blog/card.blog'
import { fetchCustomize } from '@/config/fetch.customize'



const BlogPage = async () => {

    const { data: listBlogs } = await fetchCustomize<IBackendResponse<IListResponse<IBlog>>>({
      url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs?current=1&pageSize=20&populate=author&fields=author.email,author.fullname`,
      method: 'GET',
    })

  return (
    <Container sx={{ mb: '60px', my: { xs: '30px', md: '90px' } }}>
      <Grid container spacing={2}>
        {
          listBlogs?.result?.map((item: IBlog) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 3 }}
              key={item._id}
              sx={{ textDecoration: 'none' }}
            >
              <CardBlog blogData={item} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  )
}

export default BlogPage