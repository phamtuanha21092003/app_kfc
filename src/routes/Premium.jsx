import React from "react"

const listPremium = [
  {
    image: "",
    title: "Combo chill hè 1",
    price: 122000,
    content: ["3 Miếng Gà Giòn Cay / 3 Miếng Gà  Giòn Không Cay", "pepsi non"],
  },
  {
    image: "",
    title: "Combo chill hè 2",
    price: 215000,
    content: [
      "4 Miếng Gà Giòn Cay / 4 Miếng Gà Giòn Không Cay / Miếng Gà Truyền Thống",
      "1 Burger Tôm",
      "2 Pepsi Lon",
    ],
  },
  {
    image: "",
    title: "Combo Hash Browns A",
    price: 78000,
    content: [
      "2 Bánh Khoai Tây Chiên",
      "1 Cơm Gà Cay / Một Cơm Gà Không Cay",
      "1 Súp Rau Củ / 1 Súp Rong",
      "1 Pepsi Lon",
    ],
  },
  { image: "", title: "Combo Hash Browns B", price: 68000, content: [] },
  { image: "", title: "Gà Que Kem(1 Que)", price: 390000, content: [] },
  { image: "", title: "Gà Que Kem(2 Que)", price: 780000, content: [] },
]
export default function Premium() {
  return (
    <section className="">
      <div>
        <div>Ưu đãi món mới</div>
        <div>Tất cả</div>
      </div>
      <div>
        <h4>Ưu đãi món mới</h4>
        {/* {listPremium.map((item) => (
          <div key={item.image}>{item.content.map((items) => items)}</div>
        ))} */}
      </div>
    </section>
  )
}
