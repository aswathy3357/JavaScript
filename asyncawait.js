function displayResult(result)
{
    console.log(result);
}
async function add(a,b)
{
    let c = a + b;
    await displayResult(c);
    console.log("Execution stopped");
}

add(1,2);