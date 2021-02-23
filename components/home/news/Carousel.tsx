import React, { FC, Component, useState } from 'react';
import styled from 'styled-components';
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
  overflow-x: hidden;
  overflow-y: hidden;
  display: flex;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  object-fit: contain;
  border: 10px;
  border-radius: 50%;
  border-color: black;
  background-color: white;
`;

const NewsImage = styled.img`
  width: 100%;
  height: 100%;
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
  const [count, setCount] = useState(0);
  function previousNews() {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  }
  function nextNews() {
    if (count < newsNumber - 1) {
      setCount(prevCount => prevCount + 1);
    }
  }
  return (
    <div>
      <button onClick={() => previousNews()}>Previous</button>
      <button onClick={() => nextNews()}>Next</button>
      <CardSlider>
        <CardSliderWrapper
          style={{ transform: `translateX(-${(count * 100) / newsNumber}%) ` }}
        >
          {Cards.map(property => {
            return (
              <Card>
                <a href={property.link} target="_blank">
                  <NewsImage src={property.source} />
                </a>
              </Card>
            );
          })}
        </CardSliderWrapper>
      </CardSlider>
      <p>{count}</p>
    </div>
  );
};

export default Carousel;
