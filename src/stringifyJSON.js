// This is what you would do if you liked things to be easy:
// const stringifyJSON = JSON.stringify;
// But you don't so you're going to write it from scratch:

const stringifyJSON = (obj) => {
//check the value that is being passed in and determine if it is an array or object 
if( Array.isArray(obj) ){
  //create a variabl to return with the results 
  var results = [];
  //loop through the object and push the elements into the results variable and return the values as a string 
  for( var i = 0; i < obj.length; i++ ){
    results.push( stringifyJSON(obj[i]) );
  }
  return '[' + results.join(',') + ']';
}
//test if the object is an object and repeat the steps from above 
if( obj && typeof obj === 'object' ){
  //create an empty variable to store results 
  var results = [];
  //loop through the object and if it passes the conditional continue to push the results into the results array and be sure to return it as a string 
  for( var key in obj ){
    if( obj[key] === undefined || typeof obj[key] === 'function'){
      continue;
    }
    results.push(
      //use stringify to turn the values passed in into strings 
      stringifyJSON(key) + ':' + stringifyJSON(obj[key])
    );
  }
  return '{' + results.join(',') + '}';
}
//test if the element passed in is a string 
if( typeof obj === 'string' ){
  return '"'+obj+'"';
}
return ''+ obj;
};
