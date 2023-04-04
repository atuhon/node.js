function req(controllers){
    return async function(req,res,next){
        try{
            return await controllers(req,res);

        }catch(err){
            next(err)//expressのエラーハンドラーに処理が移る

        }
    }
}
export default req;