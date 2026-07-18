import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
