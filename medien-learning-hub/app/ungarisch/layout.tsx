import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function UngarischLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
