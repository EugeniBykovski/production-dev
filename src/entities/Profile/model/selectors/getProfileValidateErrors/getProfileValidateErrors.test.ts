import { ValidateProfileErrors } from 'entities/Profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { StateSchema } from 'app/providers/StoreProvider';

describe('getProfileValidateErrors.test', () => {
  test('should work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileErrors.SERVER_ERROR,
          ValidateProfileErrors.INCORRECT_AGE
        ]
      }
    }

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileErrors.SERVER_ERROR,
      ValidateProfileErrors.INCORRECT_AGE
    ])
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})