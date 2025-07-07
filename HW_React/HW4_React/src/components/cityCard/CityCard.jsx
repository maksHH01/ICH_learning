export default function CityCard({ name, img, info, facts }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} width="500" />
      <p>{info}</p>
      <ul>
        {facts.map((fact, id) => (
          <li key={id}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}
