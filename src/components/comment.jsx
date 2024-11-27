import React from 'react';

const commentCard = ({ comment }) => {
  return (
    <div className='bg-white p-8'>
      <div className='flex'>
        {comment.image && comment.image.png ? (
          <img src={comment.image.png} alt={comment.username} />
        ) : (
          <img
            alt="Default avatar"
            src="https://lh3.googleusercontent.com/a/ACg8ocKT82fCP2v_LFwZHKLhuN3ohQ8kda6_FxXcQB7v4imySuda2Q1-=s432-c-no"
            className="w-9 h-9 rounded-full"
          />
        )}
            <p>{comment.content}</p>
        <h3>{comment.username}</h3>
      </div>
    </div>
  );
};

export default commentCard;
