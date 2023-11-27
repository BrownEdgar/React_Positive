import checkUserMiddleWere from "./checkUser"

const mainMiddleWare = (defaultMD) => defaultMD().concat(checkUserMiddleWere )
export default mainMiddleWare
