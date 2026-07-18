import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function TestsLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
