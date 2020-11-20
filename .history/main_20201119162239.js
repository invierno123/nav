 
 const hashMap = [{logo:'A',logoType:'text',url:'https://www.acfun.cn'},{logo:'B',logoType:'text',uel:"https://www.bilibili.com/"}]
 
 hashMap.forEach(node=>{
     const $li = $(`<li>
     <a href="${node.url}">
         <div class="site">
             <div class="logo">${node.logo}</div>
             <div class="link">${node.url}</div>
         </div>
     </a>
  </li>`)
 })
 
 $('.addButton').on('click',()=>{
    let url = window.prompt('请问你要添加的网址是啥？')
    if(url.indexOf('http'!==0)){
        url = 'https://' + url 
    }
    
    
   
    const $li = $(
    `<li>
        <a href="${url}">
            <div class="site">
                <div class="logo">${url[0]}</div>
                <div class="link">${url}</div>
            </div>
        </a>
     </li>`).insertBefore($lastLi)
})