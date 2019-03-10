var PI = 3.14;
function add(a, b) {
  return a + b;
}

function area(r) {
  return PI * r * r;
}

module.exports = {
  PI: PI,
  area: area
};
