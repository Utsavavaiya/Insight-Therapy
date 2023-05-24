import { useState } from 'react';

const PostBlog = () =>{
    
    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async(e)=>{
        e.preventDefault();

        const blog = {userName, title, content};

        const response = await fetch('/api/blogs', {
            method:'POST',
            body:JSON.stringify(blog),
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error);
        }
        if(response.ok){
            setUserName('');
            setTitle('');
            setError('');
            setContent('');
            console.log("New workout added!",json);
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}  style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", marginTop:"4rem"}}>
                <input type='text' 
                placeholder='Username' 
                className='blog-input'
                onChange={(e)=>setUserName(e.target.value)}
                value={userName} />

                <input type='text' 
                placeholder='Title of the blog' className='blog-input'
                onChange={(e)=>setTitle(e.target.value)}
                value={title} />

                <textarea type='text' 
                placeholder='Start typing...' 
                className='blog-input' 
                onChange={(e)=>setContent(e.target.value)}
                value={content}/>
                <button type='submit' className='submit-form'>Post</button>
            </form>
        </div>
    );
}

export default PostBlog;