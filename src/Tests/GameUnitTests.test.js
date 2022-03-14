import Game from "../Components/Game.js";

import React from "react";
import { shallow, render } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

configure({ adapter: new Adapter() });
let status = ["X", "X", "O", "X", "X", "O", "O", "O", "X"];
describe("Header", () => {
  it("All 9 tiles Render", () => {
    const testComponent = render(<Game status={status} />);
    const tiles = testComponent.find(".boardBttn");
    expect(tiles.length).toBe(9);
  });

  it("Contents of Tiles match what is passed to Game", () => {
    const testComponent = render(<Game status={status} />);
    const tiles = testComponent.find(".boardBttn");
    let tileValues = [];
    //console.log(tiles)
    //console.log(tiles[0].children[0].data);
    for (let i = 0; i < 9; i++) {
      expect(tiles[i].children[0].data).toBe(status[i]);
    }
  });
});
