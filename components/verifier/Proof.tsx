import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

const certicheckDoneIcon = 'static/icon/icon-certicheck.svg';
const hideIcon = 'static/icon/icon-hide.svg';

const Root = styled.div`
  width: 480px;
  height: 100%;
  background: white;
  display: inline-block;
`
const TitleBox = styled.div`
  position: relative;
  width: 480px;
  height: 100px;
  background: #a80100;
  text-align: center;
`
const Title = styled.div`
  width: 261px;
  height: 100px;
  color: white;
  font-family: ${p => p.theme.fontFamily.SFCompactText};
  font-size: 36px;
  font-weight: bold;
  line-height:100px;
  padding: 0px 0px 0px 60px;
`
const Hide = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  padding: 23px 24px;
  font-family: ${p => p.theme.fontFamily.PingFangSC};
  font-size: 18px;
  letter-spacing: 0.5px;
  color: #bdbdbd;
`
const Status = styled.div`
  display: flex;
  align-items: center;
  width: 420px;
  height: 72px;
  background-color: #f7f7f7;
`
const Rectangle = styled.div`
  float: left;
  width: 8px;
  height: 72px;
  background-color: #0035ad;
  margin-right: 40px;
`
const VSA = styled.span`
  font-family: ${p => p.theme.fontFamily.SFCompactDisplay};
  font-size: 16px;
  font-weight: 500;
  color: #0035ad;
  margin-right: 55px;
`
const More = styled.span`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 16px;
  font-weight: 500;
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
`
const Info = styled.div`
  width: 360px;
  margin: 0px 60px;
`
const InfoH1 = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 24px;
  font-weight: 600;
  color: #a80100;
  padding: 20px 0px;
  border-bottom: 1px solid #bdbdbd;
`
const InfoH2 = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 18px;
  font-weight: 500;
  color: #9e9e9e;
  padding: 12px 0px;
`
const InfoContent = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 18px;
  color: #424242;
  padding: 0px 0px 24px 0px;
  word-break:break-all;
`
type TProps = {
    ipfs: string,
    iota: string,
    date: string,
    holderEmail: string,
    holderName: string,
    type: string,
    issuerName: string
};

const Proof: FC<TProps> = props => {
    return (
        <Root>
            <TitleBox><Title>CERTIFICATION</Title></TitleBox>
            <Hide>
                <span>收起</span>
                <img src={hideIcon} alt="" />
            </Hide>
            <Status>
                <Rectangle />
                <img src={certicheckDoneIcon} alt="" />
                <VSA>Verified Source Authenticity</VSA>

                <a href={'https://thetangle.org/transaction/' + props.iota}>
                    <More>
                        More
          </More>
                </a>

            </Status>
            <Info>
                <InfoH1>ISSUER</InfoH1>
                <InfoH2>Date</InfoH2>
                <InfoContent>{props.date}</InfoContent>
                <InfoH2>Name</InfoH2>
                <InfoContent>{props.issuerName}</InfoContent>
                <InfoH2>Type</InfoH2>
                <InfoContent>{props.type}</InfoContent>
                <InfoH1>HOLDER</InfoH1>
                <InfoH2>Name</InfoH2>
                <InfoContent>{props.holderName}</InfoContent>
                <InfoH2>E-mail</InfoH2>
                <InfoContent>{props.holderEmail}</InfoContent>
                <InfoH1>Blockchain Footprint</InfoH1>
                <InfoH2>IPFS</InfoH2>
                <a href={'https://ipfs.io/ipfs/' + props.ipfs}>
                    <InfoContent>{props.ipfs}</InfoContent>
                </a>
                <InfoH2>IOTA</InfoH2>
                <a href={'https://thetangle.org/transaction/' + props.iota}>
                    <InfoContent>{props.iota}</InfoContent>
                </a>
            </Info>
        </Root>
    );
}

export default Proof;