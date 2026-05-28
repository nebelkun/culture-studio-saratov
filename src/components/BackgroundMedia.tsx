import { useState } from "react";

interface BackgroundMediaProps {
  /** Fallback image (always required) */
  image: string;
  /** Path to mp4 file in /public, e.g. "/videos/hero.mp4" */
  videoMp4?: string;
  /** Path to webm file in /public, e.g. "/videos/hero.webm" */
  videoWebm?: string;
  alt: string;
  className?: string;
}

/**
 * Renders a muted, autoplaying, looping background video when video sources
 * are provided. Falls back to a static image if no video is supplied or if
 * the video fails to load.
 */
const BackgroundMedia = ({
  image,
  videoMp4,
  videoWebm,
  alt,
  className = "w-full h-full object-cover",
}: BackgroundMediaProps) => {
  const [videoFailed, setVideoFailed] = useState(false);
  const hasVideo = (videoMp4 || videoWebm) && !videoFailed;

  if (!hasVideo) {
    return <img src={image} alt={alt} className={className} />;
  }

  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      poster={image}
      onError={() => setVideoFailed(true)}
      aria-label={alt}
    >
      {videoWebm && <source src={videoWebm} type="video/webm" />}
      {videoMp4 && <source src={videoMp4} type="video/mp4" />}
    </video>
  );
};

export default BackgroundMedia;
