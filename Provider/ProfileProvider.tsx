import React, { createContext, useState, useContext } from "react";

interface UserProfileContextType {
  name: string;
  email: string;
  password: string;
  updateProfile: (name: string, email: string, password: string) => void;
}

const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string>('John Snow');
  const [email, setEmail] = useState<string>('johnsnow@gmail.com');
  const [password, setPassword] = useState<string>('123456789');

  const updateProfile = (name: string, email: string, password: string) => {
    setName(name);
    setEmail(email);
    setPassword(password);
  };

  return (
    <UserProfileContext.Provider value={{ name, email, password, updateProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
