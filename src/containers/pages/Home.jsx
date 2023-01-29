import TemplateLayout from "hocs/layouts/TemplateLayout";
import { connect } from "react-redux";

function Home() {
  return (
    <TemplateLayout>
      <div className="container ms-auto  mt-5">
        <h2>Holas, contratenme por favor 🥹</h2>
      </div>
    </TemplateLayout>
  );
}

const mapStateToProps = (state) => ({
  //post_list: state.post.post_list,
});

export default connect(mapStateToProps)(Home);
