import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function ShortsPlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5">
      <h1>숏폼 영상</h1>
      <YoutubeEmbed videoId="TQdTt7ZconM" /> {/* 영재 라디오 */}
      <YoutubeEmbed videoId="TPiEMrH3OCg" /> {/* 자기야 */}
      <YoutubeEmbed videoId="5ULjqAAb39Q" /> {/* 겐트투챔 */}
    </div>
  );
}
