import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBase_CatAtomProps } from './catAtom.mocks';
import CatAtom, { CatAtomProps } from './index';
export default {
  title: 'atoms/content/cat',
  component: CatAtom,
  argType: {},
} as ComponentMeta<typeof CatAtom>;

// More on component templates
const Template: ComponentStory<typeof CatAtom> = (args) => (
  <CatAtom {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBase_CatAtomProps.base,
} as CatAtomProps;
