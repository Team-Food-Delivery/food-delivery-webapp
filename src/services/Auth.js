import { USER_POOL_ID, CLIENT_ID } from '@env';
import { CognitoUser, CognitoUserPool, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { setStorageItem, getStorageObject, removeStorageItem } from './localStorage';

const poolData = {
  UserPoolId: "us-west-1_qXvY7Jy4Q",
  ClientId: "5ri0bhtvkebgj90edg6cqcog06"
}

const userPool = new CognitoUserPool(poolData);

const userData = {
  Username: null,
  Pool: userPool
}

export function codeRegistration(email, code) {
  const response = new Promise((resolve, reject) => {
    
    userData.Username = email;
    if(userData.Username) {
      const cognitoUser = new CognitoUser(userData);
      cognitoUser.confirmRegistration(code, true, function(err, result) {
        if (err) {
          reject()
        } 
        if(result == "SUCCESS") {
          resolve()
        }
      })
    }
  })
  
  return response
}

export function resendConfirmationCode() {
  getStorageObject('userAuth')
    .then(userAuth => {
      userData.Username = userAuth.email;

      if(userData.Username) {
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.resendConfirmationCode(function(err, result) {
          if (err) {
            alert(err.message || JSON.stringify(err));
            return;
          }
          if(result) {
            alert('Another code has been sent to your email. Please enter the code once you have received it.')
          }
        });
      }
    })
    .catch(e => console.log(e))
}

export function signOut() {
  getStorageObject('userAuth')
    .then(userAuth => {
      userData.Username = userAuth.email;

      if(userData.Username) {
        const cognitoUser = new CognitoUser(userData);
        cognitoUser.signOut();
        removeStorageItem('userAuth');
      }
    })
    .catch(e => console.log(e))
}

const AuthService = {
  login(email, password) {
    const authenticationData = {
      Username: email,
      Password: password
    };

    const user = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) => {
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          setStorageItem('userAuth', email);
          resolve(result.getIdToken().getJwtToken());
        },
        onFailure: err => {
          if(err.message == 'User is not confirmed.') {
            //Need to navigate to verifcation page if account is unconfirmed
            reject('User is not confirmed.')
          } else {
            reject('Invalid email or password.')
          }
        }
      })
    })
  }
}

export default AuthService;