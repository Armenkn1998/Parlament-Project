import { NavLink, useNavigate} from "react-router-dom";
import useLogout from "../../hooks/AdminHooks/useLogout";

const Admin = () => {

    const navigate = useNavigate();
    const logout = useLogout();
    
    const signOut = async () => {
        await logout();
        navigate('/admin');
    }
    return (
        <section>
            <h1>Admin</h1>   
            <br />
            <NavLink to="/admin">Քաղաքացիների ընդունելության և  փաստաթղթաշրջանառության կարգը</NavLink>
            <NavLink to="/admintimeTable">Քաղաքացիների ընդունելության ժամանակացույց</NavLink>
            <NavLink to="/admincommittees">Մշտական հանձնաժողովները և նրանց գործունեության ոլորտները</NavLink>
            <NavLink to="adminmeetingsSchedule">ԱԺ նիստերի ժամանակացույց</NavLink>
            <NavLink to="adminmPNumbers">Պատգամավորների աշխատանքային հեռախոսահամարները</NavLink>
            <NavLink to="admindepNumbers">Կառուցվածքային ստորաբաժանումների հեռախոսահամարներ</NavLink>
            <div className="flexGrow">
                <button onClick= {signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Admin
