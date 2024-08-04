// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {
    id,
    username,
    date,
    comment,
    isLiked,
    initialClassName,
  } = commentDetails
  const firstCharacterOfName = username ? username[0].toUpperCase() : ''
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const likeTextClassName = isLiked ? 'active-button' : 'button'
  const postedTime = formatDistanceToNow(date)

  const onClickLikeButton = () => {
    const {togglingLiked} = props
    togglingLiked(id)
  }

  const onClickDeleteButton = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="first-character">{firstCharacterOfName}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{username}</p>
            <p className="time">{postedTime}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            type="button"
            className={likeTextClassName}
            onClick={onClickLikeButton}
          >
            Like
          </button>
        </div>
        <button
          type="button"
          className="button"
          onClick={onClickDeleteButton}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
