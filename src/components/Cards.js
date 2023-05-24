import Card from 'react-bootstrap/Card';

const Cards = ({blog})=> {
  return (
    <Card style={{ width: '25rem', marginRight:'2rem', marginBottom:"2rem"}}>
      <Card.Body>
        <Card.Title>{blog.userName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{blog.title}</Card.Subtitle>
        <Card.Text>
          {blog.content}
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{blog.createdAt}</Card.Subtitle>

      </Card.Body>
    </Card>
  );
}

export default Cards;