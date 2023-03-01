import { USER_POOL_ID, CLIENT_ID } from '@env';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';
import { setStorageItem, getStorageItem } from './localStorage';

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID
}

const userPool = new CognitoUserPool(poolData);

const userData = {
  Username: getStorageItem('registeredEmail'),
  Pool: userPool
};

const cognitoUser = new CognitoUser(userData);

const AuthService = {
  // getUserData(userName) {
  //   const userData = {
  //     Username: getStorageItem(userName),
  //     Pool: userPool
  //   }
  //   return userData;
  // },
  codeRegistration(code) {
    cognitoUser.confirmRegistration(code, true, function(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    })
  },
  resendConfirmationCode() {
    cognitoUser.resendConfirmationCode(function(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    });
  }
}

export default AuthService;