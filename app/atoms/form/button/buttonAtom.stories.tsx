import { ComponentMeta, ComponentStory } from '@storybook/react';
import { mockBase_ButtonAtomProps } from './buttonAtom.mocks';
import ButtonAtom, { ButtonAtomProps } from './index';
export default {
  title: 'atoms/form/button',
  component: ButtonAtom,
  argType: {},
} as ComponentMeta<typeof ButtonAtom>;

// More on component templates
const Template: ComponentStory<typeof ButtonAtom> = (args) => (
  <ButtonAtom {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBase_ButtonAtomProps.base,
} as ButtonAtomProps;
