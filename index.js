#!/usr/bin/env node
const pkgJSON = require('./package.json')
const welcome = require('cli-welcome')
const chalk = require('chalk')

welcome({
  title: pkgJSON.name,
  version: pkgJSON.version,
  description: pkgJSON.description,
  tagLine: `by Constant Coder`,
  bgColor: `#8AFF80`,
  color: `#0B0D0F`,
  bold: true,
  clear: true,
})

// Clears the console.
console.log(`
${chalk.blue(`Constant Coder`)}

${chalk.dim(
  `Constant Coder is Garrett Lovell. A software engineer for Quad/Tractor Supply Co. Based in Nashville, TN I have a badass wife and dog and trying to help other people get better by giving tip and tricks for coding and the industry. Follow me on my social media stuff.`,
)}

Twitter:  https://www.twitter.com/CoderConstant
GitHub:   https://github.com/constantcoder
Blog:     https://www.constantcoder.io

`)
