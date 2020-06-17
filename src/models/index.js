import AV, { User } from 'leancloud-storage'

AV.init({
  appId: 'M6NC0v2HhEmMwE9wvP2OIlE7-gzGzoHsz',
  appKey: 'CsPMFIrzhMQixmaeneju54G3',
  serverURL: 'https://m6nc0v2h.lc-cn-n1-shared.com'
})

const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  login(username, password) {
    return new Promise((resolve, reject) => {
      AV.User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },

  logout() {
    User.logOut()
  },

  getCurrentUser() {
    return User.current()
  }
}


export { Auth }