import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Postlist = () => {
  const [list, setList] = useState([]);

  const postUrl = "https://isdi-blog-posts-api.herokuapp.com/posts/";

  const getpostAPI = async () => {
    try {
      const { data: listposts } = await axios.get(postUrl);
      setList(listposts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpostAPI();
  }, []);

  return (
    <>
      <h2>Post List</h2>
      <div className="container">
        <ul className="list-group"></ul>
        <ul>
          {list.map((post) => (
            <li key={post.id}>
              <h2 className="list-group-item active">{post.title}</h2>
              <p className="list-group-item">{post.body}</p>
              <div className="list-group-item">
                <h2 className="list-group-item">{post.userName}</h2>
                <img
                  src={post.userAvatar}
                  className="img-thumbnail"
                  alt={`image-${post.userName}`}
                  width="150"
                  height="150"
                />
              </div>
              <Link href={`/postlist/${post.id}`}># More...</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Postlist;

///
