import { headers } from 'next/headers';
import StatusLabel, { Status } from './components/status-label';

export default async function Home() {
  const allHeaders = await headers();

  console.log(Object.fromEntries(allHeaders.entries()));
  return (
    <main className="text-xl">
      <h1>Home page {new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
