import React, { useEffect, useState } from "react";
import { auth } from "./Ecart/Firebase";
import Home from "./Ecart/Home";
import LoginForm from "./Ecart/LoginForm";
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
    <>
      {presentUser ? <Home presentUser={presentUser} /> : <LoginForm />}
      {/* <LoginForm /> */}
    </>
  );
};

export default App;
