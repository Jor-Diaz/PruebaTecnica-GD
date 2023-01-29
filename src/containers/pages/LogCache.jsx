import LogCacheList from "components/LogCache/LogCacheList";
import TemplateLayout from "hocs/layouts/TemplateLayout";

export default function LogCache({}) {
  return (
    <TemplateLayout>
      <div className="container ms-auto  mt-5">
        <h2>Registro Cache</h2>
        <LogCacheList />
      </div>
    </TemplateLayout>
  );
}
