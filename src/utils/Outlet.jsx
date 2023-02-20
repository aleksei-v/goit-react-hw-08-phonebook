import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AuthLoader from "components/Loaders/AuthLoader";

const CustomOutlet = () =>
    (<Suspense fallback={<AuthLoader />}>
        <Outlet />
    </Suspense>
);

export default CustomOutlet;