const fun=()=>{
    return "hello i am running the javasrcript code"

}
const tim=async ()=>{
    setTimeout(()=>{console.log("hi it will take time to run")},2000)
}


const call=()=>{
    tim()
    console.log(fun())
}


call()

