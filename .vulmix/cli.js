const fp = require('find-free-port')
const execSync = require('child_process').execSync

execSync(`tsc ./vulmix.config.ts --outDir ./.vulmix`, {
  stdio: 'inherit',
})

fp(3000, function (err, freePort) {
  try {
    const port = freePort

    execSync(
      `mix watch --mix-config=.vulmix/laravel-mix/webpack.mix.js --hot -- --port=${port}`,
      { stdio: 'inherit' }
    )
  } catch (err) {
    console.log(err)
  }
})
