import React, {ReactElement} from "react";
import {Navigate} from "react-router-dom";
import {IPrivateProps} from "./PrivateRoute.intrface";

const ProtectedRoute:React.FC<IPrivateProps> = ({ user, children }): ReactElement => {
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;