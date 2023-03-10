import { useEffect, useState } from "react";
import { useAuth } from "./auth";

export function useIsAuth() {
  const { auth } = useAuth();
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    setIsAuth(auth);
  }, [auth]);

  return { isAuth };
}
