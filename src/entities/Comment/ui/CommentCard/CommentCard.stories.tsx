import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { CommentCard } from './CommentCard';

export default {
  title: 'entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args: any) => <CommentCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: '1',
    text: 'some text',
    user: {
      id: '1',
      username: 'Mark'
    }
  } 
};

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: '1',
    text: 'some text',
    user: {
      id: '1',
      username: 'Mark'
    }
  } ,
  isLoading: true
};