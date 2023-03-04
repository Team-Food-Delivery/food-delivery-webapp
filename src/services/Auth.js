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
    return new Promise((resolve, reject) => {
      getStorageItem('registeredEmail')
        .then(value => {
          userData.Username = value;
            if(userData.Username) {
              const cognitoUser = new CognitoUser(userData);
              cognitoUser.confirmRegistration(code, true, function(err, result) {
                if (err) {
                  //alert(err.message || JSON.stringify(err));
                  reject(err.message)
                } else {
                  resolve(result);
                }
                //Need to create a promise so it navigates to login page after success
                // if(typeof result === 'string') {
                //   return result.toLowerCase();
                // }
              })
            }
        })
        // .catch(e => console.log(e))
    })
  },
  resendConfirmationCode() {
    getStorageItem('registeredEmail')
      .then(value => {
        userData.Username = value;

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
  },
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
          setStorageItem('registeredEmail', email);
          resolve(result.getIdToken().getJwtToken());
        },
        onFailure: err => reject(err)
      })
    })
  }
}

export default AuthService;