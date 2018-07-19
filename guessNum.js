
class guessNum{
    constructor(){

    }

    test(input){
    //   let targetNum=[1,2,3,4];
    for (let i=0;i<4;i++)
    {
     var randomNumber=~~(Math.random()*10);
     targetNum.push(randomNumber);
    }

      let inputNum=input.split(' ');

    //   let xNUm = inputNum.filter((item,i)=>item==targetNum[i]).length
    //   return `${xNUm}A0B` ;

    //   let yNUm = inputNum.filer((item,i)=>item != targetNum[i] && inputNum.includes(item)).length
      const set = new Set();
      targetNum.forEach(number => set.add(number));
      let yNUm = 0;
      let xNum = 0;
      inputNum.forEach((number, index) => {
        if(number.toString() == targetNum[index])
        {
            xNum = xNum + 1;
        }
        else{
            if(set.has(parseInt(number)))
            {
                yNUm = yNUm + 1;
            }
        }
      });
      var result = `${xNum}A${yNUm}B`;


      return result;
    }
}
module.exports = guessNum