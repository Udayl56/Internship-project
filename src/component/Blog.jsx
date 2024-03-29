import React from 'react';
import PostCard from './BlogCard'; // Corrected import path
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';

function Blog() {
    return (
        <div className='row ' style={{ background: "#EDF0F2" }}>
            <div className='col-sm-8'>
                <PostCard title={"Why do most industries use Java?"} src={post1} date={"March 2024"} />
                <PostCard title={"What does full-stack developers actually do?"} src={post2} date={"March 2024"} />
                <PostCard title={"What is Next.js"} src={post3} date={"March 2024"} />
                <PostCard title={"Common interview questions asked at IBM "} src={post1} date={"March 2024"} />
            </div>
            <div className='col-sm-4' style={{ position: "sticky", top: "0" }}>

                <h2>Recent Post</h2>
                <ul className='unstyled'>
                    <li>post 1</li>
                    <li>post 2</li>
                    <li>post 3</li>
                    <li>post 4</li>
                </ul>
            </div>
        </div>
    );
}

export default Blog;
