import React, { FC, Component, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
//import ScrollInfo from '@/components/ScrollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';

type NewsData = {
  source: string;
  link: string;
};

const CardSlider = styled.div`
  position: relative;
  height: 60vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSliderWrapper = styled.div`
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  overflow-x: visible;
  overflow-y: hidden;
  display: flex;
  height: 60vh;
  left: 50%;
  align-items: center;
  justify-content: center;
`;

const cardProp = {
  width: 300,
  height: 200,
};

const Card = styled.div`
  width: ${cardProp.width}px;
  height: ${cardProp.height}px;
  transition: transform 300ms linear;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: contain;
`;

const cards: NewsData[] = [
  {
    source: getRelativePath('/static/certificate/Examples_Certificate1.png'),
    link: 'https://www.youtube.com/?gl=TW&hl=zh-TW',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate2.png'),
    link: 'https://www.google.com/?hl=zh_tw',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate3.png'),
    link: 'https://www.google.com/?hl=zh_tw',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate4.png'),
    link: 'https://www.google.com/?hl=zh_tw',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate5.png'),
    link: 'https://www.google.com/?hl=zh_tw',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate6.png'),
    link: 'https://www.google.com/?hl=zh_tw',
  },
];

const Carousel: FC<{ newsNumber: number }> = ({ newsNumber }) => {
  const [index, setIndex] = useState(0);
  function previousNews() {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }
  function nextNews() {
    if (index < newsNumber - 1) {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          previousNews();
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          nextNews();
        }}
      >
        Next
      </button>
      <CardSlider>
        <CardSliderWrapper
          style={{
            transform: `translateX(${-((index + 1.5) * 100) /
              (newsNumber + 2)}%)`,
            width: `${cardProp.width * (newsNumber + 2)}px`,
          }}
        >
          {cards.map((property, idx) => {
            let ratio = 1.2;
            let zIndex = 0;
            if (idx === index) {
              ratio = 2;
              zIndex = 1;
            }
            if (idx === index - 1 || idx === index || idx === index + 1) {
              return (
                <Card
                  className={`news-card-${idx}`}
                  style={{
                    transform: `scale(${ratio})`,
                    zIndex: zIndex,
                  }}
                >
                  <a href={property.link} target="_blank">
                    <NewsImage src={property.source} />
                  </a>
                </Card>
              );
            } else {
              return (
                <Card
                  className={`news-card-${idx}`}
                  style={{ transform: `scale(${ratio})` }}
                ></Card>
              );
            }
          })}
        </CardSliderWrapper>
      </CardSlider>
    </div>
  );
};

export default Carousel;
