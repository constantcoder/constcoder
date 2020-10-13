#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const blogClr = chalk.hex(`#6e5494`).bold.inverse
const greyText = chalk.hex('#7F7F7F').bold
const italic = chalk.italic

welcome({
  title: `Constant Coder`,
  version: pkgJSON.version,
  description: pkgJSON.description,
  bgColor: `#8AFF80`,
  color: `#0B0D0F`,
  bold: true,
  clear: true,
})

console.log(`${italic(
  `Constant Coder is Garrett Lovell. A software engineer for Quad/Tractor Supply Co. Based in Nashville, TN I have a badass wife and dog and trying to help other people get better by giving tips and tricks for coding and getting in the industry. Follow me on my social media stuff.`,
)}

${twitterClr(` Twitter `)}  ${greyText(`https://www.twitter.com/CoderConstant`)}
${githubClr(` GitHub `)}   ${greyText(`https://github.com/constantcoder`)}
${blogClr(` Blog `)}     ${greyText(`https://www.constantcoder.io`)}

`)
