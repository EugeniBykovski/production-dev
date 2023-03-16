import { getProfileForm } from './getProfileForm';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileForm.test', () => {
  test('should return some data', () => {
    const data = {
      username: 'admin',
      age: 25,
      country: Country.America,
      lastname: 'Markov',
      firstname: 'Mark',
      city: 'London',
      currency: Currency.EUR,
    }

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data
      }
    }

    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})