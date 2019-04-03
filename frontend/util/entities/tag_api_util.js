export const fetchTags = () => {
    return $.ajax({
        method: "GET",
        url: "api/tags"
    });
};