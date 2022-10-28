import { Game } from "phaser";
import { Events } from "phaser";

const supportsWebGL = (() => {
  try {
    var canvas = document.createElement("canvas");
    return (
      !!window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch (e) {
    return false;
  }
})();

export class NGDHalloween2022Game {
  private game: Game;
  // private entities: {
  //   [key: string]: Entity;
  // } = {};
  // publi
  constructor(public mount: HTMLCanvasElement) {
    const self = this;
    this.game = new Game({
      canvas: mount,
      type: supportsWebGL ? Phaser.WEBGL : Phaser.CANVAS,
      width: mount.width,
      height: mount.height,
      scene: {
        preload: function (this: Phaser.Scene) {
          self.loadAssets(this);
        },
        create: function (this: Phaser.Scene) {
          self.init(this);
        },
        update: function (this: Phaser.Scene) {
          self.update(this);
        },
      },
    });
  }
  /**
   * Load assets (preload in phaser)
   */
  private loadAssets(scene: Phaser.Scene) {}
  /**
   * Initialize (create in phaser)
   */
  private init(scene: Phaser.Scene) {
    
  }
  /**
   * Update
   */
  private update(scene: Phaser.Scene) {

  }
}
