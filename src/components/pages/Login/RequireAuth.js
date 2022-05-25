import React from "react";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import auth from "../../../firebase.init";
import Loading from "../../shared/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth); //, sending, error]

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }


  // if (user.providerData[0]?.providerId === "password" ) {
  //   return (
  //     <div className="text-center mt-5">
  //       <h3 className="text-danger">Your Email is not verified!!</h3>
  //       <h5 className="text-success"> Please Verify your email address</h5>
  //       <button
  //         className="btn btn-primary"
  //         onClick={async () => {
  //           await sendEmailVerification();
  //           toast("Sent email");
  //         }}
  //       >
  //         Send Verification Email Again
  //       </button>
     
  //     </div>
  //   );
  // }
  return children;
};

export default RequireAuth;
