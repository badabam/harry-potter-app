import AppHeader from './components/AppHeader'

const charactersUrl = 'http://hp-api.herokuapp.com/api/characters'

export default function App() {
  const header = AppHeader('Harry Potter App')
  document.body.append(header)

  // fetch API
  const promise = fetch(charactersUrl)
  promise.then(onResponse)
  promise.catch(onError)

  // response object
  function onResponse(res) {
    const promise = res.json()
    promise.then(onData)
    promise.catch(onError)
  }

  function onData(data) {
    console.log(data)
  }

  function onError(error) {
    console.log(error)
  }
}
