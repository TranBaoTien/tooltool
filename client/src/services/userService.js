
import axios from "../axios"



const handleLoginApi = (Inputemail, Inputpassword) => {
    return axios.post('api/login', { email: Inputemail, password: Inputpassword });
}
const getAllBooks = (inputid) => {
    return axios.get(`/api/get-book?id=${inputid}`);

}
const createNewBookse=(data)=>{
    console.log("check vao data ",data)
    return axios.post('/api/create-book',data)
}
const deleteBookSE=(bookid)=>{
    return axios.delete('/api/delete-book',{data:{id:bookid}});
}
export { handleLoginApi,getAllBooks,createNewBookse ,deleteBookSE}