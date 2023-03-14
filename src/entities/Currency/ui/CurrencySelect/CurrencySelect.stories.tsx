import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args: any) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {};