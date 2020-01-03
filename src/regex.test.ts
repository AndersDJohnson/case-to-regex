import { getRegex } from "./regex";

const arr = ["OneClass", "oneClass", "one_class", "One_Class"];

describe("getRegex", () => {
  arr.forEach(a1 => {
    test(`should make source for ${a1}`, () => {
      expect(getRegex(a1).source).toEqual("one.*class");
    });
  });

  arr.forEach(a1 => {
    arr.forEach(a2 => {
      test(`should match ${a1} against ${a2}`, () => {
        expect(getRegex(a1).test(a2)).toBe(true);
      });
    });
  });

  test("should work for oneClass", () => {
    expect(getRegex("oneClass").source).toBe("one.*class");
  });

  test("should work for One_Class", () => {
    expect(getRegex("One_Class").source).toBe("one.*class");
  });

  test("should work for dotted paths", () => {
    expect(
      getRegex("some.access_path.thing").test("Some.AccessPath.Thing")
    ).toBe(true);
  });
});
