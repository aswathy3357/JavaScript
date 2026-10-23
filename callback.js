function displayResult(result)
{
    console.log(result);
}

function sum(a,b,callback)
{
    let c = a + b;
    callback(c);
}
function subtract(m,n,callback)
{
    let o = m - n;
    callback(o);
}
sum(1,2,displayResult);
subtract(10,8,displayResult)