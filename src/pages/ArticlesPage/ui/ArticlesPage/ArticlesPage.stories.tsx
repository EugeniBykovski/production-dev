import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args: any) => <ArticlesPage {...args} />;


export const Normal = Template.bind({});
Normal.args = {};