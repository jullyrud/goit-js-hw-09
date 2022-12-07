import { Notify } from 'notiflix/build/notiflix-notify-aio'

function createPromise(position, delay) {
  
  const promise = new Promise((resolve, reject) => {
    const timerId = setInterval
    
    let position = 0
    setTimeout(timerId(() => {
      const shouldResolve = Math.random() > 0.3;
      
      if (position < data.amount) {
        if (shouldResolve) {
        position += 1
        //console.log('resolve');
        console.log(`position`, position);
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
          Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
     } else {
        position += 1 
        //console.log('reject');
        console.log(`position`, position);
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
          Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    }
      } else {
        clearInterval(timerId)
      }

    }, delay),
    data.delay)
  })
}

const refs = {
  form: document.querySelector('.form')
}

let data = []
refs.form.addEventListener('submit', onFormsubmit)
refs.form.addEventListener('click', onFormClik)

function onFormClik(e) {
  const elem = e.currentTarget.elements
  // data[e.target.name] = e.target.value

  data.delay = elem.delay.value
  data.step = elem.step.value
  data.amount = elem.amount.value
  
}

function onFormsubmit(e) {
  e.preventDefault()
  console.log(data);
  createPromise(data.amount, data.step)
  
}
// const refs = {
//   delayInput: document.querySelector('[name="delay"]'),
//   delayStep: document.querySelector('[name="step"]'),
//   amountInput: document.querySelector('[name="amount"]')
// }
// let firstDelay = null
// let delayStep = null
// let amount = null
// refs.delayInput.addEventListener('input', onDelayInputActions)
// refs.delayStep.addEventListener('input', onDelayStepInputActions)
// refs.amountInput.addEventListener('input', onAmountInputActions)
// function onDelayInputActions(e) {
//   firstDelay = e.target.value
//   // console.log(firstDelay)
// }
// function onDelayStepInputActions(e) {
//  delayStep = e.target.value
//   // console.log(delayStep)
// }
// function onAmountInputActions(e) {
//   amount = e.target.value
//   // console.log(amount)
// }




