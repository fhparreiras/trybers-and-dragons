import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _instancesCount = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this._instancesCount += 1;
    return this._instancesCount;
  }
}

export default Halfling;
