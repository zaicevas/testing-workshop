import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyPage from "./MyPage";

describe("<MyPage />", () => {
  it("renders correctly", () => {
    const { container } = render(<MyPage title="Hello world" />);

    expect(container).toMatchSnapshot();
  });

  it("updates title after click", () => {
    render(<MyPage title="Hello world" />);

    userEvent.click(screen.getByText("Change title"));

    expect(screen.getByText("Mutated title")).toBeInTheDocument();
  });
});
