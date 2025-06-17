import ShortsPlayer from "@/components/molecules/ShortsPlayer";
import YoutubePlayer from "@/components/molecules/YoutubePlayer";
import Bottom from "@/components/organism/Bottom";
import Myself from "@/components/organism/Myself";

export default function page() {
  return (
    <div className="h-screen overflow-scroll snap-y snap-mandatory">
      <div className="snap-start">
        <Myself />
      </div>

      <div className="snap-start">
        <YoutubePlayer />
      </div>

      <div className="snap-start">
        <ShortsPlayer />
      </div>

      <div className="snap-start">
        <Bottom />
      </div>
    </div>
  );
}
