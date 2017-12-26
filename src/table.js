import progress from './progress';

/**
 * 简单表格组件
 * HTML书写thead - tbody
 * column 通过prop来指定获取数据key
 *        通过增加progress来指定是否为进度条
 * ifFixHead 是否固定表头
 *           cloneThead通过该类名指定样式
 * id --- table id
 * column --- [{
 *    prop: 'name', String
 *    progress: {
 *      style: {}  Style Object
 *    }
 * }]
 */
export default class Table {
  constructor({ id, column, ifFixHead }) {
    this._id = id
    this._column = column
    this._ifFixHead = ifFixHead
  }
  init() {
    this._dom = document.getElementById(this._id)
    this._thead = this._dom.getElementsByTagName('thead')[0]
    this._tbody = this._dom.getElementsByTagName('tbody')[0]
    if (!this._dom || !this._tbody || !this._thead) {
      return console.error("Can't init the instance while the dom isn't ixist!");
    }
    if (this._ifFixHead) {
      this._parent = this._dom.parentNode;
      this._cloneHeader = this._thead.cloneNode(true)
      this.setFixHead()
      this._parent.addEventListener('scroll', this.listenerScroll.bind(this), false);
    }
  }
  /**
   * 创建每一行
   * @param {*} column 该行数据
   */
  col(column) {
    const tr = document.createElement('tr')
    this._column.forEach(col => {
      // prop 数据
      const prop = column[col['prop']]
      let td = document.createElement('td')
      if (col.progress) {
        // 样式
        const style = col['style']
        progress(td, col.progress.style, prop)
      } else {
        td.innerText = prop
      }
      tr.appendChild(td)
    })
    return tr
  }
  /**
   * 向DOM中填充数据
   * @param {*} data 
   */
  fill(data) {
    const frame = document.createDocumentFragment()
    data.forEach((column) => {
      frame.appendChild(this.col(column))
    })
    this._tbody.appendChild(frame)
  }
  /**
   * 复制表头 - 且丢入DOM当中
   */
  setFixHead() {
    let _theadChildren = this._thead.children[0].children,
      _cloneChildren = this._cloneHeader.children[0].children
    let i = 0, l = _theadChildren.length
    for (; i < l; i++) {
      let _theadTh = _theadChildren[i],
        _cloneTh = _cloneChildren[i];
      _cloneTh.style.width = _theadTh.offsetWidth + 'px';
      _cloneTh.style.height = _theadTh.offsetHeight + 'px';
    }
    this._cloneHeader.className = 'cloneThead'
    this._cloneHeader.style.position = 'absolute';
    this._cloneHeader.style.top = 0;
    this._cloneHeader.style.left = 0;
    this._dom.appendChild(this._cloneHeader)
  }
  /**
   * 监听Scroll - 动态设置克隆表头
   * @param {*} ev 
   */
  listenerScroll(ev) {
    var top = ev.target.scrollTop,
      //用于判断是否已经添加上了，添加了就不让再次添加
      cloneThead = ev.target.querySelector('.cloneThead');
    if (top > 0) {
      if (cloneThead) {
        cloneThead.style.display = 'block';
        cloneThead.style.transform = 'translateY(' + top + 'px' + ')' //translate
        // cloneThead.style.top = top + 'px';
        return;
      }
      // this.setFixHead();
    } else {
      if (cloneThead) {
        cloneThead.style.display = 'none';
      }
    }
  }
};


