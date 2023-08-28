var reviews = [5, 2, 5, 7, 8, 82, 87];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total += reviews[index];
}
console.log("Total = ".concat(total));
console.log("Average = ".concat(total / reviews.length));
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var element = reviews_1[_i];
    console.log(element);
}
