import { FC } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
import { getRelativePath } from '@/utils';
import Button from '@/components/Button';
import { Router } from '@/i18n';
// import { useRouter } from 'next/router';
// import Loading from '../Loading';

const StyledSection = styled(Section)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  > img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
const Logo = styled.img`
  width: 21vw;
  margin-top: 2%;
`;
const RegisterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.8);
  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledButton = styled(Button)`
  padding: 20px 0;
  font-size: 18px;
`;

const InfoWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  padding: 40px 40px 72px 40px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .textBox {
    color: #424242;
    font-size: 4vmin;
    text-align: center;
    line-height: 1.3;
    letter-spacing: 1.3px;
    display: block;
    max-width: 310px;
    width: 100%;
    margin: 35px 0 40px 0;
    p {
      > span {
        color: ${p => p.theme.colors.primary};
      }
    }
    ${media('desktop')} {
      font-size: 24px;
    }
  }
`;

const FinishPage: FC = () => {
  // const { query } = useRouter();
  // const { updateUser } = useContext(UserContext);
  // const [loading, setLoading] = useState<boolean>(false);

  const onConfirm = () => {
    Router.push('/product')
  }

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
        <Logo
          src={getRelativePath('/static/logo/image-new-get.png')}
          srcSet={`${getRelativePath(
            '/static/logo/image-new-get@2x.png',
          )} 2x, ${getRelativePath('/static/logo/image-new-get@3x.png')} 3x`}
        />
        <div className="textBox">
          <p>獲得<span>「創世玩家證書」</span></p>
          <p>—歡迎加入Turing Certs！</p>
        </div>
          <StyledButton onClick={onConfirm}>確認</StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default FinishPage;
