function Drink({ name, datas }) {
  if (name === "té") {
    datas = ["hoja", "15-70 mg/taza", "4,000+ años"];
  } else {
    datas = ["grano", "80-185 mg/taza", "1,000+ años"];
  }
  return (
    <section>
      <h1 className="text-2xl">{name}</h1>
      <dl>
        <dt>Parte de la planta:</dt>
        <dd>{datas[0]}</dd>
        <dt>
          <b>Contenido de cafeína:</b>
        </dt>
        <dd>{datas[1]}</dd>
        <dt>Antigüedad:</dt>
        <dd>{datas[2]}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="té" />
      <br />
      <Drink name="café" />
    </div>
  );
}
