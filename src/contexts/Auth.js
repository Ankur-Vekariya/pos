import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../supabase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth?.getSession();
    console.log("session----------", session);
    session
      .then((data) => {
        console.log("data----------", data.data.session.user);
        setUser(data.data.session.user);
        setLoading(false);
      })
      .catch((error) => {
        setUser(null);
        setLoading(false);
      });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session?.user ?? null);
        setLoading(false);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
        setLoading(false);
      } else if (event === "TOKEN_REFRESHED") {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    });

    // console.log("data------", data);

    return () => {
      data.subscription?.unsubscribe();
    };
  }, []);

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
