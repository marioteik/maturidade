const path = require('path'),
username = process.env['USERPROFILE'] ? (process.env['USERPROFILE']).split(path.sep)[2] : '/',
domain = process.env['USERDOMAIN'] ? process.env['USERDOMAIN'] : ''

module.exports = () => {
    return {
        login: path.join(domain, username)
    }
}