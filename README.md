# Table-fix
纯JS实现简单Table插件

## Document
纯展示类表格

#### Option

| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| id      | DOM节点ID | String |
| ifFixHead      | 是否固定表头      |   Boolean |
| cloumn | 栏配置项      |    Object |

#### Column
| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| prop      | 指定数据Key | String |
| Progress      | 指定百分条配置项      |   Object |

#### Progress
| Property        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| style      | 指定样式将会覆盖到进度条中 | Object |


## Example
```javascript
// 引入
import Table from '../common/table';
// 创建实例
const table = new Table({
  id: 'sessionReach',
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