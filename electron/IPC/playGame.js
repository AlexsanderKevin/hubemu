import { execa } from "execa"

const playGame = async (event, data) => {
  const { dirPath, gamePath, exeCommand } = data

  try {
    return await execa(
      `${exeCommand} ${gamePath}`, 
      {cwd: dirPath}
    )
  }
  catch (err) {
    throw new Error(`Error at playing game: ${err.message}`)
  }
}

export default playGame
