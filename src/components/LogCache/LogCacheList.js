import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import { useState } from "react";
import { post_cache_list } from "redux/actions/cache";

function LogCacheList({ cache_list, post_cache_list }) {
  const formatDate = (current_datetime) => {
    let date_input = new Date(current_datetime);
    let formatted_date =
      date_input.getHours() +
      ":" +
      date_input.getMinutes() +
      ":" +
      date_input.getSeconds() +
      " " +
      date_input.getDate() +
      "-" +
      (date_input.getMonth() + 1) +
      "-" +
      date_input.getFullYear();

    return formatted_date;
  };
  useState(() => {
    post_cache_list();
  }, []);

  return (
    <>
      {cache_list ? (
        <div className="container ms-auto border mt-5">
          <Table className="responsive" striped>
            <thead>
              <tr>
                <th>Id Cache</th>
                <th>N° Pag.</th>
                <th>Filtro Comuna</th>
                <th>Filtro Código</th>
                <th>Fecha</th>
              </tr>
            </thead>
            <tbody>
              {cache_list.map((registro) => (
                <tr key={registro.id_cache}>
                  <td>{registro["id_cache"]}</td>
                  <td>{registro["page_filter"]}</td>
                  <td>
                    {registro["comuna_filter"] === ""
                      ? "No Aplica"
                      : registro["comuna_filter"]}
                  </td>
                  <td>
                    {registro["code_filter"] === ""
                      ? "No Aplica"
                      : registro["code_filter"]}
                  </td>
                  <td>{formatDate(registro["date_call"])}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  cache_list: state.cache.cache_list,
});

export default connect(mapStateToProps, {
  post_cache_list,
})(LogCacheList);
