import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args: any) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
  loginForm: { username: 'name', password: 'abc123' }
})]

export const PrimaryWithError = Template.bind({});
PrimaryWithError.args = {};
PrimaryWithError.decorators = [StoreDecorator({
  loginForm: { username: 'name', password: 'abc123', error: 'Error message' }
})]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
  loginForm: { isLoading: true }
})]