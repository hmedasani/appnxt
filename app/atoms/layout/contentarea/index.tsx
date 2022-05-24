import { styled } from '@mui/material';

const Contentarea = styled('div')`
  display: flex;
  flex-grow: 1;
`;

interface ContentareaAtomProps {
  children?: React.ReactNode | string;
}

export default function ContentareaAtom(props: ContentareaAtomProps) {
  return <Contentarea>{props?.children}</Contentarea>;
}
