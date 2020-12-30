import React, { Component } from "react";
import "../Style/Main.css"
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("Minecraft");
        console.log("Love");
        return (
            <div>
                <Container>
                <Card className="mainCard">
                    <Card.Body>
                        <Card.Text style={{textAlign: 'justify'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac viverra elit. Phasellus pellentesque neque ex, at vestibulum ex bibendum at. Vestibulum faucibus ligula blandit mi tincidunt, ut posuere justo eleifend. Morbi euismod ipsum eget risus fermentum, id sollicitudin ligula gravida. Suspendisse eget leo ut risus porttitor interdum a in ipsum. Etiam volutpat aliquam mauris, ultrices eleifend purus dignissim non. Aenean tellus diam, condimentum ac sem eu, convallis congue magna. Etiam ut dui fringilla, ultrices ligula eget, varius elit. Nullam a mi in erat ultricies ornare.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <h1 style={{textAlign: 'center'}}>Sources</h1>
                        </Card.Title>
                        <Card.Text style={{textAlign: 'justify'}}>
                            <h4>PokeApi</h4> This is a full RESTful API linked to an extensive database detailing everything about the Pokémon main game series.
                            <br/>
                            <br/>
                            <Card.Link><Button href="https://pokeapi.co" size="lg" block variant="primary">Here</Button></Card.Link>

                            <hr/>
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Text style={{textAlign: 'justify'}}>
                            <h4>PkParaiso</h4>PkParaíso en donde podrás encontrar toda la información sobre Pokémon: Noticias, Guías, Pokédex.
                            <br/>
                            <br/>
                            <Card.Link><Button href="https://www.pkparaiso.com/pokedex/" size="lg" block variant="primary">Here</Button></Card.Link>
                            
                            <hr/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            </div>
        );
    }
}