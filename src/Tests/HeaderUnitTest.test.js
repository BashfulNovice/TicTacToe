import Header from "../Components/Header.js";

import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

configure({ adapter: new Adapter() });

describe("Header", () => {
  it("HeaderComponent Corectly Renders", () => {
    const testComponent = shallow(<Header />);
    expect(testComponent.find(".title")).toContainEqual(
      <h1 className="title">Tic-Tac-Toe</h1>
    );
  });
});
