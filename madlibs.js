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
  const storyArray = rawStory.split(` `)
  const allWordsArray = []
  for(let i =0; i<storyArray.length;i++){
    let wordObjects = {word:storyArray[i]}
    if(wordObjects.word === '[n]') {
      wordObjects["pos"]= "noun"
    }else if (wordObjects.word === '[a]'){
      wordObjects["pos"]= "adjective"
    }else if (wordObjects.word === '[v]'){
      wordObjects["pos"]= "verb"
    }
    allWordsArray.push(wordObjects)
  }
  return allWordsArray  
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
  ] // this is a sample array to be able to work on.

  sampleArray.map(object => {
    const madlibBefore = document.querySelector('.madLibsEdit')
    const madlibAfter = document.querySelector('.madLibsPreview')

    function createHTML(place, text, pholder){
      place.innerHTML +=`<span><input type='text' name='type' value='' placeholder=${pholder} id=${text}></span>`
    }

    if(object.pos === 'noun'){
    createHTML(madlibBefore, 'nounID', 'noun'); //created input for madlibbefore
    createHTML(madlibAfter, 'nounID2', 'noun')  //created input for madlibAfter -> we can add readonly later



    document.querySelector('#nounID').addEventListener('input', e => {
    document.querySelector('#nounID2').value = e.target.value
    //document.querySelector('#nounID').value   
  })


    }else if(object.pos === 'verb'){
      createHTML(madlibBefore, 'verbID', 'verb');
      createHTML(madlibAfter, 'verbID2', 'verb')

      madlibBefore.addEventListener('input', e => {
        document.querySelector('.madLibsPreview input').value = document.querySelector('.madLibsEdit input').value   
      })

    }else if(object.pos === 'adjective'){
      createHTML(madlibBefore, 'adjID', 'adjective');
      createHTML(madlibAfter, 'adjID2', 'adjective')

      document.querySelector('#adjID').addEventListener('input', e => {
        document.querySelector('#adjID').value = document.querySelector('#adjID2').value   

        console.log(e)
      })
    
      

    }else{
      madlibBefore.innerHTML += `${object.word} `;
      madlibAfter.innerHTML += `${object.word} `
    }



  })

  console.log(processedStory);
});
