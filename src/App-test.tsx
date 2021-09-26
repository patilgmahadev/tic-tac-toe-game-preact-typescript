import { render, h } from "preact";
import { ok } from "assert";
import { App } from "./App";

describe("App", () => {

  afterEach(() => {
    render(null, document.body);
  });

  it("exists", () => {
    ok(App);
  });

  it("renders a div", () => {
    render(<App />, document.body)

    ok(document.querySelector("div"))
  })
});