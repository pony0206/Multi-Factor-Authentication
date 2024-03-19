import {describe, it} from "@jest/globals";
import {Apis} from "@/utils/api.ts";
import {expect} from "@storybook/test";

describe("Rest API call function", () => {
    it('should return the array of posts', async () => {
        const res = await Apis.getPosts();
        expect(res.success).toBe(true);
        expect(res.data.posts.length).toBeGreaterThan(0);
    })
})