import { connect } from "react-redux";
import Transition from './transition';

const msp = (state, ownProps) => ({
    content: ownProps.content,
    transitionClass: ownProps.transitionClass
});

export default connect(msp)(Transition);