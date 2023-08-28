var sportsTwo = ['Cricket', 'Golf', 'Football', 'Kabaddi'];
sportsTwo.push('Swimming');
sportsTwo.push('Taekwando');
for (var _i = 0, sportsTwo_1 = sportsTwo; _i < sportsTwo_1.length; _i++) {
    var sport = sportsTwo_1[_i];
    console.log(sport);
}
for (var sport in sportsTwo) {
    console.log(sport);
}
// This won't compile (even if it is in scope and can not be used by another variable)
// for(let sport in sports) {
//     console.log(sport);
// }
