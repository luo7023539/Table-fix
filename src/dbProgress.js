/**
 * 双向百分比条
 * 将进度条做二次封装
 * 设定参数
 * @argument
 *  dom， style， prop
 *  dom   -- dom容器
 *  style -- 分别指定正负百分比条颜色
 *  prop  -- 同progress - rate - value
 */

import progress from './progress';
/**
 * 增加div - 设置居中
 * 处理数据及位置即可
 */
const __wrapStyle = {
  padding: '0',
  'background-color': '#fff'
}

const __progressStyle = {
  padding: '0',
  float: 'left',
  width: '49%',
  height: '22px'
}

export default (dom, style, { rate, value }) => {
  rate = parseInt(rate)

  const wrap = document.createElement('div')
  wrap.className = 'cl'
  const wStyle = wrap.style;
  Object.assign(wStyle, __wrapStyle)

  const _progress_left = document.createElement('div')
  const _progress_right = document.createElement('div')

  /**
   * 两个并排各占50%
   */
  Object.assign(_progress_left.style, __progressStyle)
  Object.assign(_progress_right.style, __progressStyle)


  /**
   * 放置于不同的容器当中
   */
  if (rate > 0) {
    progress(_progress_right, style.posi, {
      rate,
      value
    }, true)
    wrap.appendChild(_progress_left)
    wrap.appendChild(_progress_right)
  } else if (rate <= 0){
    progress(_progress_left, style.nega, {
      rate,
      value
    }, true)
    wrap.appendChild(_progress_left)
    wrap.appendChild(_progress_right)
  } else {
    progress(wrap, style.nega, {
      rate,
      value
    }, true)
  }
  return dom.appendChild(wrap)
};
