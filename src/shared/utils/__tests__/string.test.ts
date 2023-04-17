import { describe, it, expect } from 'vitest';
import { deepTrim } from "../string";

describe("String utils", () => {
    describe("DeepTrim", () => {
        it.each([
            {
                title: "an empty string",
                actual: "  some value  ",
                expected: "some value",
            },
            {
                title: "a list with empty strings",
                actual: ["", " Something ", ""],
                expected: ["", "Something", ""],
            },
            {
                title: "a list of empty strings",
                actual: ["", "", ""],
                expected: ["", "", ""],
            },
            {
                title: "a nested string list",
                actual: { foo: ["", " Something ", "", null] },
                expected: { foo: ["", "Something", "", null] },
            },
            {
                title: "a nested empty string",
                actual: { foo: "     " },
                expected: { foo: "" },
            },
            {
                title: "two nested empty strings",
                actual: { foo: { bar: "   " }, qux: { pix: "   ", empty: null } },
                expected: { foo: { bar: "" }, qux: { pix: "", empty: null } },
            },
            {
                title: "a nested empty string and something else",
                actual: { foo: { bar: "     " }, qux: "      Something   ", num: 50, obj: {}, bl: false, empty: null },
                expected: { foo: { bar: "" }, qux: "Something", num: 50, obj: {}, bl: false, empty: null },
            },
            {
                title: "a nested empty string in a list",
                actual: { foo: [{ bar: "  ", num: 12 }, " Something ", 354, true] },
                expected: { foo: [{ bar: "", num: 12 }, "Something", 354, true] },
            },
            {
                title: "a nested empty array",
                actual: { foo: [[], " Something ", 5, false] },
                expected: { foo: [[], "Something", 5, false] },
            },
            {
                title: "a nested empty string in an empty array",
                actual: { foo: [[" ", " "], " Something "] },
                expected: { foo: [["", ""], "Something"] },
            },
            {
                title: "a nested empty string in a nested list",
                actual: { foo: [[{ bar: " " }], " Something "] },
                expected: { foo: [[{ bar: "" }], "Something"] },
            },
            {
                title: "a nested object with empty string",
                actual: { foo: { bar: true, qux: " ", num: 4 } },
                expected: { foo: { bar: true, qux: "", num: 4 } },
            },
        ])("nullifies empty strings", ({ actual, expected }) => {
            const result = deepTrim(actual);
            expect(result).toEqual(expected);
        });
    });
});
