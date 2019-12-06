import React from 'react';
import { FC } from 'react';

import styled from 'styled-components';
import PDFViewer from 'mgr-pdf-viewer-react';

import { getRelativePath } from '@/utils';

const logoIcon = '/static/icon/logo-product-normal.svg';
const shareIcon = '/static/icon/icon-share-grey.svg';

const Root = styled.div`
  display: inline-block;
  vertical-align: top;
`
const TitleBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
`
const TitleInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  width: 100%; 
  height: 100px;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 800px) {
    width: 360px
  }
`
const Logo = styled.img`
  padding-right: 16px;
`
const Title = styled.div`
  font-family: ${p => p.theme.fontFamily.SFProText};
  font-size: 24px;
  font-weight: 600;
  color: #a80100;
  color: #a80100;
  align-items: right;
  display: flex; 
  padding-right: 150px;
`
let PDF = styled.div`
  padding-top: 50px;  
  display: flex; 
  margin-left: 60px;
  padding-bottom: 60px;
`
type TProps = {
    ipfs: string
};

const Certificate: FC<TProps> = props => {
    return (
        <Root>
            <TitleBar>
                <TitleInfo>
                    <a href={'http://certs.turingchain.tech'}>
                        <Logo src={getRelativePath(logoIcon)} />
                    </a>
                    <a href={'http://certs.turingchain.tech'}>
                        <Title>TuringCerts</Title>
                    </a>
                    {/* <a href={'https://ipfs.io/ipfs/' + props.ipfs} target="_blank" rel="noopener noreferrer">
                        <img src={getRelativePath(shareIcon)} alt="" style={{ paddingLeft: '1000px' }} />
                    </a> */}
                </TitleInfo>
            </TitleBar>
            {PDFF(props)}
        </Root>
    );
}

const PDFF: FC<TProps> = props => {

    if (props.ipfs !== "-") {
        return (
            <div>
                <PDF>
                    <a href={'https://ipfs.io/ipfs/' + props.ipfs}>
                        <PDFViewer document={{
                            url: 'https://ipfs.io/ipfs/' + props.ipfs
                        }}
                            hideNavbar
                            scale={window.innerWidth > 800 ? (window.innerWidth - 800) / 1100 : window.innerWidth / (1600 + window.innerWidth)}
                        />
                    </a>
                </PDF >
            </div >
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Certificate