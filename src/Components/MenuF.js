import React, { Component } from "react";
import "../Style/Main.css"
import "bootstrap/dist/css/bootstrap.min.css"

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
                <div class="fab-wrapper">
                    <input id="fabCheckbox" type="checkbox" class="fab-checkbox" />
                    <label class="fab" for="fabCheckbox">
                        <span class="fab-dots fab-dots-1"></span>
                        <span class="fab-dots fab-dots-2"></span>
                        <span class="fab-dots fab-dots-3"></span>
                    </label>
                    <div class="fab-wheel">
                        <a href="/home" class="fab-action fab-action-1">
                            <i class="fas fa-book"><img src="https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png" height="40"/></i>
                        </a>
                        <a href="/pokemons" class="fab-action fab-action-2">
                            <i class="fas fa-book"><img src="https://www.pngkit.com/png/full/314-3140523_pokeball-master-ball-sprite-png.png" height="50"/></i>
                        </a>
                        <a class="fab-action fab-action-3">
                        </a>
                        <a class="fab-action fab-action-4">
                            <i class="fas fa-info"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}