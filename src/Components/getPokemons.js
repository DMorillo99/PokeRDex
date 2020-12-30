import React, { Component } from "react";
import MoreInfo from "./getPokemonInfo";
import axios from "axios";
import "../Style/Main.css"
import { Helmet } from 'react-helmet'
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default class Poke extends React.Component {
    state = {
        dataSource: [],
        dataIdName: '',
        url: '',
    };

    //tranforn letters in Capitalize
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidMount() {
        this.getData();
    }

    componentDidUpdate() {
        this.getData();
    }

    myChangeHandler = (event) => {
        this.setState({ dataIdName: event.target.value });
    }

    //Get information of PokeApi with axios 
    getData = () => {
        if (this.state.dataIdName == "") {
            this.state.url = "https://pokeapi.co/api/v2/pokemon/?limit=1050"/* Cambiar por el valor maximo || 964||1050*/
            /*this.state.url = "https://pokeapi.co/api/v2/pokemon/?limit='" + this.state.dataIdName + "'"/*964||1050*/
        } else if (this.state.dataIdName != null) {
            this.state.url = "https://pokeapi.co/api/v2/pokemon/?limit=" + this.state.dataIdName + ""/*964||1050*/
        }
        axios.get(this.state.url)
            .then(data =>
                this.setState({
                    //Save data
                    dataSource: data.data.results
                })
            )
            .catch(error => {
                console.log(error)
            });
    };
    render() {
        const get = this.state.dataSource;

        return (

            <Container fluid>
                <Helmet>
                    <title>Pokemons</title>
                </Helmet>
                <Form>
                    <Form.Control placeholder="Cantidad de Pokemones"
                        onChange={this.myChangeHandler}
                    />
                </Form>
                <hr />
                {get.map(item => {
                    return (
                        <div>

                            <Card style={{ width: '14.45rem' }} className="text-center">
                                <Card.Img variant="top" src={"https://www.pkparaiso.com/imagenes/xy/sprites/animados/"
                                    + item.name
                                    + ".gif"}
                                    height="150" 
                                    fluid />
                                <Card.Body>
                                    <Card.Title>{this.Capitalize(item.name)}</Card.Title>
                                    <hr/>
                                    <Card.Text >
                                        {/*Mostrar los tipos de pokemones*/}
                                        <PokeTypes dataFromParent={item.url} />
                                        {/*Informacion basica de los pokemones*/}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </Container >
        );
    }
}

// Tipos
class PokeTypes extends Component {
    state = {
        pokeTypes: [],
        name: "",
        Altura: "",
        Peso: "",
        species: ""
    };

    //tranforn letters in Capitalize
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    componentDidMount() {
        this.getDataInfo();
    }
    //Get information of PokeApi with axios 
    getDataInfo = () => {
        axios.get(this.props.dataFromParent)
            .then(data =>
                this.setState({
                    //Save data
                    pokeTypes: data.data.types,
                    Altura: data.data.height,
                    Peso: data.data.weight,
                    species: data.data.species,
                    name: data.data.name
                })
            )
            .catch(error => {
                console.log(error)
            });
    };
    render() {
        const getTypes = this.state.pokeTypes; /*Tipos de pokemones */
        const altura = this.state.Altura; /*Tipos de pokemones */
        const peso = this.state.Peso; /*Tipos de pokemones */
        const pokeName = this.state.species.name; /*ID */
        console.log();
        return (
            <div>
                {getTypes.map(item => {
                    return (
                        <Container fluid >
                            <div className="Tipos" style={{
                                backgroundColor:
                                    item.type.name === "normal" ? "lavender" : "amor"
                                        | item.type.name === "fighting" ? "firebrick" : "amor"
                                            | item.type.name === "flying" ? "AliceBlue" : "amor"
                                                | item.type.name === "poison" ? "Mediumpurple" : "amor"
                                                    | item.type.name === "ground" ? "BurlyWood" : "amor"
                                                        | item.type.name === "rock" ? "Peru" : "amor"
                                                            | item.type.name === "bug" ? "YellowGreen" : "amor"
                                                                | item.type.name === "ghost" ? "Purple" : "amor"
                                                                    | item.type.name === "steel" ? "LightGrey" : "amor"
                                                                        | item.type.name === "fire" ? "Crimson" : "amor"
                                                                            | item.type.name === "water" ? "RoyalBlue" : "amor"
                                                                                | item.type.name === "grass" ? "Lime" : "amor"
                                                                                    | item.type.name === "electric" ? "Yellow" : "amor"
                                                                                        | item.type.name === "psychic" ? "Violet" : "amor"
                                                                                            | item.type.name === "ice" ? "AquaMarine" : "amor"
                                                                                                | item.type.name === "dragon" ? "MediumSlateBlue" : "amor"
                                                                                                    | item.type.name === "dark" ? "black" : "amor"
                                                                                                        | item.type.name === "fairy" ? "#FFDC00 " : "amor"
                                                                                                            | item.type.name === "unknown" ? "#020202" : "amor"
                                                                                                                | item.type.name === "shadow" ? "SlateGray" : "amor"
                            }}>
                                <div style={{ color: item.type.name === "dark" ? "White" : "Amor" | item.type.name === "ghost" ? "White" : "Amor" }}>
                                    <label>{this.Capitalize(item.type.name)}</label>
                                </div>
                            </div>
                        </Container>
                    );
                })}
                <br />
                <br />
                {console.log()}
                <label>Height: {(altura / 10 * 3.2808).toFixed(2)}ft </label>
                <br />
                <label>Weight: {peso / 10}kg </label>
                <br />
                <PokeInfos datoforPokeInfo={pokeName}/>
            </div>
        );
    }
}
class PokeInfos extends React.Component {
    state = {
        dataSource: [],
        index: 1
    };
    Capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        /*No manda nada*/
        axios.get("https://pokeapi.co/api/v2/pokemon-species/1/")
            .then(data =>
                this.setState({
                    dataSource: data.data.flavor_text_entries
                })
            )
            .catch(error => {
                console.log(error)
            });
    };
    render() {
        const get = this.state.dataSource;
        console.log();
        return (
            <div>
                {get.map(item => {
                    return (
                        <div >
                        </div>
                    );
                })}
            </div>
        );
    }
}






