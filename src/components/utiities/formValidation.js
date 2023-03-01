export default function validateRegister(values) {
  let errors = {};
  let user = values.email.trim();
  let emails = /\S+@\S+\.\S+/
  let UP_LOW_NUM_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/

  //Email validation errors
  if(values.email.length === 0) {
    errors.email = 'Email address is required';
  } else if(!emails.test(user)) {
    errors.email = 'Email address is invalid';
  }
  //Password validation errors
  if((values.password.length || values.confirmPassword.length) === 0) {
    errors.password = 'Password field cannot be blank'
  } else if((values.password.length || values.confirmPassword.length) > 20) {
    errors.password = 'Password length cannot exceed 20 characters'
  } else if ((values.password.length || values.confirmPassword.length) < 12) {
    errors.password = 'Password must be more than 12 characters'
  } else if ((!UP_LOW_NUM_SPECIAL.test(values.password) || !UP_LOW_NUM_SPECIAL.test(values.confirmPassword))) {
    errors.password = 'Password must contain 1 number, upper & lower case letter, and special character'
  }

  if(values.password !== values.confirmPassword) {
    errors.password = 'Passwords do not match'
  }
  return errors;
}