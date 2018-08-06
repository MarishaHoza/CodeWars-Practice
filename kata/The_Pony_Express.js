// The Pony Express

function riders(stations) {
    let riders = 1;
    let distance = stations[0];
    
    for (var i=1; i< stations.length; i++){
      if (distance + stations[i] <= 100){
        distance += stations[i];
      } else {
        riders ++;
        distance = stations[i];
      }
    }
  
    return riders
}

riders([6, 24, 6, 8, 28, 8, 23, 47, 17, 29, 37, 18, 40, 49]);


// The Pony Express (missing rider)


// in progress, doesn't quite work yet
function riders(stations, stationX) {
    let riders = 1;
    let distance = stations[0];
      
    for (var i=1; i<stations.length; i++){
      if (distance + stations[i] <= 100 && i < stationX-1){
        distance += stations[i];
      } else if (i === stationX-1) {
        riders ++;
        distance = stations[stationX-1] + stations[stationX-1]
      } else if (distance + stations[i] <= 100 && i > stationX-1){
        distance += stations[i]
      } else {
        riders ++;
        distance = stations[i];
      }
    }
    
    return riders
  }
  
  
  riders([23,43,38,5,26,41], 3)