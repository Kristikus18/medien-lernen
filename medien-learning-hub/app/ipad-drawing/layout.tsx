import { ProtectedLayout } from "@/components/layout/protected-layout";

export default function IpadDrawingLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}
