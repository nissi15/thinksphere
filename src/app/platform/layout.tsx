import { Sidebar } from "@/components/platform/sidebar";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <main className="lg:ml-[260px] min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6 py-8 pt-16 lg:pt-8">
          {children}
        </div>
      </main>
    </div>
  );
}
