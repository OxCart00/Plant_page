class PlantRecomendation{
  constructor({plant,soil,pot}){
    this.plant = plant;
    this.soil = soil;
    this.pot = pot;
  }
  addColor(color){
    this.color = color;
  }
  addMoss(){
    this.moss = 'moss-pole';
  }
  addPebbles(){
    this.pebbles = 'pebbles';
  }
  addGreenies(){
    this.greenies = 'mini-plants';
  }
}
module.exports = PlantRecomendation;

