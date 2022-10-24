import { DateTime } from './luxon.js';
// Function to handle datetime
const getDate = () => {
  const time = document.querySelector('.time');
  const dt = DateTime.now();
  time.innerHTML = dt.toLocaleString(DateTime.DATETIME_MED);
};

// eslint-disable-next-line import/prefer-default-export
export { getDate };
