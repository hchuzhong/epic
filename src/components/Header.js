import React from 'react'
import LogoUrl from '../logo.svg'
import {NavLink, useHistory} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'antd'
import {useStores} from '../stores'
import {observer} from 'mobx-react'

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #343a40;
  color: #fff;
`
const Logo = styled.img`
  height: 30px;
`
const StyleLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  
  &.active {
    border-bottom: 1px solid #fff;
  }
`
const Login = styled.div`
  margin-left: auto;
`
const StyledButton = styled(Button)`
  margin-left: 10px;
`


const Component = observer(() => {
  const {UserStore, AuthStore} = useStores()
  const history = useHistory()

  const handleLogout = () => {
    AuthStore.logout()
  }
  const handleLogin = () => {
    history.push('./login')
  }
  const handleRegister = () => {
    history.push('./register')
  }

  return (
    <Header>
      <Logo src={LogoUrl} alt=""/>
      <nav>
        <StyleLink to="/" activeClassName="active" exact>首页</StyleLink>
        <StyleLink to="/history" activeClassName="active">上传历史</StyleLink>
        <StyleLink to="/about" activeClassName="active">关于</StyleLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ?
            <> {UserStore.currentUser.attributes.username} <StyledButton type="primary"
                                                                         onClick={handleLogout}>注销</StyledButton> </> :
            <>
              <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
              <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
            </>
        }

      </Login>
    </Header>
  )
})

export default Component