import BlogDetail from '@/components/blog/detail/BlogDetail'
import { fetchCustomize } from '@/config/fetch.customize'

export default async function BlogDetailPage ({ params }: {params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const { data: infoBlogs } = await fetchCustomize<IBackendResponse<IBlog>>({
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/blogs/${slug}`,
    method: 'GET',
  })

  return (
    <>
    {infoBlogs && <BlogDetail infoBlogs={infoBlogs} />}
    </>
  )
}
