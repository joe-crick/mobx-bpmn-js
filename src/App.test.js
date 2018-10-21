import { mount } from "enzyme";
import React from "react";

import { MemoryRouter } from "react-router-dom";

import App from "./App";

it("renders an app with 2 routes, home and modeler page", async () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]} initialIndex={0}>
      <App />
    </MemoryRouter>
  );

  const HomeTitle = <h1>Home</h1>;
  const ModelerTitle = <h1>Modeler</h1>;

  // Home title is rendered
  expect(wrapper.contains(HomeTitle)).toEqual(true);

  // When clicking the /modeler link
  wrapper.find('[href="/modeler"]').simulate("click", { button: 0 });

  // Modeler title is rendered
  expect(wrapper.contains(ModelerTitle)).toEqual(true);

  // Modeler container is rendered
  expect(wrapper.html()).toMatch(/.bjs-container/);
});
