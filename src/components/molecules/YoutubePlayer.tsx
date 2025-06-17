import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function YoutubePlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-5">
      <h1 className="text-4xl">롱폼 영상</h1>
      {/* 투어스 */}
      <YoutubeEmbed videoId="tiifQw2nPZk?si=EvtwskZvcxkqnrNq" />

      {/* 장지수 */}
      <YoutubeEmbed videoId="JAHYpV8MEyU" />
    </div>
  );
}
