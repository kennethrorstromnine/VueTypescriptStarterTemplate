jest.mock("@/services/a.service"); // Mocker service med predifeneret svar
import { specificService } from "@/services/a.service";

/**
 * Eksempel på unit test af en service
 * https://jestjs.io/docs/en/tutorial-async
 */

it("works with promises", () => {
  expect.assertions(1);  // https://jest-bot.github.io/jest/docs/expect.html#expectassertionsnumber
  return specificService.list().then(response => {
    const list = Object.assign([], response.data);
    expect(list.length).toEqual(2);
  });
});
