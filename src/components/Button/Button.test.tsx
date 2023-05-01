import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

const mockClick = jest.fn();

describe("<Button />", () => {
  it("should render correctly", async () => {
    render(<Button handleClick={() => {}}>Read more</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Read more");
  });

  test("should call the click handler", async () => {
    render(<Button handleClick={mockClick}>Read more</Button>);
    fireEvent.click(screen.getByText("Read more"));
    expect(mockClick).toHaveBeenCalled();
  });

  test("should be disabled", async () => {
    render(
      <Button handleClick={() => {}} disabled={true}>
        Read more
      </Button>
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
