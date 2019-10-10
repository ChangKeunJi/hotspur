const postReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_POST":
      console.log("created post", action.post);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create post error", action.err);
      return state;
    case "DELETE_POST":
      console.log("Post Deleted");
      return state;
    case "DELETE_POST_ERROR":
      console.log("Delete Post Error", action.err);
      return state;
    default:
      return state;
  }
};

export default postReducer;
