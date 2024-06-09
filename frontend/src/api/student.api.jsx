import { axios } from "../utils/axios";

const showCompany = async () => {
  try {
    const res = await axios.get('/companies',{
      withCredentials: true,
    });
    console.log('Found company lists', res.data);
    return res;
  } catch (error) {
    console.error('error in getting Company list', error);
    throw error;
  }
};


const getStudentBYID=async (id)=>{
  try{
    const res = await axios.get(`/students/${id}`);
    return res;

  }catch(err){
    console.error(err);
  }
}

export {showCompany,getStudentBYID} ;