import './App.css'

function App() {
  const sendRequest = () => {
    window.api.invoke('list')
      .then(list => console.log('resposta: ', list))
      .catch(err => console.error(err))
  }

  return (
    <>
      <button onClick={sendRequest}>Send</button>
    </>
  )
}

export default App
