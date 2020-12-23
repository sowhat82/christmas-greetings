import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private gameSvc: GameService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const message = this.activatedRoute.snapshot.queryParams['message']

    console.info(message)
    this.gameSvc.message = message
    this.gameSvc.createGame()
  }

}
