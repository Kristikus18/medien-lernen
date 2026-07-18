"use client";

import {
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut
} from "firebase/auth";
import type { User } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { getFirebaseAuth, getFirebaseDb, googleProvider, isFirebaseConfigured } from "@/lib/firebase";
import { ensureInitialUserData } from "@/lib/seed";

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  error: string | null;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isFirebaseConfigured) {
      setLoading(false);
      return undefined;
    }

    const auth = getFirebaseAuth();
    return onAuthStateChanged(auth, async (nextUser) => {
      setUser(nextUser);
      setLoading(false);

      if (nextUser) {
        const db = getFirebaseDb();
        await setDoc(
          doc(db, "users", nextUser.uid),
          {
            userId: nextUser.uid,
            displayName: nextUser.displayName ?? "",
            email: nextUser.email ?? "",
            photoURL: nextUser.photoURL ?? "",
            updatedAt: serverTimestamp(),
            createdAt: serverTimestamp()
          },
          { merge: true }
        );
        await ensureInitialUserData(nextUser.uid);
      }
    });
  }, []);

  const signInWithGoogle = useCallback(async () => {
    setError(null);
    try {
      await signInWithPopup(getFirebaseAuth(), googleProvider);
    } catch (signInError) {
      setError(signInError instanceof Error ? signInError.message : "Google sign-in failed.");
    }
  }, []);

  const signOut = useCallback(async () => {
    await firebaseSignOut(getFirebaseAuth());
  }, []);

  const value = useMemo(
    () => ({ user, loading, error, signInWithGoogle, signOut }),
    [error, loading, signInWithGoogle, signOut, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
