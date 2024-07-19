function Item2({ name, importance }) {
  return (
    <li className="item">
      {name} {importance !== 0 && <em>(Importance: {importance})</em>}
    </li>
  );
}

export default function PackingList2() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item2 importance={9} name="Traje de vuelo" />
        <Item2 importance={0} name="Casco con dorado a la hoja" />
        <Item2 importance={6} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
