import styled from 'styled-components';

type TButtonProps = {
  disabled?: boolean;
  shadow?: boolean;
  mode?: 'primary' | 'white';
};

const Button = styled.button<TButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 12em;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border-radius: 40px;
  letter-spacing: 0.92px;
  padding: 1em;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: rgb(193, 76, 76);
  }

  opacity: ${p => (p.disabled ? 0.7 : 1)};

  ${p =>
    p.mode === 'white' &&
    `
      background-color: ${p.theme.colors.backgroundWhite};
      color: ${p.theme.colors.primary};
      border: solid 1px ${p.theme.colors.primary};
      font-weight: 500;

      &:hover {
        background-color: ${p.theme.colors.primary};
        color: ${p.theme.colors.white};
      }
    `};

  ${p =>
    p.shadow &&
    `
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.3);
  `}
`;

export default Button;
