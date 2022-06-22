//asynchronous example by setTimeout()

// console.log("start")
// setTimeout( () =>{
//   console.log('2 second Timer',2000)
// })
// setTimeout( () =>{
//   console.log('0 second Timer',0)
// })
// console.log("end")

// const func=()=>{}

//###########call Stack and call back queue and event loop

// const listLocations = (locations) =>{
//   locations.forEach((location) => {
//     console.log(location)
//   });
// }

// const myLocations = ['Philly' , 'NYC']

// listLocations(myLocations)

// for asynchronous function

// setTimeout( () =>{
//   console.log('2 second Timer',2000)
// })
// setTimeout( () =>{
//   console.log('0 second Timer',0)
// })
// console.log("end")

// callStack --> sequence of function callinig
// Node APIs --> asynchronous functions take their time
// callback Queue --> asynchronous functions comes here after completion of time and wait for main function to      complete
// Eventloop --> wait for main function to complete then take function from callbackQueue in queue manner


// ##########Http request

const request=require('request')

// const url='http://api.weatherstack.com/current?access_key=dfcd416c790b13275b685a96da1d1e24&query=New%20York&units=f'

// request({url : url,json : true} , (error , response)=>{
//   // console.log(response)
//   const data = response.body
//   // const data = JSON.parse(response.body)
//   console.log(`currently temperature is ${data.current.temperature} Celcius `)
// })

const url1='https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoicXdlcnR5MTIzNTg5IiwiYSI6ImNsNG9qZmRrMDA1dnQzbWxuN3QyMDgwamUifQ.cSWq4npE_bJZLffinfNMKA&limit=1'

request({url : url1,json : true} , (e , r)=>{
  // console.log(response)
  const data = r
  // const data = JSON.parse(response.body)
  console.log(data)
})