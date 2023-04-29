const fp = require('find-free-port')
const chalk = require('chalk')
const exec = require('child_process').exec
const pkg = require('vulmix/package.json')

exec(`tsc ./vulmix.config.ts --outDir ./.vulmix`)

fp(3000, function (err, freePort) {
  try {
    const port = freePort

    setTimeout(() => {
      console.log(
        chalk.blueBright(
          `${chalk.grey(
            `\nVulmix ${pkg.version}`
          )}\nHMR Server running at: ${chalk.greenBright(
            `http://localhost:${port}`
          )}`
        )
      )

      exec(
        `mix watch --mix-config=.vulmix/laravel-mix/webpack.mix.js --hot -- --port=${port}`
      )
    })
  } catch (err) {
    console.log(err)
  }
})
