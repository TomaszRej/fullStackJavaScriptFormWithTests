import validate from "../../utilities/validation";


it("should return true and empty errors object", () => {
  const rules = {notEmpty: true};
  const val = "test";

  expect(validate(val, rules).isValid).toBe(true);
  expect(validate(val, rules).errors.notEmpty).toBe(undefined)
});

it("should return false and not empty errors object", () => {
  const rules = {notEmpty: true};
  const val = "";

  expect(validate(val, rules).isValid).toBe(false);
  expect(validate(val, rules).errors.notEmpty).toBe('This field is required')
});

it("should return true and empty errors object", () => {
  const rules = {isEmail: true};
  const val = "test@test.com";

  expect(validate(val, rules).isValid).toBe(true);
  expect(validate(val, rules).errors.isEmail).toBe(undefined)
});

it("should return false and not empty errors object", () => {
  const rules = {isEmail: true};
  const val = "test";

  expect(validate(val, rules).isValid).toBe(false);
  expect(validate(val, rules).errors.isEmail).toBe('Enter correct email address')
});

