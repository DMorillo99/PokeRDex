import React, { Component } from "react";
import "../Style/Main.css"
import Container from 'react-bootstrap/Container'
import "bootstrap/dist/css/bootstrap.min.css"
import Image from 'react-bootstrap/Image'
import Cards from "./srcCard";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        console.log("Minecraft");
        console.log("Love");
        return (
            <div >
                <Container fluid className="BTitle" >
                    <div className="PokeTitle">
                        <h1 style={{fontSize:"8vw"}}>PokeRDex</h1>
                    </div>
                    <Image src="https://giffiles.alphacoders.com/916/91672.gif" fluid />
                </Container>
                <Container fluid className="BSRC" >
                    <Cards/>
                    <Image src="https://66.media.tumblr.com/d5b7f3798daf71bbbaf44f6aa0ab278b/tumblr_pdnkqq8wuu1scncwdo1_540.gif" fluid />
                </Container>
                <Container fluid className="BFooter" ></Container>
            </div>
        );
    }
}