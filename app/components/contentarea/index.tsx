import { Grid } from '@mui/material';
import React from 'react';
import ContentareaAtom from '../../atoms/layout/contentarea';
import CardComponent from '../card';

const data = [
  {
    albumId: 1,
    id: 1,
    title: 'What is Lorem Ipsum?',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
    context:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsu...',
  },
  {
    albumId: 1,
    id: 2,
    title: 'Why do we use it?',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
    context:
      'It is a long established fact that a reader will be distracted by the readable content of a page when...',
  },
  {
    albumId: 1,
    id: 3,
    title: 'Where does it come from?',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
    context:
      'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of...',
  },
  {
    albumId: 1,
    id: 4,
    title: 'Where can I get some?',
    url: 'https://via.placeholder.com/600/d32776',
    thumbnailUrl: 'https://via.placeholder.com/150/d32776',
    context:
      'There are many variations of passages of Lorem Ipsum available, but the majority have...',
  },
  {
    albumId: 1,
    id: 5,
    title: 'Why do we use it?',
    url: 'https://via.placeholder.com/600/f66b97',
    thumbnailUrl: 'https://via.placeholder.com/150/f66b97',
    context:
      "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    albumId: 1,
    id: 6,
    title: 'What is Lorem Ipsum?',
    url: 'https://via.placeholder.com/600/56a8c2',
    thumbnailUrl: 'https://via.placeholder.com/150/56a8c2',
    context:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
  },
  {
    albumId: 1,
    id: 7,
    title: 'All the Lorem Ipsum generators',
    url: 'https://via.placeholder.com/600/b0f7cc',
    thumbnailUrl: 'https://via.placeholder.com/150/b0f7cc',
    context:
      'on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet...',
  },
];

export default function ContentareaComponent({ ...props }) {
  return (
    <ContentareaAtom>
      <Grid container spacing={2}>
        {data.map((each: any) => (
          <CardComponent
            key={each.id}
            title={each.title}
            avatarLtr={each.thumbnailUrl}
            avatarColr="red"
            img={each.url}
          />
        ))}
      </Grid>
    </ContentareaAtom>
  );
}
