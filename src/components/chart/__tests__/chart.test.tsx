import {test} from "@jest/globals";
import {render, screen} from "@testing-library/react";
import Chart from "../chart";
import {expect} from "@storybook/test";

test('should render the array of posts',() => {
    render(<Chart />);
    const upcomingElement = screen.getByText("My Chart");
    expect(upcomingElement).toBeInTheDocument();
});
