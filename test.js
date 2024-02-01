import { Map } from "./utils/map.js";

let background = new Map("./assets/sprite/background/tiles_space.png")
let game = document.getElementById('game')
background.Next();
background.Next();
game.appendChild(background.HTML)