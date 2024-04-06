const Apirequest=async(url='',option=null)=>{
    try{
        const respone=await fetch(url,option);
    }
    catch(e){
        console.log(e);
    }
}
export default Apirequest;