import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

export default function DettUser() {
    const {id} = useParams()
    const [Puser, setPuser]= useState()
    useEffect(() => {
        const fetchUser = async () => {
          try {
              fetch("http://localhost/wordpress_1/wordpress/wp-json/wp/v2/users/" + id)
                .then(response => response.json())
                .then(json => setPuser(json))
                .catch(err => console.log(err));
            ;
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchUser();
      }, []);

  return (
    <Container>
        <Card style={{ width: '22rem' }}>
        <Card.Img variant="top" src= {Puser && Puser.avatar_urls["96"]} />
        <Card.Body>
            <Card.Title>{Puser && Puser.name}</Card.Title>
            <Card.Text>
            Link Blog: <Link to={Puser && Puser.url} target='blank' >{Puser && Puser.url}</Link>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
  )
}
