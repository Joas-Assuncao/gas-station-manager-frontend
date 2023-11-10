import Link from "next/link";

interface IHeaderLinkProps {
  name: string;
  path: string;
}

export function HeaderLink({ name, path }: IHeaderLinkProps) {
  return (
    <Link
      className="p-2 hover:bg-gray-800 border border-transparent transition-colors duration-150 hover:border hover:border-gray-400 focus:ring focus:ring-gray-300"
      href={path}
    >
      {name}
    </Link>
  );
}
