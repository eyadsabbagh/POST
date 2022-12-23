import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Single = () => {
  const { slug } = useParams();
  const [post, setpost] = useState([]);
  console.log(slug);
  useEffect(() => {
    fetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`)
      .then((response) => {
        return response.json().then((json) => {
          setpost(json.data);
          console.log(json.data);
        });
      })
      .catch();
  }, [slug]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </>
  );
};

export default Single;
