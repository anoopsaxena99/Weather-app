// setTimeout(()=>{
//   console.log('Two second after')
// },2000)

// const names=['Anoop','ajit','sandhu']
// const shortNames = names.filter((name)=>{
//   return name.length <= 4
// })

const geocode = (adress,callback) =>{
  setTimeout(()=>{  
    const data = adress
    console.log(adress)
    callback(data)
  },2000)
}
var hello=geocode("hello",(data)=>{
  console.log(data+" second time ")
  return(data)
})
console.log(hello)
//encodeURIComponent
//module.exports="hello"
//const geocode=require('./utils/geocode')