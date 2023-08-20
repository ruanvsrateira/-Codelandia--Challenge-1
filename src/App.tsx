import styles from "./App.module.scss";
import { Fragment } from "react";
import { Post, SearchInput } from "./components";
import { posts } from "./data";

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
          {posts.map(({ title, description, date }) => {
            return <Post title={title} description={description} date={date} />;
          })}
        </div>
      </section>
    </Fragment>
  );
}

export default App;
