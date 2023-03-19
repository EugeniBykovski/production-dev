import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args: any) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: `
    import { Code } from './Code';

    export default {
      title: 'shared/Code',
      component: Code,
      argTypes: {
        backgroundColor: { control: 'color' },
      },
    } as ComponentMeta<typeof Code>;

    const Template: ComponentStory<typeof Code> = (args: any) => <Code {...args} />;
  `,
};