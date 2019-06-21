/*
 * 根据QueryString参数名称获取值
 * @param name
 * @param context
 * @returns {string}
 */
export function getQueryStringByName(context,name) {
  const newName = name.replace(/[[\]]/g, '\\$&')
  let regex = new RegExp('[?&]' + newName + '(=([^&#]*)|&|#|$)')
  let results = regex.exec(context.props.location.search)
  if (!results || !results[2]) {
    // console.log('empty')
    return ''
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

export function isPwa(){
  if(window.matchMedia('(display-mode: standalone)').matches||'standalone' in window.navigator){
    return true
  }else{
    return false
  }
}