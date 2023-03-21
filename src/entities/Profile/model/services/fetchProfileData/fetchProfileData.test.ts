import { fetchProfileData } from './fetchProfileData';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

const data = {
  username: 'admin',
  age: 25,
  country: Country.America,
  lastname: 'Markov',
  firstname: 'Mark',
  city: 'London',
  currency: Currency.EUR,
}

describe('fetchProfileData.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data}))
    
    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data)
  })

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected');
  })
})