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
  text: string;
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
    link: 'https://meet.bnext.com.tw/articles/view/46687',
    text:
      '大學四年都在連續創業！24歲胡耀傑打造圖靈鏈走上區塊鏈應用的冒險之路｜Meet 創業小聚 20200728',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate2.png'),
    link: 'https://www.bnext.com.tw/article/60313/fiti0',
    text:
      '創新創業激勵計畫FITI引路 點亮學研團隊的創業路｜數位時代 Meet Taipei 20201203',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate3.png'),
    link:
      'https://blockcast.it/2020/11/25/iii-digital-education-badi-ai-fintech-asso-and-turing-chain-join-force-to-form-taiwan-e-portfolio-alliance/',
    text:
      '資策會攜圖靈鏈、全國商業總會及 AI 金融科技協會共組「臺灣學習履歷聯盟」藉防偽認證技術推廣區塊鏈證書｜區塊客 20201125',
  },
  {
    source: getRelativePath('/static/certificate/Examples_Certificate4.png'),
    link: 'https://becomingaces.com/article/161',
    text:
      '19世紀發明電話、20世紀造飛機、那21世紀呢？圖靈證書發明者胡耀傑：用科技打造更好的未來社會！｜未來大人物 20201229',
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
