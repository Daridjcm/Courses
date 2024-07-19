let days = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado', 'domingo'];
function getDay(n) {
  // Check if input is within valid range
  if (n < 1 || n > 7) {
    // Throw error if out of range
    throw new Error('Out of range');
  };
    return days[n - 1];
};
console.log(getDay(1));

const getDays = () => {
  days.map(day => console.log(day));
};
getDays();