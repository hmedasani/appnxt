import { ComponentMeta, ComponentStory } from '@storybook/react';
import TemplateBase, { TemplateBaseProps } from './index';
import { mockBase_TemplateBaseProps } from './templateBase.mocks';
export default {
  title: 'templates/base',
  component: TemplateBase,
  argType: {},
} as ComponentMeta<typeof TemplateBase>;

// More on component templates
const Template: ComponentStory<typeof TemplateBase> = (args) => (
  <TemplateBase {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBase_TemplateBaseProps.base,
} as TemplateBaseProps;
