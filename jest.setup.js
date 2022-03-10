import "@testing-library/jest-dom/extend-expect";
import * as matchers from "jest-extended";
expect.extend(matchers);

import server from "~/mocks/server";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
