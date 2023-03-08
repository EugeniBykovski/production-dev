import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal';
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At deleniti accusamus labore obcaecati tempora saepe reiciendis ipsum pariatur qui soluta!'
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. At deleniti accusamus labore obcaecati tempora saepe reiciendis ipsum pariatur qui soluta!'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]