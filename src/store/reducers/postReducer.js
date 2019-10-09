const initState = {
  posts: [
    {
      id: 1,
      username: "Kane",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."
    },
    {
      id: 2,
      username: "Kane",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."
    },
    {
      id: 3,
      username: "Kane",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, magnam."
    }
  ]
};

const postReducer = (state = initState, action) => {
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
    default:
      return state;
  }
};

export default postReducer;
