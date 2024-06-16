import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SalaryForm, { SalaryFormProps } from "../components/SalaryForm"; // Adjust the import path as per your project structure
import { salaryRanges } from "../constants/constants";

const mockUpdateFields = jest.fn();

const props: SalaryFormProps = {
  salary: "1000-2000",
  updateFields: mockUpdateFields,
};

describe("SalaryForm component", () => {
  it("renders radio buttons with correct labels and initial checked state", () => {
    render(<SalaryForm {...props} />);

    salaryRanges.forEach((range) => {
      const radioElement = screen.getByLabelText(range.label);
      expect(radioElement).toBeInTheDocument();
    });

    const checkedRadio = screen.getByLabelText("1.000 - 2.000");
    expect(checkedRadio).toBeChecked();
  });

  it("calls updateFields function with selected salary value on change", () => {
    render(<SalaryForm {...props} />);

    const radioToSelect = screen.getByLabelText("2.000 - 3.000");
    fireEvent.click(radioToSelect);

    expect(mockUpdateFields).toHaveBeenCalledTimes(1);
    expect(mockUpdateFields).toHaveBeenCalledWith({ salary: "2000-3000" });
  });
});
