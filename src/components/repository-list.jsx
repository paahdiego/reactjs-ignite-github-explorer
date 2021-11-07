import { RepositoryItem } from "./repository-item";
import "../styles/repositories.scss";
import { useState, useEffect } from "react";

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, [repositories]);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
