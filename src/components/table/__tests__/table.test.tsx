import {test} from "@jest/globals";
import {Apis} from "@/utils/api.ts";
import {render, screen} from "@testing-library/react";
import Table from "../table";
import {expect} from "@storybook/test";

test('should render the array of posts', async () => {
    const res = await Apis.getPosts();
    const posts = res.success ? res.data.posts : [];
    render(<Table data={posts} />);
    const upcomingElement = screen.getByText("Title");
    expect(upcomingElement).toBeInTheDocument();
});
