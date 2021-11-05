import { RepositoryItem } from "./repository-item";

const repository = {
  name: "unform",
  description: "Forms in react",
  link: "https://github.com/paahdiego",
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repositoryName="Repo 2" />
        <RepositoryItem />
        <RepositoryItem repositoryName="Repo 4" />
      </ul>
    </section>
  );
}
