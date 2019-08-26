import { FC, useContext, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useSprings, animated } from 'react-spring';
import { FaShareSquare, FaCheck } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import Modal from 'react-modal';

import theme from '@/themes/theme';

import VerifiedProgressChart from './VerifiedProgressChart';
import { TCert, CertsContext } from '@/contexts/certs';

const CertCover = styled.div<{ src: string }>`
  width: 100%;
  height: 8.5em;
  background: ${p => p.theme.colors.white} url(${p => p.src}) no-repeat
    center/contain;
  margin-bottom: 1em;
`;

const ModalWrapper = styled.div`
  position: relative;
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

const Progress = styled(animated.div)<{ success: boolean }>`
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
    background-color: ${p => (p.success ? p.theme.colors.blue : '#bdbdbd')};
    margin-right: 1em;
    margin-top: 3px;
  }
`;

type TProps = {
  cert: TCert;
  isOpen: boolean;
  onClose: () => void;
};

const progressMap = [
  {
    key: 'connect',
    name: 'Connected To The Blockchain',
  },
  {
    key: 'retrive',
    name: 'Retrieved Credentials',
  },
  {
    key: 'verify-account',
    name: 'Verified Account Info',
  },
  {
    key: 'verify-cert',
    name: 'Verified Certificate Integrity',
  },
  {
    key: 'verify-source',
    name: 'Verified Source Authenticity',
  },
];

const ViewCertModal: FC<TProps> = ({ cert, isOpen, onClose }) => {
  const { updateCert } = useContext(CertsContext);
  const [springs] = useSprings(progressMap.length, index => ({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: {
      delay: index * 500,
    },
  }));
  const progressPercent = Math.round(
    (cert.progress.reduce((acc, cur) => Number(cur) + acc, 0) / 5) * 100,
  );
  const onClickPin = useCallback(() => {
    updateCert(cert.ipfs, {
      ...cert,
      pin: !cert.pin,
    });
  }, [cert]);

  return (
    <Modal
      className="ReactModal__Custom_Content"
      isOpen={isOpen}
      onRequestClose={onClose}
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
        <CertCover src={cert.coverUri} />
        <p className="issuer">{cert.issuer}</p>
        <p className="name">{cert.name}</p>
        <p className="create-data">June 2019</p>
        <Divider />
        <ModalProgressTitleWrapper>
          <p className="title">認證進度</p>
          <div className="icon-wrapper">
            <StyledModalIcon pin={cert.pin} onClick={onClickPin}>
              <TiPin size="1.3em" color={theme.colors.darkGrey} />
            </StyledModalIcon>
            <StyledModalIcon>
              <FaShareSquare size="1.1em" color={theme.colors.darkGrey} />
            </StyledModalIcon>
          </div>
        </ModalProgressTitleWrapper>
        <div>
          {springs.map((style, idx) => {
            console.log(style);
            const progress = progressMap[idx];
            return (
              <Progress
                style={style}
                key={progress.key}
                success={!!cert.progress[idx]}
              >
                <div className="icon-wrapper">
                  <FaCheck size=".8em" color="white" />
                </div>
                <p>{progress.name}</p>
              </Progress>
            );
          })}
        </div>
        <VerifiedProgressChart
          verified={cert.verified}
          progress={progressPercent}
        />
      </ModalWrapper>
    </Modal>
  );
};

export default ViewCertModal;
