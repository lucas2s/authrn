export default function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'sfdsfdsgdjghiurieuropewwoeinfdfdsjfdskofkslçmkwnfds',
        user: {
          name: 'Lucas',
          email: 'lucas@gmail.com'
        }
      })
    }, 2000)
  })
}