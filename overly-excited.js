// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.
// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];


function addExcitement (theWordArray) {

    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
       buildMeUp += "" + " " + theWordArray[i] 
       

       if (theWordArray[i] % 3) {
           buildMeUp.push("!");
       }
       console.log(buildMeUp)
    }


}

addExcitement(sentence)
