# Table-fix
纯JS实现简单Table插件

## Document
纯展示类表格

实现原理：

克隆表头，动态操作top
safari、opera实现存在闪烁问题

TODO：

考虑采用分离标签的形式实现

## USE

```bash
npm install table-fix -S
```

```javascript
import Table from 'table-fix'
```

#### Option

| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| id      | DOM节点ID | String |
| ifFixHead      | 是否固定表头      |   Boolean |
| cloumn | 栏配置项      |    Object |

#### Column
| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| prop      | 指定数据Key | String |
| Progress      | 指定百分条配置项      |   Object |

#### Progress
| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| style      | 指定样式将会覆盖到进度条中 | Object |


## Example
```html
<table id="table">
  <thead>
    <tr>
      <th>城市</th>
      <th>目前使用人数</th>
      <th>月初使用人数</th>
      <th>本月使用人数增长</th>
      <th>经纪人总数</th>
      <th>市场渗透率</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
```
```javascript
// 引入
import Table from '../common/table';
// 创建实例
const table = new Table({
  id: 'table',
  ifFixHead: true,
  column: [
    {
      prop: 'a'
    },
    {
      prop: 'b'
    },
    {
      prop: 'c'
    },
    {
      prop: 'd',
      progress: {
        style: {
          background: '#f2c46e',
          height: '20px'
        }
      }
    }
  ]
})
// 填充数据
table.fill(new Array(20).fill({
  a: '11',
  b: '22',
  c: '33',
  d: {
    rate: '50%',
    value: '100%'
  }
}))
```

