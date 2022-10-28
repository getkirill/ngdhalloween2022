import { GameObjects, Input } from "phaser";

export default class MainScene extends Phaser.Scene {
  george?: GameObjects.Sprite;
  up: boolean = false;
  down: boolean = false;
  left: boolean = false;
  right: boolean = false;
  preload() {
    this.load.image("background", "resources/Background.png");
    this.load.image("george", "resources/george.png");
  }
  create() {
    console.log("Main Scene - on create.");
    ((sprite) => {
      sprite.displayWidth = this.game.config.width as number;
      sprite.displayHeight = this.game.config.height as number;
    })(
      this.add.sprite(
        (this.game.config.width as number) / 2,
        (this.game.config.height as number) / 2,
        "background"
      )
    );
    this.george = ((sprite) => {
      sprite.scale = 1 / 4;
      sprite.setOrigin(0.5, 0.5);
      // sprite.x -= sprite.displayWidth / 2
      // sprite.y -= sprite.displayHeight / 2
      return sprite;
    })(
      this.add.sprite(
        (this.game.config.width as number) / 2,
        (this.game.config.height as number) / 2,
        "george"
      )
    );
    ((text) => {
      text.setOrigin(0.5, 0.5);
      return text;
    })(
      this.add.text(
        (this.game.config.width as number) / 2,
        (this.game.config.height as number) / 2 - 250,
        "Speedtricking",
        { fontSize: `5rem`, fontFamily: `'Helvectica', 'Arial', sans-serif` }
      )
    );
    ((button) => {
      button.setOrigin(0.5, 0.5);
      return button;
    })(
      this.add.text(
        (this.game.config.width as number) / 2,
        (this.game.config.height as number) / 2 - 250,
        "Speedtricking",
        { fontSize: `5rem`, fontFamily: `'Helvectica', 'Arial', sans-serif` }
      )
    );
  }
  update(time: number, delta: number) {}
}
