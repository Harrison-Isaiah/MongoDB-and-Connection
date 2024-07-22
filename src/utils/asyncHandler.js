const asyncHandler = (requestHandler) =>{
    (res, req, next)=>{
        Promise.resolve(requestHandler)
    }
    
}


export {asyncHandler}



// const asyncHandler = () => {}`     yyy
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func)=> async ()={}


// const asyncHandler = (fn)=> async (req, res, next)=>{

//     try {
//         await fn (req, res, next)
//     } catch (error) {
//         res.status(err.code || 5000).json({
//             success: false,
//             message: err.message
//         })
//     }
// }



