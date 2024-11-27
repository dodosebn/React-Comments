import React, { useEffect, useState } from 'react';
import CommentCard from './comment';  
import Input from './input';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/comments')
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Error fetching comments:', err));
  }, []);

  const newComment = (newbie) => {
    setComments((prevComments) => [...prevComments, newbie]);
  }

  return (
    <div>
      <main>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} /> 
      ))}
      </main>
      <div>
        <Input newComment={newComment}/>
      </div>
    </div>
   
  );
};

export default Comments;
