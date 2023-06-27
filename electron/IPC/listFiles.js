import { execa } from "execa"

const listFiles = async () => {
  try { 
    return await execa('ls', {cwd: 'C:/Users/kjesus1'}) 
  }
  catch (err) { 
    throw new Error(`Error at requesting list: ${err.message}`)
  }
}

export default listFiles
