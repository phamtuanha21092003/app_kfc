import React from "react"
import { Fade } from "react-slideshow-image"
import "react-slideshow-image/dist/styles.css"
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import slide5 from "../images/slide5.png"
import slide6 from "../images/slide6.png"
import slide7 from "../images/slide7.png"
import slide8 from "../images/slide8.png"

const slideImages = [
  { url: slide1 },
  { url: slide2 },
  { url: slide3 },
  { url: slide4 },
  { url: slide5 },
  { url: slide6 },
  { url: slide7 },
  { url: slide8 },
]
const customizeSliceShow = {
  arrows: false,
  duration: 1500,
  indicators: <div className="bg-red_light"></div>,
}
export default function SlideShowKfc() {
  return (
    <>
      <Fade {...customizeSliceShow}>
        {slideImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: "100%" }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </>
  )
}
