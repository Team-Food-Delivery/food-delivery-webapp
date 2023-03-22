import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";

import AuthStack from './AuthStack';
import MainTabs from "./MainTabs";

const MainRouter = () => {
  const { authData, loading, getAuthFromStorage } = useContext(AuthContext);
  useEffect(() => {
    getAuthFromStorage();
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
      {authData?.isLoggedIn ? <MainTabs /> : <AuthStack />}
    </NavigationContainer>
  )
};

export default MainRouter;