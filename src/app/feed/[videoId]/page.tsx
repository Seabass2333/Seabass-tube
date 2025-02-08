interface VideoPageProps {
  params: Promise<{ videoId: string }>
}
const VideoPage = async ({ params }: VideoPageProps) => {
  const { videoId } = await params

  // Fetch video data using the id

  return (
    <div>
      <h1>Video Page: {videoId}</h1>
    </div>
  )
}

export default VideoPage
