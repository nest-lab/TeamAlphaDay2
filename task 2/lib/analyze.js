const {parse, transform} = require('csv');
const {readFileSync} = require('fs');

/**
 * @param {string} filePath - Enter the .csv file path; 
 */
const analyze = (filePath)=>{
  const csvContent = readFileSync(filePath);
  //Parse stock data to two dimensional array
  parse(csvContent, (err, data)=>{
    if(err){
      throw err;
    }
    var gains = 0, loose = 0; 
    for(let i=1; i<data.length; i++){
      //if closing stock price is greater than opening stock price
      //Increment gains and otherwise 
      if(data[i][4]>data[i][1]){
        gains++;
        continue;
      }else if(data[i][4]<data[i][1]){
        loose++
        continue;
      }else{
        continue;
      }
    }
    marketResult(gains, loose);
  });
}

const marketResult = (gains, loose)=>{
  if(gains>loose){
    console.log(`The company made in total ${gains} gains and ${loose} loose - What a profitable 2 months!`);
  }else{
    console.log(`The company made in total ${gains} gains and ${loose} loose - Oops! bad 2 months!`);  
  }
}

module.exports = analyze;