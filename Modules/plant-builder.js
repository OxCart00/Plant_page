class PlantRecomendation{
  constructor({location,soil,toxicity,pot,style}){
    this.location = location;
    this.soil = soil;
    this.toxicity = toxicity;
    this.pot = pot;
    this.style = style;
  }
  addMoss(){
    this.moss = 'Moss pole';
  }
  addPebbles(){
    this.pebbles = 'Pebbles';
  }
  addGreenies(){
    this.greenies = 'Mini Plants';
  }
}
module.exports = PlantRecomendation;

