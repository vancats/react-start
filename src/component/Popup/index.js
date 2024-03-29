import ReactDom from "react-dom"
import { useCallback, useEffect, useRef, useState } from "react"


function Popup({ render, afterClose }) {
  const [show, setShow] = useState(true)
  const mask = useRef()
  const close = useCallback(() => {
    setShow(false)
  }, [])
  useEffect(() => {
    if (show) {
      mask.current.style.opacity = 1
    } else {
      mask.current.style.opacity = 0
      mask.current.addEventListener('transitionend', () => {
        afterClose()
      })
    }
  })
  return ReactDom.createPortal(
    <div className="mask" ref={mask} >
      <div className="popup">
        {render(close)}
      </div>
    </div>,
    document.body
  )
}
export default Popup
