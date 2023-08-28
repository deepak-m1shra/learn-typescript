let reviews: number[] = [5,2,5,7,8,82,87];

let total: number = 0;

for (let index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}

console.log(`Total = ${total}`);
console.log(`Average = ${total/reviews.length}`)

for(let element of reviews) {
    console.log(element);
}