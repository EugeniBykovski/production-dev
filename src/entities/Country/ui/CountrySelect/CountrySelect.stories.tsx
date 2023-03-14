import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { CountrySelect } from './CountrySelect';

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args: any) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};