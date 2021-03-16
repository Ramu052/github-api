// let Room =new Promise((resolve, reject)=>{
// let isroomcleaned=true;
// if(isroomcleaned){
//     resolve("yes");
// }else{
//     reject("No");
// }
// });
// Room.then(data => console.log(data)).catch(error => console.log(error));
// ----------------------------------ex-2------------------
// let promise1 =new Promise((resolve, reject)=>{
//     setTimeout(function (){
//         resolve("excuteb after 10 sec...");
//     },10000);
//     setTimeout(function (){
//         reject("time out rejected");
//     },1000);
// //     });
// //     promise1.then(data => console.log(data)).catch(error => console.log(error));


//     let githubApi =new Promise((resolve, reject)=>{
// let githubApi=true;
// if(githubApi){
//     resolve("githubApi is connected.....");
// }else{
//     reject("githubApi is not connected.....");
// }
// });


//   let googleApi =new Promise((resolve, reject)=>{
//     let googleApi=false;
//     if(googleApi){
//         resolve("googleApi is connected.....");
//     }else{
//         reject("googleApi is not connected.....");
//     }
//     });

// let facebookApi =new Promise((resolve, reject)=>{
//         let facebookApi=true;
//         if(facebookApi){
//             resolve("facebookApi is connected.....");
//         }else{
//             reject("facebookApi is not connected.....");
//         }
//         });
//     // in "Promise.all()" method if any one is rejected then remaing will not be excuted=-------------
//         Promise.all([githubApi, googleApi, facebookApi])
//         .then(data => console.log(data))
//         .catch(error => console.log(error));

  //----------------  in "Promise.any()" method if any one is resolve(success) then it excuted-------------
        // Promise.any([githubApi, googleApi, facebookApi])
        // .then(data => console.log(data))
        // .catch(error => console.log(error));
//------------------------------"Promise.race()"----which print only which is 1st excuted -------
//-------------------------------"Promise.allSettled()"-----its not bother about reject state or resolve state, it print all



//----how need to connect with github server & fetch data by using window,fetch() 
window.fetch("https://api.github.com/users")
.then(data =>{
    //convert buffer data in to json
    data.json().then(info =>{
        let output=[];
        for(let user of info){
            output +=`
            <section>
                <artical>
                  <img src =${user.avatar_url}/>
                  <h1>${user.login}</h1>
                  <p> <a href =${user.html_url} target="_blank">Check profile</a> <p/>


                 </artical>
            </section>
            `;
        }
        document.getElementById("template").innerHTML = output;

    }).catch(err =>console.log(err));
}).catch(err =>console.log(err));

