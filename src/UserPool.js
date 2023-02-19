import { CognitoUserPool } from "amazon-cognito-identity-js";
// import env from "../env";

const poolData = {
    UserPoolId: "",
    ClientId: ""
}
console.log('poolData:',poolData)

let userpool;
try {
    userpool = new CognitoUserPool(poolData)
} catch(e) {
    console.error("Amazon Cognito Error")
}

export default userpool;
