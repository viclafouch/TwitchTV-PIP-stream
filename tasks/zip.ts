import zl from 'zip-lib'

const zip = new zl.Zip()

zip.addFile('background.js')
zip.addFile('manifest.json')
zip.addFolder('images', 'images')
// Generate zip file.
zip.archive('dist/twitchtv-pip.zip').then(
  () => {
    console.log('A new zip file has been generated.')
  },
  (error) => {
    console.error(error)
  }
)
