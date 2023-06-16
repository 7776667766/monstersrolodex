export const fetchdata=async<T>(url:string):Promise<T>=> {
    let response=await fetch(url);
    return await response.json()


}