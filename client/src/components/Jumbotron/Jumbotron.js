import { 
  Jumbotron as Jmbtrn, 
  Button } from 'reactstrap'

const Jumbotron = () => {
  return (
    <Jmbtrn>
      <h1 className="display-3">About Nick.</h1>
      <p className="lead">An aspiring web developer.</p>
      <hr className="my-2" />
      <p>I have been in the resturaunt industry for almost 5 years now as a sever and bartender. Currently
            involved in the web development program at UCI, I am reaching forward for a career in all around software development.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jmbtrn>
  )
}

export default Jumbotron