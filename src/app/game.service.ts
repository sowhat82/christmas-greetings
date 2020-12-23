import { Injectable } from "@angular/core";
import { Game } from "phaser";
import { CardScene } from "./scenes/card.scene";

@Injectable()

export class GameService{

    created = false
    game: Game
    message = ""
    
    constructor(){}

    createGame(width = 400, height = 250) {
        if (this.created) {
            return
        }

        // create the game
        this.game = new Game({
            width, height,
            type: Phaser.AUTO, // type of canvas to use
            parent: 'card', //id to be used in the html page <div id=card>
            scene: [CardScene], // router to the starting scene view
        })
    }
}