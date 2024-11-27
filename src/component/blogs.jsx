// src/BlogSection.js

import './blog.css';

const blogs = [
  {
    id: 1,
    title: 'Consultative Approach to Marketing Trends',
    date: 'June 22, 2024',
    description: 'Our consultation approach to marketing trends focuses on understanding your unique...',
    image: 'path/to/image1.jpg', // Replace with actual image path
  },
  {
    id: 2,
    title: 'Key Financial Tips for Business Owners',
    date: 'June 22, 2024',
    description: 'Our consultation approach to marketing trends focuses on understanding your unique...',
    image: 'path/to/image2.jpg', // Replace with actual image path
  },
];

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <img src={blog.image} alt={blog.title} className="blog-image" />
    <h3>{blog.title}</h3>
    <p>{blog.date}</p>
    <p className="blog-description">{blog.description}</p>
  </div>
);

const BlogSection = () => (
  <div className="blog-section">
    <h2>Read Our Latest Blogs</h2>
    <div className="blog-container">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  </div>
);

export default BlogSection;
