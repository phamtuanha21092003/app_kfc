import React from "react"
import appStore from "../images/logo_appstore.png"
import playStore from "../images/logo_playstore.png"
import logo from "../images/logo_bocongthuong.png"
import { useSelector } from "react-redux"

export default function Footer() {
  const isBlur = useSelector((state) => state.blurPopup.show)
  // console.log(isBlur)
  return (
    <footer
      className={`w-full px-[5rem] mt-[5rem]  pt-12  text-[#ababab]  bg-[#202124] ${
        isBlur ? "blur-sm" : ""
      }`}
    >
      <div className="flex justify-between border-[#ababab] pb-[3rem]  border-b-[2px]">
        <div className="">
          <div className="text-[#fff] leading-8 font-bold">
            <h6>Danh Mục Món Ăn</h6>
          </div>
          <div>
            <ul>
              <li>Ưu Đãi</li>
              <li>Món Mới</li>
              <li>Combo 1 Người</li>
              <li>Combo Nhóm</li>
              <li>Gà Rán-Gà Quay</li>
              <li>Burget-Cơm-Mì Ý</li>
              <li>Thức Ăn Nhẹ</li>
              <li>Thức Uống & Tráng Miệng</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="text-[#fff] leading-8 font-bold">
            <h6>Về KFC</h6>
          </div>
          <div>
            <ul>
              <li>Câu Chuyện Của Chúng Tôi</li>
              <li>Tin Khuyến Mại</li>
              <li>Tin Tức KFC</li>
              <li>Tuyển Dụng</li>
              <li>Đặt Tiệc Sinh Nhật</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="text-[#fff] leading-8 font-bold">
            <h6>Liên Hệ KFC</h6>
          </div>
          <div>
            <ul>
              <li>Theo Dõi Đơn Hàng</li>
              <li>Hệ Thống Nhà Hàng</li>
              <li>Liên Hệ KFC</li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="text-[#fff] leading-8 font-bold">
            <h6>Chính Sách</h6>
          </div>
          <div>
            <ul>
              <li>Chính Sách Hoạt Động</li>
              <li>Chính Sách Quy Định</li>
              <li>Chính Sách Bảo Mật Thông Tin</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="text-[#fff] leading-8 font-bold">
            <h6>Download App</h6>
          </div>
          <div>
            <img
              src={appStore}
              className="h-[42px] rounded-[6px] pr-3 w-[136px]  inline-block"
              alt=""
            />
            <img
              src={playStore}
              className="h-[42px] rounded-[6px] w-[136px] inline-block"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex pt-[1.5rem]">
        <div className="">
          <h2 className="leading-[34px]  font-[Oswald,sans-serif] font-bold text-[1.5rem]">
            CÔNG TI LIÊN DOANH TINH KFC VIỆT NAM
          </h2>
          <div>Số 292 Bà Triệu, P.Lê Đại Hành, Q.Hai Bà Trưng, TP.Hà Nội</div>
          <div>Điện Thoại: (028) 38489828</div>
          <div>Email: lienhe@kfcvietnam.com</div>
          <div>Mã số thuế: 0100773885</div>
          <div>Ngày cấp: 29/10/1998-Nơi cấp: Cục thuế thành phố Hà Nội</div>
        </div>
        <div className="w-1/2 relative">
          <img
            src={logo}
            alt=""
            className="absolute left-3/4 top-1/2  translate-y-[-50%]"
          />
        </div>
      </div>
    </footer>
  )
}
