const { exec } = require('child_process')

const gameController = {
  list: async () => {
    const command = 'ls'
    const dir = 'C:/Users/'

    const options = {
      cwd: dir
    }

    try {
      exec(command, options, (err, stdout, stderr) => {
        if (err) { console.error(err) }
        if (stderr) { console.error(stderr) }

        console.log(`Retorno: ${stdout}`)

        return stdout
      })
    }
    catch (err) { 
      throw new Error(`Error at requesting list: ${err.message}`)
    }
  },

  playGame: async (event, data) => {
    // const { dirPath, gamePath, exeCommand } = data[0]

    // try {
    //   return await execa(
    //     `${exeCommand} "${gamePath}"`, 
    //     {cwd: dirPath}
    //   )
    // }
    // catch (err) {
    //   throw new Error(`Error at playing game: ${err.message}`)
    // }
  }
}

module.exports = gameController
