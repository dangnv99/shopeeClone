import React from "react"

export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="gird grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div> 2022 Shopee. Tất cả các quyền được bảo luuw</div>
          </div>
          <div className="lg:col-span-2">
            <div>
              Quốc gia & khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil Mexico
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-sm">
          <div>Công ty TNHH Shopee</div>
          <div className="mt-6">
            Địa chỉ: Tầng 4-5-6, toà nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, thành
            phố Hà Nội, Việt Nam, Tổng đài hỗ trợ: 19001221- Email: cskh@hotro.shopee.vn
          </div>
          <div className="mt-6">
            Chịu trách nhiệm quản lý nội dung: Nguyễn Đức Trí - Điện thoại liên hệL: - 024 730 82221 (ext 4678)
          </div>
          <div className="mt-6">
            {" "}
            Mã số doanh nghiệp: 0106773786 do sở kế hoạch đầu tư TP Hà Nội cấp lần đầu ngày 10/2/2015
          </div>
          <div className="mt-6"> Bản quyền thuộc về Công Ty Shopee</div>
          <div className="mt-6"></div>
        </div>
      </div>
    </footer>
  )
}
