module.exports = function toReadable(number) {
    let numstr = number.toString(),
        ans = '';
    const nl = numstr.length;
    switch (nl) {
        case 1:
            ans = numberToWord10(numstr);
            break
        case 2:
            if (number > 9 && number < 20) { ans = numberToWord20(numstr); break } else { ans = numberToWord100(number, numstr); break }
        case 3:
            ans = numberToWord1000(number, numstr);
            return ans
        default:
            return "nothing"
    }
    return ans
}

function numberToWord10(str) {
    switch (str) {
        case '0':
            return 'zero'
        case '1':
            return 'one'
        case '2':
            return 'two'
        case '3':
            return 'three'
        case '4':
            return 'four'
        case '5':
            return 'five'
        case '6':
            return 'six'
        case '7':
            return 'seven'
        case '8':
            return 'eight'
        case '9':
            return 'nine'
    }
}

function numberToWord20(str) {
    switch (str) {
        case '10':
            return 'ten'
        case '11':
            return 'eleven'
        case '12':
            return 'twelve'
        case '13':
            return 'thirteen'
        case '14':
            return 'fourteen'
        case '15':
            return 'fifteen'
        case '16':
            return 'sixteen'
        case '17':
            return 'seventeen'
        case '18':
            return 'eighteen'
        case '19':
            return 'nineteen'
    }
}

function numberOdd10(str) {
    switch (str) {
        case '20':
            return 'twenty'
        case '30':
            return 'thirty'
        case '40':
            return 'forty'
        case '50':
            return 'fifty'
        case '60':
            return 'sixty'
        case '70':
            return 'seventy'
        case '80':
            return 'eighty'
        case '90':
            return 'ninety'
    }
}


function numberToWord100(number, string) {
    let val = '';
    if (number % 10 == 0) {
        val = numberOdd10(string);
        return val
    } else {
        let arr = string.split('');
        arr[0] = arr[0] + '0';
        val = numberOdd10(arr[0]) + " " + numberToWord10(arr[1]);
        return val
    }
}

function numberToWord1000(number, string) {
    let val = '',
        des = '';
    var array = string.split('')
    if (number % 100 == 0) {
        val = numberToWord10(array[0]) + " hundred";
        return val;
    } else {
        des = '' + array[1] + array[2];
        if (array[1] == 0) { val = numberToWord10(array[0]) + " hundred " + numberToWord10(array[2]) } else {
            if (array[1] == 1) { val = numberToWord10(array[0]) + " hundred " + numberToWord20(des) } else {
                val = numberToWord10(array[0]) + " hundred " + numberToWord100(number, des);
            }
        }
        return val
    }
}