export const revalidate = 0; // it tells Next.js not to revalidate the page after the initial build.

import { redirect } from 'next/navigation';
import { Pagination, Title } from '@/components';
import { getPaginatedUsers } from '@/actions';
import { UsersTable } from './ui/UsersTable';


export default async function OrderPage() {

  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect('/auth/login');
  }

  return (
    <>
      <Title title="Mantenimiento de usuarios" />

      <main className="mb-10">
        <UsersTable users={users} />

        <Pagination totalPages={3} />
      </main>
    </>
  );
}