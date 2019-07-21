import { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { TiPin } from 'react-icons/ti';
import { FaShareSquare, FaCheck } from 'react-icons/fa';
import Modal from 'react-modal';

import { TCerts } from '@/contexts/user';
import { getRelativePath } from '@/utils';
import theme from '@/themes/theme';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1em;
`;

const CertWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 31%;
  margin: 0 1.75% 3%;
  background: ${p => p.theme.colors.white};
  padding: 1em 1.5em;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 0;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  > .issuer {
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSize.smaller};
    margin-bottom: 0.5em;
  }

  > .name {
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: 1em;
    height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .create-data {
    font-size: ${p => p.theme.fontSize.smaller};
    color: #bdbdbd;
  }
`;

const CertCover = styled.div<{ src: string }>`
  width: 100%;
  height: 8.5em;
  background: ${p => p.theme.colors.white} url(${p => p.src}) no-repeat
    center/contain;
  margin-bottom: 1em;
`;

const Icon = styled.img`
  position: absolute;
  width: 2em;
  bottom: 1em;
  right: 1.5em;
`;

const PinIcon = styled(TiPin)`
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

const ModalWrapper = styled.div`
  width: 35vw;
  min-width: 300px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  ${CertCover} {
    background-color: transparent;
    height: 12em;
    margin-top: 0.5em;
    margin-bottom: 1.5em;
  }

  .issuer {
    color: ${p => p.theme.colors.primary};
    margin-bottom: 0.75em;
  }

  > .name {
    width: 100%;
    font-size: ${p => p.theme.fontSize.bigger};
    font-weight: 500;
    letter-spacing: 0.6px;
    margin-bottom: 1em;
    height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .create-data {
    color: #bdbdbd;
  }
`;

const ModalProgressTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  width: 100%;

  .title {
    color: ${p => p.theme.colors.primary};
    font-weight: 500;
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
  }
`;

const StyledModalIcon = styled.div<{ pin?: boolean }>`
  cursor: pointer;
  transition: background-color 0.1s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  background-color: #eeeeee;
  border-radius: 50%;
  margin-right: 1em;
  &:hover {
    background-color: ${p => p.theme.colors.primary};

    svg {
      color: white !important;
    }
  }

  ${p =>
    p.pin &&
    css`
      background-color: ${p.theme.colors.primary};

      svg {
        color: white !important;
      }
    `}
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #eeeeee;
  margin-top: 2em;
  margin-bottom: 1em;
`;

const Progress = styled.div<{ success: boolean }>`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSize.smaller};
  margin-bottom: 1em;
  color: ${p => (p.success ? p.theme.color : '#bdbdbd')};

  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    background-color: ${p => (p.success ? '#0035ad' : '#bdbdbd')};
    margin-right: 1em;
    margin-top: 3px;
  }
`;

type TProps = {
  certs: TCerts[];
};

const Certs: FC<TProps> = ({ certs }) => {
  const [openIdx, setOpenIdx] = useState<number>(-1);

  return (
    <Wrapper>
      {certs.map((cert, idx) => (
        <CertWrapper
          key={cert.issuer + cert.name}
          onClick={() => setOpenIdx(idx)}
        >
          <CertCover src={cert.coverUri} />
          <p className="issuer">{cert.issuer}</p>
          <p className="name">{cert.name}</p>
          <p className="create-data">June 2019</p>
          <Icon
            src={getRelativePath('/static/icon/icon-certicheck.png')}
            srcSet={`${getRelativePath(
              '/static/icon/icon-certicheck@2x.png',
            )} 2x, ${getRelativePath(
              '/static/icon/icon-certicheck@3x.png',
            )} 3x`}
          />
          {cert.pin && <PinIcon color={theme.colors.primary} size="1.1em" />}
        </CertWrapper>
      ))}
      {openIdx >= 0 && (
        <Modal
          className="ReactModal__Cert_Content"
          isOpen={openIdx >= 0}
          onRequestClose={() => setOpenIdx(-1)}
          style={{
            overlay: {
              background: 'rgba(0, 0, 0, 0.7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            content: {
              position: 'relative',
              borderRadius: '10px',
              backgroundColor: '#fafafa',
              padding: '2em',
            },
          }}
        >
          <ModalWrapper>
            <CertCover src={certs[openIdx].coverUri} />
            <p className="issuer">{certs[openIdx].issuer}</p>
            <p className="name">{certs[openIdx].name}1</p>
            <p className="create-data">June 2019</p>
            <Divider />
            <ModalProgressTitleWrapper>
              <p className="title">認證進度</p>
              <div className="icon-wrapper">
                <StyledModalIcon pin={certs[openIdx].pin}>
                  <TiPin size="1.3em" color={theme.colors.darkGrey} />
                </StyledModalIcon>
                <StyledModalIcon>
                  <FaShareSquare size="1.1em" color={theme.colors.darkGrey} />
                </StyledModalIcon>
              </div>
            </ModalProgressTitleWrapper>
            <div>
              {[
                {
                  key: 'connect',
                  name: 'Connected To The Blockchain',
                  success: true,
                },
                {
                  key: 'retrive',
                  name: 'Retrieved Credentials',
                  success: false,
                },
                {
                  key: 'verify-account',
                  name: 'Verified Account Info',
                  success: false,
                },
                {
                  key: 'verify-cert',
                  name: 'Verified Certificate Integrity',
                  success: false,
                },
                {
                  key: 'verify-source',
                  name: 'Verified Source Authenticity',
                  success: false,
                },
              ].map(progress => (
                <Progress key={progress.key} success={progress.success}>
                  <div className="icon-wrapper">
                    <FaCheck size=".8em" color="white" />
                  </div>
                  <p>{progress.name}</p>
                </Progress>
              ))}
            </div>
          </ModalWrapper>
        </Modal>
      )}
    </Wrapper>
  );
};

export default Certs;
