//_.each
//create a copy of the given array.
var moreFruits = function(fruits) {
  ////// Helper Function //////
  var results = [];
  var copyElement = function(element, index, collection) {
    results.push(element);
  };
  ////// Main Code //////
  _.each(fruits, copyElement);
  return results;
};
//--------------------------------------------------------------------
//_.each
//traverse the number array and determine which are multiples of five.
var multiplesOfFive = function(numbers) {
  ////// Helper Functions //////
  var count = 0;
  var divisibleByFive = function(number) {
    if (number % 5 === 0) {
      count += 1;
    }
  };
  //////Main Code //////
  _.each(numbers, divisibleByFive);
  return count;
};
//----------------------------------------------------------------------
 //_.filter
// return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, target) {
  ////// Helper Code //////
  var matchesTarget = function(element) {
    return element === target;
  };
  ////// Main Code //////
  return _.filter(fruits, matchesTarget);

};
//---------------------------------------------------------------
// _.filter
//return the fruits array with only fruits starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  ////// Helper Function //////
  var startsWithLetter = function(element) {
    return element[0] === letter;
  };
  ////// Main Code //////
  return _.filter(fruits, startsWithLetter);
};
//----------------------------------------------------------------
// _.filter
//return a filtered array containing only cookie-type desserts.

////// Helper Function //////
var isCookie = function(obj) {
  return obj['type'] === 'cookie';
};
////// Main Code //////
var cookiesOnly = function(desserts) {
  return _.filter(desserts, isCookie);
};

//-----------------------------------------------------------------
// _.reduce
//return the total price of all products.
var sumTotal = function(products) {
  ////// Helper Functions //////
  var accumulatesPrices = function(total, item, index, products) {
    return total + parseFloat(item['price'].substring(1));
  };
  ////// Main Code //////
  return _.reduce(products, accumulatesPrices, 0);

};
//------------------------------------------------------------------
// _.reduce
//return an object with dessert category counts
var dessertCategories = function(desserts) {
  //////Helper Functions //////
  var accObj = {};
  var countDesserts = function(total, item, key, list ) {
    var key = item['type'];
    if (total[key] === undefined) {
      total[key] = 1;
    } else {
      total[key] += 1;
    }
    return total;
  };
  ////// Main Code //////
  return _.reduce(desserts, countDesserts, accObj);
};

//-------------------------------------------------------------------
//_.reduce
//return a new array containing movies released in the 90s
var ninetiesKid = function(movies) {
  ////// Helper Functions //////
  var startArray = [];
  var releasedInRange = function(totalArray, obj, index, list) {
    if (obj.releaseYear > 1990 && obj.releaseYear < 2000) {
      totalArray.push(obj.title);
    }
    return totalArray;
  };
  ////// Main Code //////
  var result = _.reduce(movies, releasedInRange, startArray);
  return result;
};

//---------------------------------------------------------------------
//*  _.reduce
// return an boolean stating if there exists a movie with a shorter runtime
//than your time limit.

var movieNight = function(movies, timeLimit) {
  ////// Helper Functions //////
  var startingPoint = false;
  var runtimeBelowLimit = function(boolean, obj, index, movies) {
    if (obj.runtime < timeLimit) {
      boolean = true;
    }
    return boolean;
  };
  ////// Main Code //////
  var shorterRunTimeExists = _.reduce(movies, runtimeBelowLimit, startingPoint);
  return shorterRunTimeExists;
};
//---------------------------------------------------------------------
//_.map
//return a new array containing all strings converted to uppercase letters.

var upperCaseSomething = function(element, index, list) {
  var newStr = element.toUpperCase();
  return newStr;
};

var upperCaseFruits = function(fruits) {
  return _.map(fruits, upperCaseSomething);
};
//-------------------------------------------------------------------------
//  _.map
// return a new array of objects that have a new "glutenFree" property,
//only including the gluten free desserts

var glutenFree = function(desserts) {
  ////// Helper Functions //////
  var addIsGlutenFree = function(obj, index, desserts) {
    var ingredientsArray = obj['ingredients'];
    if (ingredientsArray.indexOf('flour') === -1) {
      obj.glutenFree = true;
    } else {
      obj.glutenFree = false;
    }
    return obj;
  };
  var isGlutenFree = function(obj) {
    return obj.glutenFree;
  };
  ////// Main Code //////
  var addGlutenProperty = _.map(desserts, addIsGlutenFree);
  var glutenFreeArray = _.filter(addGlutenProperty, isGlutenFree);
  console.log(glutenFreeArray);
  return glutenFreeArray;
};
//--------------------------------------------------------------------------------------------
//  _.map
// return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.

var applyCoupon = function(groceries, coupon) {
  ////// Helper Functions //////
  var addSalesPrice = function(obj, index, array) {
    var originalPrice = parseFloat(obj.price.substring(1)).toFixed(2);
    var salesPrice = originalPrice - ((originalPrice * coupon).toFixed(2));
    obj['salePrice'] = '$' + salesPrice;
    return obj;
  };
  ////// Main Code //////
  var salesArray = _.map(groceries, addSalesPrice);
  return salesArray;
};
