import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function TimeTrackingLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
