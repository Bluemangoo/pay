// 配置文件

const basic = { // 基础设置
    favicon: '/favicon.png', // 页面图标
    title: '(～￣▽￣)～', // 页面标题
    avatar: '/img/avatar.jpg', // 头像 URL
    name: 'Bluemangoo', // 头像下的昵称
    sign: '我很可爱，请给我钱 ( •̀ ω •́ )✧', // 个性签名或提示文字，可使用 HTML 格式
    user_page: 'https://github.com/bluemangoo', // 点击头像或名字时跳转的链接，留空或删除则不跳转
    footer: '', // 页脚文字，可使用 HTML 格式
    uri_redirect: false // 若收款码 URL 是网址，是否直接跳转而不显示二维码
}

const theme = { // 主题设置
    page_bg: '#c3d7df', // 网页背景（十六进制，或图片 URL）
    card_bg: '#ffffffcc', // 卡片背景色（十六进制，可带透明度，不能是 URL）
    qrcode_bg: '#eaeffde6', // 二维码背景色（十六进制，可带透明度，不能是 URL）
    qrcode_fg: '#1375d8' // 二维码颜色（十六进制，可带透明度，不能是 URL）
}

const tools = { // 右上角小工具设置
    dl_btn: true, // 二维码下载
    badge_generator: false // 徽章生成器
}

const urls = [ // 付款方式列表
    {
        name: '支付宝', // 名称
        ua: 'Alipay', // User-Agent 正则表达式
        addr: 'https://qr.alipay.com/fkx15016nkeicoo6d9n25dc' // 收款码 URL
    },
    {
        name: '微信',
        ua: 'MicroMessenger\/',
        img: '/img/wechat.png' // 使用 img 而非 addr 参数以使用小程序码
    }
]
