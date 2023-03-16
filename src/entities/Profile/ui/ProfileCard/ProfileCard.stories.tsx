import { ComponentStory, ComponentMeta } from '@storybook/react'
import 'app/styles/index.scss'
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';
import avatar from 'shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  }
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    age: 25,
    country: Country.America,
    lastname: 'Markov',
    firstname: 'Mark',
    city: 'London',
    currency: Currency.EUR,
    avatar
  }
};

export const withError = Template.bind({});
withError.args = {
  error: 'error string'
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true
};