/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd6da676e5030a474',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b490d3c6a92d20781c5023285c0b15c2',

  PROVINCE: '四川',
  CITY: '蓬溪县',
  
  // 功能开关,打开：true，关闭：false
  SWITCH: {
    /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,

   
  },
  

  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'ab26ade3ccbb550732bac7932d8fc630',
    
    /** 天行API相关，需要config中配置 TIAN_API_KEY  */
    // 早安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    morningGreeting: true,
  
    // 晚安心语, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    //eveningGreeting: true,
  
    // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 3,
 
  },
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  
  /** 每日一言 */
  // 每日一言的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: '',
  

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: '77宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5zwg5j1KI42LZHK_2oN84kD28jM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'crwCN65exHghbdBVJkE_8i__CGx7jBsrDQ5Sjg39q64',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-09',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '77宝贝', year: '1999', date: '12-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '00bb', year: '2000', date: '06-11',
        },
        {
          type: '节日', name: '相识一周年', year: '2022', date: '04-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-06-09' },
        // 认识纪念日
        { keyword: 'meet_day', date: '2022-04-22' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'crwCN65exHghbdBVJkE_8i__CGx7jBsrDQ5Sjg39q64',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5zwg5kAKbQaWERnTYIlA6Z3AvuI',
    }
  ],

}

module.exports = USER_CONFIG

