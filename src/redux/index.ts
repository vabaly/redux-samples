import { createStore } from 'redux'

interface Action {
  // 变更的唯一的名字，必须得有
  type: string
  // 变更时需要用到的数据，可选
  payload?: any
  // 变更是正常情况下的变更还是异常异常情况下的变更，可选
  error?: boolean
  // 变更的其他一些信息，可选
  meta?: any
}

const UPDATE_STATE = 'UPDATE_STATE'

const defaultState = 0

// action 创建函数
function actionCreator (): Action {
  const action = {
    type: UPDATE_STATE
  }

  return action
}

function reducer (
  // 第一个要素，有一个状态
  state = defaultState,
  // 第二个要素，做什么更改，注意，这里我们随便定义了下 action 的结构，关于结构具体怎么定义，后面会讲
  action: Action
): number {
  const { type } = action

  switch (type) {
  // 第三个要素，更改的具体操作
    case UPDATE_STATE:
    // 第四个要素，返回新状态，覆盖老状态
      return 100

    default:
      return state
  }
}

const store = createStore(reducer)

let state = store.getState()
console.log('初始的 state：', state) // 初始的 state： 0

// 在 dispatch 前调用
const action = actionCreator()
store.dispatch(action)

state = store.getState()
console.log('更改后的 state：', state) // 更改后的 state： 100
