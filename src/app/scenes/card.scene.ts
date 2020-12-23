import { GameObjects, Scene } from "phaser";
import { ANIMS_BONFIRE, AUDIO_SILENT_NIGHT, Globals, IMG_BABY_JESUS, IMG_BACKGROUND, IMG_BONFIRE, IMG_BONFIRESPRITE, IMG_DONKEY, IMG_GABRIEL, IMG_GABRIEL_BW, IMG_JOSEPH, IMG_LAMB, IMG_MARY, IMG_MERRY_CHRISTMAS, IMG_SHEPARDS, IMG_THREE_WISE_MEN, SCENE_CARD } from "../constants";
import { GameService } from "../game.service";
import { ScreenMapper } from "../scene-mapper";

export class CardScene extends Scene {

    private gabrielBW: GameObjects.Image
    private gameSvc: GameService

    constructor() {
        super(SCENE_CARD)
        // look up GameService
        this.gameSvc = Globals.injector.get(GameService)
    }

    // load resources
    preload() {
        //load background
        this.load.image(IMG_BACKGROUND, 'assets/nativity/background.png')
        this.load.image(IMG_BABY_JESUS, 'assets/nativity/baby_jesus.png')
        this.load.image(IMG_GABRIEL, 'assets/angel_gabriel.png')
        this.load.image(IMG_GABRIEL_BW, 'assets/angel_gabriel_bw.png')
        this.load.image(IMG_MARY, 'assets/nativity/Mary---Nativity-Christmas-Story-French-Secondary.png')
        this.load.image(IMG_JOSEPH, 'assets/joseph.png')
        this.load.image(IMG_DONKEY, 'assets/nativity/Donkey---Nativity-Christmas-Story-French-Secondary.png')
        this.load.image(IMG_BONFIRE, 'assets/nativity/bonfire.png')
        this.load.image(IMG_MERRY_CHRISTMAS, 'assets/merry_christmas.png')
        this.load.image(IMG_LAMB, 'assets/lamb.png')
        this.load.image(IMG_THREE_WISE_MEN, 'assets/three_wise_men.png')
        this.load.image(IMG_SHEPARDS, 'assets/shepherds.png')
    
        this.load.spritesheet(IMG_BONFIRESPRITE, 'assets/bonfire.png', {
            frameWidth: 230, frameHeight: 312   // divide pixels by how many repeated pictures in the PNG
        })
    
        this.load.audio(AUDIO_SILENT_NIGHT, [
            // 'assets/audio/silent_night.mp3',
            // 'assets/audio/silent_night.ogg',
            'assets/audio/zilent_night.m4a',
        ])
    }

    // create game objects
    create() {
        const mapper = new ScreenMapper({
            scene: this,
            columns: 11, rows: 11
        })

        let img = mapper.placeImageAt(4, 5, IMG_BACKGROUND, {scaleToWidth: 1.35})

        // mapper.drawGrids()

        this.anims.create({
            key: ANIMS_BONFIRE,
            frames: this.anims.generateFrameNumbers(IMG_BONFIRESPRITE, {start: 0, end: 11}),
            frameRate: 12,
            repeat: -1  // -1 means restart again
        })
        let sprite  = mapper.placeSpriteAt (5, 9, IMG_BONFIRESPRITE, {scaleToWidth: .15})
        sprite.play(ANIMS_BONFIRE)
        // img = mapper.placeImageAt(5, 9 , IMG_BONFIRE, {scaleX: .4, scaleY: .4})
        // img = mapper.placeImageAt(5, 8.5 , IMG_BABY_JESUS, {scaleX: .2, scaleY: .2})
        img = mapper.placeImageAt(5, 8.5 , IMG_LAMB, {scaleX: .05, scaleY: .05})

        // img = mapper.placeImageAt(4.8, 4.5 , IMG_GABRIEL, {scaleX: .8, scaleY: .8})
        // this.gabrielBW = mapper.placeImageAt(4.8, 4.5 , IMG_GABRIEL_BW, {scaleX: .8, scaleY: .8})
        // this.gabrielBW.setInteractive()
        // this.gabrielBW.on('pointerover', () => {
        //     // this.gabrielBW.alpha = 0
        //     this.add.tween({
        //         targets: this.gabrielBW, 
        //         duration: 500, //milliseconds
        //         //attributes
        //         alpha: 0,
        //         rotation: Phaser.Math.DegToRad(5)
        //     })
        // })
        // this.gabrielBW.on('pointerout', () => {
        //     // this.gabrielBW.alpha = 1
        //     this.add.tween({
        //         targets: this.gabrielBW, 
        //         duration: 500, //milliseconds
        //         //attributes
        //         alpha: 1,
        //         rotation: Phaser.Math.DegToRad(0)
        //     })
        // })

        img = mapper.placeImageAt(4, 8 , IMG_MARY, {scaleX: .15, scaleY: .15})
        img = mapper.placeImageAt(3, 8 , IMG_SHEPARDS, {scaleX: .25, scaleY: .25})
        img = mapper.placeImageAt(6, 8 , IMG_JOSEPH, {scaleX: .25, scaleY: .25})
        img = mapper.placeImageAt(7, 8 , IMG_THREE_WISE_MEN, {scaleX: .25, scaleY: .25})
        img = mapper.placeImageAt(6.5, 2.5 , IMG_DONKEY, {scaleX: .15, scaleY: .15})
        img.rotation = Phaser.Math.DegToRad(25)

        const music = this.sound.add(AUDIO_SILENT_NIGHT, {
            volume: .6,
            loop: true
        })        

        music.play()

        mapper.placeTextAt(0, 0, this.gameSvc.message) // text origin is at the top left

        // const centerX = (this.game.config.width as number)/2
        // const centerY = (this.game.config.height as number)/2

        // const bkg = this.add.image(centerX, centerY, IMG_BACKGROUND)

        // bkg.scaleX = .5
        // bkg.scaleY = .5
        // bkg.rotation = Phaser.Math.DegToRad(45)

        // bkg.setOrigin(0, 0) // set the "origin" of the image. default is the centre of the image (.5,.5)
    }

    // "Frames per second", game loop
    update(){

    }
}