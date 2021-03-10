import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import { i18nNamespace } from '@/constants';
import { Router } from '@/i18n';

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
`;

const PreviousPage = styled.p`
  position: absolute;
  left: 0;
  top: 20vh;
  left: 10vh;
  z-index: 10;
  cursor: pointer;
  font-size: 1em;
  color: ${p => p.theme.colors.websiteCatelogWordGold};
  &:hover {
    opacity: 0.75;
  }
`;

const Paragraph = styled.div`
  margin-bottom: 2em;
`;

const Title = styled(H2)`
  margin: 4em auto 1em;
  max-width: 70vw;
  color: ${p => p.theme.colors.websiteCatelogWordGold};

  ${media('largeDesktop')} {
    max-width: 55vw;
  }
`;

const DescriptionTitle = styled(Description)`
  width: 60%;
  font-size: ${p => p.theme.fontSize.bigger};
  font-weight: 500;
  margin: 0 auto 1em;
  text-align: left;
  line-height: 1.2;
  letter-spacing: 1px;
`;

const StyledDescription = styled(Description)<{ right?: boolean }>`
  width: 60%;
  text-align: ${p => (p.right ? 'right' : 'left')};
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;
  color: ${p => p.theme.colors.backgroundWordDarkGrey};
`;

const Security: FC = () => {
  const { t } = useTranslation(i18nNamespace.Home);
  const onPageClick = useCallback((route: string) => {
    Router.push(route);
    scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <PreviousPage onClick={() => onPageClick('/..')}>回上一頁</PreviousPage>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>資訊安全政策</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeInUp" animateOnce delay={300}>
        <Paragraph>
          <StyledDescription right>
            版本：v1.0
            <br />
            發行日期：2021/02/05
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>1. 目的</DescriptionTitle>
          <StyledDescription>
            鑑於資訊安全乃維繫各項服務安全運作之基礎，為確保台灣圖靈鏈股份有限公司（以下簡稱本公司）人員、資料、資訊系統、設備及網路之安全，特訂定資訊安全政策（以下簡稱本文件），作為本公司資訊安全管理系統(以下簡稱ISMS)的最高指導原則。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>2. 目標</DescriptionTitle>
          <StyledDescription>
            本公司資訊安全目標為：確保重要資訊及服務之機密性（Confidentiality）、完整性（Integrity）、可用性（Availability）與遵循性（Compliance）。並依各階層與職能定義及量測資訊安全績效之量化指標，以確認ISMS實施狀況及是否達成資訊安全目標。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>3. 適用範圍</DescriptionTitle>
          <StyledDescription>
            本ISMS考量本公司內部及外部議題、關注方之需要及期望，以及本公司活動與其他組織活動間之介面及相依性，適用範圍為：Turing
            Chain
            區塊鏈履歷服務之軟體開發、測試、營運及作業環境，包括：實體辦公室區域、雲端系統、開發人員、軟體、營運資料、系統管理單位及相關作業流程。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>4. 涵蓋內容</DescriptionTitle>
          <StyledDescription>
            ISMS包括內容如下，有關單位及人員就下列事項，應訂定對應之管理規範或實施計畫，並據以實施及定期評估實施成效：
            <br />
            ● 資訊安全組織與管理審查
            <br />
            ● 風險管理
            <br />
            ● 文件與記錄管理
            <br />
            ● 資訊安全內部稽核
            <br />
            ● 人力資源安全管理
            <br />
            ● 資產管理
            <br />
            ● 存取控制管理
            <br />
            ● 實體與環境安全管理
            <br />
            ● 運作安全與密碼學
            <br />
            ● 通訊安全管理
            <br />
            ● 系統獲取、發展與維護管理
            <br />
            ● 供應商關係管理
            <br />
            ● 資訊安全事故管理
            <br />
            ● 營運持續管理
            <br />● 遵循性管理
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>5. 組織與權責</DescriptionTitle>
          <StyledDescription>
            為確保ISMS能有效運作，應明定資訊安全組織及權責，以推動及維持各類管理、執行與查核等工作之進行。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>6. 實施原則</DescriptionTitle>
          <StyledDescription>
            ISMS之實施應依據規劃（Plan）、執行（Do）、查核（Check）及改善（Act）流程模式，以週而復始、循序漸進的精神，確保資訊業務運作之有效性及持續改善。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle> 7. 審查與評估</DescriptionTitle>
          <StyledDescription>
            7.1.
            本文件應於重大變更或至少每年評估審查一次，以反映相關法令法規、技術、業務及相關部門等最新發展現況，確保資訊安全實務作業之有效性。
            <br />
            7.2.
            本文件應依據審查結果進行修訂，並經本公司負責人簽核發佈後始生效。
            <br />
            7.3.
            本文件訂定或修訂後應以書面、電子郵件、文件管理系統或其他方式告知關注方，如：合作夥伴、所屬員工、供應商等。
          </StyledDescription>
        </Paragraph>
      </AnimatedWrapper>
    </Section>
  );
};

export default Security;
