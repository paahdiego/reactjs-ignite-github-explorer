export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository?.description ?? "descrição"}</p>

      <a href={props.repository?.html_url ?? ""}>Acessar repositório</a>
    </li>
  );
}
