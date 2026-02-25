/**
 * 墨渊工坊 · 演示项目库
 * demos.js — 独立数据文件，可随时增删项目，不影响主程序逻辑
 *
 * 字段说明：
 *   title     书名
 *   genre     类型 (romance / xianxia / urban / suspense / scifi / historical / erotica)
 *   style     风格 (literary / sensual / intense / dark / epic / humor)
 *   intensity 情感强度 1-5
 *   qujia     去甲模式 true/false
 *   charMain  主角描述
 *   charSub   配角描述
 *   worldBg   世界背景
 *   plotCore  核心剧情（必填）
 *   chTotal   总章节数
 *   chWords   每章字数
 */

const DEMO_PROJECTS = [

  // ── 言情 ─────────────────────────────────────────
  {
    title: '霸总的温柔陷阱',
    genre: 'romance', style: 'sensual', intensity: 4, qujia: false,
    charMain: '林晚晚，25岁，清冷美人，设计师，渴望被爱却不善表达',
    charSub:  '沈慕白，32岁，商业帝国总裁，霸道外表下深藏柔情',
    worldBg:  '现代都市，上海，商业与时尚圈',
    plotCore: '林晚晚因家族欠债被迫嫁给沈慕白，从冷战对峙到逐渐心动，中间横亘着商业阴谋与旧情人的阻挠，最终两人在风雨中走向真爱',
    chTotal: 10, chWords: 1500
  },
  {
    title: '前任的白月光',
    genre: 'romance', style: 'literary', intensity: 3, qujia: false,
    charMain: '宋以安，编辑，外表平静内心细腻，习惯用文字处理情绪',
    charSub:  '江予，建筑师，沉默寡言，三年前无声离开，三年后突然归来',
    worldBg:  '南方小城，梅雨季节，旧巷弄与新书店并存',
    plotCore: '宋以安在自己策划的新书发布会上重遇离开三年的前任江予。他没有解释，她没有追问。两人在同一个项目里被迫共事，旧伤未愈又生新情，最终才明白当年那场沉默背后各自藏着什么',
    chTotal: 12, chWords: 1500
  },
  {
    title: '替嫁王妃觉醒日记',
    genre: 'historical', style: 'humor', intensity: 3, qujia: false,
    charMain: '顾浅，现代打工人穿越成替嫁王妃，嘴毒心软，擅长摸鱼',
    charSub:  '齐珩，摄政王，表面冷面阎王，实为高智商社恐',
    worldBg:  '架空古代，王府、市井、朝堂三线并行',
    plotCore: '顾浅意外替姐姐嫁给"克妻"摄政王，本以为活不过三集。然而王爷其实只是个高冷社恐，两人在一次次误解与心跳之间从陌生人变成彼此唯一的后盾',
    chTotal: 15, chWords: 1500
  },

  // ── 古言 / 历史 ───────────────────────────────────
  {
    title: '禁宫烛影',
    genre: 'historical', style: 'sensual', intensity: 5, qujia: true,
    charMain: '沈清绾，罪臣之女，被迫入宫为女史，聪敏隐忍',
    charSub:  '萧承璟，摄政王，冷酷狠绝，却对她步步失控',
    worldBg:  '架空王朝，风雨飘摇的宫廷，权谋与礼教交织',
    plotCore: '沈清绾为查父案真相接近摄政王，二人在试探与博弈中越陷越深。朝堂倾轧、后宫暗杀接连爆发，他们必须在权力与欲望之间选出唯一生路',
    chTotal: 15, chWords: 1500
  },
  {
    title: '审判庭之吻',
    genre: 'historical', style: 'dark', intensity: 4, qujia: true,
    charMain: '苏鸢，女讼师，言辞锋利，专攻冤案与禁忌案件',
    charSub:  '顾延，锦衣卫都指挥使，铁血无情，却暗中庇护她多年',
    worldBg:  '架空明制王朝，审判庭与诏狱并存，真相常被权势改写',
    plotCore: '苏鸢接手一宗谋逆案，证据全指向恩师。顾延奉命监审，表面与她对立，实则步步放水。两人在法理与私情间不断拉扯，最终联手撕开朝堂最深层的交易网络',
    chTotal: 12, chWords: 1500
  },
  {
    title: '将军的战俘',
    genre: 'historical', style: 'intense', intensity: 5, qujia: true,
    charMain: '裴凌霜，北境女将，铁骨铮铮，从不相信所谓命运',
    charSub:  '莫迦勒，南蛮王子，被俘后成为阶下囚，野性难驯',
    worldBg:  '乱世边境，两国交战百年，营帐、荒漠、古城交替',
    plotCore: '裴凌霜俘获敌方王子作为筹码，本只是战局棋子。然而三个月的朝夕相处，让双方的界线越来越模糊。两军再次开战时，她必须选择——是交出他，还是叛离一切',
    chTotal: 14, chWords: 1500
  },

  // ── 悬疑 / 推理 ──────────────────────────────────
  {
    title: '雪夜孤岛密室',
    genre: 'suspense', style: 'dark', intensity: 4, qujia: false,
    charMain: '周棠，犯罪心理学讲师，擅长读心却不敢直面自己的创伤',
    charSub:  '陆沉舟，私人安保顾问，寡言冷峻，过去疑点重重',
    worldBg:  '暴风雪封锁的海上疗养岛，一栋旧庄园与七名陌生来客',
    plotCore: '一场高价心理实验变成连环命案。周棠与陆沉舟被迫共处密室，在互相怀疑与彼此依赖之间寻找真凶。每破解一层谜题，他们之间的边界就更危险一分',
    chTotal: 10, chWords: 1500
  },
  {
    title: '红毯杀机',
    genre: 'suspense', style: 'sensual', intensity: 4, qujia: false,
    charMain: '许念，顶流女演员，外表明艳，内心警觉，擅长伪装情绪',
    charSub:  '顾承泽，娱乐法务王牌律师，冷静狠准，只对她破例',
    worldBg:  '当代娱乐圈，颁奖季与资本博弈并行，舆论像刀一样锋利',
    plotCore: '许念在巅峰夜收到死亡预告，唯一线索指向她十年前的秘密。顾承泽受托保护她，却在调查中发现自己也被卷入局中。两人边查真相边对抗舆论风暴，关系在高压与危险中急速升温',
    chTotal: 10, chWords: 1500
  },
  {
    title: '第十三号证人',
    genre: 'suspense', style: 'dark', intensity: 3, qujia: false,
    charMain: '卫澈，刑警队长，记忆力异常精准，只是那天的案子他偏偏记不清',
    charSub:  '程晓渔，法医鉴定师，外表柔和，逻辑冷酷，唯一见过凶手正脸的人',
    worldBg:  '灰色南方城市，旧工厂区、地下法庭、24小时便利店构成案件地图',
    plotCore: '七年前一宗悬案突然重启，唯一的新线索指向一名从未被列入档案的"第十三号证人"。卫澈和程晓渔越挖越深，才发现这个证人的身份将动摇整个案件的前提——包括定罪的那个人是否真的有罪',
    chTotal: 12, chWords: 1500
  },

  // ── 科幻 ─────────────────────────────────────────
  {
    title: '赛博夜色交易',
    genre: 'scifi', style: 'dark', intensity: 5, qujia: true,
    charMain: '岑烬，黑客佣兵，外冷内烈，擅长神经入侵与情报置换',
    charSub:  '艾汐，企业继承人，白天高贵克制，夜里沉迷危险游戏',
    worldBg:  '近未来海港城，霓虹与暴雨覆盖，巨型财阀统治地下网络',
    plotCore: '岑烬受雇窃取财阀核心芯片，却发现雇主正是艾汐。两人在互相利用中产生致命吸引，最终联手掀翻财阀，代价是暴露彼此最脆弱的秘密',
    chTotal: 12, chWords: 1500
  },
  {
    title: '深海实验室心跳协议',
    genre: 'scifi', style: 'sensual', intensity: 5, qujia: true,
    charMain: '唐砚，深海工程师，理性克制，患有轻度失温后遗症',
    charSub:  '闻星河，生物改造体指挥官，危险而优雅，情绪读写能力异常',
    worldBg:  '太平洋海沟下12000米移动实验站，氧气配给与权限等级决定生死',
    plotCore: '实验站遭遇未知生物入侵，唐砚必须与闻星河绑定神经同步协议才能操控防御系统。每次同步都让他们更接近彼此内心最私密的欲望，也让失控风险逐步升级',
    chTotal: 12, chWords: 1500
  },
  {
    title: '末日前最后一列车',
    genre: 'scifi', style: 'literary', intensity: 3, qujia: false,
    charMain: '沈时，气候学家，预言了灾难却没有人相信，独自踏上撤离列车',
    charSub:  '宋迟，陌生旅人，行李只有一只猫和一封写好没有寄出的信',
    worldBg:  '文明崩塌前72小时，横穿大陆的最后一班特快列车',
    plotCore: '地球将在72小时后遭遇不可逆灾变。两个陌生人在列车的最后一节车厢相遇，没有手机信号，没有目的地，只有窗外倒退的风景和越来越短的时间。他们开始说话，开始说真话，开始理解一件事：也许这短短三天，才是某种意义上的一生',
    chTotal: 10, chWords: 1500
  },

  // ── 奇幻 / 玄幻 ──────────────────────────────────
  {
    title: '猎魔圣约',
    genre: 'fantasy', style: 'sensual', intensity: 4, qujia: true,
    charMain: '伊芙琳，流亡圣女，掌握禁忌治愈术，温柔却倔强',
    charSub:  '阿瑞斯，堕翼魔将，嗜战残暴，却独独守着她',
    worldBg:  '双月大陆，神殿与魔域百年战争未休，古老契约即将失效',
    plotCore: '伊芙琳为阻止战争签下血契，与阿瑞斯绑定生命。两人一路穿越战场与遗迹，在敌我阵营追杀中逐渐失守。最终他们要决定：拯救世界，还是成全彼此',
    chTotal: 12, chWords: 1500
  },
  {
    title: '龙城夜宴',
    genre: 'fantasy', style: 'dark', intensity: 5, qujia: true,
    charMain: '白翎，半龙血盗贼，狡黠大胆，能听见龙骨低语',
    charSub:  '祁曜，龙城执法官，禁欲冷硬，体内封印着暴走龙魂',
    worldBg:  '蒸汽与魔法共存的龙城，贵族夜宴下隐藏黑市献祭',
    plotCore: '白翎潜入夜宴偷取龙骨钥匙，被祁曜当场擒获。为了阻止龙魂暴走，两人不得不签下共感契约，白天互相追捕，夜里共同潜入禁区。真相揭开时，他们必须决定谁来承担龙魂反噬',
    chTotal: 14, chWords: 1500
  },
  {
    title: '修仙界第一舔狗',
    genre: 'xianxia', style: 'humor', intensity: 2, qujia: false,
    charMain: '谢玄，万年老好人，摆烂修仙界第一，但他的金手指是"被人记住就涨修为"',
    charSub:  '凌霄宗宗主，仙界公认的高冷道祖，唯一一个记不住谢玄的人',
    worldBg:  '修仙大陆，门派林立，飞升路上遍地坑货',
    plotCore: '谢玄靠着"被人记住涨修为"的外挂一路摆到金丹，却在遇见凌霄宗主时系统报错：此人有免疫特效，无法被记住。偏偏这是谢玄唯一想让其记住的人。一个努力刷存在感，一个总是转眼就忘，最终发现"忘记"的背后另有隐情',
    chTotal: 20, chWords: 1500
  },
  {
    title: '天道他偏爱反派',
    genre: 'xianxia', style: 'dark', intensity: 4, qujia: true,
    charMain: '苍夜，被剧情认定为"必死反派"，但偏偏不肯按剧本走',
    charSub:  '天道意志的代行者，负责维护剧情走向，却开始对这个不服管的反派产生异常',
    worldBg:  '自带剧情逻辑的修仙世界，有人知道自己身处小说，有人不知道',
    plotCore: '苍夜发现自己是本命反派，按剧情会在第七十回死于主角之手。他决定逆天改命，每一步都与命运拔河。而负责"纠偏"的天道代行者，原本只是来杀人的，却在一次次干预中产生了不该有的犹豫',
    chTotal: 15, chWords: 1500
  },

  // ── 恐怖 / 灵异 ──────────────────────────────────
  {
    title: '无尽列车13号',
    genre: 'horror', style: 'dark', intensity: 5, qujia: true,
    charMain: '程晚，都市怪谈主播，胆大嘴硬，真实身份是驱邪家族末裔',
    charSub:  '谢临，失踪多年的前搭档，似人非人，记忆残缺',
    worldBg:  '午夜才会出现的13号列车，车厢连接不同噩梦场景',
    plotCore: '程晚追查粉丝失踪案，意外登上13号列车并重逢谢临。每站都要以记忆与代价换生路，二人在惊悚试炼中揭开当年真相，也被迫面对扭曲却无法割舍的羁绊',
    chTotal: 10, chWords: 1500
  },
  {
    title: '午夜医院B13',
    genre: 'horror', style: 'dark', intensity: 5, qujia: true,
    charMain: '姜眠，急诊科医生，冷静果决，能看见濒死者的残影',
    charSub:  '陆执，法医，毒舌克制，身体却在逐渐失去体温',
    worldBg:  '老城区百年医院，废弃B13病区在午夜后会重新亮灯',
    plotCore: '接连发生"死者回诊"事件，姜眠与陆执追查到B13病区。每进入一次，现实时间就被偷走一小时。两人在恐怖真相逼近中相互拯救，也逐步发现陆执可能本就不属于活人世界',
    chTotal: 10, chWords: 1500
  },

  // ── 都市 / 现代 ──────────────────────────────────
  {
    title: '荒漠直播求生局',
    genre: 'urban', style: 'sensual', intensity: 4, qujia: false,
    charMain: '阮乔，户外博主，乐观狠劲并存，镜头感极强',
    charSub:  '盛野，前特战队员，寡言沉稳，受雇保护节目组',
    worldBg:  '国际真人秀在无人荒漠直播，观众打赏可实时触发任务',
    plotCore: '节目从竞技变成猎杀，赞助方暗中下注嘉宾生死。阮乔与盛野在极限环境中结盟，既要活下去又要反制幕后黑手。直播镜头外，他们的关系也在生死交界处迅速发酵',
    chTotal: 11, chWords: 1500
  },
  {
    title: '公司你好我要离职',
    genre: 'urban', style: 'humor', intensity: 2, qujia: false,
    charMain: '林倦，职场老油条，摸鱼十年，最大愿望是安静地提桶跑路',
    charSub:  '方洲，空降新总监，精英人设，正在以极快速度崩塌',
    worldBg:  '当代互联网大厂，打卡、KPI、周报、团建，职场众生相',
    plotCore: '林倦递交离职申请的当天，方洲空降成为她的新上级，以"留下来带我熟悉业务"为条件给她涨薪三成。本是各取所需的交易，却在一次次加班和出差中失了控。两个本来要各奔东西的人，开始反复确认一件事：离职之后还会不会再见',
    chTotal: 12, chWords: 1500
  }

];
