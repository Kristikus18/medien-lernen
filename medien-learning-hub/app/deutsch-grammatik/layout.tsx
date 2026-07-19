import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function DeutschGrammatikLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
