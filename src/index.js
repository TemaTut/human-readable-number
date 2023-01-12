module.exports = function toReadable (number) {
    const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'];
    const doz = ['','',"twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if (number == 0) {
        return 'zero';
    }
    if (number <= 19) {
        return arr[number];
    } else if (number<=99) {
        return (doz[Math.floor(number/10)] + " " + arr[number%10]).trim();
    } else if (number<=999) {
        const dozer = number - Math.floor((number/100))*100;
        let hundreds = arr[Math.floor(number/100)] + " " + 'hundred' + " ";
        const dec = (dozer <= 19) ? (arr[Math.floor(dozer)]).trim() : (doz[Math.floor(dozer/10)] + " " + arr[dozer%10]).trim();
        return  (hundreds + dec).trim();
    }
  } 
 
