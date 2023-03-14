import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Select } from './Select';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args: any) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Some value',
  options: [
    { value: '1', content: 'First' },
    { value: '2', content: 'Second' }
  ]
};