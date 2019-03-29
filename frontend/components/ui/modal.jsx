import React from 'react';
import { closeModal } from '../../actions/ui/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextPostForm from '../dash/posts/post_creation/post_forms/text_post_form';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'textpost':
            component = <TextPostForm />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background">
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(Modal) );