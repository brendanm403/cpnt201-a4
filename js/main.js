import '../css/style.css'
import javascriptLogo from '../images/javascript.svg'
import viteLogo from '../images/vite.svg'
import { setupCounter } from './counter.js'
import dayjs from "dayjs";

const startDate = dayjs("2023-09-05");
const currentDate = dayjs();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
  <p>Todays Date: ${dayjs().format("MMMM D, YYYY")}</p>
  <p>Days Since Start: ${currentDate.diff(startDate, "day")}</p>
`

setupCounter(document.querySelector('#counter'))
