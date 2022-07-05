import axios from "axios";

// let counter=0;
//for search function 
export function searchData(search){
//   console.log("network call :-",counter++)
    axios.get(`http://localhost:9999/jobs`)
    .then((res)=>{
        var searchResult = res.data.filter(word => word.job_title.toLowerCase().indexOf(search) > -1);
        console.log(searchResult);
        return searchResult;
    })
    
    //  document.getElementById('debounce').innerHTML=counter;
 }
 export function getData(){
    //   console.log("network call :-",counter++)
        axios.get(`http://localhost:9999/jobs`)
        .then((res)=>{
            // var searchResult = res.data.filter(word => word.job_title.toLowerCase().indexOf(search) > -1);
            // console.log(searchResult);
            return res.data;
        })
        
        //  document.getElementById('debounce').innerHTML=counter;
     }

// function debounce(fn,delay){
//   var timer;
//   return function(){
//       var args=arguments;
//       timer && clearTimeout(timer);
//       timer=setTimeout(function (){
//           timer=null;
//           fn.apply(null,args);
//       },delay)
//   }
//  };
// //  let num=document.getElementById('name').value;
//   // document.getElementById('name').addEventListener()
//   export const debouncing=debounce(getData,500);