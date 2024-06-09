import { axios } from "../utils/axios";

const ipocSignUp = async (data) => {
  try {
    const res = await axios.post("/users", data, { withCredentials: true });
    console.log("craeate User", res);
    return res.data;
  } catch (error) {
    console.error("error in creating User", error);
    throw error;
  }
};

const studentSignUp = async (data) => {
  try {
    const res = await axios.post("/students", data, { withCredentials: true });
    console.log("create student ", res);
    return res.data;
  } catch (error) {
    console.error("error in creating student", error);
    throw error;
  }
};

const login=async(data)=>{
  try{
    const res = await axios.post("/auth/login", data, { withCredentials: true });
    return res.data.accessToken;
  }catch(err){
    console.log(err);
  }
}




export { ipocSignUp,studentSignUp,login };
