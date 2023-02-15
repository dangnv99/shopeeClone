import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  const wifiPassword = require("wifi-password")
  wifiPassword().then((password: any) => {
    console.log(password)
    //=> 'johndoesecretpassword'
  })
  return (
    <div className="bg-orange">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
        <div className="lg:col-span-2 lg:col-start-4">
          <form className="bg-white p-10 shadow-sm" onSubmit={onSubmit}>
            <div className="text-2xl">Đăng nhập</div>

            <div className="mt-8">
              <input
                type="email"
                name="email"
                id=""
                className="boder w-full rounded-sm p-3 focus:border-y-gray-500"
                placeholder="email"
                style={{ border: "1px solid" }}
              />
              <div className="mt-1 min-h-[1rem] text-sm text-red-600"></div>
              <input
                type="password"
                name="password"
                id=""
                className="boder boder-gray-400 w-full rounded-sm p-3 focus:border-gray-500"
                placeholder="password"
                style={{ border: "1px solid" }}
              />
              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600"
                >
                  Đăng nhập
                </button>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center">
                <span className="text-slate-400">Bạn đã có tài khoản?</span>
                <Link className="ml-2 text-red-400" to="/register">
                  Đăng ký
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
