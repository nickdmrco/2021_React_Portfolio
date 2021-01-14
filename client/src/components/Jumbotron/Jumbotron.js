import { 
  Jumbotron as Jmbtrn, 
  Button } from 'reactstrap'

const Jumbotron = () => {
  return (
    <Jmbtrn>
      <h1 className="display-3">To-Do List App</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jmbtrn>
  )
}

export default Jumbotron