import checkUserMiddleWare from './chekcUser'

const mainMiddleware = (defaultMD) => defaultMD().concat(checkUserMiddleWare)

export default mainMiddleware