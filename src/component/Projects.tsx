import * as S from "./Projects.styles";
import React from "react";

interface HoverVideoProps {
  src?: string;
  thumbnailTime?: number;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ src, thumbnailTime }) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.currentTime = thumbnailTime || 0;
      ref.current.pause();
    }
  }, []);

  return (
    <S.HoverVideo
      ref={ref}
      src={src}
      autoPlay
      // muted
      playsInline
      onTouchStart={(e) => {
        e.currentTarget.currentTime = 0;
        e.currentTarget.play();
      }}
      onTouchEnd={(e) => {
        e.currentTarget.currentTime = thumbnailTime || 0;
        e.currentTarget.pause();
      }}
      onMouseEnter={(e) => {
        e.currentTarget.currentTime = 0;
        try {
          e.currentTarget.play();
        } catch {}
      }}
      onMouseLeave={(e) => {
        e.currentTarget.currentTime = thumbnailTime || 0;
        try {
          e.currentTarget.pause();
        } catch {}
      }}
    />
  );
};

const items = [
  {
    title: "test",
    src: "https://www.youtube.com/watch?v=p9-WJmY_zU0&t=23s",
    thumbnailTime: 5,
  },
];

const Projects: React.FC = (props) => {
  return (
    <S.Wrapper>
      <h1>Progress</h1>
      <S.Items>
        {items.map((item) => {
          return (
            <S.Item>
              <HoverVideo src={item.src} thumbnailTime={item.thumbnailTime} />
              <S.ItemTitle>{item.title}</S.ItemTitle>
            </S.Item>
          );
        })}
      </S.Items>
    </S.Wrapper>
  );
};

export default Projects;