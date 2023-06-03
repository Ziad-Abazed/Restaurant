'use strict';
function Food(foodName,foodType,foodPrice){
    this.foodName=foodName;
    this.foodType=foodType;
    this.foodPrice=foodPrice;
}

let arrIds=[];
function generateFoodId() {
 
let getID= Math.floor(1000 + Math.random() * 9000);
if(arrIds.includes(getID)){
    generateFoodId();
}else{
  arrIds.push(getID);
  return getID;
}
}

Food.prototype.id=function(){
    return generateFoodId();
}
Food.prototype.render=function(){
    let foods=document.getElementById("tbody");
    let FoodRow=document.createElement("tr");
    let Id=document.createElement("td");
    Id.textContent=this.id();
    let Name=document.createElement("td");
    Name.textContent=this.foodName;

    let Type=document.createElement("td");
    Type.textContent=this.foodType;

    let Price=document.createElement("td");
    Price.textContent=this.foodPrice+" jd";

    FoodRow.appendChild(Id);

    FoodRow.appendChild(Name);
    FoodRow.appendChild(Type);
    FoodRow.appendChild(Price);

    foods.appendChild(FoodRow);

}



function handler(e){
    e.preventDefault();
    let foodName=e.target.foodName.value;
    let foodType=e.target.foodType.value;
    let foodPrice=e.target.foodPrice.value;
    let food=new Food(foodName,foodType,foodPrice)
    food.render()
}


let saveValues = document.getElementById('foodForm');
saveValues.addEventListener('submit', handler)