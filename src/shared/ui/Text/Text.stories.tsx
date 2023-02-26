import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args: any) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  description: 'some text'
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  description: 'some text',
  theme: TextTheme.ERROR
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title'
};

export const onlyDescription = Template.bind({});
onlyDescription.args = {
  description: 'some text'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  description: 'some text'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title'
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyDescriptionDark = Template.bind({});
onlyDescriptionDark.args = {
  description: 'some text'
};
onlyDescriptionDark.decorators = [ThemeDecorator(Theme.DARK)]