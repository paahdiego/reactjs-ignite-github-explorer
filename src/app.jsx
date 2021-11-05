import { RepositoryList } from "./components/repository-list";
import { Counter } from "./components/counter";
import "./styles/global.scss";

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}
