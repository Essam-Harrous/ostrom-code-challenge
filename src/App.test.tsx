import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { shallow, ShallowWrapper, mount, ReactWrapper } from "enzyme";

describe("project ui rendered", () => {
  let wrapper: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test("renders Add Student Button", () => {
    // console.log(wrapper.find("AddEditModal").prop("show"));
    expect(wrapper.find("#add-student-btn").exists()).toBeTruthy();
  });

  test("renders Students Table", () => {
    expect(wrapper.find("#students-table").exists()).toBeTruthy();
  });

  test("renders Students Table empty", () => {
    expect(wrapper.find("tbody").exists()).toBeFalsy();
  });

  test("check Modal Show state to be false", () => {
    expect(wrapper.find("AddEditModal").prop("show")).toBeFalsy();
  });
});

describe("project Events", () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("check Modal Show state when Add Student btn clicked", () => {
    wrapper.find("#add-student-btn").simulate("click");
    expect(wrapper.find("AddEditModal").prop("show")).toBeTruthy();
  });

  test("check firstName input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");
    const event = {
      preventDefault() {},
      target: { value: "the-value" },
    };
    wrapper
      .find('[name="firstName"]')
      .hostNodes()
      .simulate("change", {
        target: { value: "firstName Changed", name: "firstName" },
      });
    await waitFor(() => {
      expect(
        wrapper.find('[name="firstName"]').hostNodes().prop("value")
      ).toEqual("firstName Changed");
    });
  });

  test("check lastName input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");

    wrapper
      .find('[name="lastName"]')
      .hostNodes()
      .simulate("change", {
        target: { value: "lastName Changed", name: "lastName" },
      });
    console.log(wrapper.find('[name="lastName"]').hostNodes().prop("value"));
    await waitFor(() => {
      expect(
        wrapper.find('[name="lastName"]').hostNodes().prop("value")
      ).toEqual("lastName Changed");
    });
  });

  test("check dateOfBirth input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");
    wrapper
      .find('[name="dateOfBirth"]')
      .hostNodes()
      .simulate("change", {
        target: { value: "dateOfBirth Changed", name: "dateOfBirth" },
      });
    console.log(wrapper.find('[name="dateOfBirth"]').hostNodes().prop("value"));
    await waitFor(() => {
      expect(
        wrapper.find('[name="dateOfBirth"]').hostNodes().prop("value")
      ).toEqual("dateOfBirth Changed");
    });
  });

  test("check course input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");
    wrapper
      .find('[name="course"]')
      .hostNodes()
      .simulate("change", {
        target: { value: "course Changed", name: "course" },
      });
    console.log(wrapper.find('[name="course"]').hostNodes().prop("value"));
    await waitFor(() => {
      expect(wrapper.find('[name="course"]').hostNodes().prop("value")).toEqual(
        "course Changed"
      );
    });
  });

  test("check hours input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");
    wrapper
      .find('[name="hours"]')
      .hostNodes()
      .simulate("change", {
        target: { value: 55, name: "hours" },
      });
    console.log(wrapper.find('[name="hours"]').hostNodes().prop("value"));
    await waitFor(() => {
      expect(wrapper.find('[name="hours"]').hostNodes().prop("value")).toEqual(
        55
      );
    });
  });

  test("check price input change", async () => {
    wrapper.find("#add-student-btn").simulate("click");

    wrapper
      .find("#price")
      .hostNodes()
      .simulate("change", {
        target: { value: 4500, name: "price" },
      });
    console.log(wrapper.find('[name="price"]').hostNodes().prop("value"));
    await waitFor(() => {
      expect(wrapper.find('[name="price"]').hostNodes().prop("value")).toEqual(
        4500
      );
    });
  });
});
