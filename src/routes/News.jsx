import React from "react"
import { NavLink } from "react-router-dom"
import run from "../images/about_tintuc_images/news_1.jpg"
import bridge from "../images/about_tintuc_images/news_2.jpg"
import shear from "../images/about_tintuc_images/news_3.jpg"
import given from "../images/about_tintuc_images/news_4.jpg"
import covid from "../images/about_tintuc_images/news_5.jpg"
import notify from "../images/about_tintuc_images/news_6.jpg"

export default function News() {
  const data = [
    {
      image: covid,
      title: "KFC Việt Nam chung tay cùng cộng đồng chống covid 19",
      detail:
        "Trong thời điểm cả nước chung tay góp sức đẩy lùi dịch bệnh Covid 19...",
    },
    {
      image: notify,
      title: "Thông cáo báo chí: Cùng nhau đẩy nùi covid 19...",
      detail:
        "trong thời điểm dịch bệnh covid 19 hiện tại, chúng tôi hiểu rõ mối quan tâm...",
    },
    {
      image: run,
      title: "KFC đồng hành cùng Fun Run 2023",
      detail:
        "Sáng ngày 1 tháng 1 năm 2023 vừa qua, công ty KFC Việt Nam tự hòa...",
    },
    {
      image: shear,
      title: "Chia sẻ yêu thương cùng FKC",
      detail:
        "Để hưởng ứng phong trào thiện nguyện Charity for life, ngày 21 tháng 1 năm 2021 vừa qua ...",
    },
    {
      image: bridge,
      title: "KFC Việt Nam khánh thành cầu 25 m tại Cà Mau",
      detail:
        "KFC Việt Nam tài trợ 95 triệu đồng chi phí sây cầu Nổng Ông sâu tại Nguyễn ...",
    },
    {
      image: given,
      title: "KFC Việt Nam trao tặng học bổng cho sinh viên Hutech",
      detail: "KFC Việt Nam vừa tặng học bổng cho 5 sinh trường đại học Hutech",
    },
  ]
  return (
    <section className="mt-8 flex gap-y-8 flex-wrap justify-between">
      {data.map((item) => (
        <div
          key={item.image}
          className="w-[20rem] bg-[#fff ] rounded-[0.25rem]  border-[1px]  border-color_border"
        >
          <div className="object-cover h-[14.5rem]  border-0">
            <img src={item.image} alt="" />
          </div>
          <div className="p-4">
            <h5 className="h-[3.2rem] text-[medium] font-medium">
              {item.title}
            </h5>
            <hr />
            <div className="h-[4.5rem]">{item.detail}</div>
            <NavLink className="flex justify-center hover:bg-red_light">
              Xem thêm
            </NavLink>
          </div>
        </div>
      ))}
    </section>
  )
}
