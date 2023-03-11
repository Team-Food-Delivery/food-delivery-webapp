import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../../contexts/AuthContext";

import AuthStack from './AuthStack';
import StoreStack from "./StoreStack";

const MainRouter = () => {
  const { authData, loading } = useContext(AuthContext);
  useEffect(() => {
    console.log(authData)
  },[loading])

/*
  Make a loading component

  if(loading) {
    return <Loading />
  }
*/
  return (
    <NavigationContainer>
      {authData?.isLoggedIn ? <StoreStack /> : <AuthStack />}
    </NavigationContainer>
  )
};

export default MainRouter;