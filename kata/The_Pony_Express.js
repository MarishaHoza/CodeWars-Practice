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

function riders2(stations, stationX) {
    
  }

  riders2([43, 23, 40, 13], 4)