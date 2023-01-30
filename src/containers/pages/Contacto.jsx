import ContactoBlock from "components/ContactoBlock";
import TemplateLayout from "hocs/layouts/TemplateLayout";

export default function Contacto({}) {
  return (
    <TemplateLayout>
      <div className="container ms-auto  mt-5">
        <h2>Datos Personales</h2>
        <hr></hr>
        <ContactoBlock />
      </div>
    </TemplateLayout>
  );
}
