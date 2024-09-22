import { useState } from "react";
import folder from "./data";

const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

const Folder = () => {
  const [exp, setExp] = useState(folder);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(exp, folderId, item, isFolder);

    setExp(finalTree);
  };

  return (
    <div className="container mx-auto">
      <Comp exp={exp} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default Folder;

const Comp = ({ exp, handleInsertNode }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //ad logic
      handleInsertNode(exp.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (exp.isFolder) {
    return (
      <div>
        <div
          className="cursor-pointer  bg-gray-400  my-2  p-2  flex justify-between   w-[300px] "
          onClick={() => setExpand(!expand)}
        >
          <p> 📁 {exp.name}</p>

          <div>
            <button
              className="bg-white text-lg p-1 "
              onClick={(e) => handleNewFolder(e, true)}
            >
              folder +{" "}
            </button>
            <button
              className="bg-white text-lg p-1  ml-2"
              onClick={(e) => handleNewFolder(e, false)}
            >
              file +{" "}
            </button>
          </div>
        </div>
        <div className={` ${expand ? "block" : "hidden"}  pl-[25px]`}>
          {showInput.visible && (
            <div>
              {" "}
              <span> {showInput.isFolder ? "📁" : "🖹"}</span>
              <input
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                autoFocus
                className="border-2 border-gray-500 outline-none py-2 rounded-md"
              />
            </div>
          )}
          {exp.items.map((it) => (
            // <div key={it.id}>{it.name}</div>

            <Comp exp={it} key={it.id} handleInsertNode={handleInsertNode} />
          ))}
        </div>
      </div>
    );
  } else {
    return <span className="flex flex-col">🖹 {exp.name}</span>;
  }
};
