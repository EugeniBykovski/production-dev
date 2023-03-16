import { validateProfileData } from './validateProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
  username: 'admin',
  age: 25,
  country: Country.America,
  lastname: 'Markov',
  firstname: 'Mark',
  city: 'London',
  currency: Currency.EUR,
}

describe('validateProfileData.test', () => {
  test('success', async () => {
    const result = validateProfileData(data)
    expect(result).toEqual([])
  })

  test('without first or last name', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA
    ])
  })

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_AGE
    ])
  })

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined })
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_COUNTRY
    ])
  })

  test('incorrect all errors', async () => {
    const result = validateProfileData({})
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ])
  })
})