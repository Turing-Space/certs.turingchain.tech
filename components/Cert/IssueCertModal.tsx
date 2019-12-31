import { useState, FC, useCallback, useContext } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Modal from 'react-modal';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { media } from '@/utils/theme';
import DayPickerInputComponent from '@/components/DayPickerInputComponent';
import Button from '@/components/Button';
import { CertsContext } from '@/contexts/certs';
import Title from '@/components/Cert/Title';

import TextInput from '../TextInput';
import InputFile from '../InputFile';
import { useTranslation } from 'react-i18next';
import { i18nNamespace } from '@/constants';

const Wrapper = styled.div`
  width: calc(100vw - 6em);
  ${media('pad')} {
    width: 70vw;
  }
  ${media('desktop')} {
    width: 60vw;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
  ${Button} {
    width: 10rem;
    padding: 12px 1em;
    margin-right: 1em;
  }
`;

const LabelWrapper = styled.div`
  color: ${p => p.theme.colors.primary};
  margin-bottom: 0.5em;
  font-weight: 400;
  letter-spacing: 1px;
`;

const ItemWrapper = styled.div`
  margin: 1.25em 0;
`;

type TProps = {
  visible: boolean;
  onClose: () => void;
};

const IssueCertModal: FC<TProps> = ({ visible, onClose }) => {
  const [issuer, setIssuer] = useState('');
  const [certName, setCertName] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [file, setFile] = useState<File | null>(null);
  const [certUri, setCertUri] = useState<string>('');
  const { updateCerts } = useContext(CertsContext);
  const { t } = useTranslation(i18nNamespace.Issuer);

  const onCancel = useCallback(() => {
    setIssuer('');
    setCertName('');
    setDate(new Date());
    setCertUri('');
    setFile(null);
    onClose();
  }, []);

  const onAddCert = () => {
    if (issuer && certName && date && file) {
      updateCerts(certs => [
        ...certs,
        {
          issuer,
          name: certName,
          coverUri: certUri,
          verified: false,
          ipfs: String(Math.random() * 1000),
          timestamp: date.getTime(),
          pin: false,
          progress: [true, false, false, false, false],
        },
      ]);
      onClose();
    }
  };

  return (
    <Modal
      className="ReactModal__Custom_Content"
      isOpen={visible}
      onRequestClose={onClose}
      style={{
        overlay: {
          background: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        content: {
          position: 'relative',
          borderRadius: '10px',
          backgroundColor: '#fafafa',
          padding: '2em',
        },
      }}
    >
      <Wrapper>
        <Title style={{ marginBottom: '1em' }}>{t('CertModal.addCert')}</Title>
        <TextInput
          label="發證單位"
          value={issuer}
          onChange={value => setIssuer(value)}
          placeholder="國立高雄科技大學"
        />
        <TextInput
          label={t('Issue.step1.certName')}
          value={certName}
          onChange={value => setCertName(value)}
          placeholder="區塊鏈集訓證書"
        />
        <ItemWrapper>
          <LabelWrapper>
            <label>發證日期</label>
          </LabelWrapper>
          <DayPickerInput
            format="YYYY-MM-DD"
            formatDate={(d, format) => dayjs(d).format(format)}
            value={date}
            placeholder="YYYY-MM-DD"
            onDayChange={d => setDate(d)}
            keepFocus={false}
            component={DayPickerInputComponent}
          />
        </ItemWrapper>
        <ItemWrapper>
          <LabelWrapper>
            <label>上傳證書</label>
          </LabelWrapper>
          <InputFile
            file={file}
            onChange={f => {
              setFile(f);
              if (f) {
                const reader = new FileReader();
                reader.onload = (e: any) => {
                  if (e && e.target && e.target.readyState === 2) {
                    setCertUri(e.target.result);
                  }
                };

                // when the file is read it triggers the onload event above.
                reader.readAsDataURL(f);
              }
            }}
            description="* 檔案限制 1 M"
            buttonText={'上傳圖檔'}
            accept=".png,.jpg,.jpeg"
          />
        </ItemWrapper>
        {/* {certUri && (
          <img style={{ width: '100%', maxHeight: '200px' }} src={certUri} />
        )} */}

        <Row>
          <Button mode="white" onClick={onCancel}>
            取消
          </Button>
          <Button onClick={onAddCert}>新增</Button>
        </Row>
      </Wrapper>
    </Modal>
  );
};
export default IssueCertModal;
