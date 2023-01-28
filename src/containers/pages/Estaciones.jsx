import TemplateLayout from "hocs/layouts/TemplateLayout";
import EstacionesDetail from "components/EstacionesList";

export default function Estaciones({}) {
  return (
    <TemplateLayout>
      <EstacionesDetail />
    </TemplateLayout>
  );
}
