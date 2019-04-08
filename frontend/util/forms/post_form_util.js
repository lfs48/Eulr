import { merge } from 'lodash';

export const handleCancel = function(event) {
    event.preventDefault();
    this.formCancel();
};

export const handleSubmit = function(event) {
    event.preventDefault();
    const content = JSON.stringify(this.state.content);
    const formData = new FormData();
    if (this.state.post.id) {
        formData.append("post[id]", this.state.post.id);
    }
    formData.append("post[author_id]", this.state.post.author_id);
    formData.append("post[poster_id]", this.state.post.poster_id);
    formData.append("post[post_type]", this.state.post.post_type);
    formData.append("post[content]", content);
    const tags = this.state.tags;
    tags.push(this.state.currentTag);
    formData.append("post[tags]", tags.join(","));
    if (this.state.media && this.state.media.file) {
        formData.append("post[media]", this.state.media.file);
    }
    this.props.formAction(formData)
        .then(() => this.props.fetchTags())
        .then(() => this.formCancel());
};

export const handleInput = function(type) {
    return (event) => {
        const content = merge({}, this.state.content);
        content[type] = event.target.value;
        this.setState({
            content: content
        });
    };
};

export const handleTagInput = function(event) {
    event.preventDefault();
    const input = event.target.value;
    if (input.charAt(input.length - 1) === ",") {
        const tags = merge([], this.state.tags);
        tags.push(input.slice(0, input.length - 1));
        this.setState({
            tags: tags,
            currentTag: ""
        });
    } else {
        this.setState({
            currentTag: event.target.value
        });
    }
};

export const handleTagKeypress = function(event) {
    let tags = merge([], this.state.tags);
    if (event.key === "Enter" || event.key === ",") {
        event.preventDefault();
        tags.push(this.state.currentTag);
        this.setState({
            tags: tags,
            currentTag: ""
        });
    } else if (event.key == "Backspace" && this.state.currentTag === "") {
        tags = tags.slice(0, tags.length - 1);
        this.setState({
            tags: tags,
            currentTag: ""
        });
    }
};