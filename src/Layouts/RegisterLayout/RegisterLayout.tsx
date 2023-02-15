import React, { Children } from "react"
import Footer from "src/compoments/Footer"
import RegisterHeader from "src/compoments/RegisterHeader/index"

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
