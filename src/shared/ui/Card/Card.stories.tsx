import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Text } from '../Text/Text';
import { Card } from './Card';

export default {
  title: 'entities/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => <Card {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: <Text title={'Test title'} description={'test description'} />
};