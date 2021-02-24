import React, { FC, Component, useState } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
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
`;

const CardSliderWrapper = styled.div`
  position: absolute;
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  object-fit: contain;
  border: 10px;
  border-color: black;
  background-color: white;
  transition: transform 300ms linear;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  object-fit: contain;
`;

const Cards: NewsData[] = [
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

const Carousel: React.FC<{ newsNumber: number }> = ({ newsNumber }) => {
  const [index, setIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);
  function previousNews() {
    if (index > 0) {
      setIndex(prevIndex => prevIndex - 1);
      setIsMoving(true);
    }
  }
  function nextNews() {
    if (index < newsNumber - 1) {
      setIndex(prevIndex => prevIndex + 1);
      setIsMoving(true);
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
          style={{ transform: `translateX(-${(index * 100) / newsNumber}%)` }}
        >
          {Cards.map((property, idx) => {
            let ratio = 0.7;
            if (idx === index) {
              ratio = 1;
            }
            return (
              <Card
                className={`news-card-${idx}`}
                style={{ transform: `scale(${ratio})` }}
              >
                <a href={property.link} target="_blank">
                  <NewsImage src={property.source} />
                </a>
              </Card>
            );
          })}
        </CardSliderWrapper>
      </CardSlider>
    </div>
  );
};

export default Carousel;
