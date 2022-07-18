import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race:Race;
  private _archetype:Archetype;
  private _maxLifePoints:number;
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _dexterity:number;
  private _energy:Energy;
  name: string;

  constructor(nome:string) {
    this.name = nome;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(nome, this._dexterity);
    this._archetype = new Mage(nome);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race():string {
    return this._race.name;
  }

  get archetype():string {
    return this._archetype.name;
  }

  get lifePoints():number {
    return this._lifePoints;
  }
  
  get defense():number {
    return this._defense;
  }

  get strength():number {
    return this._strength;
  }

  get dexterity():number {
    return this._dexterity;
  }

  get energy():Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  attack(enemy: SimpleFighter): void {
    const charEnemy = enemy;
    charEnemy.receiveDamage(this._strength);
  }

  receiveDamage(attackPoints: number): number {
    let myLifePoints = this._lifePoints;
    const enemyAttack = attackPoints;
    if (enemyAttack > 0) {
      myLifePoints -= enemyAttack;
    }
    return myLifePoints <= 0 ? -1 : myLifePoints;
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints; 
    }
    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: SimpleFighter): void {
    const fortune = Math.ceil((Math.random() * 10));
    if (fortune >= 5) {
      this.attack(enemy);
    }
    this.attack(enemy);
  }
}
