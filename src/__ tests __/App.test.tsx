import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Input from "../components/Input";

const mockOnChange = jest.fn();

describe("Input", () => {
  it("should render with input and apply props", () => {
    const labelText = "Test Label";
    const inputValue = "Test Value";

    const { getByRole } = render(
      <Input
        label={labelText}
        value={inputValue}
        type="text"
        placeholder="Enter text"
        onChange={mockOnChange}
      />
    );

    const inputElement = getByRole("textbox") as HTMLInputElement;

    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe(inputValue);
  });
});
