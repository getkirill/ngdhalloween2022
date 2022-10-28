export default class MainScene extends Phaser.Scene {
  preload() {
    this.load.image("background", "resources/Background.png");
  }
  create() {
    console.log("CREATED");
    ((sprite) => {
      sprite.scale = 0.25;
    })(this.add.sprite(0, 0, "background"));
  }
  update(time: number, delta: number) {
    time - delta;
  }
}
