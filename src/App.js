import './App.css';

function App() {

  const sendRequest = async event => {
    event.target.disabled = true
    try {
      // const list = await window.api.invoke('playGame', [{
      //   dirPath: 'D:/Emulador/Emuladores/PS2 - PCSX2',
      //   gamePath: 'D:/Emulador/ROMS/PS2/Kingdom Hearts 2.iso',
      //   exeCommand: './pcsx2.exe --nogui --fullscreen'
      // }])
      const list = await window.electron.invoke('list')
      event.target.disabled = false
    }
    catch (err) { console.error(err) }
  }

  return (
    <div className="App">
      <button onClick={sendRequest} autoFocus>Send</button>
    </div>
  );
}

export default App;
