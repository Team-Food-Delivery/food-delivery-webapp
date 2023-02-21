import { USER_POOL_ID, CLIENT_ID } from '@env';
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID
}

const userPool = new CognitoUserPool(poolData);


export default AuthService = {
  getUserData(userName) {
    const userData = {
      Username: userName,
      Pool: userPool
    }
    return userData;
  },
  codeRegistration(userName, code) {
    const newUserData = this.getUserData(userName);
    const cognitoUser = new CognitoUser(newUserData);

    cognitoUser.confirmRegistration(code, true, function(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    })
  },
  resendConfirmationCode(userName) {
    const newUserData = this.getUserData(userName);
    const cognitoUser = new CognitoUser(newUserData);
    cognitoUser.resendConfirmationCode(function(err, result) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      console.log('call result: ' + result);
    });
  }
}