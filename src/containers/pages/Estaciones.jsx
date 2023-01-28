import TemplateLayout from "hocs/layouts/TemplateLayout";
import EstacionesDetail from "components/Estaciones/EstacionesList";

export default function Estaciones({}) {
  return (
    <TemplateLayout>
      <EstacionesDetail />
    </TemplateLayout>
  );
}
