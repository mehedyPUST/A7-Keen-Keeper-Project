import { createBrowserRouter } from "react-router";

import ErrorMsg from "./errorElement/ErrorMsg";
import MainLayout from "../layout/MainLayout";
import TimeLine from "../components/pages/TimeLine";
import HomePage from "../components/pages/HomePage";
import Stats from "../components/pages/Stats";
import FriendDetails from "../components/pages/FriendDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [{
            index: true,
            element: <HomePage></HomePage>
        },

        {
            path: "/timeline",
            element: <TimeLine></TimeLine>
        },
        {
            path: "/stats",
            element: <Stats></Stats>
        },
        {
            path: "/friend-details/:friendId",
            Component: FriendDetails,
            loader: () => fetch('/friendsData.json')
        }
        ],
        errorElement: <ErrorMsg></ErrorMsg>

    }

])