import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function BerufsschuleLapLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
