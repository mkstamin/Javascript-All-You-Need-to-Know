// const proce = () => {
//     console.log(`Prochesing order for customer 0ne`);

//     let currentDate = new Date().getTime()
//     while (currentDate + 3000 >= new Date().getTime());

//     console.log(`order processed for customer one`);
// }

// console.log(`take order from customer One`);
// proce()
// console.log(`completed order for customer one`);



// const proce = () => {
//     console.log(`Prochesing order for customer one`);

//     setTimeout(() => {
//         console.log(`Coccking completed`);
//     }, 3000)

//     console.log(`Order processed for customer one`);
// }


// console.log(`Take order for customer one`);
// proce()
// console.log(`Order completed for customer one`);






// const takeOrder = (callback) => {
//     console.log(`Take order for customer one`);
//     callback()
// }

// const processOrder = (callback) => {
//     console.log(`Processing order for customer one`);

//     setTimeout(() => {
//         console.log(`Cooking completed`);
//         callback()
//     }, 3000)
// }

// const completeOrder = () => {
//     console.log(`copleted order for customer one`);
// }

// takeOrder(() => {
//     processOrder(() => {
//         completeOrder()
//     })
// })

// console.log(`hello..........`);



// const hasMeeting = false

// const meeting = new Promise((resolve, reject) => {
//     if (!hasMeeting) {
//         const mettingDetails = {
//             name: 'Technical Meeting',
//             location: 'Google Meet',
//             time: '10:00 pm'
//         }
//         resolve(mettingDetails)
//     } else (
//         reject(new Error(`meeting already scheduled`))
//     )
// })

// const addCalender = (meetingDetails) => {
//     const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//     return Promise.resolve(calender)
// }


// meeting
//     .then(addCalender)
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     })




const hasMeeting = false

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const mettingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 pm'
        }
        resolve(mettingDetails)
    } else (
        reject(new Error(`meeting already scheduled`))
    )
})


const addCalender = (meetingDetails) => {
    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
    return Promise.resolve(calender)
}


async function myMeeting() {
    const meetingDetails = await meeting
    const calender = await addCalender(meetingDetails)
    console.log(calender);
}

myMeeting()








