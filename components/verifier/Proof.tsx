import React from 'react';
import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  const [copyName, setCopyName] = useState<Boolean>(false);
  const [copyOrg, setCopyOrg] = useState<Boolean>(false);
  const [copyDate, setCopyDate] = useState<Boolean>(false);
  const [copyID, setCopyID] = useState<Boolean>(false);
  const [copyURL, setCopyURL] = useState<Boolean>(false);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 30);
  }, []);

  if (loading)
    return null;
  else
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
          <InfoH1>RECIPIENT</InfoH1>
          <InfoH2>Name</InfoH2>
          <a href={'https://certs.turingchain.tech/product?id=' + props.holderId}>
            <InfoContent>{props.holderName}</InfoContent>
          </a>

          <InfoH1>TESTIMONY</InfoH1>
          <InfoH2>Name
        <CopyToClipboard text={props.type} style={{ margin: '0 10px' }}
              onCopy={() => {
                setCopyName(true)
                setTimeout(() => setCopyName(false), 1700);
              }}>
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </CopyToClipboard>
            {copyName ? <span style={{ color: '#2867B2' }}>Copied!</span> : null}
          </InfoH2>


          <InfoContent>{props.type}</InfoContent>
          <InfoH2>Issuing Organization
        <CopyToClipboard text={props.issuerName} style={{ margin: '0 10px' }}
              onCopy={() => {
                setCopyOrg(true)
                setTimeout(() => setCopyOrg(false), 1700);
              }}>
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </CopyToClipboard>
            {copyOrg ? <span style={{ color: '#2867B2' }}>Copied!</span> : null}
          </InfoH2>
          <a href={props.issuerWebsite}>
            <InfoContent>{props.issuerName}</InfoContent>
          </a>
          <InfoH2>Issue Date
        <CopyToClipboard text={props.date} style={{ margin: '0 10px' }}
              onCopy={() => {
                setCopyDate(true)
                setTimeout(() => setCopyDate(false), 1700);
              }}>
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </CopyToClipboard>
            {copyDate ? <span style={{ color: '#2867B2' }}>Copied!</span> : null}
          </InfoH2>
          <InfoContent>{props.date}</InfoContent>

          <InfoH1>CREDENTIAL</InfoH1>
          <InfoH2>Credential ID
        <CopyToClipboard text={props.ipfs} style={{ margin: '0 10px' }}
              onCopy={() => {
                setCopyID(true)
                setTimeout(() => setCopyID(false), 1700);
              }}>
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </CopyToClipboard>
            {copyID ? <span style={{ color: '#2867B2' }}>Copied!</span> : null}
          </InfoH2>
          <a href={'https://ipfs.certs.turingchain.tech/ipfs/' + props.ipfs}>
            <InfoContent>{props.ipfs}</InfoContent>
          </a>
          <InfoH2>Credential URL
        <CopyToClipboard text={'https://certs.turingchain.tech/ipfs?hash=' + props.ipfs} style={{ margin: '0 10px' }}
              onCopy={() => {
                setCopyURL(true)
                setTimeout(() => setCopyURL(false), 1700);
              }}>
              <FontAwesomeIcon icon={faCopy} size="xs" />
            </CopyToClipboard>
            {copyURL ? <span style={{ color: '#2867B2' }}>Copied!</span> : null}
          </InfoH2>
          <a href={'https://certs.turingchain.tech/ipfs?hash=' + props.ipfs}>
            <InfoContent>{'https://certs.turingchain.tech/ipfs?hash=' + props.ipfs}</InfoContent>
          </a>
          <InfoH2>Credential Hash</InfoH2>
          <a href={'https://thetangle.org/transaction/' + props.iota}>
            <InfoContent>{props.iota}</InfoContent>
          </a>
          <img
            src={getRelativePath('/static/logo/linkedin.png')}
            alt="LinkedIn Add to Profile button"
            style={{ width: '60%', marginTop: '15px', marginBottom: '20px' }}
            onClick={() => {
              window.open(
                'https://www.linkedin.com/profile/add?startTask=TuringCerts',
                'popup',
                'width=800,height=750,left=380,top=110',
              );
              return false;
            }}
          />
        </Info>
      </Root>
    );
};

export default Proof;
