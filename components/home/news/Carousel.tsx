import React, { FC, Component, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
//import ScrollInfo from '@/components/ScrollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/utils/constants';
import { useTranslation } from 'react-i18next';

type NewsData = {
  source: string;
  link: string;
  text: string;
};

const CarouselContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 80vh;
  justify-content: center;
`;

const Button = styled.div`
  z-index: 10;
  width: 10vw;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  user-select: none;
`;

const CardSlider = styled.div`
  position: relative;
  height: inherit;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardSliderWrapper = styled.div`
  position: absolute;
  transition: transform 200ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  overflow-x: visible;
  overflow-y: hidden;
  display: flex;
  height: inherit;
  left: 50%;
  align-items: center;
  justify-content: center;
`;

const cardProp = {
  width: 20,
  widthUnit: 'vw',
};

const Text = styled.div`
  will-change: transform;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.75em 1em;
  color: ${p => p.theme.colors.white};
  background: rgba(0, 0, 0, 0.8);
  font-size: 0.5rem;
  transform: translate3d(0, 100%, 0);
  transition: transform 0.2s ease-in;
`;

const Card = styled.div`
  width: ${cardProp.width.toString() + cardProp.widthUnit};
  height: fit-content;
  transition: transform 300ms linear;
  overflow: hidden;
  border-radius: 3vh;
  &:hover {
    ${Text} {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const NewsImage = styled.img`
  width: 100%;
`;

const cards: NewsData[] = [
  {
    source: getRelativePath('/static/news/news_1.jpg'),
    link: 'https://meet.bnext.com.tw/articles/view/46687',
    text:
      '大學四年都在連續創業！24歲胡耀傑打造圖靈鏈走上區塊鏈應用的冒險之路｜Meet 創業小聚 20200728',
  },
  {
    source: getRelativePath('/static/news/news_2.jpg'),
    link: 'https://www.bnext.com.tw/article/60313/fiti0',
    text:
      '創新創業激勵計畫FITI引路 點亮學研團隊的創業路｜數位時代 Meet Taipei 20201203',
  },
  {
    source: getRelativePath('/static/news/news_3.jpg'),
    link:
      'https://blockcast.it/2020/11/25/iii-digital-education-badi-ai-fintech-asso-and-turing-chain-join-force-to-form-taiwan-e-portfolio-alliance/',
    text:
      '資策會攜圖靈鏈、全國商業總會及 AI 金融科技協會共組「臺灣學習履歷聯盟」藉防偽認證技術推廣區塊鏈證書｜區塊客 20201125',
  },
  {
    source: getRelativePath('/static/news/news_4.jpeg'),
    link: 'https://becomingaces.com/article/161',
    text:
      '19世紀發明電話、20世紀造飛機、那21世紀呢？圖靈證書發明者胡耀傑：用科技打造更好的未來社會！｜未來大人物 20201229',
  },
];

const Carousel: FC<{ newsNumber: number }> = ({ newsNumber }) => {
  const [index, setIndex] = useState(1);
  function previousNews() {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
    } else if (index === 0) {
      setIndex(newsNumber - 1);
    }
  }
  function nextNews() {
    if (index < newsNumber - 1) {
      setIndex(prevIndex => prevIndex + 1);
    } else if (index === newsNumber - 1) {
      setIndex(0);
    }
  }

  return (
    <CarouselContainer>
      <Button
        onClick={() => {
          previousNews();
        }}
      >
        <img
          src={getRelativePath('/static/news/icon_left.svg')}
          style={{ margin: 'auto' }}
        />
      </Button>
      <CardSlider>
        <CardSliderWrapper
          style={{
            transform: `translateX(${-((index + 1.5) * 100) /
              (newsNumber + 2)}%)`,
            width: `${cardProp.width * (newsNumber + 2)}${cardProp.widthUnit}`,
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
                  key={property.link}
                  className={`news-card-${idx}`}
                  style={{
                    transform: `scale(${ratio})`,
                    zIndex: zIndex,
                  }}
                >
                  <a
                    href={property.link}
                    target="_blank"
                    style={{ display: 'block' }}
                  >
                    <NewsImage src={property.source} />
                  </a>
                  <Text>{cards[idx].text}</Text>
                </Card>
              );
            } else {
              return (
                <Card
                  key={property.link}
                  className={`news-card-${idx}`}
                  style={{ transform: `scale(${ratio})` }}
                ></Card>
              );
            }
          })}
        </CardSliderWrapper>
      </CardSlider>
      <Button
        onClick={() => {
          nextNews();
        }}
      >
        <img
          src={getRelativePath('/static/news/icon_right.svg')}
          style={{ margin: 'auto' }}
        />
      </Button>
    </CarouselContainer>
  );
};

export default Carousel;
