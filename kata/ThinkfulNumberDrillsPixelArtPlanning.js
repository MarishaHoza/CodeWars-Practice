// Your function should take two arguments: the size of the wall in millimeters and the size of a pixel in millimeters. It should return True if you can fit an exact number of pixels on the wall, otherwise it should return False. For example is_divisible(4050, 27) should return True, but is_divisible(4066, 27) should return False.

// Note: you don't need to use an if statement here.


function isDivisible(wallLength, pixelSize){
    return ((wallLength / pixelSize) === Math.floor(wallLength/pixelSize))
  }

  isDivisible(4050, 27) // true