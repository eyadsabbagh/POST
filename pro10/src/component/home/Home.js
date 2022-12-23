import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setposts] = useState([]);
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    getPosts();
  }, []);
  const getPosts = () => {
    fetch(
      `https://www.wp-course.site/wp-json/youthink/posts?page=${counter}`
    ).then((response) => {
      return response.json().then((json) => {
        setposts([...posts, ...json.data]);
        console.log("This is the data", json.data);
      });
    });
  };
  useEffect(() => {
    getPosts();
  }, [counter]);

  return (
    <>
      {posts.map((post, i) => {
        return (
          <div key={i} className="mb-4">
            <Link to={`${post.slug}`}>
              <h6 className="text-center">{post.title}</h6>
            </Link>
            <div>
              <img src={post.thumbnail} />
            </div>
          </div>
        );
      })}
      {counter < 5 && (
        <div>
          <button
            onClick={() => {
              setCounter(counter + 1);
            }}>
            Loading more
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
