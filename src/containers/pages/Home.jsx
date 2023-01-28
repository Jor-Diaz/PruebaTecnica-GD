import TemplateLayout from "hocs/layouts/TemplateLayout";
import { connect } from "react-redux";

function Home() {
  return (
    <TemplateLayout>
      <div className="container">Holas, contratenme por favor 🥹</div>
    </TemplateLayout>
  );
}

const mapStateToProps = (state) => ({
  //post_list: state.post.post_list,
});

export default connect(mapStateToProps)(Home);
