import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { CommentList } from './CommentList';

export default {
  title: 'entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args: any) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'some text',
      user: {
        id: '1',
        username: 'Mark'
      }
    },
    {
      id: '2',
      text: 'some text',
      user: {
        id: '2',
        username: 'Kate'
      }
    }
  ]
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true
};