// Code your solution in this file!
function distanceFromHqInBlocks(block1){  
    return Math.abs(block1-42);
}
 function distanceFromHqInFeet(block){
     return distanceFromHqInBlocks(block)*264
 }
 function  distanceTravelledInFeet(block1,block2){
return Math.abs(block1-block2)*264;
 }

 function calculatesFarePrice(start,destination){
     const distance = distanceTravelledInFeet(start,destination)
    
    if (distance <= 400 ){
        return 0;
    }
    
else if (distance > 400 && distance<= 2000 ) {
        return ((distance -400) * .02);
}
else if (distance > 2000 && 2500>=distance){
    return 25;
}
else{
    return 'cannot travel that far';
}

}