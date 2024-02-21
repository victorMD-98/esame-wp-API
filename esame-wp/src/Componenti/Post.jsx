import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import RimuoviTagHTML from './TextSenzaTag'
import { Link, useNavigate } from 'react-router-dom';


export default function Post({title,descrizione,categoria,pubblicato,autore,img}) {

    const [categorieArr, setCategorieArr] = useState([]);
    const [user, setUser]= useState()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const promises = categoria.map(e => {
            return fetch("http://localhost/wordpress_1/wordpress/wp-json/wp/v2/categories/" + e)
              .then(response => response.json())
              .then(json => json.name)
              .catch(err => console.log(err));
          });
  
          const result = await Promise.all(promises);
          setCategorieArr(result);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [categoria]);

    useEffect(() => {
        const fetchUser = async () => {
          try {
              fetch("http://localhost/wordpress_1/wordpress/wp-json/wp/v2/users/" + autore)
                .then(response => response.json())
                .then(json => setUser(json))
                .catch(err => console.log(err));
            ;
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchUser();
      }, [autore]);
  

    
  return (
    <Card className=" mb-3">
      <Card.Header className='text-center'> <Link className='user' to={"/"+autore} ><img className='rounded-circle' src={user && user.avatar_urls["24"]} alt="img" /> {user && user.name}</Link></Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
         <RimuoviTagHTML testoHTML={descrizione}/>
        <Card.Text>
          <span className='me-1'><b>Categoria:</b> </span>
        {categorieArr.map((ele, index) => (
            <span key={index}>{ele+" "},</span>
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">{pubblicato}</Card.Footer>
    </Card>
  )
}
