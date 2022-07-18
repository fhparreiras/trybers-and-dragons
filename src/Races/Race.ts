abstract class Race {
  private _name:string;
  private _dexterity:number;

  constructor(nome: string, destreza: number) {
    this._name = nome;
    this._dexterity = destreza;
  }

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  abstract get maxLifePoints(): number;
}

export default Race;
