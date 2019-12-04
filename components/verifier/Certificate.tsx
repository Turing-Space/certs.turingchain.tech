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
  display:flex;
  align-items:center;
  width: 1440px;
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
  padding-right: 1047px;
`
const PDF = styled.div`
  padding-top: 60px;
`
type TProps = {
    ipfs: string
};

const Certificate: FC<TProps> = props => {
    return (
        <Root>
            <TitleBar>
                <TitleInfo>
                    <Logo src={getRelativePath(logoIcon)} />
                    <a href={'http://certs.turingchain.tech'}>
                        <Title>TuringCerts</Title>
                    </a>
                    <a href={'https://ipfs.io/ipfs/' + props.ipfs} target="_blank" rel="noopener noreferrer">
                        <img src={getRelativePath(shareIcon)} alt="" />
                    </a>
                </TitleInfo>
            </TitleBar>
            {PDFF(props)}
        </Root>
    );
}

const PDFF: FC<TProps> = props => {
    if (props.ipfs !== "-") {
        return (
            <PDF>
                <PDFViewer document={{
                    url: 'https://ipfs.io/ipfs/' + props.ipfs
                }}
                    hideNavbar
                    scale={0.9}
                />
            </PDF>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Certificate