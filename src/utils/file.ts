import fs from 'fs'

export const deleteFile = async (filename: string): Promise<void> => {
  // verifica se o arquivo existe no projeto
  try {
    await fs.promises.stat(filename)
  } catch {
    return
  }

  // remove o arquivo
  await fs.promises.unlink(filename)
}
