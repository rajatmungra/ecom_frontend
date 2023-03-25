import './NavCss.css';
import { useSelector, useDispatch } from 'react-redux'
import { badgeValue } from '../../../Redux/Actions/actions';
import Bar from './Ba';
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
// import LogIn from '../../../Authentication/LogIn';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';
import { Button } from 'bootstrap';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { login_action } from '../../../Redux/Actions/actions';
import { isLogin } from '../../../Redux/Actions/actions';
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import data from '../../../constant/data'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import  Search  from './Search';


const Nav = ({show=true}) => {

  const count = useSelector((state) => state.badgeVal)
  const islogin = useSelector((state) => state.isLogin)
  const userData = useSelector((state) => state.userData);
  const cart = useSelector((state)=> state.cart)
  const products = useSelector(state=> state.fetchProducts)
  
  const dispatch = useDispatch()
  const [profile, setProfile] = useState(null);
  const [search,setSearch] = useState('');
  

let link = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';
 



  const login = useGoogleLogin({
    onSuccess: async respose => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            "Authorization": `Bearer ${respose.access_token}`
          }
        })
        const obj = res.data;
        const ls = JSON.stringify(obj);
        localStorage.setItem("data", ls);
        dispatch(login_action(obj));
        dispatch(isLogin());
        link = obj.picture;
        console.log(userData);
      } catch (err) {
        console.log(err)

      }

    }
  });

  const logout = () => {
    localStorage.clear();
    dispatch(isLogin());
  }

  
const help=()=> {
  {if(show == false){
    return <></>
  }
  else{
   return <Bar />
  }}
}


const list  = ()=> products
      .filter((p) => {
        if (search === "") {
          return false;
        } else if (p.title.toLowerCase().includes(search.toLowerCase())) {
          return true;
        }
      })
      .map((p) => {
        return (
          <div style={{ marginLeft: "3%", fontWeight: "50", color: "black" }}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/item/${p.id}`}
            >
              <Typography>{p.title}</Typography>
              <Divider variant="middle" style={{margin:' 0 0 0 0', width:'100%', padding:'0 0'}}/>
            </Link>
            <br />
          </div>
        );
      });






  return (
    <>
      <div style={{position:'absolute'}} className="overlay"></div>



      <nav className="navbar navbar-expand-md navbar-light bg-light main-menu" style={{ boxShadow: 0 }}>
        <div className="container">

          <button type="button" id="sidebarCollapse" className="btn btn-link d-block d-md-none">
            <i className="bx bx-menu icon-single"></i>
          </button>

          <a className="navbar-brand" >
            <Link style={{textDecoration:'none'}} to='/'>
            <h4 className="font-weight-bold">E-commerce</h4>
            </Link>
          </a>

          {/* <ul className="navbar-nav ml-auto d-block d-md-none">
                <li  className="nav-item">
                  <a   className="btn btn-link"  ><i   className="bi bi-cart-fill"></i><span className="badge badge-danger">3</span></a>
                </li>
              </ul> */}

          <div className="collapse navbar-collapse">
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <input onChange={(e)=>setSearch(e.target.value)} className="form-control" type="search" placeholder="Search for products..." aria-label="Search" />
              {search && <div
                className="d"
                
                style={{
                  position: "absolute",
                  width: "40%",
                  top: "100%",
                  height:'30vh',
                  backgroundColor: "#f9f9f9",
                  borderRadius: "3px",
                  zIndex: 100,
                  overflow:"overlay"
                }}
              > {list()}</div> }
            </form>




    {/* <Search className="form-inline my-2 my-lg-0 mx-auto"  data={products}/> */}








            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/cart'>
                <a className="btn btn-link" ><i className="bi bi-cart-fill"></i> <span className="badge badge-danger">{cart.length}</span></a>
                </Link>
              </li>
              <li className="nav-item ml-md-3">
                {/* <a className="btn btn-primary" ><i className="bx bxs-user-circle mr-1"></i> fd</a> */}

              
               {(localStorage.length === 0 )?
                  <button onClick={() =>  login()} type="button" className="btn btn-primary">Log in</button> :

                
                  <div style={{cursor:'pointer'}}>   
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-list-4">
                      <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={userData.picture} alt='profile-pic' width="40" height="40" className="rounded-circle"/>
                          </a>
                          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <Link to='/profile' style={{textDecoration:'none'}}>
                            <a className="dropdown-item" href="/edit">Profile</a>
                            </Link>
                            <a className="dropdown-item" onClick={()=>logout()}>Log Out</a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
               }
              
              
                


              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div style={{zIndex:'3'}}>
             
      </div>  
  {help()}
      

    </>
  )
}


export default Nav;
