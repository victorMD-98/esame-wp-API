import React from 'react'
import { Button, Card } from 'react-bootstrap'
import RimuoviTagHTML from './TextSenzaTag'


export default function Post({title,descrizione,categoria,pubblicato,autore}) {
    
  return (
    <Card className="text-center">
      <Card.Header>{autore}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
         <RimuoviTagHTML testoHTML={descrizione}/>
        <Card.Text>
          {categoria}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">{pubblicato}</Card.Footer>
    </Card>
  )
}
