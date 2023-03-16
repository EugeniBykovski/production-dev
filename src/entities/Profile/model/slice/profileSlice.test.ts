import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, profileActions, profileReducer, updateProfileData, ValidateProfileErrors } from 'entities/Profile';

const data = {
  username: 'admin',
  age: 25,
  country: Country.America,
  lastname: 'Markov',
  firstname: 'Mark',
  city: 'London',
  currency: Currency.EUR,
}

describe('profileSlice.test', () => {
  test('test set readonly', async () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false }

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true })
  })

  test('test set cancel edit', async () => {
    const state: DeepPartial<ProfileSchema> = {
      data, form: { username: '' }
    }

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({ 
        readonly: true,
        validateErrors: undefined,
        data,
        form: data 
      })
  })

  test('test set update profile', async () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '' }
    }

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: 'name'
    })))
      .toEqual({ 
        form: { username: 'name' }
      })
  })

  test('test set update profile service pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR]
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({ 
        isLoading: true,
        validateErrors: undefined
      })
  })

  test('test set update profile service fulfilled', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    }

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({ 
        isLoading: false,
        validateErrors: undefined,
        readonly: true,
        form: data,
        data
      })
  })
})