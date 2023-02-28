import React, { useEffect, useRef, useState } from "react"
import boxKfc from "../images/hopKFC.png"
import SlideShowKfc from "../components/SlideShowKfc"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { togglePopup } from "../features/blur/blurPopupSlice"

export default function Header() {
  const totalPrice = useState(0)
  const [positionScroll, setPositionScroll] = useState(0)
  const headerRef = useRef(null)
  useEffect(() => {
    if (!headerRef.current) return
    window.addEventListener("scroll", () => setPositionScroll(window.scrollY))
  }, [headerRef.current])
  const dispatch = useDispatch()
  const isBlur = useSelector((state) => state.blurPopup.show)
  return (
    <header className={`flex flex-col ${isBlur ? "blur-sm" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="w-20">
          <img src={boxKfc} alt="..." />
        </div>
        <div className="flex gap-3">
          <div className="text-red">VN</div>
          <div
            className="border-solid cursor-pointer border-l-2 pl-3"
            onClick={() => {
              dispatch(togglePopup())
            }}
          >
            Đăng nhập
          </div>
        </div>
      </div>
      <div>
        <div
          ref={headerRef}
          className={`bg-box_col flex flex-row justify-between ${
            positionScroll > headerRef.current?.offsetTop
              ? "fixed top-[0px] left-1/2 w-3/4 z-40 translate-x-[-50%]"
              : ""
          }`}
        >
          <div className="flex flex-row gap-6">
            <div>ComBo 1 Người</div>
            <div>ComBo Nhóm</div>
            <NavLink
              to="premium"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Ưu đãi món mới
            </NavLink>
          </div>
          <div>Giao đến</div>
          <div>Thay đổi</div>
          <div>{totalPrice}Đ Giỏ hàng</div>
        </div>
        <div>
          <SlideShowKfc />
        </div>
        <div className="text-[3.3em] font-medium uppercase">
          <h1>Giới thiệu</h1>
        </div>
      </div>
      <div>
        <nav>
          <ul className="flex w-full justify-around">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "isActive" : "")}
                to="/about"
              >
                KFC Việt Nam
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "isActive" : "")}
                to="/info"
              >
                Tin Tức
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "isActive" : "")}
                to="history"
              >
                Lịch Sử của KFC
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
