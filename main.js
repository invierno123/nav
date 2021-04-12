const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [
  {logo: '百度', logoType: '搜索引擎', url: 'https://www.baidu.com'},
  {logo: 'B站', logoType: '视频网站', url: 'https://www.bilibili.com/'}
]

const simplifyUrl = (url) => {
  return url.replace('https://', '')
    .replace('http://', '')
    .replace('www.', '')
    .replace(/\/.*/, '')//删除/开头结尾内容
}


const render = (newChild, refChild) => {
  $siteList.find('li:not(.last)').remove()
  hashMap.forEach((node, index) => {
    const $li = $(`<li xmlns="http://www.w3.org/1999/html">
      <div class="site">
        <div class="siteHead">
            <div class="logoWrapper">
                <div class="siteWrapper">
                    <img
                      src="${node.url}/favicon.ico"
                      alt=""
                      class="logo"
                    />
                    <span class="hidden">${node.logo}</span>
                </div>
            
            <p class="description">${node.logoType}</p>
            </div>
        </div>
        <div class="link">${simplifyUrl(node.url)}</div>
        <div class="close">
            <svg class="icon">
                <use xlink:href="#icon-close"></use>
            </svg>
        </div>
    </div>
  </li>`).insertBefore($lastLi, refChild)
    $li.on('click', () => {
      window.open(node.url)
    })
    $li.on('click', '.close', (e) => {
      e.stopPropagation()
      hashMap.splice(index, 1)
      render()
    })
  })
}
render()
$('.addButton').on('click', () => {
  let title = window.prompt('请输入网站标题')
  if (!title){window.alert('标题不能为空');return;}
  let url = window.prompt('请问你要添加的网址是什么？')
  if (!url){window.alert('网址不能为空');return;}
  if (url.indexOf('http') !== 0) {
    url = 'https://' + url
  }
  let desc = window.prompt('请输入网站描述')
  hashMap.push({logo: title, logoType: desc, url: url})

  render()
})
window.onbeforeunload = () => {
  const string = JSON.stringify(hashMap)
  localStorage.setItem('x', string)
}

$('.search:first-child').on('click', () => {
  $('form').attr('action', '//www.bing.com/search')
  $('input').attr('name', 'q')
  $('.search:nth-child(1)').attr('style', 'color: black;')
  $('.search:nth-child(2)').attr('style', 'color: #fff;')
})

$('.search:nth-child(2)').on('click', () => {
  $('form').attr('action', '//www.google.com/search')
  $('input').attr('name', 'q')
  $('.search:nth-child(2)').attr('style', 'color: black;')
  $('.search:nth-child(1)').attr('style', 'color: #fff;')
})