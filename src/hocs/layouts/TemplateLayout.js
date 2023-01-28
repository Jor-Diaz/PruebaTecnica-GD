import FooterGD from "components/navigations/FooterGD";
import NavbarGD from "components/navigations/NavbarGD";
import { connect } from "react-redux";

const TemplateLayout = ({ children }) => {
  return (
    <>
      <NavbarGD />
      {children}
      <FooterGD />
    </>
  );
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(TemplateLayout);
