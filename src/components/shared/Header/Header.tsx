import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Categoria 1</Link>
          </li>
          <li>
            <Link href="/about">Categoria 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
