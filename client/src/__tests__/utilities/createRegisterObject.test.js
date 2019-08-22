import createRegisterObject from "../../utilities/helpers/createRegisterObject"

it("should return correct value", () => {
  const state = {
    firstName: {val: "firstNameTest"},
    lastName: {val: "lastNameTest"},
    email: {val: "emailTest"},
    eventDate: {val: "eventDateTest"},
  };

  const obj = createRegisterObject(state);

  expect(obj.firstName).toBe("firstNameTest")

});


