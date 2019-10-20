import Counter from './counter';
import snow from './snow';

import './index.scss';

const millisecondsInMinute = 1000 * 60;
const counter = new Counter();

setInterval(() => {
    counter.update();
}, millisecondsInMinute);

snow();

document.body.appendChild(counter.element);
