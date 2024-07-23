import { useState, } from "react"

const Blog = ({ blog, updateLikes }) => {

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }


  return (
  <div style={blogStyle}>
    <div>
      {blog.title} {blog.author}
      <button
        style={hideWhenVisible}
        onClick={toggleVisibility}
      >view</button>
      <button
        style={showWhenVisible}
        onClick={toggleVisibility}
      >hide</button>
    </div>
    <div style={showWhenVisible}>
      {blog.url} <br />
      {blog.likes}
      <button
        onClick={() => updateLikes(blog.id, blog.likes)}
      >like</button> <br />
      {blog.user.name} <br />


    </div>

  </div> 

 )
}

export default Blog