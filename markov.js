/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

// extremely confused, what does this have to do with testing with Jest? Consulted 
// solution, and interpreted what I could. Can try this again and do more commits
// later on. 

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() { 
    // TODO
    let chains = new Map();
    // while i less than words list add 1 to it
    for (let i = 0; i < this.words.length; i += 1) {
      let word = this.words[i];
      let nextWord = this.words[i + 1] || null;  //null if iteration ends?

      //if chains array has word, get word , push the next?
      if (chains.has(word)) chains.get(word).push(nextWord);
      else chains.set(word, [nextWord]); //otherwise reassign word to next?
    }
    
  
    this.chains = chains;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}






let mm = new MarkovMachine("the cat in the hat");
let m2 = new MarkovMachine('eggs.txt');
// console.log(mm)

console.log(m2)

//output:

// MarkovMachine {
//   words: [ 'the', 'cat', 'in', 'the', 'hat' ],
//   chains: Map(4) {
//     'the' => [ 'cat', 'hat' ],
//     'cat' => [ 'in' ],
//     'in' => [ 'the' ],
//     'hat' => [ null ]
//   }
// } // -> why is the output always the cat in the hat? 


module.exports = {
  MarkovMachine,
};
