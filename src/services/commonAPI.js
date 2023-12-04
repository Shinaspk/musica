import axios from "axios"

const commonAPI=async(http,url,reqbody)=>{
    let reqConfig={

        method:http,
        url,
        data:reqbody,
        Headers:{
            'Content-Type':"application/json"
        }
    }
    return await axios(reqConfig).then((result)=>{
        return result}).catch((err)=>{
            return err
        })
    }
    export default commonAPI()
