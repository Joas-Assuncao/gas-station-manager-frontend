import { Header } from "../Header";

interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col px-24 mb-20">{children}</main>
    </>
  );
}
