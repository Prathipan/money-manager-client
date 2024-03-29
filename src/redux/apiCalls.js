import { publicRequest} from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"


export const login = async (dispatch,user) => {
    dispatch(loginStart());
    try{
        const res= await publicRequest.post("/user/login",user);
        // console.log(res)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
}