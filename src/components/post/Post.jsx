import { MoreVert } from '@material-ui/icons';
import './post.css';

function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src="assets/persons/1.jpg" alt="" className="postProfileImg" />
                <span className="postUsername">Kumar</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
          <span className="postText">My first post</span>
          <img src="/assets/images/lilly.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/images/like.jpg" alt="" className="postLikeIcon" />
            <img src="/assets/images/heart.avif" alt="" className="postLikeIcon" />
            <span className="postLikeCounter">55 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentCounter">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
