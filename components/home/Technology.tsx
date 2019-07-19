import { FC, useState } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import H3 from '@/components/H3';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import Button from '@/components/Button';

const Title = styled(H2)`
  margin-top: 18vh;

  ${media('largeDesktop')} {
    margin-top: 20vh;
  }
`;

const Wrapper = styled.div`
  margin-top: 3%;
  width: 40%;
`;

const MoreInfoWrapper = styled(Wrapper)<{ open: boolean }>`
  overflow: hidden;
  max-height: ${p => (p.open ? '100vh' : 0)};
  transition: max-height ease-in 0.3s;
`;

const InfoWrapper = styled(Wrapper)`
  width: 100%;
`;

const SubTitle = styled(H3)`
  position: relative;
  color: ${p => p.theme.colors.primary};

  &:before {
    position: absolute;
    content: 'BASIC';
    color: #1f1f1f;
    font: italic 800 1.5em /1 ${p => p.theme.fontFamily.SFDisplay};
    letter-spacing: 3.2px;
    top: 0.25em;
    left: 3px;
    z-index: -1;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${p => p.theme.colors.white};
  opacity: 0.1;
`;

const Content = styled(Description)`
  letter-spacing: 1.67px;
  margin: 5% 0;
`;

const QuestionTitle = styled.p`
  margin: 1em 0;
  font-weight: 500;
  color: ${p => p.theme.colors.primary};
  letter-spacing: 2px;
  font-size: ${p => p.theme.fontSize.bigger};
`;

const StyledButton = styled(Button)`
  margin: 5% 0 8%;
`;

const Techonology: FC<{ id: string }> = ({ id }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Section id={id}>
      <Title>技術白皮書</Title>
      <Wrapper>
        <SubTitle className="cn">基礎階段</SubTitle>
        <Divider />
        <Content className="cn">
          測試階段的 0x1 Certificate 運行於第二代區塊鏈以太坊 (Ethereum)
          之上，由多個智能合約 (Smart Contract) 所監管與運行，並採用星際文件系統
          (IPFS) 做大型數位證書圖像的保存。
        </Content>
        <Divider />
      </Wrapper>
      {
        <MoreInfoWrapper open={open}>
          <InfoWrapper>
            <QuestionTitle className="cn">
              (1) 是否有技術合作機構呢？
            </QuestionTitle>
            <Divider />
            <Content className="cn">
              0x1 Certificate
              已經與國立成功大學及BiiLabs達成技術合作共識，並與世界知名主鏈基金會
              IOTA Foundation 積極合作洽談技術協作，將於此階段將系統遷移至 IOTA
              區塊鏈，並架接於開源的 TangelID
              加速層，促成極低發證手續費與低延遲的有效特性。
            </Content>
            <Divider />
          </InfoWrapper>
          <InfoWrapper>
            <QuestionTitle className="cn">
              (2) 如何確保證書唯一真實性？
            </QuestionTitle>
            <Divider />
            <Content className="cn">
              0x1 Certificate 將使用全球網際網路標準 W3C 提出之 DID
              分布式身份標準，賦予每張證書獨特唯一之身份證明，除防偽特徵為更有利於證書的長期保管與追蹤。
            </Content>
            <Divider />
          </InfoWrapper>
          <InfoWrapper>
            <QuestionTitle className="cn">
              (3) 如何確實保護使用者隱私？
            </QuestionTitle>
            <Divider />
            <Content className="cn">
              0x1 Certificate 採用 MIT Media Lab 於早期開源證書體系 OpenCerts
              所考量的
              “最小權限原則”，僅授與認證方最少但充足的認證資源，反向保護用戶提供資料極高隱私性。0x1
              Certificate 將由創辦人於 UC Berkeley Blockchain Lab
              的加速器持續吸收並整合矽谷區塊鏈圈內的技術創新，保持其安全性與應用特性在全球的領先地位。
            </Content>
            <Divider />
          </InfoWrapper>
        </MoreInfoWrapper>
      }

      <StyledButton onClick={() => setOpen(p => !p)}>
        {open ? '隱藏' : '更多'}細節
      </StyledButton>
    </Section>
  );
};

export default Techonology;
