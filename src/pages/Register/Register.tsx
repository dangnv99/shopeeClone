import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { rules } from "src/utils/rules"

interface FormData {
  email: string
  password: string
  confirm_password: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="bg-orange">
      <div className="grid grid-cols-1 lg:grid-cols-5 lg:py-32 lg:pr-10">
        <div className="lg:col-span-2 lg:col-start-4">
          <form className="bg-white p-10 shadow-sm" onSubmit={onSubmit}>
            <div className="text-2xl">Đăng Ký</div>

            <div className="mt-8">
              <input
                type="email"
                id=""
                className="boder w-full rounded-sm p-3 focus:border-y-gray-500"
                placeholder="email"
                style={{ border: "1px solid" }}
                {...register("email", rules.email)}
              />
              <div className="mt-1 mb-1 min-h-[1rem] text-left text-sm text-red-600">{errors.email?.message}</div>
              <input
                type="password"
                id=""
                className="boder boder-gray-400 w-full rounded-sm p-3 focus:border-gray-500"
                placeholder="password"
                style={{ border: "1px solid" }}
                {...register("password", rules.password)}
              />
              <div className="mb-1 min-h-[1rem] text-left text-sm text-red-600">{errors.password?.message}</div>
              <div className="mt-4"></div>
              <input
                type="password"
                id=""
                className="boder boder-gray-400 w-full rounded-sm p-3 focus:border-gray-500"
                placeholder="password"
                style={{ border: "1px solid" }}
                {...register("confirm_password", rules.password)}
              />
              <div className="mb-1 min-h-[1rem] text-left text-sm text-red-600">{errors.password?.message}</div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600"
                >
                  Đăng ký
                </button>
              </div>
              <div className="mt-8 text-center">
                <div className="flex items-center justify-center">
                  <span className="text-slate-400">Bạn đã có tài khoản?</span>
                  <Link className="ml-2 text-red-400" to="/login">
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
