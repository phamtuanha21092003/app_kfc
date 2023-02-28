import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { togglePopup } from "../features/blur/blurPopupSlice"

export default function FormLogin() {
  const isShow = useSelector((state) => state.blurPopup.show)
  const dispatch = useDispatch()
  const formLoginRef = useRef(null)
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!formLoginRef.current.contains(e.target)) {
        dispatch(togglePopup())
      }
    })
    return document.removeEventListener("mousedown", (e) => {
      if (!formLoginRef.current.contains(e.target)) {
        dispatch(togglePopup())
      }
    })
  }, [formLoginRef.current])
  // const
  return (
    <>
      {isShow && (
        <section
          ref={formLoginRef}
          className="bg-[white] items-center  fixed w-[662px] h-[352px] top-1/2 left-1/2 z-50 translate-x-[-50%] translate-y-[-50%] flex justify-center"
        >
          <div>
            <div className="flex justify-center">Đăng nhập</div>
            <form>
              <div className="flex h-[50px] mt-[2rem]  justify-center">
                <input autoFocus className="w-[20rem]" placeholder="Email" />
              </div>
              <div className="flex w-full h-[50px] mt-[2rem] justify-center">
                <input
                  tabIndex="0"
                  className="w-[20rem]"
                  placeholder="Mật khẩu"
                  type="password"
                />
              </div>
              <div className="bg-[#d9534f] h-[3rem] align-middle leading-[3rem]    mt-[2rem]  text-center">
                <button>Đăng nhập</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  )
}
