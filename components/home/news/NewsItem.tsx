import React, { FC, Component } from 'react';
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

const NewsItem: FC<string> = (imagePath: string) => {
  return (
    <p>
      <a href="https://www.w3schools.com" target="_blank">
        <img
          src="getRelativePath('/static/img/CEO.png')"
          width="100"
          height="100"
        />
      </a>
    </p>
  );
};
