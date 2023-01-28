import Card from "react-bootstrap/Card";
export default function EstacionCard({ estacionesdata }) {
  return (
    <>
      <Card className="border me-2" body>
        This is some text within a card body.{" "}
        <p key={estacionesdata._id}>{estacionesdata["NOMBRE FANTASIA"]}</p>
      </Card>
    </>
  );
}
