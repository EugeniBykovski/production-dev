import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) return [ValidateProfileErrors.NO_DATA]

  const {
    firstname,
    lastname,
    age,
    country
  } = profile

  const errors: ValidateProfileErrors[] = []

  if (!firstname || !lastname) errors.push(ValidateProfileErrors.INCORRECT_USER_DATA)
  if (!age || !Number.isInteger(age)) errors.push(ValidateProfileErrors.INCORRECT_AGE)
  if (!country) errors.push(ValidateProfileErrors.INCORRECT_COUNTRY)

  return errors
}