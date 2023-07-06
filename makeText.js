/** Command-line tool to generate Markov text. */

// Might revist later. Seems extremely irrelvant to what we've been doing,
// I could be wrong. I would suggest either scrapping this, or putting it in a
// more relevant section? Perhaps this is relevant to the current topic and I'm
// just confused?  

/** Command-line tool to generate Markov text. */


const fs = require("fs");
const markov = require("./markov");
const axios = require("axios");
const process = require("process");


/** Make Markov machine from text and generate text from it. */

function generateText(text) {
  let mm = new markov.MarkovMachine(text);
  console.log(mm.makeText());
}


/** read file and generate text from it. */

function makeText(path) {
  fs.readFile(path, "utf8", function cb(err, data) {
    if (err) {
      console.error(`Cannot read file: ${path}: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  });

}


/** read URL and make text from it. */


async function makeURLText(url) {
  let resp;

  try {
    resp = await axios.get(url);
  } catch (err) {
    console.error(`Cannot read URL: ${url}: ${err}`);
    process.exit(1); // in event of error stop everything 
  }
  generateText(resp.data)
  // create text from the axios response data. 
}


/** interpret cmdline to decide what to do. */

let [method, path] = process.argv.slice(2);

if (method === "file") {
  makeText(path);   // if a file make text for file
}

else if (method === "url") {
  makeURLText(path); // if url make url text
}

else {
  console.error(`Unknown method: ${method}`);
  process.exit(1);

  // in event of error unknown
}

// ^ consulted solution: tried to comprehend the best I could. 
// none of the code really works as expected, perhaps I'll go over this
// with a TA in the future. Plan to revist. Spent time reading and understand,
// won't share on Slack until I get a good solution down and understand this 
// better. 