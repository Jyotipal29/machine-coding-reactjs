import { useState } from "react";

const comments = [
  {
    id: 1,
    text: "fisrt comment",
    items: [
      {
        id: 2,
        text: "no im the fisrt comment",
        items: [],
      },
      {
        id: 11,
        text: "stop fighting",
        items: [],
      },
    ],
  },
  {
    id: 3,
    text: "Great Content",
    items: [
      {
        id: 4,
        text: "indeed a great content",
        items: [],
      },
    ],
  },
];

/*
folderId,comment,


*/
const useInsert = () => {
  const insertComment = (comments, folderId, item) => {
    return comments.map((comment) => {
      if (comment.id === folderId) {
        return {
          ...comment,
          items: [
            ...comment.items,
            {
              id: new Date().getTime(),
              text: item,
              items: [],
            },
          ],
        };
      } else if (comment.items.length > 0) {
        return {
          ...comment,
          items: insertComment(comment.items, folderId, item),
        };
      }

      return comment;
    });
  };

  return {
    insertComment,
  };
};

// const addHandler = (folderId, item, comment) => {
//   let newComment = [...comments];
//   newComment = newComment.map((comment) => {
//     if (comment.id === folderId) {
//       return {
//         ...comment,
//         items: [
//           ...comment.items,
//           {
//             id: new Date().getTime(),
//             text: item,
//             items: [],
//           },
//         ],
//       };
//     } else if (comment.items.length > 0) {
//       return {
//         ...comment,
//         items: addHandler(folderId, item, comments.items),
//       };
//     } else {
//       return comment;
//     }
//   });

//   console.log(newComment, "newCooment");
//   setComment(newComment);
// };

const Comments = () => {
  const [comment, setComment] = useState(comments);

  const { insertComment } = useInsert();

  const addHandler = (folderId, item) => {
    const finalComment = insertComment(comment, folderId, item);

    console.log(finalComment, "finalComment");
    setComment(finalComment);
  };

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "100px auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        comment sections
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          width: "100%",
          flexDirection: "column",
        }}
      >
        {comment.map((item, index) => (
          <CommentSection key={index} comments={item} addHandler={addHandler} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

const CommentSection = ({ comments, addHandler }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const addClickHandler = (e) => {
    e.stopPropagation();
    setShowInput(true);
  };

  const addComment = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      console.log(e.target.value);
      addHandler(comments.id, e.target.value);
      setShowInput(false);
    }
  };
  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "1px solid gray",
          maxWidth: "500px",

          display: "flex",
          margin: "10px 0px",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => setExpand((expand) => !expand)}
      >
        <p
          style={{
            fontSize: "20px",
            textTransform: "capitalize",
            padding: "10px",
          }}
        >
          {comments.text}
        </p>
        <button
          style={{
            border: "1px solid black",
            padding: "5px 10px",
            fontSize: "18px",
            textTransform: "capitalize",
          }}
          onClick={addClickHandler}
        >
          add comment
        </button>
      </div>
      {showInput && (
        <div>
          <input
            type="text"
            onBlur={() => setShowInput(false)}
            autoFocus
            style={{
              border: "1px solid black",
              outline: "none",
              height: "40px",
              padding: "10px",
            }}
            onKeyDown={addComment}
          />
        </div>
      )}

      {expand && (
        <div
          style={{
            marginLeft: "40px",
          }}
        >
          {comments?.items?.map((item, index) => (
            <CommentSection
              key={index}
              comments={item}
              addHandler={addHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};
