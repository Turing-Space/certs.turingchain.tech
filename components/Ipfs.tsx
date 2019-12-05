import { NextFC } from 'next';
import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { getRelativePath } from '@/utils';
import queryString from 'query-string';

import Head from 'next/head';
import Side from '@/components/verifier/Proof';
import Certificate from '@/components/verifier/Certificate';

function timeConverter(UNIX_timestamp: number) {
  const a = new Date(UNIX_timestamp * 600);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const sec = a.getSeconds();
  const time =
    date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

const Root = styled.div<{ zoomLevel: number }>`
  width: 100%;
  height: 100%;
  background: $fafafa;
  zoom: ${p => p.zoomLevel};
`;

const Ipfs: NextFC = () => {
  const [date, setDate] = useState('-');
  const [issuerName, setIssuerName] = useState('-');
  const [type, setType] = useState('-');
  const [holderName, setHolderName] = useState('-');
  const [holderEmail, setEmail] = useState('-');
  const [IPFS, setIPFS] = useState('-');
  const [IOTA, setIOTA] = useState('-');
  const [zoomLevel, setZoomLevel] = useState(0);

  useEffect(() => {
    async function fetchCertsAPI() {
      const value = queryString.parse(window.location.search);
      const hash = value.hash;
      console.log(hash);
      await fetch(
        `https://x1certificate-aqkcbxdduq-uc.a.run.app/v1/view/certs?ipfs=${hash}`,
      )
        .then(res => res.json())
        .then(returnData => {
          setDate(timeConverter(returnData.content.timestamp));
          setIssuerName(returnData.content.issuerName);
          setType(returnData.content.type);
          setIPFS(returnData.content.ipfs);
          setIOTA(returnData.content.iOTAhash);
          setHolderName(returnData.content.holderName);
          setEmail(returnData.content.emailHolder);
        })
        .catch(console.error);
    }
    fetchCertsAPI();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 600) {
        setZoomLevel(
          Math.min(window.innerWidth / 1920, window.innerHeight / 1170),
        );
      } else {
        setZoomLevel(window.innerWidth / 480);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Root zoomLevel={zoomLevel}>
      <Head>
        <title>TuringVerifier</title>
        <link
          rel="stylesheet"
          type="text/css"
          href={getRelativePath('/static/css/ipfs.css')}
        />
      </Head>
      {zoomLevel === 0 ? (
        <p style={{ width: '100%', height: '100px', textAlign: 'center' }}>
          資料載入中...
        </p>
      ) : (
        <>
          <Side
            date={date}
            issuerName={issuerName}
            type={type}
            holderName={holderName}
            holderEmail={holderEmail}
            ipfs={IPFS}
            iota={IOTA}
          />
          <Certificate ipfs={IPFS} />
        </>
      )}
    </Root>
  );
};

export default Ipfs;
