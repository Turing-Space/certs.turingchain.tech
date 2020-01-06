import React from 'react';
import { FC, useState, useCallback } from 'react';
import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import LinkedinModal from '../Cert/LinkedinModal';

const certicheckDoneIcon = '/static/icon/icon-certicheck.svg';
// const hideIcon = '/static/icon/icon-hide.svg';

const Root = styled.div`
  width: 480px;
  height: 100%;
  background: white;
  display: inline-block;
`;
const TitleBox = styled.div`
  position: relative;
  width: 480px;
  height: 100px;
  background: #a80100;
  text-align: center;
`;
const Title = styled.div`
  width: 261px;
  height: 100px;
  color: white;
  font-family: ${p => p.theme.fontFamily.SFCompactText};
  font-size: 36px;
  font-weight: bold;
  line-height: 100px;
  padding: 0px 0px 0px 60px;
`;
const Hide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 23px 24px;
  font-family: ${p => p.theme.fontFamily.PingFangSC};
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`;
const Status = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  height: 72px;
  background-color: #f7f7f7;
`;
const Rectangle = styled.div`
  float: left;
  width: 8px;
  height: 72px;
  background-color: #0035ad;
  margin-right: 40px;
`;
const VSA = styled.span`
  font-family: ${p => p.theme.fontFamily.SFCompactDisplay};
  font-size: 16px;
  font-weight: 500;
  color: #0035ad;
  margin-right: 55px;
`;
const More = styled.span`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  margin-right: 10px;
`;
const Info = styled.div`
  width: 360px;
  margin: 20px 60px;
`;
const InfoH1 = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 24px;
  font-weight: 600;
  color: #a80100;
  padding: 20px 0px;
  border-bottom: 1px solid #bdbdbd;
`;
const InfoH2 = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 18px;
  font-weight: 500;
  color: #9e9e9e;
  padding: 12px 0px;
`;
const InfoContent = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 18px;
  color: #424242;
  padding: 0px 0px 24px 0px;
  word-break: break-all;
`;
type TProps = {
  ipfs: string;
  iota: string;
  date: string;
  holderEmail: string;
  holderName: string;
  type: string;
  issuerName: string;
  issuerWebsite: string;
  holderId: string;
  issuerId: string;
};

const Proof: FC<TProps> = props => {
  const [openIdx, setOpenIdx] = useState<number>(-1);
  const onCloseViewCertModal = useCallback(() => setOpenIdx(-1), []);

  return (
    <Root>
      <TitleBox>
        <Title>CERTIFICATION</Title>
      </TitleBox>
      <Hide>
        {/* <span>收起</span>
        <img src={getRelativePath(hideIcon)} alt="" /> */}
      </Hide>
      <Status>
        <Rectangle />
        <img src={getRelativePath(certicheckDoneIcon)} alt="" />
        <VSA>Verified Source Authenticity</VSA>

        <a href={'https://thetangle.org/transaction/' + props.iota}>
          <More>More</More>
        </a>
      </Status>
      <Info>
        <InfoH1>ISSUER</InfoH1>
        <InfoH2>Date</InfoH2>
        <InfoContent>{props.date}</InfoContent>
        <InfoH2>Name</InfoH2>
        <a href={props.issuerWebsite}>
          <InfoContent>{props.issuerName}</InfoContent>
        </a>
        <InfoH2>Type</InfoH2>
        <InfoContent>{props.type}</InfoContent>
        <InfoH1>HOLDER</InfoH1>
        <InfoH2>Name</InfoH2>
        <a href={'https://certs.turingchain.tech/product?id=' + props.holderId}>
          <InfoContent>{props.holderName}</InfoContent>
        </a>
        {/* <InfoH2>E-mail</InfoH2>
        <InfoContent>{props.holderEmail}</InfoContent> */}
        <InfoH1>Blockchain Footprint</InfoH1>
        <InfoH2>IPFS</InfoH2>
        <a href={'https://ipfs.certs.turingchain.tech/ipfs/' + props.ipfs}>
          <InfoContent>{props.ipfs}</InfoContent>
        </a>
        <InfoH2>IOTA</InfoH2>
        <a href={'https://thetangle.org/transaction/' + props.iota}>
          <InfoContent>{props.iota}</InfoContent>
        </a>
        <img
          src={getRelativePath('/static/logo/linkedin.png')}
          alt="LinkedIn Add to Profile button"
          style={{ width: '60%', marginTop: '15px', marginBottom: '20px' }}
          onClick={() => {
            // setOpenIdx(1)
            window.open(
              'https://www.linkedin.com/profile/add?startTask=TuringCerts',
              'popup',
              'width=800,height=750',
            );
            return false;
          }}
        />
      </Info>
    </Root>
  );
};

export default Proof;
