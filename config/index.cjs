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

  USERS: [
    {
      // 想要发送的人的名字
      name: '77宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o5zwg5kAKbQaWERnTYIlA6Z3AvuI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'VBIvL6C_M7Ljnulf9ybi7PTJ4jpRmxY9ytYlcZuh3QI',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-09',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '77宝贝', year: '1999', date: '12-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '00', year: '2000', date: '06-11',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-22',
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
  CALLBACK_TEMPLATE_ID: 'VBIvL6C_M7Ljnulf9ybi7PTJ4jpRmxY9ytYlcZuh3QI',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'gh_23b00ee55fc4',
    }
  ],

}

module.exports = USER_CONFIG

