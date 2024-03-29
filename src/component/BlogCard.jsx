import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
const PostCard = ({ title, src, date }) => {
    return (
        <div className="p-2">
            <img src={src} height={400}
                className="p-2 w-100 " alt="postImg" />
            <div className="p-2">
                <h2>{title}</h2>
                <span>{date}</span>
            </div>
        </div>
    );
};


export default PostCard;
