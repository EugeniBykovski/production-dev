import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import { componentRender } from "shared/lib/tests/componentRender/componentRender";

describe('Button', () => {
  test('Test render sidebar', () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  });

  test('Test toggle', () => {
    componentRender(<Sidebar />)

    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar-toggle')).toBeInTheDocument()

    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  });
})