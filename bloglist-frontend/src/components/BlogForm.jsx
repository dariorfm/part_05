import { useState } from 'react'

const BlogForm = ({ createNote }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    

    const addBlog = (event) => {
        event.preventDefault()
        createNote({
            title: title,
            author: author,
            url: url
        })

        setTitle('')
        setAuthor('')
        setUrl('')
    }

    
    return (
        <form onSubmit={addBlog}>
        <h2>create new</h2>
        <div>
            title:
            <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
            />
        </div>
        <div>
            author:
            <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
            />
        </div>
        <div>
            url:
            <input
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
            />
        </div>
        <button type="submit">create</button>
        </form>
    )
}
// 5.6 Blog list frontend step6
export default BlogForm