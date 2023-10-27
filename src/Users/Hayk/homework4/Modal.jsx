import { useEffect } from "react";
import "./Modal.scss";

export default function Modal(props) {

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.classList.contains("Modal")) {
        props.openRevers();
      }
    };
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="Modal">
      <div className="Modal_posts">
        {props.children}
        <button 
         className="Modal_delete" 
         onClick={props.filterIdPost}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}


