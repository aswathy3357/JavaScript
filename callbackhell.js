/*function displayResult(a,cb)
{
    console.log("Display function invoked")
    cb(a);
}

function callback1(cb2)
{
    console.log("Callback 1 invoked")
    cb2();
}

function end()
{
    console.log("End function invoked")
}

displayResult("hello",(result)=>{
    console.log(result)
    callback1(()=>
        {end()})
})*/

const displayResult = () => {
    return new Promise((resolve, reject) => {
        console.log("Display function executed")
        resolve();
    })
}

const callback1 = () => {
    return new Promise((resolve, reject) => {
        console.log("Callback 1 invoked")
        //resolve();
        let pass = false;
        if (pass) {
            resolve("Completed");
        }
        else {
            reject("Failed");
        }
    })
}

const end = () => {
    return new Promise((resolve, reject) => {
        console.log("End function invoked")
        resolve();
    })
}

displayResult().then(() => 
    callback1().then(() => {
        end().then(() => {
            console.log("Execution completed")
        })
    })
).catch((error) => {
    console.error("The error message is " + error);
})