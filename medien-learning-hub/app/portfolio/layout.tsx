import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
