"use strict";
function longestPalindrome(s) {
    if (s.length <= 1)
        return s;
    let palindromes = [];
    for (let x = 0; x < s.length; x++) {
        for (let y = s.length; y >= x; y--) {
            if (s.slice(x, y).length >= 1) {
                if (s.slice(x, y) === s.slice(x, y).split('').reverse().join('')) {
                    palindromes.push(s.slice(x, y));
                }
            }
        }
    }
    let result = palindromes[0];
    let longestLength = palindromes[0].length;
    for (let palidrome of palindromes) {
        console.log(palidrome);
        if (palidrome.length > longestLength) {
            longestLength = palidrome.length;
            result = palidrome;
        }
        else {
            result = palidrome;
        }
    }
    return result;
}
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("ac"));
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
// check every char from start to end 
