import TemplateLayout from "hocs/layouts/TemplateLayout";
import { connect } from "react-redux";
import {
  post_estaciones_list,
  post_estaciones_list_page,
} from "redux/actions/estaciones";
import { useState } from "react";
import EstacionesDetail from "components/EstacionesList";

function Estaciones({
  post_estaciones_list,
  post_estaciones_list_page,
  estaciones_list,
}) {
  useState(() => {
    post_estaciones_list_page(1);
  }, []);
  return (
    <TemplateLayout>
      Estaciones
      {estaciones_list ? (
        <EstacionesDetail estacionesArray={estaciones_list} />
      ) : (
        <></>
      )}
    </TemplateLayout>
  );
}

const mapStateToProps = (state) => ({
  estaciones_list: state.estaciones.estaciones_list,
});

export default connect(mapStateToProps, {
  post_estaciones_list,
  post_estaciones_list_page,
})(Estaciones);
