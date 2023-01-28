import TemplateLayout from "hocs/layouts/TemplateLayout";
import { connect } from "react-redux";

function Home() {
  return <TemplateLayout>Home</TemplateLayout>;
}

const mapStateToProps = (state) => ({
  //post_list: state.post.post_list,
});

export default connect(mapStateToProps)(Home);
