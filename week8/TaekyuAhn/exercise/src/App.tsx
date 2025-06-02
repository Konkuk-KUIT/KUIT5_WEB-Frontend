import { useState } from "react";
import { usePosts } from "./hooks/usePosts";

export type postType = {
  id: string;
  title: string;
};

const App = () => {
  const [title, setTitle] = useState("");
  const { posts, addPost, loading } = usePosts();

  const handleSubmit = () => {
    addPost(title);
    setTitle("");
  };

  return (
    <div>
      <h2>게시글 목록</h2>
      {loading ? (
        <p>로딩 중</p>
      ) : (
        <ul>
          {posts.map((p: postType) => (
            <li key={p.id}>{p.title}</li>
          ))}
        </ul>
      )}

      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default App;
