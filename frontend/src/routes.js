import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/Auth/LoginPage"))
const TaskList = React.lazy(() => import("./pages/Tasks/Tasklist"))

//Public Routes
export const publicRoutes = [
    { path: '/login', exact: true, component: LoginPage },
    { path: null, component: Redirect, props: { to: '/login' } }
]

export const privateRoutes = [
    { path: '/', exact: true, component: TaskList },
    { path: null, component: Redirect, props: { to: '/' } }
]