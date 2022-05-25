import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  // useEffect( () =>{
  //     if(email){
  //         fetch(`http://localhost:5000/user/${email}`, {
  //             method:'PUT',
  //             headers: {
  //                 'content-type': 'application/json'
  //             },
  //             body:JSON.stringify(currentUser)
  //         })
  //         .then(res=>res.json())
  //         .then(data => {
  //             console.log('data inside useToken', data);
  //             const accessToken = data.token;
  //             localStorage.setItem('accessToken', accessToken);
  //             setToken(accessToken);
  //         })
  //     }

  // }, [user]);
  // return [token];
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user?.email;
     // const currentUser = { email: email };
      if (email) {
        const { data } = await axios.post(
          "https://cryptic-stream-01124.herokuapp.com/login",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }

      
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
