import { createContext, useState } from "react";
import { Comment } from "shared/types";
import { useQuery } from "@apollo/client";
import { GET_COMMENTS } from "shared/server/graphql/queries";
import { useEffect } from "react";

const initialICommentsContextValue = {
  comments: [] as Comment[],
  updateComments: () => {},
};

export const CommentsContext = createContext(null);

export const CommentsContextProvider = (props: any) => {
  const [comments, setComments] = useState([]);
  const { data, loading, error } = useQuery(GET_COMMENTS, {
    variables: { issueId: "cl5sr16vw0050altj9640kowp" },
    onCompleted(data) {
      setComments(data.getComments);
    },
  });

  // useEffect(() => {
  //   if (data) {
  //     setComments(data.getComments);
  //   }
  //   console.log({ data, loading, error });
  // }, [loading, comments]);

  // console.log(comments);
  // const [state, setState] = useState({
  //   comments: new Array(...props.value),
  //   updateComments: (comment: Comment) => {
  //     setState((prevState: any) => {
  //       return { ...prevState, comments: [comment] };
  //     });
  //   },
  // });

  // const updateComments = (comment: Comment) =>
  //   setComments((prevState) => [...prevState, comment]);
  console.log("CommentContext Rerender");
  return (
    <CommentsContext.Provider value={{ comments, setComments }}>
      {props.children}
    </CommentsContext.Provider>
  );
};
