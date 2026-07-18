import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function FachwoerterLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
