 const hashMap = [{logo:'A',url:'https://www.acfun.cn'},{logo:'B',uel:"https://www.bilibili.com/"}]
 
 hashMap.forEach(node=>{
     const $li = $(`<>`)
 })
 
 $('.addButton').on('click',()=>{
    let url = window.prompt('请问你要添加的网址是啥？')
    if(url.indexOf('http'!==0)){
        url = 'https://' + url 
    }
    
    const $siteList = $('.siteList')
    
    const $lastLi = $siteList.find('li.last')
   
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