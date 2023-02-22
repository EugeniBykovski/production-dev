import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe('Button', () => {
  test('Test render', () => {
    render(<Button>Test</Button>)
    expect(screen.getByAltText('Test')).toBeInTheDocument()
  });

  test('Test clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByAltText('Test')).toHaveClass('clear')
    screen.debug()
  });
})