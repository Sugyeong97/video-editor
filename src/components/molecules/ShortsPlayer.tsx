import YoutubeEmbed from "../atom/YoutubeEmbed";

export default function ShortsPlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-5 bg-black text-white">
      <h1 className="text-4xl">숏폼 영상</h1>
      {/* 투어스 */}
      <YoutubeEmbed videoId="TQdTt7ZconM" /> {/* 영재 라디오 */}
      <YoutubeEmbed videoId="TPiEMrH3OCg" /> {/* 자기야 */}
      {/* 장지수 */}
      <YoutubeEmbed videoId="5ULjqAAb39Q" /> {/* 겐트투챔 */}
      <YoutubeEmbed videoId="hA-VOt8PXSo" /> {/* 쿠키 */}
      <YoutubeEmbed videoId="-_5_UjKqZxM" /> {/* 고민 */}
    </div>
  );
}
