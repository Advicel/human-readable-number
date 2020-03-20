module.exports =function toReadable (number) {
    let result="";
    let hundred,dozen,unit;
    if(number == 0) return "zero";
    const UNITS={
        0:"",
        1:"one",
        2:"two",
        3:"three",
        4:"four",
        5:"five",
        6:"six",
        7:"seven",
        8:"eight",
        9:"nine"
    };
    const DOZENS={
        0:"",
        2:"twenty",
        3:"thirty",
        4:"forty",
        5:"fifty",
        6:"sixty",
        7:"seventy",
        8:"eighty",
        9:"ninety"
    }
    const FIRST_DOZENS={
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
      };
    [unit,dozen,hundred]= number.toString().split("").reverse();

    if(hundred!=undefined)  result+=UNITS[+hundred]+" hundred ";
    if(dozen=="1")          result+=FIRST_DOZENS[+unit];
    else                    result+=(DOZENS[+dozen]||"")+ " " +UNITS[unit];

    return result.trim().replace("  "," ");
}

//console.log(toReadable(306));