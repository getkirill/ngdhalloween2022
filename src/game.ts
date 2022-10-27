import { Game } from "phaser";
import MainScene from "./scenes/main";

const supportsWebGL = (() => {
  try {
    var canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  } catch (e) {
    return false;
  }
})();

export class NGDHalloween2022Game {
  constructor(public mount: HTMLCanvasElement) {
    new Game({
      canvas: mount,
      type: supportsWebGL ? Phaser.WEBGL : Phaser.CANVAS,
      width: mount.width,
      height: mount.height,
      scene: [MainScene]
    });
  }
}
