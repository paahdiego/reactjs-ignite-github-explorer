export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? "nome"}</strong>
      <p>{props.repository?.description ?? "descrição"}</p>

      <a href={props.repository?.link ?? ""}>Acessar repositório</a>
    </li>
  );
}
