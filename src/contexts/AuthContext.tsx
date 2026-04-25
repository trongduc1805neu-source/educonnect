import React, { createContext, useContext, useEffect, useState } from "react";

export interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: "student" | "tutor" | "admin";
  createdAt: string;
  onboardingCompleted?: boolean;
}

interface AuthContextType {
  user: any | null;
  userData: UserData | null;
  loading: boolean;
  logout: () => Promise<void>;
  loginLocal: (data: UserData) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
  logout: async () => {},
  loginLocal: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("educonnect_current_user");
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setUser({ uid: parsed.uid, email: parsed.email });
        setUserData(parsed);
      } catch (e) {
        console.error(e);
      }
    }
    setLoading(false);
  }, []);

  const loginLocal = (data: UserData) => {
    localStorage.setItem("educonnect_current_user", JSON.stringify(data));
    setUser({ uid: data.uid, email: data.email });
    setUserData(data);
  };

  const logout = async () => {
    localStorage.removeItem("educonnect_current_user");
    setUser(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider value={{ user, userData, loading, logout, loginLocal }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

