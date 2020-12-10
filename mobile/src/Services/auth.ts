interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
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