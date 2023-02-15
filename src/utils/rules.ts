import { RegisterOptions } from "react-hook-form"

type Rules = { [key in "email" | "password"]?: RegisterOptions }

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: "Email là bắt buộc"
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: "Email không đúng định dạng"
    },
    maxLength: {
      value: 160,
      message: "Vượt quá độ dài cho phép (160)"
    }
  },
  password: {
    required: {
      value: true,
      message: "Password là bắt buộc"
    },
    minLength: {
      value: 160,
      message: "Độ dài cho phép 5-160"
    },
    maxLength: {
      value: 160,
      message: "Độ dài cho phép 5-160"
    }
  }
}
