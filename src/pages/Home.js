import React from 'react'
import {observer} from 'mobx-react'
import {useStores} from '../stores'
import Uploader from '../components/Uploader'
import Tips from '../components/Tips'

const Home = observer(() => {
  const {UserStore} = useStores()
  const User = () => <div>Hello {UserStore.currentUser.attributes.username}</div>
  return (
    <>
      {
        UserStore.currentUser ? null : <Tips>请先登录再上传文件</Tips>
      }
      <Uploader/>
    </>
  )
})

export default Home