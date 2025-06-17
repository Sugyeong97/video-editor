import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function ShortsPlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 py-20">
      <h1 className="text-6xl font-black">숏폼 영상</h1>
      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 25.05.31 투어스 위버스 라이브 [기니 생파 파티원 구함]
        </p>
        <YoutubeEmbed videoId="TQdTt7ZconM" />

        <div className="py-10"></div>
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 25.06.15 투어스 위버스 라이브 [춤추자;)]
        </p>
        <YoutubeEmbed videoId="TPiEMrH3OCg" />

        <div className="py-10"></div>
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 25.05.17 쇼!음악중심 + 25.05.04 투어스 위버스 라이브 [투어스 충격
          진짜 1위]
        </p>
        <YoutubeEmbed videoId="dXLb7Mki_f0" />

        <div className="py-10"></div>
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 24.05.31 투어스 위버스 라이브 [오늘 내 생일임🙃]
        </p>
        <YoutubeEmbed videoId="GvU9opnOVN8" />
      </div>

      <div className="py-10"></div>

      <div className="w-full max-w-[1600px] mx-auto flex flex-col gap-5">
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 22.03.30 트위치 장지수 방송
        </p>
        <YoutubeEmbed videoId="5ULjqAAb39Q" />

        <div className="py-10"></div>
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 21.02.10 트위치 장지수 생일 방송
        </p>
        <YoutubeEmbed videoId="hA-VOt8PXSo" />

        <div className="py-10"></div>
        <p className="text-2xl bg-black text-white w-fit px-4 py-1 rounded">
          📺 21.03.17 트위치 장지수 방송
        </p>
        <YoutubeEmbed videoId="-_5_UjKqZxM" />
      </div>
    </div>
  );
}
