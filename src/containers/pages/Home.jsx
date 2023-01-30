import Inicio from "components/Inicio";
import TemplateLayout from "hocs/layouts/TemplateLayout";
import { connect } from "react-redux";

function Home() {
  return (
    <TemplateLayout>
      <div className="container ms-auto  mt-2">
        <Inicio />
      </div>
    </TemplateLayout>
  );
}

const mapStateToProps = (state) => ({
  //post_list: state.post.post_list,
});

export default connect(mapStateToProps)(Home);
