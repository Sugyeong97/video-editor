interface YouTubeEmbedProps {
  videoId: string;
}

export default function YoutubeEmbed({ videoId }: YouTubeEmbedProps) {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return <iframe src={videoSrc} width={1600} height={900} />;
}
