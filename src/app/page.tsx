import ShortsPlayer from "@/components/molecules/ShortsPlayer";
import YoutubePlayer from "@/components/molecules/YoutubePlayer";
import Myself from "@/components/organism/Myself";

export default function page() {
  return (
    <div>
      <Myself />
      <YoutubePlayer />
      <ShortsPlayer />
    </div>
  );
}
