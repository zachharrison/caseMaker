function makeCase(input, caseType) {
  const vowels = /[aeiou]/gi;
  const order = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];
  let result = input;

  const toCamel = str => str.split(' ').map((x,i,a) => i === 0 ? a[0].toLowerCase() : 
    x.slice(0,1).toUpperCase() + x.slice(1)).join('');

  const toPascal = str => str.split(' ').map(x => x.slice(0,1).toUpperCase() + x.slice(1)).join('');
  const toSnake = str => str.split(' ').join('_');
  const toKebab = str => str.split(' ').join('-');
  const toTitle = str => str.split(' ').map(x => x.slice(0,1).toUpperCase() + x.slice(1)).join(' ');
  const toUpper = str => str.toUpperCase();
  const toLower = str => str.toLowerCase();

  const capVowel = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++){
      if(vowels.test(str[i])){
        result += str[i].toUpperCase()
      } else {
        result += str[i];
      }
    }
    return result;
  }
  
  const capCons = (str) => {
    let result = '';
    for(let i = 0; i < str.length; i++){
      if(!vowels.test(str[i])){
        result += str[i].toUpperCase()
      } else {
        result += str[i];
      }
    }
    return result;
  }

  const style = {
    camel: toCamel,
    pascal: toPascal,
    snake: toSnake,
    kebab: toKebab,
    title: toTitle,
    vowel: capVowel,
    consonant: capCons,
    upper: toUpper,
    lower: toLower
  };

  //------------------------------------------------
  // ONLY WORKS IF CASE TYPE ARRAY HAS TWO ELEMENTS
  // if(Array.isArray(caseType)){
  //   caseType = caseType.sort((a,b) => order.indexOf(a) - order.indexOf(b));
  //   for(let i = 0; i < caseType.length; i++){
  //     for(let key in style){
  //       if(caseType[i] === key){
  //         result = style[caseType[i]](result);
  //         return style[caseType[i + 1]](result);
  //       }
  //     }
  //   }
  // } else {
  //   return style[caseType](result)
  // }
  //------------------------------------------------
  

  // WORKS WITH AN INFIINITE AMOUNT OF CASE TYPES :)
  for(let func in style){
    if(caseType.includes(func)){
      result = style[func](result);
    }
  }
  return result;

  
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));