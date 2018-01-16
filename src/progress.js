/**
 * DOM -- the wrap
 * Style -- Object { key : value }
 * data -- Object { rate: '%' , value : ''} 
 */
const __wrapStyle = {
  padding: '2px 4px',
  'background-color': '#fff',
  position: 'relative',
  height: '20px'
}

const __baseStyle = {
  width: '100%',
}

const __labelStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default (dom, style, { rate, value }, isDB) => {
  const wrap = document.createElement('div')
  const progress = document.createElement('div')

  rate = parseInt(rate)

  const wStyle = wrap.style;
  Object.assign(wStyle, __wrapStyle)
  /**
   * 
   */
  const pStyle = progress.style
  Object.assign(pStyle, __baseStyle, style)
  /**
   * 百分比超出 - 则设置为100%
   */
  progress.style.width = rate > 100 || rate < -100
    ? '100%'
    : Math.abs(rate) + '%'
  wrap.appendChild(progress)
  /**
   * 普通进度条 采用居中label
   * 双向进度条 位于progress.innerText
   */

  if (!isDB) {
    const label = document.createElement('div')
    const lStyle = label.style
    Object.assign(lStyle, __labelStyle)
    label.innerText = value
    wrap.appendChild(label)
  
  } else {
    if (0 >= rate && rate > -100) {
      pStyle.float = 'right'
    } else if (rate > 0){
      pStyle.float = 'left'
    }
    progress.innerText = value
  }
  return dom.appendChild(wrap)
};
