export default async function Logout({history}){
    await localStorage.removeItem("user") 
    return history.push("/login")
}