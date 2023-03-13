import { NavigationContainer } from "@react-navigation/native";
import { useContext, useEffect } from 'react';
import { AuthContext } from "../contexts/AuthContext";

import AuthStack from './AuthStack';
import MainTabs from "./MainTabs";

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
      <MainTabs />
      {/* {authData?.isLoggedIn ? <MainTabs /> : <AuthStack />} */}
    </NavigationContainer>
  )
};

export default MainRouter;