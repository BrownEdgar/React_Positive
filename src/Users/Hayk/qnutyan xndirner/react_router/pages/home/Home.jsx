import { useState, useEffect } from "react";

import axios from "axios";
import "./Home.scss";
import Modal from "./Modal";

export default function Home() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const [isOpen, setIsOpen] = useState(false);
  const [idPost, setIdPost] = useState(null);

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com/",
      url: "posts",
      params: {
        _limit: 6,
      },
    }).then((res) => setPosts(res.data));
  }, []);

  const openRevers = () => {
    setIsOpen(!isOpen);
  };

  const IdPost = (id) => {
    setIdPost(id);
  }; 

  const filterIdPost = () => {
    const result = posts.filter((elem) => elem.id !== idPost);
    setPosts(result);
    openRevers();
  };

  return (
    <div className="App">
      {posts.map((elem) => {
        return (
          <div key={elem.id} className="App_posts">
            <h3> {elem.title}</h3>
            <p>{elem.body}</p>
            <span
              className="App_delete"
              onClick={() => {
                openRevers();
                IdPost(elem.id);
              }}
            >
              &#10006;
            </span>
            <span className="App_id">{elem.id}</span>
          </div>
        );
      })}

      {isOpen ? (
        <Modal openRevers={openRevers} filterIdPost={filterIdPost}>
          <h3>Are you sure want to delete number : {idPost}</h3>
        </Modal>
      ) : null}
    </div>
  );
}
