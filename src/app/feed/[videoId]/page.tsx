import HomeLayout from '@/modules/home/ui/layouts/home-layout'

interface VideoPageProps {
  params: Promise<{ videoId: string }>
}
const VideoPage = async ({ params }: VideoPageProps) => {
  const { videoId } = await params

  // Fetch video data using the id

  return (
    <div>
      <HomeLayout>
        <h1>Video Page: {videoId}</h1>
      </HomeLayout>
    </div>
  )
}

export default VideoPage
