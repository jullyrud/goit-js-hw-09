import { Notify } from 'notiflix/build/notiflix-notify-aio'

function createPromise(position, delay) {
const shouldResolve = Math.random() > 0.3;
let obj = {};
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (shouldResolve) {
      resolve(obj = {
        position,
        delay
      })
    } else {
     reject(obj = {
        position,
        delay
     })
    }
    }, delay)
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

  data.delay = Number(elem.delay.value)
  data.step = Number(elem.step.value)
  data.amount = Number(elem.amount.value)
  
}

function onFormsubmit(e) {
  e.preventDefault()
  let res = data.delay
  for (let i = 0; i <= data.amount; i += 1) {
    res = res + data.step
    createPromise(i, res)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position + 1} in ${delay}ms`)
    
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position + 1} in ${delay}ms`)
  });

  }
}


// import { Notify } from 'notiflix/build/notiflix-notify-aio'

// function createPromise(position, delay) {
  
//   return new Promise((resolve, reject) => {
//     const timerId = setInterval
    
//     let position = 0
//     setTimeout(timerId(() => {
//       const shouldResolve = Math.random() > 0.3;
      
//       if (position < data.amount) {
//         if (shouldResolve) {
//           position += 1
//           delay += data.step
//           console.log(typeof delay);
//           //console.log(`position`, position);
//           console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//           Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//      } else {
//           position += 1 
//           delay += data.step
//         //console.log('reject');
//           //console.log(`position`, position);
//           console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//           Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//     }
//       } else {
//         clearInterval(timerId)
//       }

//     }, data.step),
//     delay)
//   })
// }

// const refs = {
//   form: document.querySelector('.form')
// }

// let data = []
// refs.form.addEventListener('submit', onFormsubmit)
// refs.form.addEventListener('click', onFormClik)

// function onFormClik(e) {
//   const elem = e.currentTarget.elements
//   // data[e.target.name] = e.target.value

//   data.delay = Number(elem.delay.value)
//   data.step = Number(elem.step.value)
//   data.amount = Number(elem.amount.value)
//   console.log(typeof data.step);
// }

// function onFormsubmit(e) {
//   e.preventDefault()
//   console.log(data);
//   createPromise(data.amount, data.delay)
  
// }
