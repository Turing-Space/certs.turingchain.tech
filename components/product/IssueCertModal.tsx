import { useState, FC, useCallback } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import Modal from 'react-modal';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { media } from '@/utils/theme';
import DayPickerInputComponent from '@/components/DayPickerInputComponent';
import Button from '@/components/Button';

import Title from './Title';
import TextInput from './TextInput';
import InputFile from '../InputFile';

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

type TProps = {
  visible: boolean;
  onClose: () => void;
};

const IssueCertModal: FC<TProps> = ({ visible, onClose }) => {
  const [issuer, setIssuer] = useState('');
  const [certName, setCertName] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [file, setFile] = useState<File | null>(null);

  const onCancel = useCallback(() => {
    setIssuer('');
    setCertName('');
    setDate(new Date());
    setFile(null);
    onClose();
  }, ['un-change']);

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
        <Title style={{ marginBottom: '1em' }}>新增證書</Title>
        <TextInput
          label="發證單位"
          value={issuer}
          onChange={value => setIssuer(value)}
          placeholder="國立高雄科技大學"
        />
        <TextInput
          label="證書名稱"
          value={certName}
          onChange={value => setCertName(value)}
          placeholder="區塊鏈集訓證書"
        />
        <div style={{ margin: '1.25em 0' }}>
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
        </div>
        <div style={{ margin: '1.25em 0' }}>
          <LabelWrapper>
            <label>上傳證書</label>
          </LabelWrapper>
          <InputFile file={file} onChange={setFile} buttonText={'上傳圖檔'} />
        </div>

        <Row>
          <Button mode="white" onClick={onCancel}>
            取消
          </Button>
          <Button>新增</Button>
        </Row>
      </Wrapper>
    </Modal>
  );
};
export default IssueCertModal;
