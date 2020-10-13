#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse
const githubClr = chalk.hex(`#6cc644`).bold.inverse
const blogClr = chalk.hex(`#6e5494`).bold.inverse
const lightGreyText = chalk.hex(`#C6C6C6`)
const greyText = chalk.hex(`#7F7F7F`)
const italic = chalk.italic

// Alerts
const sym = require('log-symbols')
const success = chalk.green.bold
const info = chalk.blue.bold
const warning = chalk.keyword(`yellow`).bold
const error = chalk.red.bold

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

${twitterClr(` Twitter `)}  ${lightGreyText(
  `https://www.twitter.com/CoderConstant`,
)}
${githubClr(` GitHub `)}   ${lightGreyText(`https://github.com/constantcoder`)}
${blogClr(` Blog `)}     ${lightGreyText(`https://www.constantcoder.io`)}
`)

console.log(`
  ${sym.success} ${success(`SUCCESS`)} - ${greyText(
  `Thank you for checking out my CLI.`,
)}
  ${sym.info} ${info(`INFO`)} - ${greyText(
  `I really enjoy creating CLI tools with NoseJS.`,
)}
  ${sym.warning} ${warning(`WARNING`)} - ${greyText(
  `Look...I'm new to this so cut me some slack.`,
)}
  ${sym.error} ${error(`ERROR`)} - ${greyText(
  `I just wanted to add one more alert here.`,
)}
`)
