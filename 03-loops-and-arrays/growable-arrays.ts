let sportsTwo: string[] = ['Cricket', 'Golf', 'Football', 'Kabaddi'];

sportsTwo.push('Swimming');
sportsTwo.push('Taekwando');

// of prints the element
for(let sport of sportsTwo) {
    console.log(sport);
}

// in prints the index
for(let sport in sportsTwo) {
    console.log(sport);
}
// This won't compile (even if it is in scope and can not be used by another variable)
// for(let sport in sports) {
//     console.log(sport);
// }