export const createPost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("posts")
      .add({
        ...post,
        username: profile.username,
        userId: authorId,
        createdAt: new Date(),
        url: profile.url
      })
      .then(() => {
        dispatch({ type: "CREATE_POST", post });
      })
      .catch(err => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};

export const deletePost = post => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("posts")
      .doc(post.id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POST" });
      })
      .catch(err => {
        dispatch({ type: "DELETE_POST_ERROR", err });
      });
  };
};
