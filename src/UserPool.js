import { CognitoUserPool } from "amazon-cognito-identity-js";
// import env from "../env";

const poolData = {
    UserPoolId: "",
    ClientId: ""
}
console.log('poolData:',poolData)

export default new CognitoUserPool(poolData);
