import axios from "axios";

const morePost = ({ post }) => (
  <>
    {post ? (
      <>
        <div className="container">
          <ul className="list-group">
            <h2 className="list-group-item active">More...:</h2>
            <h2 className="list-group-item">{post.title}</h2>
            <p className="list-group-item">{post.body}</p>
            <h2 className="list-group-item">{post.userName}</h2>
            <img
              src={post.userAvatar}
              className="img-thumbnail"
              alt={`image-${post.userName}`}
              width="150"
              height="150"
            />
          </ul>
        </div>
      </>
    ) : (
      <h3>Lodading...</h3>
    )}
  </>
);

export async function getStaticPaths() {
  const postsUrl = "https://isdi-blog-posts-api.herokuapp.com/posts/";
  try {
    const { data: posts } = await axios.get(postsUrl);
    const paths = posts.map((post) => ({
      params: { id: `${post.id}` },
    }));
    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const postsUrl = `https://isdi-blog-posts-api.herokuapp.com/posts/${params.id}`;
  try {
    const { data: post } = await axios.get(postsUrl);
    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default morePost;
