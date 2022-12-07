import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
import { Report } from 'notiflix/build/notiflix-report-aio';

let choosenData = null
let diff = null

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0])
        if (selectedDates[0] < Date.now()){
            // window.alert("Please choose a date in the future")
            Report.failure('looser', 'Please choose a date in the future');
        }
        if (selectedDates[0] > Date.now()) {
           refs.startBtn.removeAttribute('disabled')
        } else {
            if (!refs.startBtn.hasAttribute('disabled')){
                refs.startBtn.setAttribute('disabled', true)
            }
        }
        choosenData = selectedDates[0]
    },
};
flatpickr("#datetime-picker", options)

const refs = {
    startBtn: document.querySelector('[data-start]'),
    input: document.querySelector('#datetime-picker'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
}

refs.startBtn.setAttribute('disabled', true),
refs.startBtn.addEventListener('click', onStartBtnClick)

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    refs.days.textContent = days.toString().padStart(2,0)
    refs.hours.textContent = hours.toString().padStart(2,0)
    refs.minutes.textContent = minutes.toString().padStart(2,0)
    refs.seconds.textContent = seconds.toString().padStart(2,0)
    
    return { days, hours, minutes, seconds };
    
}

function onStartBtnClick() {
    const timerId = setInterval(() => {
        diff = choosenData - Date.now()

        if (choosenData >= Date.now()) {
            console.log(convertMs(diff))
            
        } else {
            clearInterval(timerId)
       }
        // do { console.log(convertMs(diff)) }
        // while (choosenData >= Date.now())
    }, 1000)
}


