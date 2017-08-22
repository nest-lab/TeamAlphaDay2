const request = require('request');
const {forEach, set} = require('lodash');
const cheerio = require('cheerio');

const googleUrlPath = 'https://google.com/search?q=';

const requestOpt = {
  timeout: 500000, 
  headers: {
    'User-agent': 'google-bot'
  },
  transform(body) {
    return cheerio.load(body, { xmlmode: true });
  }
 }

const getSearchResult = (searchTerms)=>{
  var searchUrl = `${googleUrlPath}${searchTerms}`;
  var finalSearchResults = []
  
  return new Promise((resolve, reject)=>{
    request.get(searchUrl, requestOpt, (err, response, results)=>{
      if(err){
        reject(err);
      }
      //Parse the html codes
      $ = cheerio.load(results);
      //extract all google result links
      const links = $('h3[class=r] a').toArray();
      //foreach result links
      forEach(links, (link)=>{
        finalSearchResults.push(link.attribs.href);    
      });
      resolve(finalSearchResults); 
    });
  });
}

//USE CASE
getSearchResult('Writing Maintainable JavaScript by Nicholas Zakas').then(results=>{
  console.log(results);
}).catch(err=>{
  console.log(err);
});