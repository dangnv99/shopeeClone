import React from "react"
import { useRoutes } from "react-router-dom"
import RegisterLayout from "src/Layouts/RegisterLayout"
import Login from "./Login"
import ProducList from "./ProductList"
import Register from "./Register"

export default function useRouteElements() {
  const useRouteElements = useRoutes([
    {
      path: "/",
      element: <ProducList />
    },

    {
      path: "/login",
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },

    {
      path: "/register",
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return useRouteElements
}
