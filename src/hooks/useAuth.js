import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(user);
      } else {
        setLoggedIn(false);
      }
      setLoading(false);
    });
  }, []);

  return {
    loggedIn,
    loading,
  };
};

export default useAuth;
