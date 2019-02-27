Component({
  // 组件的内部数据，和 properties 一同用于组件的模板渲染
  data: {
    
  },
  // 组件的对外属性，是属性名到属性设置的映射表，属性设置中可包含三个字段， type 表示属性类型、 value 表示属性初始值、 observer 表示属性值被更改时的响应函数
  properties: {
    item: {            // 属性名
      type: Object,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    idx:{
      type: Number,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: ''     // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },
  // 组件数据字段监听器，用于监听 properties 和 data 的变化，参见 数据监听器
  observers: {},
  // 组件的方法，包括事件响应函数和任意的自定义方法，关于事件响应函数的使用，参见 组件事件
  methods: {
    getIdx: function (e) {
      const myEventDetail = {
           curTab:this.data.idx
      } // detail对象，提供给事件监听函数
      const myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      } // 触发事件的选项
      this.triggerEvent('myevent', myEventDetail, myEventOption)
    },
  },
  // 类似于mixins和traits的组件间代码复用机制，参见 behaviors
  behaviors: [],
  // 组件生命周期函数，在组件实例刚刚被创建时执行，注意此时不能调用 setData ，参见 组件生命周期
  created: function () { },
  // 组件生命周期函数，在组件实例进入页面节点树时执行，参见 组件生命周期
  attached: function () {
     let that=this;
    //  console.log("this",that);
  },
  // 组件生命周期函数，在组件布局完成后执行，参见 组件生命周期
  ready: function () { },
  // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行，参见 组件生命周期
  moved: function () { },
  // 组件生命周期函数，在组件实例被从页面节点树移除时执行，参见 组件生命周期
  detached: function () { },
  // 组件间关系定义，参见 组件间关系
  relations: {
    './../list': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
        console.log('child linked to ', target)
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  // 组件接受的外部样式类，参见 外部样式类
  externalClasses: [],
  // 一些选项（文档中介绍相关特性时会涉及具体的选项设置，这里暂不列举）
  options: {},
  // 组件生命周期声明对象，参见 组件生命周期
  lifetimes: {
    // 可以覆写页面上的方法
  },
  // 组件所在页面的生命周期声明对象，支持页面的 show 、 hide 等生命周期，参见 组件生命周期
  pageLifetimes: {},
  // 定义段过滤器，用于自定义组件扩展，参见 自定义组件扩展
  definitionFilter: function () { }

})