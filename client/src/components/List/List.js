import { useContext } from 'react'
import {
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap'
import ItemContext from '../../utils/ItemContext'

const List = () => {

  const {
    items,
    handleDeleteItem
  } = useContext(ItemContext)

  return (
    <ListGroup>
      {
        items.map(({ text, _id }) => (
          <ListGroupItem key={_id}>
            {text}
            <Button color="danger" onClick={() => handleDeleteItem(_id)}>X</Button>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}

export default List
