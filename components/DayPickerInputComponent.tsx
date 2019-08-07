import React from 'react';
import styled from 'styled-components';
import { IoMdCalendar } from 'react-icons/io';

const InputWrapper = styled.div`
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: solid 1px #e6e6e6;
  background-color: white;
  padding: 0.5rem 12px;

  > input {
    color: #616161;
  }
`;

export default class DayPickerInputComponent extends React.PureComponent<any> {
  // use class component to let ref work
  render() {
    return (
      <InputWrapper>
        <input {...this.props} />
        <IoMdCalendar color="rgb(204, 204, 204)" size="1.5em" />
      </InputWrapper>
    );
  }
}
