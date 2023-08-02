class PlantRecomendation{
  constructor({location,soil,toxicity,pot,style}){
    this.location = location;
    this.soil = soil;
    this.toxicity = toxicity;
    this.pot = pot;
    this.style = style;
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

