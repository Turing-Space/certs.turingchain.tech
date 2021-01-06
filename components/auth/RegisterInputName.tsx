import { useCallback, FC, KeyboardEvent } from 'react';
import styled from 'styled-components';
import Section from '@/components/Section';
import { media } from '@/utils/theme';
import TextInput from '@/components/TextInput';
import Button from '@/components/Button';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';
import { RegisterPageState } from './Register';

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

const RegisterWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  ${media('desktop')} {
    width: 100%;
  }
`;

const StyledTextInput = styled(TextInput)`
  && {
    width: 50%;
    margin-bottom: 60px;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.7em 1em;
  margin-top: 2em;
`;

const InfoWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 40px 40px 72px 40px;
  background-color: #ffffff;
  font-weight: bold;
  > p {
    color: #a80100;
    font-size: 4vmin;
    letter-spacing: 1.7px;
    display: block;
    max-width: 397px;
    width: 100%;
    margin-bottom: 100px;
    ${media('desktop')} {
      font-size: 24px;
    }
  }

  ${media('desktop')} {
    margin-bottom: 100px;
  }

  ${media('phone')} {
    margin-bottom: 0px;
  }
`;

type TProps = {
  userName: string;
  onChangePageState: (route: RegisterPageState) => void;
  onChangeUserName: (name: string) => void;
};

const InputName: FC<TProps> = props => {
  const { t } = useTranslation(i18nNamespace.Register);

  const onInputName = () => {
    if (props.userName) {
    }
  };

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      switch (e.keyCode) {
        // press enter
        case 13: {
          onInputName();
          break;
        }
      }
    },
    [onInputName],
  );

  return (
    <StyledSection width="100vw" justifyContent="flex-start" row fullscreen>
      <RegisterWrapper>
        <InfoWrapper>
          <p>{t('InputName.ask')}</p>
          <StyledTextInput
            placeholder={t('InputName.enter')}
            value={props.userName}
            onChange={props.onChangeUserName}
            input={{
              type: 'name',
              onKeyDown,
            }}
          />
          <StyledButton disabled={!props.userName} onClick={onInputName}>
            {t('Set.next')}
          </StyledButton>
        </InfoWrapper>
      </RegisterWrapper>
    </StyledSection>
  );
};

export default InputName;
