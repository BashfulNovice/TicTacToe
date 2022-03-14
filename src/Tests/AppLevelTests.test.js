import App from "../App.js";
import React from "react";
import { shallow, render, mount } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("p1Turn is updated on tile click", () => {
    const testApp = mount(<App />);
    const player1 = testApp.find(".turn").html();
    //console.log(player1)
    const tile = testApp.find("#row1").childAt(0);
    tile.simulate("click");
    const player2 = testApp.find(".turn").html();
    expect(player1).not.toBe(player2);
  });

  it("p1Turn is updated on tile click", () => {
    const testApp = mount(<App />);
    //console.log(player1)
    const tile = testApp.find("#row1").childAt(0);
    const tileValue1 = tile.html();
    tile.simulate("click");
    const tileValue2 = tile.html();
    //console.log(tile.html())
    expect(tileValue1).not.toBe(tileValue2);
  });
});
