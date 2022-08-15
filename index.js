const functions = {
  getCharacterLength: (str) => {
    return [...str].length;
  },
  reverseString: (str) => {
    return str.split("").reverse().join("");
  },
  capitalize: (str) => {
    // let camel = str.split("");
    // camel[0] = camel[0].toUpperCase();
    // return camel.join("");
    return str.charAt(0).toUpperCase() + str.slice(1);
  }  
  
}


module.exports  = functions