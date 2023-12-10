

import commonAPI from "./commonAPI"
import { serverURL } from "./serverURL"


//api to add category
export const favsong=async(body)=>{
   return await commonAPI('POST',`${serverURL}/favourites `,body)
}

//api to get category
export const getfavsong=async()=>{
   return await commonAPI('GET',`${serverURL}/favourites `,"")
}