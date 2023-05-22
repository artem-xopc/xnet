import ProfileItem from "../Components/ProfileComponents/ProfileItem";
import About from "../Pages/About"
import Articles from "../Pages/Articles"
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Main from "../Pages/Main"
import News from "../Pages/News"
import Shop from "../Pages/Shop";
import SignUp from "../Pages/SignUp"
import Users from "../Pages/Users";

export const publicRoutes = [
    {path: "/", element: Main},
    {path: "/news", element: News},
    {path: "/articles", element: Articles},
    {path: "/about", element: About},
    {path: "/login", element: Login},
    {path: "/users", element: Users},
    {path: "/blog", element: Blog},
    {path: "/shop", element: Shop},
    {path: "/signup", element: SignUp},
    {path: "/profile/:id", element: ProfileItem},
];

export const privateRoutes = [
    {path: "/main", element: Main},
    {path: "/news", element: News},
    {path: "/articles", element: Articles},
    {path: "/about", element: About},
    {path: "/login", element: Login},
    {path: "/users", element: Users},
    // {path: "/user/:id", element: ProfileItem},
];