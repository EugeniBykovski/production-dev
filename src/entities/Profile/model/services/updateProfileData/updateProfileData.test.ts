import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const data = {
  username: 'admin',
  age: 25,
  country: Country.America,
  lastname: 'Markov',
  firstname: 'Mark',
  city: 'London',
  currency: Currency.EUR,
}

describe('updateProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ data }))
    
    const result = await thunk.callThunk()

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: data
      }
    })

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.SERVER_ERROR
    ])
  })

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      // @ts-ignore
      profile: {
        form: { ...data, lastname: '' }
      }
    })

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA
    ])
  })
})