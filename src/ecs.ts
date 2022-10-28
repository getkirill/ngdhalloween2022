import { GameObjects } from "phaser";

// export abstract class Component {
//   public abstract get names(): string[]
//   constructor(public readonly entity: Entity) {}
//   public abstract init(scene: Phaser.Scene): any;
//   public abstract update(scene: Phaser.Scene): any;
// }

// export class Entity {
//   constructor(
//     public readonly gameObject: GameObjects.GameObject,
//     private _components: Component[]
//   ) {}
//   public GetComponent(name: string) {
//     return this._components.filter((c: Component) => (c.names.includes(name)))[0] || null// i guess this is because js doesn't have generics
//   }
//   public AddComponent(component: Component) {
//     if (!this.GetComponent(component.names[0])) this._components.push(component);
//     else throw new Error("Component already exist on this entity.")
//     return this
//   }
// }


// export interface Entity {
//   components: Component[] // THAT DIDN'T BREAK LMAOOOOO
// }

// export interface Component { // only for state
//   name: string
// }

// export function components<T>(t: T): T & Entity {
//   return t as T & Entity
// }

// export interface System<T extends Component> { // handle
//   /** Called at the started */
//   init<G extends Phaser.GameObjects.GameObject & Entity>(t: T, g: G): T;
//   /** Called every frame */
//   nextState<G extends Phaser.GameObjects.GameObject & Entity>(t: T, g: G): T;
// }

