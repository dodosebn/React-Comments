import React, { useState } from 'react';
// import DeleteIcon from '../images/icon-delete.svg';
const Input = ({ newComment }) => {
  const [textVal, setTextVal] = useState("");

  const changeTextVal = (e) => {
    setTextVal(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = { content: textVal, replies: [] }; 

    fetch('http://localhost:4000/comments', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment)
    })
    .then((res) => res.json())
    .then((newbie) => {
      newComment(newbie); 
      console.log("NEW BLOG ADDED");
    })
    .catch((err) => console.error("Error adding comment:", err));
    setTextVal(""); 

  };

  return (
    <div className='text-center flex flex-col justify-center'>
      <form onSubmit={handleSubmit} className='flex'>
         <textarea placeholder="Add a Comment" value={textVal} onChange={changeTextVal} className='border outline-none '></textarea>
        <button type="submit" className=''>Send</button>
      </form>
    </div>
  );
};

export default Input;
