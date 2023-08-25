import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            My First Blog
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Nature, with its vast landscapes, intricate ecosystems, and breathtaking beauty, has always captivated the human spirit. From the towering mountains to the smallest wildflower, the natural world offers us a sanctuary for introspection, adventure, and wonder. Join us on a virtual journey as we delve into the enchanting realms of nature and discover the myriad reasons why it deserves not only our appreciation but also our protection.
      </p>
    </div>

    
  );
}
