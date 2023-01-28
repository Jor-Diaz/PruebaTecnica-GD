export default function EstacionesDetail({ estacionesArray }) {
  return (
    <>
      {estacionesArray.map((estacion) => (
        <p key={estacion._id}>{estacion["NOMBRE FANTASIA"]}</p>
      ))}
    </>
  );
}
