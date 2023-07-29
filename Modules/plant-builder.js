class PlantRecomendation{
  constructor({location,soil,toxicity,pot,style}){
    this.location = location;
    this.soil = soil;
    this.toxicity = toxicity;
    this.pot = pot;
    this.style = style;
  }
  setMoss(){
    this.moss = 'Moss pole';
  }
  setPebbles(){
    this.pebbles = 'Pebbles';
  }
  setGreenies(){
    this.greenies = 'Mini Plants';
  }
}

