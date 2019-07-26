import { FC, useState } from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Lightbox from 'react-image-lightbox';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import Button from '@/components/Button';
import { getRelativePath } from '@/utils';
import { media } from '@/utils/theme';

type TData = {
  name: string;
  src: string;
};

const Title = styled(H2)`
  margin-top: 14vh;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90%;
  ${media('desktop')} {
    width: 60%;
  }
`;

const AnimatedWrapper = styled(ScrollAnimation)`
  position: relative;
  display: flex;
  margin-top: 3%;
  width: 90%;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media('desktop')} {
    width: 60%;
  }
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  margin: 0;
  overflow: hidden;
  max-height: ${p => (p.open ? '100vh' : 0)};
  transition: max-height ease-in 0.3s;
`;

const Name = styled.div`
  will-change: transform;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 0.75em 0.5em;
  color: ${p => p.theme.colors.white};
  background: rgba(0, 0, 0, 0.8);
  letter-spacing: 0.64px;
  font-size: ${p => p.theme.fontSize.smaller};
  transform: translate3d(0, 100%, 0);
  transition: transform 0.2s ease-in;
`;

const Certificate = styled.div<{ src: string }>`
  will-change: transform;
  cursor: pointer;
  position: relative;
  width: 47%;
  height: 24vh;
  background: url(${p => p.src}) center top no-repeat/cover;
  margin-bottom: 3%;
  overflow: hidden;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    ${Name} {
      transform: translate3d(0, 0, 0);
    }
    transform: scale(1.1);
  }

  ${media('tablet')} {
    height: 32vh;
  }

  ${media('desktop')} {
    width: 30%;
    height: 24vh;
  }
`;

const Shadow = styled.div`
  position: absolute;
  width: 120%;
  height: 12vh;
  bottom: 0;
  left: -10%;
  background: linear-gradient(to bottom, rgba(22, 22, 22, 0), #161616);

  ${media('desktop')} {
    bottom: -3vh;
    height: 18vh;
  }
`;

const StyledButton = styled(Button)`
  margin: 3% 0 5%;
`;

const certificates: TData[] = [
  {
    name: '國際 GBP 區塊鏈能力考核證書',
    src: getRelativePath('/static/certificate/GBP.png'),
  },
  {
    name: '加州柏克萊 X 香港科大 X Flowchain 區塊鏈集訓',
    src: getRelativePath('/static/certificate/flowchain.png'),
  },
  {
    name: '國際駭客松競賽 AngelHack 舊金山場 2019',
    src: getRelativePath('/static/certificate/AngelHackCerts.png'),
  },
  {
    name: '德國柏林 IOTA 基金會區塊鏈論壇 - 臺北場 2019',
    src: getRelativePath('/static/certificate/IOTA_Dominik.png'),
  },
  {
    name: '矽谷最大區塊鏈社群 ABC Crypto Night',
    src: getRelativePath('/static/certificate/ABC_Crypto_Night.png'),
  },
  {
    name: '臺北科技大學 區塊鏈微學分課程 2019',
    src: getRelativePath('/static/certificate/0x1Academy.jpg'),
  },
  {
    name: '美國矽谷德屬化工巨頭 BASF 區塊鏈論壇 2019',
    src: getRelativePath('/static/certificate/BASF.png'),
  },
  {
    name: '圖靈鏈科技 區塊鏈教育獎助學金計畫 2019',
    src: getRelativePath('/static/certificate/turing_scholarship.png'),
  },
  {
    name: '臺灣大學 進階軟體開發專題課程 (CSX 5001)',
    src: getRelativePath('/static/certificate/NTU_Pecu.png'),
  },
  {
    name: '史丹佛大學 美國創業哲學論壇 2019',
    src: getRelativePath('/static/certificate/stanford.png'),
  },
  {
    name: 'Berlerley',
    src: getRelativePath('/static/certificate/Berkeley.png'),
  },
  {
    name: '商總會證書',
    src: getRelativePath('/static/certificate/ROC_COC.png'),
  },
];

const Examples: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(true);
  const [openLightbox, setOpenLightbox] = useState<boolean>(false);
  const [photoIdx, setPhotoIdx] = useState<number>(0);
  return (
    <Section id={id}>
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>案例展示</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeIn" animateOnce offset={0}>
        {certificates.slice(0, 6).map((d, idx) => (
          <Certificate
            key={d.src}
            src={d.src}
            onClick={() => {
              setOpenLightbox(true);
              setPhotoIdx(idx);
            }}
          >
            <Name>{d.name}</Name>
          </Certificate>
        ))}
        {!open && <Shadow />}
      </AnimatedWrapper>
      <MoreInfoWrapper open={open}>
        {certificates.slice(6).map((d, idx) => (
          <Certificate
            key={d.src}
            src={d.src}
            onClick={() => {
              setOpenLightbox(true);
              setPhotoIdx(idx + 6);
            }}
          >
            <Name>{d.name}</Name>
          </Certificate>
        ))}
      </MoreInfoWrapper>
      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? '隱藏' : '更多'}案例
      </StyledButton>

      {openLightbox && (
        <Lightbox
          imagePadding={50}
          imageTitle={certificates[photoIdx].name}
          mainSrc={certificates[photoIdx].src}
          nextSrc={certificates[(photoIdx + 1) % certificates.length].src}
          prevSrc={
            certificates[
              (photoIdx + certificates.length - 1) % certificates.length
            ].src
          }
          onCloseRequest={() => setOpenLightbox(false)}
          onMovePrevRequest={() =>
            setPhotoIdx(
              (photoIdx + certificates.length - 1) % certificates.length,
            )
          }
          onMoveNextRequest={() =>
            setPhotoIdx(
              (photoIdx + certificates.length + 1) % certificates.length,
            )
          }
          onImageLoadError={
            ((a: any, b: any, c: any) => console.error(a, b, c)) as any
          }
        />
      )}
    </Section>
  );
};

export default Examples;
