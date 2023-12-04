
import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"


//api to upload
export const favsong=async(reqBody)=>{
   return await commonAPI('POST',`${serverURL}}/favourites `,reqBody)
}