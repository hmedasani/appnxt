import { Grid } from '@mui/material';
import React from 'react';
import ContentareaAtom from '../../atoms/layout/contentarea';
import CardComponent from '../card';

export default function ContentareaComponent({ ...props }) {
  return (
    <ContentareaAtom>
      <Grid container spacing={2}>
        <CardComponent title="Hello Card" avatarLtr="VK" avatarColr="red" />
        <CardComponent title="Brutunga" avatarLtr="PN" avatarColr="blue" />
        <CardComponent title="Sultan" avatarLtr="RG" avatarColr="green" />
        <CardComponent title="John Doe" avatarLtr="DK" avatarColr="gray" />
        <CardComponent title="The Fashion" avatarLtr="HM" avatarColr="yellow" />
        <CardComponent title="Squirrel" avatarLtr="GD" avatarColr="brown" />
      </Grid>
    </ContentareaAtom>
  );
}
