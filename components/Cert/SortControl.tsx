import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  color: #bdbdbd;
  align-items: center;
`;

const Button = styled.div`
  cursor: pointer;
  color: #9e9e9e;
  background: ${p => p.theme.colors.grey};
  border-radius: 4px;
  padding: 0.5em 0.75em;
  margin-left: 10px;
  &:hover {
    opacity: 0.8;
  }
`;

const SortControl = () => {
  return (
    <Wrapper>
      <p>排序</p>
      <Button>依時間</Button>
    </Wrapper>
  );
};

export default SortControl;
