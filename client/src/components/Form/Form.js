import { useContext } from 'react'
import {
  Button,
  Form as Frm,
  FormGroup,
  Label,
  Input
} from 'reactstrap'
import ItemContext from '../../utils/ItemContext'

const Form = () => {

  const {
    item,
    handleInputChange,
    handleAddItem
  } = useContext(ItemContext)

  return (
    <Frm onSubmit={handleAddItem}>
      <FormGroup>
        <Label htmlFor="item">Item</Label>
        <Input 
          type="text" 
          name="item"
          value={item}
          onChange={handleInputChange} />
      </FormGroup>
      <Button color="primary" onClick={handleAddItem}>Add Item</Button>
    </Frm>
  )
}

export default Form
