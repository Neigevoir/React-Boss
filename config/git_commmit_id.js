const fs = require('fs')

const gitHEAD = fs.readFileSync('.git/HEAD', 'utf-8').trim() // ref: refs/heads/master
const ref = gitHEAD.split(': ')[1] // refs/heads/master
const branch = gitHEAD.split('/')[2] // 发布的branch
const gitVersion = fs.readFileSync('.git/' + ref, 'utf-8').trim() // git版本号，例如：6ceb0ab5059d01fd444cf4e78467cc2dd1184a66
const gitCommitVersion = `${branch}:${gitVersion}` // 例如production环境: "master: 6ceb0ab5059d01fd444cf4e78467cc2dd1184a66"

module.exports = gitCommitVersion
