// const betterDeveloper = 'vanessa'

// function whoIsBetter(callback , erroCallback){
//         if(betterDeveloper != 'vaness' && betterDeveloper !='gabriel'){
//             erroCallback({
//                 name: 'this is wrong',
//                 message: betterDeveloper + '? Really'
//             })
//         }else{
//             callback({
//                 name: betterDeveloper,
//                 message: 'CDFs are the best!'
//             })
//         }
// }
// whoIsBetter((result) => {
//     console.log(result.name + '? Yeah!' + result.message)
//     } , (error) => {
//         console.log(error.name + ' ' + error.message)
// })


// let p = new Promise((resolve,reject) => {
//     let a = 1+1
//     if(a == 2){
//         resolve('Sucess')
//     }else{
//         reject('Failed')
//     }
// })


// p.then((message) => {
//     console.log('This is in the then' + message)
// }).catch((err) => {
//     console.log('This is the catch' + err)
// })


//funcao para promisse

// const betterDeveloper = 'vanessa'
// function whoisBetterCallback(callback , errocallback){
//     if(betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
//         errocallback({
//             name: 'this is wrong',
//             message: betterDeveloper + '? Really'
//         })
//     }else{
//         callback({
//             name: betterDeveloper,
//             message: 'CDFs are the best!'
//         })
//     }
// }

//  whoisBetterCallback((result) =>{
//     console.log(result.name + '? Yeah!' + result.message)
// }, (error) =>{
//     console.log(error.name + '' + error.message)
// })



const betterDeveloper = 'zeze'
function whoisBetterCallback(callback , errocallback){

        return new Promise((resolve , reject) =>{
                if(betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel'){
                    reject({
                        name: 'this is wrong',
                        message: betterDeveloper + '? Really'
                    })
                }else{
                    resolve({
                        name: betterDeveloper,
                        message: 'CDFs are the best!'
                    })
                }

        })
}

 whoisBetterCallback()
    .then((result) => {
        console.log(result.name + '? Yeah!' + result.message)
}).catch((error) =>{
    console.log(error.name + ' ' + error.message)
})




