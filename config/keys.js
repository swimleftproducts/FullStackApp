// keys . js figur eout what credentials to use
if(process.env.NODE_ENV=== 'production'){
    module.exports = require('./prod')
}else{
    module.exports = require('./dev')
}
