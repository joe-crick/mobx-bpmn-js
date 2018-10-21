import React from "react";
import { shallow } from "enzyme";
import { OptionalPage as OP } from "./OptionalPage";
import { hasItems } from "../../lib/list-utils";
import noop from "../../lib/noop";
import { mockEvent } from "../../lib/test-utils";

const defaultItems = {
  items: [
    {
      id: 1,
      title: "React",
      description:
        "React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      id: 2,
      title: "Backbone.js",
      description:
        "Backbone.js is a JavaScript library with a RESTful JSON interface and is based on the Model–view–presenter (MVP) application design paradigm. Backbone is known for being lightweight, as its only hard dependency is on one JavaScript library, Underscore.js, plus jQuery for use of the full library."
    },
    {
      id: 3,
      title: "AngularJS",
      description:
        "AngularJS (also written as Angular.js) is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications."
    }
  ]
};

describe("OptionalPage", () => {
  it("should initialize to the correct state", () => {
    const expected = { description: "", searchTerm: "", title: "" };
    const sut = shallow(<OP items={defaultItems} />);
    const actual = sut.state();
    expect(actual).toEqual(expected);
  });
  describe("Item Text Matching", () => {
    const matcher = new RegExp("test", "i");
    it("should determine if text is contained in the title of an item", () => {
      const expected = true;
      const sut = OP.hasText(matcher);
      const actual = sut({ title: "First test", description: "" });
      expect(actual).toEqual(expected);
    });
    it("should determine if text is contained in the description of an item", () => {
      const expected = true;
      const sut = OP.hasText(matcher);
      const actual = sut({ title: "", description: "Second test" });
      expect(actual).toEqual(expected);
    });
  });
  describe("Item Filtering", () => {
    it("should return all items if the search term is falsy", () => {
      const expected = defaultItems.items;
      const sut = shallow(<OP items={defaultItems} />);
      const actual = sut.instance().getItems("");
      expect(actual).toEqual(expected);
    });
    it("should return a subset of items if the search term is valid", () => {
      const expected = true;
      const sut = shallow(<OP items={defaultItems} />);
      const actual = sut.instance().getItems("React").length === 1;
      expect(actual).toEqual(expected);
    });
    it("should return an empty set if there are no results found", () => {
      const expected = true;
      const sut = shallow(<OP items={defaultItems} />);
      const actual = !hasItems(sut.instance().getItems("Exoskeleton"));
      expect(actual).toEqual(expected);
    });
  });
  describe("Add new Framework", () => {
    it("should clear out the description and title from the state", () => {
      const expected = "";
      const Items = {
        ...defaultItems,
        appendItems: noop
      };
      const sut = shallow(<OP items={Items} />);
      sut.setState({
        description: "test",
        title: "test"
      });
      sut.instance().addFramework(mockEvent);
      const actual = sut.state().title + sut.state().description;
      expect(actual).toEqual(expected);
    });
  });
});
