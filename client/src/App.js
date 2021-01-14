import { useState, useEffect } from 'react'
import ItemAPI from './utils/ItemAPI'
import ItemContext from './utils/ItemContext'
import { Container, Row, Col } from 'reactstrap'
import Form from './components/Form'
import Jumbotron from './components/Jumbotron'
import List from './components/about'
import Navbar from './components/Navbar'

const {
  getItems,
  createItem,
  deleteItem  
} = ItemAPI

const App = () => {
  const [itemState, setItemState] = useState({
    item: '',
    items: []
  })

  itemState.handleInputChange = event => {
    setItemState({ ...itemState, [event.target.name]: event.target.value })
  }

  itemState.handleAddItem = event => {
    event.preventDefault()
    let items = JSON.parse(JSON.stringify(itemState.items))
    createItem({
      text: itemState.item,
      isDone: false
    })
      .then(({ data: item }) => {
        items.push(item)
        setItemState({ ...itemState, items, item: '' })
      })
      .catch(err => console.error(err))
  }

  itemState.handleDeleteItem = id => {
    let items = JSON.parse(JSON.stringify(itemState.items))
    deleteItem(id)
      .then(() => {
        items = items.filter(item => item._id !== id)
        setItemState({ ...itemState, items })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    getItems()
      .then(({ data: items }) => {
        setItemState({ ...itemState, items })
      })
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Jumbotron />
        </Row>
        <Row>
          <ItemContext.Provider value={itemState}>
            <Col xs={6}>
              <Form />
            </Col>
            <Col xs={6}>
              <List />
            </Col>
          </ItemContext.Provider>
        </Row>
      </Container>
    </>
  )
}

export default App
