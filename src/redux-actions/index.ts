import { createStore } from 'redux'
import { createActions, handleActions } from 'redux-actions'

const { add, subtract } = createActions({
  ADD: (number: number) => number,
  SUBTRACT: (number: number) => number
})

const reducer = handleActions({
  // 如果忽略 ESLint 警告，也可以直接使用 [add] 作为计算属性的
  [`${add}`]: (state, action) => state + action.payload,
  [`${subtract}`]: (state, action) => state - action.payload
}, 0)

const store = createStore(reducer)

store.dispatch(add(2))
store.dispatch(subtract(1))

const state = store.getState()

console.log('最后的值：', state) // 最后的值： 1
