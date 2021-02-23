import { FC } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { SectionGrey } from '@/components/Section';
import H2 from '@/components/H2';
//import ScrollInfo from '@/components/ScrollInfo';
import Description from '@/components/Description';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';
import { i18nNamespace } from '@/constants';
import { useTranslation } from 'react-i18next';
import Carousel from '@/components/home/news/Carousel';

type NewsData = {
  source: string;
};

const NewsItems: NewsData[] = [
  {
    source: 'hcmj',
  },
  {
    source: 'jch',
  },
];

const News: FC<{ id: string }> = ({ id }) => {
  return (
    <SectionGrey justifyContent="flex-start" id={id} fullscreen>
      <Carousel newsNumber={6} />
    </SectionGrey>
  );
};

export default News;
