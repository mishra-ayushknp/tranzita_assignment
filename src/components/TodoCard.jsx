import Button from 'react-bootstrap/Button';
import  Card from 'react-bootstrap/Card';
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'

const TodoCard = ({id,userId,title,completed,ondelete}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>User:{userId}</Card.Title>
        <Card.Text>
          {title}
        </Card.Text>
        <Card.Text>
        {
          completed===true?(<ImCheckboxChecked/>):(<ImCheckboxUnchecked/>)
        }
        </Card.Text>
        <Button className="btn btn-dark" onClick={()=>{ondelete(id)}}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard