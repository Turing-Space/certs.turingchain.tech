import { FC } from 'react';
import styled from 'styled-components';
import { TiPin } from 'react-icons/ti';
import { TCerts } from '@/contexts/user';
import { getRelativePath } from '@/utils';
import theme from '@/themes/theme';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 1em;
`;

const CertWrapper = styled.div`
  position: relative;
  width: 31%;
  margin: 0 1.75% 3%;
  background: ${p => p.theme.colors.white};
  padding: 1em 1.5em;
  font-weight: 400;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 0px rgb(0, 0, 0, 0.1);

  &:first-child {
    margin-left: 0;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  > .issuer {
    color: ${p => p.theme.colors.primary};
    font-size: ${p => p.theme.fontSize.smaller};
    margin-bottom: 0.5em;
  }

  > .name {
    font-weight: 500;
    letter-spacing: 0.5px;
    margin-bottom: 1em;
    height: 2.5em;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .create-data {
    font-size: ${p => p.theme.fontSize.smaller};
    color: #bdbdbd;
  }
`;

const CertCover = styled.div<{ src: string }>`
  width: 100%;
  height: 8.5em;
  background: ${p => p.theme.colors.white} url(${p => p.src}) no-repeat
    center/contain;
  margin-bottom: 1em;
`;

const Icon = styled.img`
  position: absolute;
  width: 2em;
  bottom: 1em;
  right: 1.5em;
`;

const PinIcon = styled(TiPin)`
  position: absolute;
  top: 1em;
  right: 1.5em;
`;

type TProps = {
  certs: TCerts[];
};

const Certs: FC<TProps> = ({ certs }) => {
  return (
    <Wrapper>
      {certs.map(cert => (
        <CertWrapper key={cert.issuer + cert.name}>
          <CertCover src={cert.coverUri} />
          <p className="issuer">{cert.issuer}</p>
          <p className="name">{cert.name}</p>
          <p className="create-data">June 2019</p>
          <Icon
            src={getRelativePath('/static/icon/icon-certicheck.png')}
            srcSet={`${getRelativePath(
              '/static/icon/icon-certicheck@2x.png',
            )} 2x, ${getRelativePath(
              '/static/icon/icon-certicheck@3x.png',
            )} 3x`}
          />
          {cert.pin && <PinIcon color={theme.colors.primary} size="1.1em" />}
        </CertWrapper>
      ))}
    </Wrapper>
  );
};

export default Certs;
