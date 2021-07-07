import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as api from "./data/api/title";
import { noop } from "lodash";

import MyPage from "./MyPage";

describe("<MyPage />", () => {
  const getTitle = jest.spyOn(api, "getTitle");

  beforeEach(() => {
    getTitle.mockReturnValue(new Promise(noop));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // it('renders correctly', () => {
  //   const { container } = render(<MyPage title="Hello world" />)

  //   expect(container).toMatchSnapshot()
  // })

  // it('updates title after click', () => {
  //   render(<MyPage title="Hello world" />)

  //   userEvent.click(screen.getByText('Change title'))

  //   expect(screen.getByText('Mutated title')).toBeInTheDocument()
  // })

  it("tries to fetch title", () => {
    render(<MyPage />);

    expect(getTitle).toHaveBeenCalledTimes(1);
  });

  it("renders loader", () => {
    render(<MyPage />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders fetched title", async () => {
    // arrange
    getTitle.mockResolvedValue({
      title: "Mock title",
    });

    // act
    render(<MyPage />);

    // assert
    expect(await screen.findByText("Mock title")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    // await waitFor(() => expect(getTitle).toHaveBeenCalledTimes(2))
    // await waitFor(() =>
    //   expect(screen.getByText("Mock title")).toBeInTheDocument()
    // );
  });

  it.todo("renders error after unsuccessful response");
  // const fetchSpy = jest.spyOn(window, "fetch");
  // fetchSpy.mockRejectedValue(5);

  // render(<MyPage />);

  // expect(await screen.findByText("Error")).toBeInTheDocument();

  it("tries to fetch title after response", async () => {
    getTitle.mockResolvedValue({
      title: "Mock title",
    });

    render(<MyPage />);

    await waitFor(() => expect(getTitle).toHaveBeenCalledTimes(2));
  });
});
