import { FC, useContext, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { useSprings, animated } from 'react-spring';
import { FacebookShareButton } from 'react-share';
import { FaShareSquare, FaCheck, FaTrash } from 'react-icons/fa';
import { TiPin } from 'react-icons/ti';
import Modal from 'react-modal';
import theme from '@/themes/theme';
import VerifiedProgressChart from './VerifiedProgressChart';
import { TCert, CertsContext } from '@/contexts/certs';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';
import { timeConverter } from '@/utils';
import { delCerts } from '@/utils/api';

const CertCover = styled.div<{ src: string }>`
  width: 100%;
  height: 8.5em;
  background: ${p => p.theme.colors.white} url(${p => p.src}) no-repeat
    center/contain;
  margin-bottom: 1em;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
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

  .smartLink {
    color: ${p => p.theme.colors.primary};
    right: 0;
    top: 3 em;
    position: absolute;
  }

  > .name {
    width: 100%;
    font-size: ${p => p.theme.fontSize.bigger};
    font-weight: 500;
    letter-spacing: 0.6px;
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
  margin-left: 1em;
  
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

const Progress = styled(animated.div)`
  display: flex;
  align-items: center;
  font-size: ${p => p.theme.fontSize.smaller};
  margin-bottom: 1em;
`;

const ProgressIconWrapper = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 1.2em;
  height: 1.2em;
  background-color: #bdbdbd;
  margin-right: 1em;
  margin-top: 3px;
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
  const [springs, set] = useSprings(progressMap.length, () => ({
    textColor: '#bdbdbd',
    iconBgColor: '#bdbdbd',
  }));
  const { t } = useTranslation(i18nNamespace.Issuer);

  useEffect(() => {
    // @ts-ignore
    set((index: number) => {
      return {
        delay: (index + 1) * 300,
        textColor: cert.progress[index] ? '#414141' : '#bdbdbd',
        iconBgColor: cert.progress[index] ? theme.colors.blue : '#bdbdbd',
      };
    });
  }, []);

  const progressPercent = Math.round(
    (cert.progress.reduce((acc, cur) => Number(cur) + acc, 0) / 5) * 100,
  );
  const onClickPin = useCallback(() => {
    updateCert(cert.ipfs, {
      ...cert,
      pin: !cert.pin,
    });
  }, [cert]);

  // const onClickTrash = useCallback(() => {
  //   console.log("delete " + cert.ipfs)
  //   delCerts({ ipfs: cert.ipfs });
  //   isOpen = false;
  // }, [cert]);

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
        {/* <a href={'https://certs.turingchain.tech/ipfs?hash=' + cert.ipfs}> */}
        <CertCover src={'https://ipfs.certs.turingchain.tech/ipfs/' + cert.ipfs} />
        {/* </a> */}
        <p className="issuer">{cert.issuer}</p>
        <p className="name">{cert.name}</p>
        <p className="smartLink"><a href={'https://certs.turingchain.tech/ipfs?hash=' + cert.ipfs}>SmartLink</a></p>
        <p className="create-data">{timeConverter(cert.timestamp)}</p>
        <Divider />
        <ModalProgressTitleWrapper>
          <p className="title">{t('CertModal.progress')}</p>
          <div className="icon-wrapper">
            <StyledModalIcon pin={cert.pin} onClick={onClickPin}>
              <TiPin size="1.3em" color={theme.colors.darkGrey} />
            </StyledModalIcon>
            <StyledModalIcon>
              <FacebookShareButton
                url={'https://certs.turingchain.tech/ipfs?hash=' + cert.ipfs}
                quote={'TuringCerts'}>
                <FaShareSquare size="1.1em" color={theme.colors.darkGrey} />
              </FacebookShareButton>
            </StyledModalIcon>
            {/* <StyledModalIcon onClick={onClickTrash}>
              <FaTrash size="1.1em" color={theme.colors.darkGrey} />
            </StyledModalIcon> */}
          </div>
        </ModalProgressTitleWrapper>
        <div>
          {springs.map((style, idx) => {
            const progress = progressMap[idx];
            return (
              <Progress style={{ color: style.textColor }} key={progress.key}>
                <ProgressIconWrapper
                  style={{ backgroundColor: style.iconBgColor }}
                >
                  <FaCheck size=".8em" color="white" />
                </ProgressIconWrapper>
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
