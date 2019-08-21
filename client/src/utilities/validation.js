const validate = (val, rules) => {
  let isValid = true;
  const errors = {};
  for (const rule in rules) {
    switch (rule) {
      case "isEmail":
        isValid = isValid && emailValidator(val);
        if (!emailValidator(val)) {
          errors.isEmail = 'Enter correct email address'
        }
        break;
      case "notEmpty":
        isValid = isValid && notEmptyValidator(val);
        if (!notEmptyValidator(val)) {
          errors.notEmpty = "This field is required"
        }
        break;
      default:
        isValid = true;
    }
  }
  return { isValid, errors };
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};
const notEmptyValidator = val => {
  return val.length > 0;
};

export default validate;