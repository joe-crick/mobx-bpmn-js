import noop from "./noop";

export const mockEvent = {
  target: {},
  preventDefault: noop,
  stopPropagation: noop
};
