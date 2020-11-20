const $siteList = $('.siteList')  
const $lastLi = $siteList.find('li.last')
 const hashMap = [{logo:'A',logoType:'text',url:'https://www.acfun.cn'},{logo:'B',logoType:'text',url:"https://www.bilibili.com/"}]
 
 const render = ()=>{
    $siteList.find('li:not(.last)').remove() 
    hashMap.forEach(node=>{
     const $li = $(`<li>
     <a href="${node.url}">
         <div class="site">
             <div class="logo">${node.logo[0]}</div>
             <div class="link">${node.url}</div>
         </div>
     </a>
  </li>`).insertBefore($lastLi)
 })
}
render()
 $('.addButton').on('click',()=>{
    let url = window.prompt('请问你要添加的网址是啥？')
    if(url.indexOf('http'!==0)){
        url = 'https://' + url 
        
    }
    hashMap.push({logo:url[0],logoType:'text',url:url})
    
   render()
})
window.onbeforeunload=()=>{
    console.log('页面要关闭了')
}