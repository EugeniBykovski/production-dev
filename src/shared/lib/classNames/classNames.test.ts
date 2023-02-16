import { classNames } from "shared/lib/classNames/classNames";

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2'
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods is true', () => {
    const expected = 'someClass class1 class2 hovered scrollable'
    expect(classNames('someClass', {hovered: true, scrollable: true}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods is false', () => {
    const expected = 'someClass class1 class2 scrollable'
    expect(classNames('someClass', {hovered: false, scrollable: true}, ['class1', 'class2'])).toBe(expected)
  })

  test('with mods is undefined', () => {
    const expected = 'someClass class1 class2 scrollable'
    expect(classNames('someClass', {hovered: undefined, scrollable: true}, ['class1', 'class2'])).toBe(expected)
  })
})