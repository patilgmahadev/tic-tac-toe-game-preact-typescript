import { h, render } from "preact";
import { App } from "./App";

const rootEle = <Element | Document | ShadowRoot | DocumentFragment>document.getElementById("root");
render(h(App, {}), rootEle);