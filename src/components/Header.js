import React, { useState } from 'react'
import LogoUrl from '../logo.svg'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'antd'


const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
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


function Component() {
  const [isLogin, setIsLogin] = useState(false)

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
          isLogin ?
            <> hahaha <StyledButton type="primary" onClick={()=>setIsLogin(false)}>注销</StyledButton> </> :
            <>
              <StyledButton type="primary" onClick={()=>setIsLogin(true)}>登录</StyledButton>
              <StyledButton type="primary">注册</StyledButton>
            </>
        }

      </Login>
    </Header>
  )
}

export default Component