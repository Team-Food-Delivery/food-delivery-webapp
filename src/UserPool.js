import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-west-1_qXvY7Jy4Q",
  ClientId: "5ri0bhtvkebgj90edg6cqcog06" 
}

export default new CognitoUserPool(poolData);