/**
 * DOM -- the wrap
 * Style -- Object { key : value }
 * data -- Object { rate: '%' , value : ''} 
 */
const __wrapStyle = {
  padding: '2px 4px',
  'background-color': '#fff'
}

const __baseStyle = {
  width: '100%',
  'background-color': '#ccc'
}

const __labelStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default (dom, style, {rate, value}) => {
  const wrap = document.createElement('div')
  const progress = document.createElement('div')
  const label = document.createElement('div')

  const wStyle = wrap.style;
  Object.assign(wStyle, __wrapStyle)
  /**
   * 
   */
  const pStyle = progress.style
  Object.assign(pStyle, __baseStyle, style)
  progress.style.width = parseInt(rate) > 100 ? '100%' : rate
  wrap.appendChild(progress)
  /**
   * 
   */
  const lStyle = label.style
  Object.assign(lStyle, __labelStyle)
  label.innerText = value
  wrap.appendChild(label)
  return dom.appendChild(wrap)
};
