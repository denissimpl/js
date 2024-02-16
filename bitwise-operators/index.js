alert( 123 ^ 0 ); // 123 ...1 or 0 = 1
alert( 0 ^ 123 ); // 123 ...0 or 1 = 1
alert( ~~123 ); // 123 ...1 -> ...0 -> ...1

function isInteger(num){
    if (num !== (~~num)) {
        return false
    }
    return true
}


alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false


(a ^ b) == (b ^ a)
(a & b) == (b & a)
(a | b) == (b | a)

да


alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641 отбрасываются знаки, выходящие за int