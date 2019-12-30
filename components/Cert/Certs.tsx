import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { TiPin } from 'react-icons/ti';

import { TCert } from '@/contexts/certs';
import { media } from '@/utils/theme';
import theme from '@/themes/theme';

import VerifiedProgressChart from './VerifiedProgressChart';
import ViewCertModal from './ViewCertModal';
import Spinner from '../Spinner';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1em;
`;

const CertWrapper = styled.div`
  cursor: pointer;
  position: relative;
  margin: 0 1.75% 3%;
  background: ${p => p.theme.colors.white};
  padding: 2em 1.5em;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0, 0, 0, 0.1);

  > .issuer {
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSize.smaller};
    margin-bottom: 0.5em;
  }

  .create-data {
    font-size: ${p => p.theme.fontSize.smaller};
    color: #bdbdbd;
  }

  ${media('phone')} {
    width: 100%;
    align-itmes: center;
    margin-left: 0;

    > .name {
      font-weight: 500;
      letter-spacing: 0.5px;
      margin-bottom: -0.5em;
      height: 2.5em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  ${media('desktop')} {
    width: 31%;

    &:nth-child(3n) {
      margin-right: 0;
    }

    &:nth-child(3n + 1) {
      margin-left: 0;
    }

    > .name {
      font-weight: 500;
      letter-spacing: 0.5px;
      margin-bottom: 1em;
      height: 2.5em;
      overflow: hidden;
      text-overflow: ellipsis;
    }
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

const IssuingMask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.7);
  color: ${p => p.theme.colors.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

type TProps = {
  certs: TCert[];
};

function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  // var hour = a.getHours();
  // var min = a.getMinutes();
  // var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year;
  return time;
}

const Certs: FC<TProps> = ({ certs }) => {
  const [openIdx, setOpenIdx] = useState<number>(-1);
  const onCloseViewCertModal = useCallback(() => setOpenIdx(-1), []);

  return (
    <Wrapper>
      {certs.map(async (cert, idx) => {
        console.log(cert.issuer, idx)
        const ipfsImg = 'https://ipfs.certs.turingchain.tech/ipfs/' + cert.ipfs;
        const progressPercent = Math.round(
          (cert.progress.reduce((acc, cur) => Number(cur) + acc, 0) / 5) * 100,
        )
        return (
          <CertWrapper
            key={cert.ipfs}
            onClick={() => !cert.issuing && setOpenIdx(idx)}
          >
            <CertCover src={ipfsImg} />
            <p className="issuer">{cert.issuer}</p>
            <p className="name">{cert.name}</p>
            <p className="create-data">{timeConverter(cert.timestamp)}</p>
            <SmallVerifiedProgressChart
              size={50}
              verified={cert.verified}
              progress={progressPercent}
            />
            {cert.pin && <PinIcon color={theme.colors.primary} size="1.3em" />}
            {cert.issuing && (
              <IssuingMask>
                <Spinner color={theme.colors.primary} scale={2} />
                <p style={{ marginTop: '1rem' }}>發證中...</p>
              </IssuingMask>
            )}
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
