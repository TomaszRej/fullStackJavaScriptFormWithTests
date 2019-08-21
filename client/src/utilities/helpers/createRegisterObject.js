const createRegisterObject = (state) => {
  return {
    firstName: state.firstName.val,
    lastName: state.lastName.val,
    email: state.email.val,
    eventDate: state.eventDate.val
  }
};


export default createRegisterObject;