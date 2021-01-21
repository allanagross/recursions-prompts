// If life was easy, we could just do things the easy way:
// const getElementsByClassName = (className) => {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:

const getElementsByClassName = (className) => {
  //input: string 
  //output: array 
    //create a variable to return and store results in 
    let results = [];

    //we need to access the document body element so assign a variable to it 
    let docB = document.body; 

    
    //create a function to check for classes in the document body 
    let classChecker = function (docB){
      //use a conditional to check for class name 
      if(docB.classList && docB.classList.contains(className)){
        //push the results of what you find into the results array 
        results.push(docB)
      }
      
      //look to see if any of the elements within the body have child nodes associated with the class attributes
      if(docB.hasChildNodes()){
        //we are going to create a for loop to loop through the data of child node attributes in the document and call the classChecker on them 
        for(let i = 0; i < docB.childNodes.length; i++){
          classChecker(docB.childNodes[i]);
        }
      }
    }
    //recursive call on the function you just created to check for classes 
    //use recursive call to keep the function going until it hits a breaking point 
    classChecker(docB)

    //return the results of running your function 
    return results; 


   
 
};
