import { React, Component } from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import "../Style/Main.css";

class Cards extends Component {
    state = {}
    render() {
        return (
            <div>
                <br />
                <h1 style={{ textAlign: 'center' }}>Info</h1>
                <br />
                <CardDeck>
                    <Card>
                        <Card.Body>
                            <Card.Title>PokeApi</Card.Title>
                            <Card.Text>
                            This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.
                            <br />
                            <br />
                            <Card.Link><Button href="https://pokeapi.co" size="lg" block variant="primary">Here</Button></Card.Link>

                         </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>PkParaiso</Card.Title>
                            <Card.Text>
                            PkParaíso where you can find all the information about Pokémon: News, Guides, Pokédex.
                            <br />
                            <br />
                            <Card.Link><Button href="https://www.pkparaiso.com/pokedex/" size="lg" block variant="primary">Here</Button></Card.Link>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This card has even longer content than the first to
                                show that equal height action.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>);
    }
}

export default Cards;
