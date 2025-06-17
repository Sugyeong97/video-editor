import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function YoutubePlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-20 bg-black text-white">
      <h1 className="text-6xl font-black">롱폼 영상</h1>
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        <p className="text-2xl bg-white text-black w-fit px-4 py-1 rounded">
          📺 25.05.19 투어스 위버스 라이브 [TWS 랜선 뒷풀이]
        </p>
        <YoutubeEmbed videoId="tiifQw2nPZk?si=EvtwskZvcxkqnrNq" />
      </div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        <p className="text-2xl bg-white text-black w-fit px-4 py-1 rounded">
          📺 21.02.10 트위치 장지수 생일 방송
        </p>
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
