import React from 'react'
import {useStores} from '../stores'
import {observer} from 'mobx-react'
import styled from 'styled-components'

const Tips = styled.div`
  background: #40a9ff;
  padding: 10px;
  margin: 30px 0;
  color: #fff;
`

const Component = observer(({children}) => {
  const {UserStore} = useStores()
  console.log(UserStore)
  return (
    <>
      {
        UserStore.currentUser ? null : <Tips>{children}</Tips>
      }
    </>
  )
})

export default Component