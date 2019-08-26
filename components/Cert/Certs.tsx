import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { TiPin } from 'react-icons/ti';

import { TCert } from '@/contexts/certs';
import theme from '@/themes/theme';

import VerifiedProgressChart from './VerifiedProgressChart';
import ViewCertModal from './ViewCertModal';

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
  padding: 2em 1.5em;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0, 0, 0, 0.1);

  &:nth-child(3n) {
    margin-right: 0;
  }

  &:nth-child(3n + 1) {
    margin-left: 0;
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

const PinIcon = styled(TiPin)`
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

const SmallVerifiedProgressChart = styled(VerifiedProgressChart)`
  bottom: 1em;
  right: 1.5em;
`;

type TProps = {
  certs: TCert[];
};

const Certs: FC<TProps> = ({ certs }) => {
  const [openIdx, setOpenIdx] = useState<number>(-1);
  const onCloseViewCertModal = useCallback(() => setOpenIdx(-1), []);

  return (
    <Wrapper>
      {certs.map((cert, idx) => {
        const progressPercent = Math.round(
          (cert.progress.reduce((acc, cur) => Number(cur) + acc, 0) / 5) * 100,
        );
        return (
          <CertWrapper key={cert.ipfs} onClick={() => setOpenIdx(idx)}>
            <CertCover src={cert.coverUri} />
            <p className="issuer">{cert.issuer}</p>
            <p className="name">{cert.name}</p>
            <p className="create-data">June 2019</p>
            <SmallVerifiedProgressChart
              size={50}
              verified={cert.verified}
              progress={progressPercent}
            />
            {cert.pin && <PinIcon color={theme.colors.primary} size="1.3em" />}
          </CertWrapper>
        );
      })}
      {openIdx >= 0 && (
        <ViewCertModal
          cert={certs[openIdx]}
          isOpen={openIdx >= 0}
          onClose={onCloseViewCertModal}
        />
      )}
    </Wrapper>
  );
};

export default Certs;
