import { USER_POOL_ID, CLIENT_ID } from '@env';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { setStorageItem, getStorageItem } from './localStorage';

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID
}

const userPool = new CognitoUserPool(poolData);

const userData = {
  Username: null,
  Pool: userPool
}

const AuthService = {
  codeRegistration(code) {
    getStorageItem('registeredEmail')
      .then(value => {
        userData['Username'] = value;
        if(userData['Username']) {
          const cognitoUser = new CognitoUser(userData);
          cognitoUser.confirmRegistration(code, true, function(err, result) {
            if (err) {
              alert(err.message || JSON.stringify(err));
              return;
            }
            //Need to create a promise so it navigates to login page after success
            console.log('call result: ' + result);
          })
        }
      })
      .catch(e => console.log(e))
    
  },
  resendConfirmationCode() {
    getStorageItem('registeredEmail')
      .then(value => {
        userData['Username'] = value;

        if(userData['Username']) {
          const cognitoUser = new CognitoUser(userData);
          cognitoUser.resendConfirmationCode(function(err, result) {
            if (err) {
              alert(err.message || JSON.stringify(err));
              return;
            }
            console.log('call result: ' + result);
          });
        }
      })
      .catch(e => console.log(e))
  }
}

export default AuthService;