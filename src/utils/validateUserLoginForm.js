export const validateUserLoginForm = (values) => {
  const errors = {};

  //   if (values.username && values.password) {
  if (values.username.length < 6) {
    errors.values.username = "Must be at least 6 characters";
  } else if (values.username.length > 15) {
    errors.values.username = "Must be 15 characters or less";
  }

  if (values.password < 8) {
    errors.values.password = "Must be at least 8 characters";
  }

  return;
};
// };
