import { NextFC } from 'next';
import React, { useState, useEffect } from "react";

import styled from 'styled-components';
import queryString from 'query-string';

import Head from 'next/head';
import Side from '@/components/verifier/Proof';
import Certificate from '@/components/verifier/Certificate';

import 'static/css/ipfs.css'

function timeConverter(UNIX_timestamp: number) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  return time;
}

const Root = styled.div`
  width: 1920px;
  height: 1080px;
  background: $fafafa;
`

const Ipfs: NextFC = () => {
  const [date, setDate] = useState("-");
  const [issuerName, setIssuerName] = useState("-");
  const [type, setType] = useState("-");
  const [holderName, setHolderName] = useState("-");
  const [holderEmail, setEmail] = useState("-");
  const [IPFS, setIPFS] = useState("-");
  const [IOTA, setIOTA] = useState("-");

  useEffect(() => {
    async function fetchCertsAPI() {
      const value = queryString.parse(window.location.search);
      const hash = value.hash;
      console.log(hash);
      await fetch(`https://x1certificate-aqkcbxdduq-uc.a.run.app/v1/view/certs?ipfs=${hash}`)
        .then(res => res.json())
        .then((returnData) => {
          console.log(returnData);
          setDate(timeConverter(returnData.content.timestamp));
          setIssuerName(returnData.content.issuerName);
          setType(returnData.content.type);
          setIPFS(returnData.content.ipfs);
          setIOTA(returnData.content.iOTAhash);
          setHolderName(returnData.content.holderName);
          setEmail(returnData.content.emailHolder);
        })
        .catch(console.log)
    };
    fetchCertsAPI();
  }, []);

  return (
    <Root>
      <Head>
        <title>TuringVerifier</title>
      </Head>
      <Side date={date}
        issuerName={issuerName}
        type={type}
        holderName={holderName}
        holderEmail={holderEmail}
        ipfs={IPFS}
        iota={IOTA} />
      <Certificate ipfs={IPFS} />
    </Root>
  );
}

export default Ipfs;