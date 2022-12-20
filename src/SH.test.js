import React from "react";
import SH from "./SH";
import { render, fireEvent} from '@testing-library/react';

// Render
test("it Should Render on the Screen", () => {
    render(<SH />)
})
// SnapShot
it("should Match the Snapshot", () => {
    const { asFragment } = render(<SH />)
    expect(asFragment()).toMatchSnapshot()
})
// New Item
test("should add New Item", () => {
    const { queryByText, getByLabelText } = render(<SH />)
    const input = getByLabelText("Add Item:")
    const btn = queryByText("Add to List")
    expect(queryByText("ProductName: Chocolate")).not.toBeInTheDocument()
    fireEvent.change(input, { target: { value: "Chocolate"}} )
    fireEvent.click(btn)
    expect(queryByText("ProductName: Chocolate")).toBeInTheDocument()
})