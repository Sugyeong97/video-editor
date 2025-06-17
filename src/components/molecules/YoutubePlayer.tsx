import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function YoutubePlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 my-5">
      <h1 className="text-6xl font-black">롱폼 영상</h1>
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        {/* 투어스 */}
        <p className="text-2xl">
          📺 250519 투어스 위버스 라이브 [TWS 랜선 뒷풀이]
        </p>
        <YoutubeEmbed videoId="tiifQw2nPZk?si=EvtwskZvcxkqnrNq" />
      </div>

      {/* 장지수 */}
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        <p className="text-2xl">📺 210210 트위치 장지수 생일 라이브</p>
        <YoutubeEmbed videoId="cqh8w_KofRw" />
        <YoutubeEmbed videoId="G3Sa0L-v9F4" />
        <YoutubeEmbed videoId="JAHYpV8MEyU" />
        <YoutubeEmbed videoId="can1GeV_96I" />
        <YoutubeEmbed videoId="eAKG46JfGsA" />
        <YoutubeEmbed videoId="SJVUuBzPf2g" />
      </div>
    </div>
  );
}
