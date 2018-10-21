import { Items } from "./optional-model";

describe("OptionalModel", () => {
  it("should add a single item to the items list", () => {
    const sut = new Items();
    const expected = sut.items.length + 1;
    sut.appendItems({
      id: 17,
      title: "Preact",
      description: "Preact is a React-like JavaScript UI library."
    });
    const actual = sut.items.length;
    expect(actual).toEqual(expected);
  });
});
