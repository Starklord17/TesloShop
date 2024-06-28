import { TopMenu } from "@/components";

// lrc => Create a layout root component
export default function ShopLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      {children}
    </main>
  );
}