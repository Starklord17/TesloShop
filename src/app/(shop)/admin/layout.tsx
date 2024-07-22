import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

/**
 * Renders the layout for the admin section of the application.
 * 
 * @param children - The child components to be rendered within the layout.
 * @returns The rendered layout component.
 */
export default async function AdminLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const session = await auth();

  if (session?.user.role !== 'admin') {
    redirect('/login');
  }

  return (
    <>
      {children}
    </>
  );
}