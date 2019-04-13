let svg2base64 = (svg)=>{
  return svgStr
    .replace(/<svg/gi, "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'")
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
    .replace(/"/g, "'");
}

//导出模块
// module.exports = {
//   svg2base64
// }

export {
  svg2base64
}