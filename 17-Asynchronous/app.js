//=================================================//
//                 synchronous                    //
//=================================================//


// const processOrder = (customer) => {
//     console.log(`processing order for customer 1`);
//     let currentTime = new Date().getTime()

//     while (currentTime + 3000 >= new Date().getTime());

//     console.log(`order processed for customer 1`);
// }

// console.log(`take order for customer 1`);
// processOrder()
// console.log(`completed order for customer 1`);


//=================================================//
//              asynchronous function              //
//=================================================//


// const processOrder = (customer) => {
//     console.log(`processing order for customer 1`);

//     setTimeout(() => {
//         console.log(`cooking completed`);
//     }, 3000)

//     console.log(`order processed for customer 1`);
// }

// console.log(`take order for customer 1`);
// processOrder()
// console.log(`completed order for customer 1`);


//=================================================//
//                    Callback                     //
//=================================================//


// const takeOrder = (customer, callcack) => {
//     console.log(`take order for ${customer}`);
//     callcack(customer)
// }

// const processOrder = (customer, callcack) => {
//     console.log(`processing order for ${customer}`);

//     setTimeout(() => {
//         console.log(`cooking completed`);
//         console.log(`order processed for ${customer}`);
//         callcack(customer)
//     }, 3000)

// }

// const completeOrder = (customer) => {
//     console.log(`completed order for ${customer}`);
// }

// takeOrder('customer one', (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer)
//     })
// })

// console.log('Hello..............');



//=================================================//
//                    Promise                      //
//=================================================//


// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'Google Meet',
//             time: '10:00 pm'
//         }
//         resolve(meetingDetails)
//     } else {
//         reject(new Error('meeting already scheduled'))
//     }
// })

// // const addToCalender = (meetingDetails) => {
// //     return new Promise((resolve, reject) => {
// //         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
// //         resolve(calender)
// //     })
// // }

// const addToCalender = (a) => {   //problem
//     const calender = `${a.name} has been scheduled on ${a.location} at ${a.time}`
//     return Promise.resolve(calender)
// }

// meeting
//     .then(addToCalender)
//     .then((res) => {
//         // console.log(JSON.stringify(res));
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })

// console.log('Hello...........'); 


// const promise1 = Promise.resolve(`Promise 1 resolved`)

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`)
//     }, 3000)
// })

// // promise1.then((res) => console.log(res))
// // promise2.then((res) => console.log(res))

// Promise.all([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     })
// Promise.race([promise1, promise2])
//     .then(res => {
//         console.log(res);
//     })



//=================================================//
//                    async await                  //
//=================================================//


// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'Google Meet',
//             time: '10:00 pm'
//         }
//         resolve(meetingDetails)
//     } else {
//         reject(new Error('meeting already scheduled'))
//     }
// })

// const addToCalender = (meetingDetails) => {
//     return new Promise((resolve, reject) => {
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calender)
//     })
// }

// async function myMeeting() {
//     const meetingDetails = await meeting
//     const calender = await addToCalender(meetingDetails)
//     console.log(calender);
// }

// myMeeting()