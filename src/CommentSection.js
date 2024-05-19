import React, { useState } from 'react';
import './CommentSection.css';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Ask your question here..."
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="comments-list">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
