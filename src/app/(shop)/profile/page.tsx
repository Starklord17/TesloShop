import { auth } from "@/auth.config";
import { Title } from "@/components";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect('/');
  }

  return (
    <main className="container mx-auto p-6">
      <Title title="Perfil" />

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <header>
          <h2 className="text-2xl font-bold mb-4">Información del Usuario</h2>
        </header>
        <article className="bg-gray-100 p-4 rounded-lg overflow-auto">
          <pre>{JSON.stringify(session.user, null, 2)}</pre>
        </article>
      </section>

      <section className="bg-white shadow-md rounded-lg p-4">
        <header>
          <h3 className="text-2xl">
            {session.user.role === 'admin' ? 'Administrador' : 'Usuario'}
          </h3>
        </header>
      </section>
    </main>
  );
}

