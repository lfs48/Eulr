import React from 'react';

class MediaForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.state = {};
    }

    handleUpload(event) {
        const reader = new FileReader();
        const file = event.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('post[content]', "{body: stuff}");
        formData.append('post[author_id]', 1);
        formData.append('post[poster_id]', 1);
        formData.append('post[post_type]', "photo");
        if (this.state.imageFile) {

            formData.append('post[media]', this.state.imageFile);
        }
        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleUpload}></input>
                <input type="submit" value="upload"></input>
            </form>
            </div>
        );
    }
}

export default MediaForm;