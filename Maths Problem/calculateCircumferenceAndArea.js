/* Calculate the circumference and area of circle */
function calculateCircleProperties(radius) {
  const area = (Math.PI * radius * radius).toFixed(2);
  const circumference = (2 * Math.PI * radius).toFixed(2);
  return [circumference, area];
}

console.log(calculateCircleProperties(5.2));
