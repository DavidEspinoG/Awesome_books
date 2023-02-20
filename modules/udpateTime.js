import { time } from './selectors.js';
import { DateTime } from './luxon.js';

const updateTime = () => {
  const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  time.innerText = now;
  setInterval(() => {
    time.innerText = now;
  }, 10000);
};

export default updateTime;