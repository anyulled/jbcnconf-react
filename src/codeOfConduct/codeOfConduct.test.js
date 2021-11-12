import React from 'react';
import "@testing-library/jest-dom";
import CodeOfConduct from "./CodeOfConduct";
import {render, screen} from "@testing-library/react";

test("<CodeOfConduct>", () => {
    render(<CodeOfConduct/>);
    let codeOfConduct = screen.getByText("CODE OF CONDUCT");
    expect(codeOfConduct).toBeInTheDocument();
});
