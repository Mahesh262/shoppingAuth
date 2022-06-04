import React, { useEffect, useState } from "react";
import LoginForm from "./Ecart/LoginForm";
import { auth } from "./Ecart/Firebase";
import Home from "./Ecart/Home";
const App = () => {
  const [presentUser, setPresentuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setPresentuser({
          uid: user?.uid,
          email: user?.email,
        });
      } else {
        return setPresentuser(null);
      }
    });
  }, []);
  return (
    <>{presentUser ? <Home presentUser={presentUser} /> : <LoginForm />}</>
  );
};

export default App;
