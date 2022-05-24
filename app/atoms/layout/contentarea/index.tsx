import { Container, styled } from '@mui/material';
import styles from './styles';

const Contentarea = styled('div')`
  ${styles}
`;

interface ContentareaAtomProps {
  children?: React.ReactNode | string;
}

export default function ContentareaAtom(props: ContentareaAtomProps) {
  return (
    <Contentarea>
      <Container>{props?.children}</Container>
    </Contentarea>
  );
}
