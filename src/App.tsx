import styles from "./App.module.scss";
import { Fragment } from "react";
import { Post, SearchInput } from "./components";

function App() {
  return (
    <Fragment>
      <header className={styles["header-group"]}>
        <div className={styles["header-group__container"]}>
          <div>
            <h1>Codelândia | Challenge</h1>
            <h1>blog</h1>
          </div>
          <SearchInput placeholder="Pesquise no blog" />
        </div>
      </header>

      <section className={styles["section-post-group"]}>
        <div className={styles["section-post-group__container"]}>
          <Post
            title="Agora é oficial: o Windows 11 está vindo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. "
            date="02 de jul, 2021"
          />
          <Post
            title="Tim Berners-Lee vai leiloar código-fonte da web"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
            date="02 de jul, 2021"
          />
          <Post
            title="Tem Firefox novo no pedaço e você vai querer migrar"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est."
            date="02 de jul, 2021"
          />
          <Post
            title="John McAfee, criador do antivírus McAfee, morre"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis. Praesent et auctor justo. Vestibulum nisl orci, lacinia venenatis leo sit amet, pulvinar tincidunt risus. Phasellus nisl dui, cursus a lectus et, interdum ullamcorper libero."
            date="02 de jul, 2021"
          />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
