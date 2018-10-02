import * as textUtils from "@/utils/text";

/**
 * Eksempel på unit test af en util funktion
 *
 */

it("simple unit test", () => {
  expect(textUtils.isEmptyOr("abc", "")).toBe(false);
});
