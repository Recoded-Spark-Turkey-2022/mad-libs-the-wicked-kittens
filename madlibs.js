/**
 * Complete the implementation of parseStory.
 * 
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 * 
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 * 
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 * 
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 * 
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
function parseStory(rawStory) {
  // Your code here.
  return {}; // This line is currently wrong :)
}
// This is examplePull
/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 * 
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory().then(parseStory).then((processedStory) => {
  const sampleArray = [
    { word: "Louis", pos: "noun" },
    { word: "went", pos: "verb", },
    { word: "to", },
    { word: "the", },
    { word: "store", pos: "adjective" },
    { word: "," }
  ]

  sampleArray.map(object => {
    const madlibBefore = document.querySelector('.madLibsEdit')
    const madlibAfter = document.querySelector('.madLibsPreview')

    if(object.pos === 'noun'){
    
    madlibBefore.innerHTML += "<span><input type='text' name='type' value='noun'> </span>";
    }else if(object.pos === 'verb'){
      madlibBefore.innerHTML += "<span><input type='text' name='type' value='verb'> </span>";
    }else if(object.pos === 'adjective'){
      madlibBefore.innerHTML += "<span><input type='text' name='type' value='adjective'> </span>";
    }else{
      madlibBefore.innerHTML += `${object.word} `;
    }



  })

  madlibAfter.innerHTML = `${madLibsPreview}`



  console.log(processedStory);
});
