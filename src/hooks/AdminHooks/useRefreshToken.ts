import axios from '../../axios/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth }:any = useAuth();

   
    

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        });
        setAuth((prev:any) => {
       
            return {
                ...prev,
                roles: response.data.roles,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;
