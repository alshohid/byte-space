"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { User } from "@/types/user";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = useCallback(async (_email: string, _password: string) => {
    // Mock login — replace with real API call later
    setUser({
      id: "mock-user-1",
      name: "Demo User",
      email: _email,
      role: "student",
      joinedDate: new Date().toISOString(),
    });
  }, []);

  const register = useCallback(
    async (name: string, email: string, _password: string) => {
      // Mock register
      setUser({
        id: "mock-user-2",
        name,
        email,
        role: "student",
        joinedDate: new Date().toISOString(),
      });
    },
    []
  );

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
