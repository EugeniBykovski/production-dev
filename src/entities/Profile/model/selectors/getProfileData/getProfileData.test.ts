import { getProfileData } from './getProfileData';
import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

describe('getProfileData.test', () => {
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
        data
      }
    }

    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})