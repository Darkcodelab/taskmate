import Link from "next/link";

export default function Header() {
  return (
    <header className="py-2">
      <div className="max-w-[800px] mx-auto py-4 px-4 text-center bg-white/5 rounded-md">
        <Link href="/" className="text-xl font-bold">
          TASKMATE
        </Link>
      </div>
    </header>
  );
}
