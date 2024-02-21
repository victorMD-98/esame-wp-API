import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getPosts from '../Actions/getPosts'
import Post from '../Componenti/Post'
import { Container } from 'react-bootstrap'

export default function Home() {

    const posts = useSelector(state=> state.posts)
    console.log(posts)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getPosts())
    },[])

    useEffect(()=>{
        fetch("http://localhost/wordpress_1/wordpress/wp-json/wp/v2").then(response=>response.json()).then(json=> console.log(json)).catch(err=>console.log(err))
    },[])

  return (
    <>  
        <Container>
            {posts && posts.map(e => <Post key={e.id} img={e.featured_media} title={e.title.rendered} descrizione={e.excerpt.rendered} categoria={e.categories}
            pubblicato={e.yoast_head_json.article_published_time} autore={e.author} />)}
        </Container>
    </>
  )
}
