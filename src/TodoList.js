import React from 'react'
import { connect } from 'react-redux'
import { changeInputValueAction, addItemAction, deleteItemAction } from './store/actionCreators'

const TodoList = (props) => {

  const { inputValue, list } = props
  const { changeInputValue, handleClick, handleDelete } = props

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={changeInputValue}
        />
      <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={()=>{handleDelete(index)}}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
// store.dispatch, props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = changeInputValueAction(e.target.value)
      dispatch(action)
    },

    handleClick() {
      const action = addItemAction()
      dispatch(action)
    },

    handleDelete(index) {
      const action = deleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
