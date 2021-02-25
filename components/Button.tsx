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

  color: ${p => p.theme.colors.white};
  border-radius: 40px;
  letter-spacing: 0.92px;
  padding: 1em;
  transition: all 0.1s ease-in;

  border-radius: $border-rounded;
  margin: 10px;
  padding: 1em 3em;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-image: linear-gradient(
    to right,
    #ce893a 0%,
    #f3c77c 50%,
    #f3c77c 100%
  );
  transition: 0.5s;
  &:hover {
    background-position: right center;
    background-image: linear-gradient(
      to left,
      #ce893a 0%,
      #f3c77c 50%,
      #f3c77c 100%
    );
  }

  ${p =>
    p.disabled
      ? `
    opacity: 0.7;
  `
      : `
    opacity: 1;

  `}

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
