import { sanityFetch } from '@/sanity/lib/live';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';

export async function Header() {
  const { data } = await sanityFetch({
    query: HEADER_QUERY,
  });
  console.log(data);

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white p-6">
      <header className="container mx-auto flex items-center justify-between rounded-lg bg-white/80 p-6 shadow-md shadow-pink-50">
        <Link
          className="font-bold tracking-tight text-pink-700 md:text-xl"
          href="/"
        >
          Layer Caker
        </Link>
        <ul className="flex items-center gap-4 font-semibold text-slate-700">
          {data?.link?.map((items) => (
            <li key={items.link}>
              <Link
                className="transition-colors hover:text-pink-500"
                href={`/${items.link}`}
                target={items.openInNewTab ? '_blank' : '_self'}
              >
                {items.title}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}
