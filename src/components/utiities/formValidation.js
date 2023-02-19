export default function validateRegister(values) {
  console.log('form', values)
  let errors = {};
  let user = values.email.trim();
  let letters = /^[A-Za-z]+$/
  let emails = /\S+@\S+\.\S+/
  //let REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/
  
  //Username validation errors
  // if(user.length < 3) {
  //   errors.userName = 'Please enter more than 3 characters';
  // } else if(user === '') {
  //   errors.userName = 'Username required'
  // } else if(!letters.test(user)) {
  //   errors.userName = 'Please enter alpha characters only'
  // }
  //Email validation errors
  if(values.email.length === 0) {
    errors.email = 'Email address is required';
  } else if(!emails.test(user)) {
    errors.email = 'Email address is invalid';
  }
  //Password validation errors
  if((values.password.length || values.confirmPassword.length) === 0) {
    errors.password = 'Password field cannot be blank'
  } else if((values.password.length || values.confirmPassword.length) > 14) {
    errors.password = 'Password length cannot exceed 14 characters'
  } else if ((values.password.length || values.confirmPassword.length) < 8) {
    errors.password = 'Password must be more than 8 characters'
  } 

  if(values.password !== values.confirmPassword) {
    errors.password = 'Passwords do not match'
  }
  return errors;
}