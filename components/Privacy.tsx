import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from '@/components/Section';
import H2 from '@/components/H2';
import { media } from '@/utils/theme';
import Description from '@/components/Description';
import { i18nNamespace } from '@/constants';

const AnimatedWrapper = styled(ScrollAnimation)`
  width: 100%;
  text-align: center;
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
  width: 70%;
  font-size: ${p => p.theme.fontSize.bigger};
  font-weight: 500;
  margin: 0 auto;
  text-align: left;
  line-height: 1.2;
  letter-spacing: 1px;
  margin-bottom: 1em;

  ${media('desktop')} {
    width: 60%;
  }
`;

const StyledDescription = styled(Description)<{ right?: boolean }>`
  width: 70%;
  text-align: ${p => (p.right ? 'right' : 'left')};
  letter-spacing: 0.5px;
  line-height: 2em;
  margin: 0 auto;
  color: ${p => p.theme.colors.backgroundWordDarkGrey};

  ${media('desktop')} {
    width: 60%;
  }
`;

const Privacy: FC = () => {
  const { t } = useTranslation(i18nNamespace.Home);
  return (
    <Section>
      <ScrollAnimation
        animateOnce
        animateIn="fadeInUp"
        style={{ width: '100%', textAlign: 'center' }}
      >
        <Title>隱私權政策</Title>
      </ScrollAnimation>
      <AnimatedWrapper animateIn="fadeInUp" animateOnce delay={300}>
        <Paragraph>
          <StyledDescription right>
            版本：v1.0
            <br />
            發行日期：2021/02/08
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>台灣圖靈鏈隱私權政策</DescriptionTitle>
          <StyledDescription>
            歡迎使用台灣圖靈鏈股份有限公司(以下簡稱「本公司」)所提供之服務。服務之內容包含：Turing
            Chain
            區塊鏈履歷服務及本網站(以下簡稱「本公司服務」)。為了保障您的權益及提供更好的使用者體驗，在您同意使用本網站及相關服務之前，請詳閱本隱私權政策(以下簡稱「本政策」)；您在了解本政策後開始使用本公司之各項服務，將視為您已閱讀、了解並同意本政策內容。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>1. 本政策的適用範圍</DescriptionTitle>
          <StyledDescription>
            本隱私權政策之適用範圍，包括您使用本網站（certs.turingchain.tech及含有
            turingchain.tech之子網域）及本公司服務（global.turingcerts.com及含有turingcerts.com子網域）時所提供之個人資料。
            您可能透過本網站所提供的連結，點選進入其他網站，但這些連結網站的隱私權政策與本政策可能不同，本政策並不適用於其他連結網站，建議您自行參考並仔細閱讀該連結網站中的隱私權政策。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>2. 個人資料蒐集之目的、類別與來源</DescriptionTitle>
          <StyledDescription>
            當您使用本公司服務時，你的個人資料蒐集之目的、類別與來源蒐集如下：
            <br />
            ● 蒐集來源
            <br />
            使用Turing Chain 區塊鏈履歷服務之發證方(本公司為資料處理者)
            <br />
            本公司
            <br />
            ● 本公司服務
            <br />
            Turing Chain 區塊鏈履歷服務
            <br />
            使用Turing Chain 區塊鏈履歷服務之發證方與本公司簽訂合約
            <br />
            網站
            <br />
            ● 法定特定目的
            <br />
            1. 119 發照與登記
            <br />
            2. 154 徵信
            <br />
            3. C102 約定或契約
            <br />
            4. 152 廣告或商業行為管理
            <br />
            5. 090 消費者、客戶管理與服務
            <br />
            6. 040 行銷（包含金控共同行銷業務）
            <br />
            7. 157 調查、統計與研究分析
            <br />
            8. 148 網路購物及其他電子商務服務
            <br />
            ● 蒐集個資
            <br />
            I. 姓名、電子郵遞地址、行動電話、地址；
            <br />
            ii. 身分證字號；
            <br />
            iii. 證照號碼；
            <br />
            iv. 學號、學校、成績；
            <br />
            v. 任職公司；
            <br />
            vi. 不動產資訊；
            <br />
            vii. 電子郵遞地址、電話號碼、機構名稱；
            <br />
            viii. cookies
            <br />
            ● 法定個資類別
            <br />
            1. C001 辨識個人者
            <br />
            2. C003 政府資料中之辨識者
            <br />
            3. C051 學校紀錄
            <br />
            4. C052 資格或技術
            <br />
            5. C061 現行之受僱情形
            <br />
            6. C032 財產
            <br />
            7. C001 辨識個人者
            <br />
            8. C132 未分類之資料
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>
            3. 個人資料利用之期間、地區、對象及方式
          </DescriptionTitle>
          <StyledDescription>
            期間：您要求停止使用或本公司服務停止之日止。
            <br />
            地區：您的個人資料將用於台灣地區及香港地區與日本地區(GCP region)。
            <br />
            對象：
            <br />
            1. 本公司：依使用Turing Chain
            區塊鏈履歷服務之發證方需求，處理及保護個人資料。
            <br />
            2. 發證方：使用Turing Chain 區塊鏈履歷服務之發證方管理其證照資料。
            <br />
            3. 收證方：查詢發證方核發之其個人證書。
            <br />
            方式：
            <br />
            本公司對於所蒐集之個人資料，均遵守個人資料保護法及本政策之規定，除有下列情形或符合個資法之規定外，本公司不會主動對第三人提供您於本公司所輸入之資訊：
            <br />
            I. 配合司法單位之調查；
            <br />
            ii. 配合相關政府機關依法律或職務需要之調查；
            <br />
            iii. 取得您的同意；
            <br />
            iv. 配合法律規定；
            <br />
            v. 內部分析與研究用途；
            <br />
            vi. 涉及委外業務而有必要時。
            <br />
            Cookies：
            <br />
            為了改善使用者體驗，本公司相關網站可能使用cookie技術，包括您使用連線設備的IP位址、使用時間之長短、使用的瀏覽器、瀏覽及點選資料記錄等，以利本網站進行網站活動之各種分析、資訊收集，並進而提供更適合使用者個人需要的服務；此記錄僅供本公司內部分析研究使用。
            如您不希望接受本公司相關網站使用cookie，請自行利用瀏覽器的設定，關閉cookie追蹤功能，但此舉可能造成使用者在使用本公司相關網站或參與活動時受到限制。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>4. 非本公司直接蒐集之個資責任</DescriptionTitle>
          <StyledDescription>
            您應擔保輸入及存放於本公司服務之資料，倘涉及第三人之個資時，已確實依照個資法相關規定蒐集、處理、利用。如有違反導致本公司及營運者、所屬人員或其他第三人受有任何損害，均應負責賠償。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>5. 資料之保護</DescriptionTitle>
          <StyledDescription>
            本公司將於合理之技術範圍內盡力保護您的個人資料，本網站主機均設有防火牆等相關的各項資訊安全設備及必要的安全防護措施，來防止個人資料被竊取、竄改、毀損、滅失或洩漏，只有經過授權之人員方能接觸您的個人資料，相關處理人員均負有保密義務，如有違反將依照相關法律規定處理。如因委外業務，有需要委託他人提供服務時，本公司亦會嚴格要求其遵守保密義務，並採取必要之措施以確定其確實遵守。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>6. 使用者自我保護措施</DescriptionTitle>
          <StyledDescription>
            請妥善保管您的資料，避免將個人資料及帳戶、密碼等資訊任意提供給他人，並請您透過安全或加密之網路使用本網站及相關服務，於使用完畢後，亦請您務必記得登出，若您使用公共電腦或與他人共享之電腦，亦切記關閉瀏覽器視窗、並清除瀏覽紀錄，以避免他人不法竊取或知悉您所輸入之訊息。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>7. 帳號或密碼被冒用之處理</DescriptionTitle>
          <StyledDescription>
            當您知悉帳號、密碼等個人資料遭人盜用時，請盡速通知客服人員，本公司有權暫停該帳號所生交易之處理及後續利用，並與您協商後續的處理方案。但前述因應措施不得解釋為本公司因此承諾或暗示對使用者負有任何形式之補償或賠償責任。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>8. 當事人權利</DescriptionTitle>
          <StyledDescription>
            依個人資料保護法，您可以與本公司聯絡（請參考本公司網站）請求行使以下權利：
            <br />
            1. 查詢或請求閱覽。
            <br />
            2. 製給複製本。
            <br />
            3. 補充或更正。
            <br />
            4. 請求停止蒐集、處理或利用。
            <br />
            5. 請求刪除。
            <br />
            6.
            上述權利之行使，本公司可能依法酌收必要成本費用，若因不符合申請程序、法律規定、本網站依法負有保存義務或法律另有規定之情況者，則可能無法依您的要求辦理。
          </StyledDescription>
        </Paragraph>

        <Paragraph>
          <DescriptionTitle>9. 隱私權政策之修正</DescriptionTitle>
          <StyledDescription>
            本公司將視實際需求隨時修改並更新使用者條款及隱私權政策，並公告於本網站中，不會另外個別通知使用者，建議您隨時注意並確認本網站之條款，以維護您瀏覽本網站之安全及相關權益；如不同意本公司之修正或更新，請即時向本公司終止服務，惟若繼續使用本網站及相關服務，則視同已接受條款之修正及更新。如您對上述內容或本網站有任何不明瞭之處或意見，請立即與服務人員聯繫
            <br />
            Email: apac@turingchain.tech。
          </StyledDescription>
        </Paragraph>
      </AnimatedWrapper>
    </Section>
  );
};

export default Privacy;
