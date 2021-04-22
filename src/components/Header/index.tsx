import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  const dataAtual = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <div>
        <img src="/logo.svg" alt="Fone de ouvido" />
        <Link href="/">
          <a>
            <h1>TICast</h1>
          </a>
        </Link>
      </div>

      <p>O melhor podcast para você ouvir sempre!</p>

      <span>{dataAtual}</span>
    </header>
  );
}
