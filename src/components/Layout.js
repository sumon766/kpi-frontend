import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>This is the layout page</h1>
            <Outlet/>
        </div>
    );
}

export default Layout;