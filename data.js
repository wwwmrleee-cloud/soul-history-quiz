/* 趣味人格测试数据：《测测你的灵魂对应哪位中国历史人物》
 * 纯娱乐，非心理或命运判断。
 */
(function (global) {
  "use strict";

  var DIMENSIONS = [
    "strategy",
    "ambition",
    "literary",
    "poetic",
    "martial",
    "reclusion",
    "chivalry",
    "resilience",
    "openness",
    "independence",
    "leadership",
    "caution"
  ];

  var CHARACTERS = [
    {
      id: "zhuge",
      name: "诸葛亮",
      type: "谋士",
      typeLabel: "旷世谋士",
      tagline: "大事从来不靠运气做成。",
      traits: "思虑周密，先想后动；责任心极强，一旦答应便会做到底。看起来冷静，其实把每一步都放在心上，也因此偶尔把自己逼得太紧。",
      reason: "你作答时更倾向把局面看清楚再出手，愿意为长远结果做准备，也习惯把责任揽到自己肩上。这种「先谋后动、事事有交代」的节奏，和卧龙先生很像。",
      strength: "在别人还在慌的时候，你已经开始拆问题。你不是最吵的那个，却常常是最后把事情圆上的人。",
      easter: "你的朋友大概经常说「有你在我就放心了」，然后不知不觉把所有难题都丢了过来。下次记得，锦囊也可以留给自己。",
      profile: {
        strategy: 10, caution: 10, resilience: 8, literary: 6, leadership: 5,
        ambition: 3, martial: 3, chivalry: 4, openness: 2, independence: 3,
        reclusion: 2, poetic: 3
      }
    },
    {
      id: "zhangliang",
      name: "张良",
      type: "谋士",
      typeLabel: "通透谋士",
      tagline: "最难的不是赢，是知道何时离场。",
      reason: "你既有看透局势的眼光，又不愿意被名利绑死。你愿意进入漩涡把事情做成，却也清楚什么时候该退一步，把生活还给自己。",
      traits: "聪明而不外露，进退有度。善于在复杂关系里找到那条最省力也最有效的路，同时对「停在高处」保持警惕。",
      strength: "你很少把聪明用在逞能上，而用在选择上。这种「知道自己不必出现在每一场热闹里」的判断力，会让你走得更远，也更稳。",
      easter: "别人还在庆功宴上推杯换盏，你已经在想明天的去处。不是扫兴，是你的灵魂里藏着一张及时的退场票。",
      profile: {
        strategy: 10, reclusion: 10, caution: 8, independence: 8, literary: 5,
        openness: 4, poetic: 4, resilience: 5, leadership: 3, chivalry: 3,
        ambition: 2, martial: 2
      }
    },
    {
      id: "caocao",
      name: "曹操",
      type: "帝王",
      typeLabel: "乱世掌局者",
      tagline: "局面再乱，你也习惯先伸手去改。",
      traits: "行动力强，讲求实效，敢做决定也敢担结果。对人才和机会都很敏锐，不喜欢空谈，也不太愿意把命运交给别人安排。",
      reason: "你的选择里反复出现「把主动权拿回来」：遇事先想怎么破局，重结果，也愿意站到需要拍板的位置上。这种气场，很接近一位不肯坐等时势的掌局者。",
      strength: "你能在混乱中迅速抓住要点，并把人与事重新排布。很多人所说的「魄力」，其实是你早就习惯对现实负责。",
      easter: "你大概既会为一句漂亮话打分，也会在饭桌上把人才悄悄记进心里。是的，你的爱好里可能同时装着诗和局势图。",
      profile: {
        ambition: 10, leadership: 10, strategy: 8, martial: 8, literary: 7,
        openness: 7, poetic: 6, resilience: 5, independence: 5, caution: 3,
        chivalry: 2, reclusion: 0
      }
    },
    {
      id: "wuzetian",
      name: "武则天",
      type: "帝王",
      typeLabel: "破局帝王",
      tagline: "位置不是别人给的，是你自己坐上去的。",
      traits: "极有主见，不接受「你本该如此」的安排。韧性惊人，能在漫长的等待和阻力里把目标一点一点做成。对规则敏感，也敢于改写规则。",
      reason: "你明显更抗拒被角色框住，遇到不公或限制时，第一反应不是退让，而是寻找翻盘的路径。这种「命运可以争」的信念，是破局者的底色。",
      strength: "你能把委屈炼成耐力，把偏见变成燃料。别人眼中的「太有想法」，往往是你提前为自己打开了下一扇门。",
      easter: "你大概从小就对「因为向来都是这样」这类话过敏。如果历史让你填志愿，你写的不会是顺从，而是改卷。",
      profile: {
        ambition: 10, leadership: 10, resilience: 10, independence: 9, strategy: 7,
        caution: 6, literary: 4, martial: 3, openness: 2, chivalry: 2,
        poetic: 2, reclusion: 0
      }
    },
    {
      id: "sushi",
      name: "苏轼",
      type: "文人",
      typeLabel: "旷达文人",
      tagline: "生活把你贬到天涯，你就把天涯过成诗。",
      traits: "心胸开阔，自嘲功力一流，逆境里也能找到一点趣味。兴趣广泛，和人相处松弛，不爱把痛苦反复咀嚼成执念。",
      reason: "你更常选择把事情看开一层：不钻牛角尖，不跟自己过不去，也愿意用幽默和创造把难堪的日子过得像样。这种旷达，是东坡式的生存智慧。",
      strength: "你有一种稀缺的恢复力——不是假装没事，而是真能在低谷里给自己开一桌小灶。朋友们会因为你而觉得，生活还是可以笑着过的。",
      easter: "你很可能是那个能把加班、迟到和黄了的计划写成段子的人。要是东坡有朋友圈，评论区大概会秒回你。",
      profile: {
        openness: 10, literary: 9, resilience: 10, poetic: 6, reclusion: 5,
        independence: 4, chivalry: 4, strategy: 3, leadership: 2, caution: 2,
        ambition: 1, martial: 1
      }
    },
    {
      id: "sima",
      name: "司马迁",
      type: "文人",
      typeLabel: "执笔文人",
      tagline: "就算暂时没人听，你也要把真话写完。",
      traits: "看重真实和原则，能在压力下把一件事做完。外表未必锋利，内心却很难被随便说服。对意义敏感，不愿意过一份只图表面风光的生活。",
      reason: "你的答案里有一种「把该做的事做成」的倔强：可以隐忍，可以独处，却不肯为了轻松而背叛自己认为重要的东西。这很像一位把生命押在书写上的史家。",
      strength: "你有长线注意力。热度过去之后，你还在。这种把委屈转化为作品、把时间转化为分量的能力，会在日后显得特别珍贵。",
      easter: "你的备忘录或笔记里，大概藏着不少「当时没说出口」的句子。对你来说，写下来，往往比当场赢一句话更重要。",
      profile: {
        literary: 10, resilience: 10, independence: 8, chivalry: 7, caution: 6,
        strategy: 5, poetic: 2, reclusion: 3, openness: 1, ambition: 2,
        leadership: 1, martial: 1
      }
    },
    {
      id: "libai",
      name: "李白",
      type: "诗人",
      typeLabel: "浪漫诗人",
      tagline: "你不是来迁就世界的，世界得给你留一轮明月。",
      traits: "豪放、天真、热爱自由，受不了被琐碎和规矩慢慢磨掉锋芒。情绪浓、想像力盛，生活里总想要一点诗意和痛快。",
      reason: "你一次次选择了兴致、远方和不受束缚的表达。比起把人生安排得滴水不漏，你更在乎此刻是否活得像自己。这正是太白最动人的地方。",
      strength: "你能为周围的人把气氛点亮，也能在平凡日子里看见明月。这种把生命过得发光的本事，本身就是一种才华。",
      easter: "你点菜可能比做规划更快，旅行背包里说不定没有攻略，但一定给兴致留了位置。小心月底和诗兴一起到来。",
      profile: {
        poetic: 10, independence: 10, openness: 9, literary: 8, chivalry: 6,
        ambition: 4, reclusion: 3, resilience: 3, leadership: 2, martial: 3,
        strategy: 1, caution: 0
      }
    },
    {
      id: "liqingzhao",
      name: "李清照",
      type: "诗人",
      typeLabel: "婉约诗人",
      tagline: "深情从不是弱点，是你把日子过得认真。",
      traits: "感受力很强，重视情趣与分寸，对美和真感情都认真。表面可以安静，内心的波澜却比谁都清楚。不喜欢被粗糙地对待。",
      reason: "你更常被细微的情绪、关系和氛围牵动，也愿意把生活过得精致而诚实。你不是没有锋芒，只是习惯把锋芒藏在词句和选择里。",
      strength: "你能察觉别人忽略的温度变化，也因此更会珍惜真正对的人和时刻。细腻让你易感，也让你拥有别人学不会的品味与共情。",
      easter: "你大概会对一杯茶的水温、一句话的语气很较真。别人说你想多了，你只是比他们先听到了风声。",
      profile: {
        poetic: 10, literary: 10, independence: 7, resilience: 7, caution: 6,
        reclusion: 4, openness: 3, chivalry: 3, strategy: 2, ambition: 2,
        leadership: 1, martial: 0
      }
    },
    {
      id: "jingke",
      name: "荆轲",
      type: "侠客",
      typeLabel: "义胆侠客",
      tagline: "该出手时，你从不向自己讨价还价。",
      traits: "重承诺，重情义，关键时刻愿意把身段放下、把风险担起来。不爱绕弯子，对「该不该做」比「划不划算」更敏感。",
      reason: "面对选项时，你更容易被「够不够义气、能不能对得起自己」打动，而不是被最安全、最划算的路吸引。这种孤勇，是侠客的签名。",
      strength: "你让身边的人有安全感——不是因为你万能，而是因为他们知道，真到了要紧处，你不会先退。这份可信，比很多技巧都更稀有。",
      easter: "你可能不是天天热血的人，但歌里那句「风萧萧兮」一旦响起来，你的脊背会比别人先直。义气这事，你是认真的。",
      profile: {
        chivalry: 10, martial: 8, independence: 7, resilience: 8, poetic: 4,
        openness: 3, literary: 2, strategy: 2, ambition: 2, reclusion: 2,
        leadership: 2, caution: 1
      }
    },
    {
      id: "weiqing",
      name: "卫青",
      type: "将领",
      typeLabel: "沉稳将领",
      tagline: "功劳可以让出去，事情必须做成。",
      traits: "低调、稳妥、执行力强。不抢风头，却能把任务连着责任一起扛走。善于配合大局，也能承受委屈继续把队伍带好。",
      reason: "你反复选择了务实和克制：少说多做，不把能量花在自我展示上，也愿意为集体结果让出个人风头。这种沉稳，很像一位功高却不自矜的将军。",
      strength: "你是那种「交给你就踏实」的人。因为你不需要聚光灯来启动自己，所以在长途和难局里，往往比更耀眼的人更能走完。",
      easter: "庆功宴上你多半坐得靠后，手机里却是明天的待办。别人问你怎么做到的，你大概只会说：把眼前这件事做好就行。",
      profile: {
        resilience: 10, martial: 9, caution: 8, leadership: 6, strategy: 6,
        chivalry: 6, openness: 3, ambition: 2, independence: 2, reclusion: 2,
        literary: 1, poetic: 1
      }
    },
    {
      id: "hanxin",
      name: "韩信",
      type: "将领",
      typeLabel: "奇谋将领",
      tagline: "能忍一时，是为了后来没人能小看你。",
      traits: "才华出众，自信也深。能在不被理解的日子里忍，骨子里却清楚自己不是平庸之辈。看局势很准，一旦有舞台，就会把能力铺开。",
      reason: "你既能够为了更大的目标忍耐，又不甘于被永远放在角落。你看重才能是否被用对，也相信局面可以靠策略翻过来。这正是韩信式的锋芒。",
      strength: "你有「推迟爆发」的能力。短期看起来像吃亏，长期却常常是在等那一步最关键的棋。当机会来时，你的准备往往比别人更足。",
      easter: "你可能对「大材小用」四个字特别敏感。不是玻璃心，是你的内核里有一张还没完全展开的行军图。",
      profile: {
        martial: 10, strategy: 10, resilience: 8, ambition: 8, independence: 7,
        leadership: 6, chivalry: 5, caution: 3, literary: 2, poetic: 2,
        openness: 2, reclusion: 1
      }
    },
    {
      id: "taoyuanming",
      name: "陶渊明",
      type: "隐士",
      typeLabel: "田园隐士",
      tagline: "不是逃，是把日子过回自己手里。",
      traits: "珍视内心的清净与自由，不喜欢违心应酬。对自然、慢生活和真实的自己很忠诚，宁愿简单，也不愿在不属于自己的局中消耗。",
      reason: "你明显更向往按自己的节奏生活：少一些表演，多一点真实；必要时宁愿退出，也不拿原则换位置。这不是消极，是一种很清醒的选择。",
      strength: "你能识别什么是「看起来重要、其实会掏空你」的事，并及时抽身。在一个人人都赶路的时代，这是一种高级的生存能力。",
      easter: "你的理想周末大概不需要人设，只需要一点阳光、一本书，以及不必回的消息。菊与田园，在现代也可以是阳台和耳机。",
      profile: {
        reclusion: 10, independence: 9, literary: 6, poetic: 7, openness: 6,
        resilience: 5, caution: 4, chivalry: 2, strategy: 2, ambition: 0,
        leadership: 0, martial: 0
      }
    }
  ];


  var QUESTIONS = [
    {
      id: 1,
      text: "难得的周末清晨，你最想怎样开始？",
      options: [
        { text: "先把这周未完成的事理一遍，给自己一张清楚的日程。", scores: { strategy: 3, caution: 2, leadership: 1 } , lean: { zhuge: 2 } },
        { text: "谁也不约，煮茶看书，或去人少的地方走走。", scores: { reclusion: 3, literary: 2, poetic: 1 } , lean: { taoyuanming: 3 } },
        { text: "立刻找朋友出门，天气这么好，不玩可惜。", scores: { openness: 3, chivalry: 2, poetic: 1 } , lean: { libai: 3, sushi: 2 } },
        { text: "给自己安排一件有挑战的事，趁状态好往前推一步。", scores: { ambition: 3, martial: 2, leadership: 1 } , lean: { hanxin: 2, caocao: 1 } }
      ]
    },
    {
      id: 2,
      text: "朋友今晚临时取消约会，你的第一反应更接近哪一种？",
      options: [
        { text: "正好，今晚可以按自己的节奏安安静静待着。", scores: { reclusion: 3, openness: 1, independence: 2 } , lean: { taoyuanming: 3 } },
        { text: "有点失落，但转头就能把这晚过成别的趣味。", scores: { openness: 3, poetic: 2, resilience: 1 } , lean: { sushi: 4 } },
        { text: "先确认对方是不是遇到麻烦，需要的话我可以过去。", scores: { chivalry: 3, caution: 1, resilience: 1 } , lean: { jingke: 3 } },
        { text: "迅速改计划，把今晚变成一次有效率的独处或工作。", scores: { strategy: 2, ambition: 2, caution: 1 } }
      ]
    },
    {
      id: 3,
      text: "如果你的房间只能保留一种气质，你选？",
      options: [
        { text: "窗明几净，物品各有位置，看起来就让人安心。", scores: { caution: 3, strategy: 2, leadership: 1 } },
        { text: "书架和笔墨气息，随手能找到一句喜欢的话。", scores: { literary: 3, poetic: 2, reclusion: 1 } },
        { text: "可以聚会也可以躺平，热闹和松弛都欢迎。", scores: { openness: 3, chivalry: 1, poetic: 1 } },
        { text: "简单就好，少即是多，不需要太多装饰证明自己。", scores: { reclusion: 3, independence: 2, caution: 1 } , lean: { taoyuanming: 3 } }
      ]
    },
    {
      id: 4,
      text: "走到人生分岔口，你通常怎样做决定？",
      options: [
        { text: "把利弊写成清单，预想最坏情况，再选最稳的那条。", scores: { caution: 3, strategy: 3, literary: 1 } , lean: { zhuge: 2, zhangliang: 1 } },
        { text: "先问自己：哪一条走下去，五年后不会后悔。", scores: { independence: 3, ambition: 2, resilience: 1 } , lean: { wuzetian: 2, sima: 1 } },
        { text: "听直觉和眼前的心动，想太多会把热情耗掉。", scores: { poetic: 3, openness: 2, independence: 1 } , lean: { libai: 3, liqingzhao: 1 } },
        { text: "看哪条路能把局面打开，即使难，也值得一试。", scores: { ambition: 3, leadership: 2, martial: 1 } , lean: { caocao: 4 } }
      ]
    },
    {
      id: 5,
      text: "团队里两派争执不下，你会怎么做？",
      options: [
        { text: "先把各方诉求理清，提出一个都能接受的方案。", scores: { strategy: 3, caution: 2, leadership: 1 } , lean: { zhuge: 2 } },
        { text: "该拍板就拍板，拖下去对谁都不好。", scores: { leadership: 3, ambition: 2, martial: 1 } , lean: { caocao: 3 } },
        { text: "站在被忽略的那一边，把不公平的地方说清楚。", scores: { chivalry: 3, independence: 2, literary: 1 } , lean: { jingke: 2, wuzetian: 1, sima: 1 } },
        { text: "不抢着说话，先观察，必要时再补一句关键的。", scores: { caution: 2, reclusion: 2, strategy: 2 } , lean: { zhangliang: 3 } }
      ]
    },
    {
      id: 6,
      text: "你更受不了哪一种日常消耗？",
      options: [
        { text: "无意义的社交和必须配合的场面话。", scores: { reclusion: 3, independence: 2, literary: 1 } , lean: { taoyuanming: 3, zhangliang: 1 } },
        { text: "计划被反复打乱，却没人出来负责。", scores: { caution: 3, strategy: 2, leadership: 1 } },
        { text: "自己明明可以做得更好，却一直没有舞台。", scores: { ambition: 3, martial: 2, resilience: 1 } , lean: { wuzetian: 2, hanxin: 2 } },
        { text: "日子过得太素，一点意趣和浪漫都没有。", scores: { poetic: 3, literary: 2, openness: 1 } , lean: { libai: 2, liqingzhao: 2 } }
      ]
    },
    {
      id: 7,
      text: "加班到很晚的夜里，你更可能怎样安慰自己？",
      options: [
        { text: "再坚持一下，把关键节点做完再睡。", scores: { resilience: 3, ambition: 2, martial: 1 } },
        { text: "打开窗看一眼夜色，给自己一点出神的时间。", scores: { poetic: 3, literary: 2, reclusion: 1 } },
        { text: "跟自己说句风凉话，笑一笑，明天再战。", scores: { openness: 3, resilience: 2, literary: 1 } , lean: { sushi: 3 } },
        { text: "复盘今晚哪里可以更聪明，下次少走弯路。", scores: { strategy: 3, caution: 2, literary: 1 } , lean: { zhuge: 2, zhangliang: 1 } }
      ]
    },
    {
      id: 8,
      text: "朋友向你借一笔对你而言不算小的钱，你倾向于？",
      options: [
        { text: "先问清情况和还款安排，再决定帮到什么程度。", scores: { caution: 3, strategy: 2, leadership: 1 } },
        { text: "只要真有难处，能帮就帮，人情比算计重要。", scores: { chivalry: 3, openness: 2, resilience: 1 } , lean: { jingke: 3 } },
        { text: "愿意帮，但会说清楚边界，避免事后尴尬。", scores: { independence: 2, caution: 2, literary: 1 } },
        { text: "看对方平日为人。靠谱就伸手，不靠谱就委婉拒绝。", scores: { strategy: 2, caution: 2, chivalry: 1 } }
      ]
    },
    {
      id: 9,
      text: "旅行时，你更喜欢哪种方式？",
      options: [
        { text: "攻略做足，路线、住宿、备份方案都想好。", scores: { caution: 3, strategy: 3, leadership: 1 } , lean: { zhuge: 2, weiqing: 1 } },
        { text: "大致有个方向，沿途随兴，遇见什么算什么。", scores: { openness: 3, poetic: 2, independence: 1 } , lean: { libai: 3, sushi: 3 } },
        { text: "专门去安静的地方，少拍照，多感受。", scores: { reclusion: 3, literary: 2, poetic: 1 } , lean: { taoyuanming: 3, liqingzhao: 1 } },
        { text: "想挑战没去过的、有点难度的目的地。", scores: { martial: 3, ambition: 2, independence: 1 } , lean: { hanxin: 2, libai: 1 } }
      ]
    },
    {
      id: 10,
      text: "如果你必须选一个今晚的消遣，你会选？",
      options: [
        { text: "读点东西，或把心里的话写下来。", scores: { literary: 3, reclusion: 2, poetic: 1 } , lean: { sima: 2, liqingzhao: 2 } },
        { text: "看局势、学技能，给自己充电。", scores: { strategy: 3, ambition: 2, literary: 1 } },
        { text: "找人喝酒聊天，把最近的事痛快说完。", scores: { openness: 3, chivalry: 2, poetic: 1 } , lean: { libai: 3, sushi: 2 } },
        { text: "运动或把一件拖了很久的事彻底干掉。", scores: { martial: 3, resilience: 2, ambition: 1 } , lean: { weiqing: 2, hanxin: 1 } }
      ]
    },
    {
      id: 11,
      text: "当众被指出一个小失误，你通常？",
      options: [
        { text: "先承认，再迅速把补救方案说清楚。", scores: { leadership: 3, caution: 2, strategy: 1 } },
        { text: "脸上可能有点热，但会记住，下次不让同样的事发生。", scores: { resilience: 3, literary: 1, caution: 2 } , lean: { sima: 2, weiqing: 1 } },
        { text: "用一句幽默把场面带过去，不必弄得太僵。", scores: { openness: 3, poetic: 1, leadership: 1 } , lean: { sushi: 3 } },
        { text: "如果批评不公，会平静但清楚地为自己辩解。", scores: { independence: 3, chivalry: 2, ambition: 1 } , lean: { hanxin: 2, wuzetian: 1, sima: 1 } }
      ]
    },
    {
      id: 12,
      text: "你理想中的「有成就」更像哪一种？",
      options: [
        { text: "做成一件真正有分量、能留下来的事。", scores: { literary: 3, resilience: 3, ambition: 1 } , lean: { sima: 3, liqingzhao: 1 } },
        { text: "拥有可以拍板和改变局面的位置。", scores: { ambition: 3, leadership: 3, martial: 1 } },
        { text: "活得自由自在，不被评价和位置定义。", scores: { independence: 3, reclusion: 2, poetic: 2 } , lean: { taoyuanming: 2, libai: 2 } },
        { text: "成为别人危难时可以托付的人。", scores: { chivalry: 3, resilience: 2, leadership: 1 } , lean: { jingke: 3, weiqing: 1 } }
      ]
    },
    {
      id: 13,
      text: "一组合作里，你最自然的位置是？",
      options: [
        { text: "在幕后把结构理顺，让每个人知道下一步做什么。", scores: { strategy: 3, caution: 2, literary: 1 } , lean: { zhuge: 2 } },
        { text: "站到前面统筹，对结果负责。", scores: { leadership: 3, ambition: 2, martial: 1 } , lean: { caocao: 2, wuzetian: 1 } },
        { text: "把最难啃的执行部分拿下来，做到交付。", scores: { martial: 3, resilience: 2, chivalry: 1 } , lean: { weiqing: 3, hanxin: 1 } },
        { text: "提供想法和气氛，但不想被流程绑死。", scores: { poetic: 2, openness: 3, independence: 2 } }
      ]
    },
    {
      id: 14,
      text: "遇到怎么解释都说不通的人，你会？",
      options: [
        { text: "停止消耗，把精力收回来做自己的事。", scores: { reclusion: 3, independence: 2, caution: 1 } , lean: { taoyuanming: 2, zhangliang: 1 } },
        { text: "换个策略再试一次，总有切入点。", scores: { strategy: 3, resilience: 2, leadership: 1 } },
        { text: "直说边界，不想耗着，也不想装懂。", scores: { independence: 3, chivalry: 2, openness: 1 } },
        { text: "先笑笑放过，回去再跟懂的人好好说说。", scores: { openness: 3, literary: 1, poetic: 1 } , lean: { sushi: 3 } }
      ]
    },
    {
      id: 15,
      text: "你整理旧物时，最舍不得丢的通常是？",
      options: [
        { text: "记录过心情的本子、信件或照片。", scores: { literary: 3, poetic: 3, reclusion: 1 } , lean: { liqingzhao: 3, sima: 1 } },
        { text: "证明自己走过某段路的奖状、作品或成果。", scores: { ambition: 2, resilience: 3, literary: 1 } , lean: { sima: 2, hanxin: 2 } },
        { text: "朋友送的、有故事的小东西。", scores: { chivalry: 3, openness: 2, poetic: 1 } },
        { text: "还可能用得上的工具和资料，丢了会不踏实。", scores: { caution: 3, strategy: 2, martial: 1 } }
      ]
    },
    {
      id: 16,
      text: "如果必须在「被需要」和「被理解」里选一个，你更想？",
      options: [
        { text: "被需要。能发挥作用，比被看懂更实在。", scores: { chivalry: 2, leadership: 2, martial: 2 } },
        { text: "被理解。有人懂你的心思，比被依靠更重要。", scores: { literary: 3, poetic: 2, independence: 1 } , lean: { liqingzhao: 3, sima: 1 } },
        { text: "都可以少一点，我想先把自己过好。", scores: { reclusion: 3, independence: 3, openness: 1 } , lean: { taoyuanming: 3 } },
        { text: "两者都要争取，位置和人心可以一起经营。", scores: { ambition: 3, leadership: 2, strategy: 2 } , lean: { caocao: 4 } }
      ]
    },
    {
      id: 17,
      text: "面对一个明显不公平的规则，你更可能？",
      options: [
        { text: "先研究规则本身，找可以撬动的缺口。", scores: { strategy: 3, caution: 2, ambition: 1 } },
        { text: "公开质疑，该反对就要发出声音。", scores: { independence: 3, leadership: 2, chivalry: 2 } , lean: { wuzetian: 3, jingke: 1 } },
        { text: "能避开就避开，不必为不值得的体系消耗自己。", scores: { reclusion: 3, independence: 2, caution: 1 } , lean: { zhangliang: 2, taoyuanming: 1 } },
        { text: "先按规则把该做的做到极致，再等待或创造改写的时机。", scores: { resilience: 3, ambition: 2, strategy: 1 } , lean: { sima: 2, hanxin: 2, wuzetian: 1 } }
      ]
    },
    {
      id: 18,
      text: "你和很久没见的朋友吃饭，你更享受哪一段？",
      options: [
        { text: "把彼此这些年的变化慢慢说清楚。", scores: { literary: 2, poetic: 2, chivalry: 2 } },
        { text: "笑闹、回忆、点很多菜，把气氛搞得很亮。", scores: { openness: 3, poetic: 2, chivalry: 1 } },
        { text: "听对方遇到的难题，一起把思路理一理。", scores: { strategy: 2, chivalry: 2, caution: 1 } },
        { text: "饭后一起散步，不必一直说话也舒服。", scores: { reclusion: 3, literary: 1, openness: 1 } }
      ]
    },
    {
      id: 19,
      text: "一个机会来了，但时机不算完美，你会？",
      options: [
        { text: "先上手，边做边把条件补齐。", scores: { ambition: 3, martial: 2, leadership: 2 } , lean: { caocao: 3 } },
        { text: "再观察一阵，关键信息不足时不盲冲。", scores: { caution: 3, strategy: 3, reclusion: 1 } , lean: { zhangliang: 2, zhuge: 1 } },
        { text: "问自己这件事是不是真的想要，不是热闹就上。", scores: { independence: 3, reclusion: 2, literary: 1 } },
        { text: "若对得起自己的原则，就算难也会赴约。", scores: { chivalry: 3, resilience: 2, poetic: 1 } , lean: { jingke: 3 } }
      ]
    },
    {
      id: 20,
      text: "心情低落时，什么最能把你拉回来一点？",
      options: [
        { text: "把情绪写成字，或听一首刚好说中的作品。", scores: { poetic: 3, literary: 3, reclusion: 1 } , lean: { liqingzhao: 3, sima: 1 } },
        { text: "去做一件能完成的小事，让控制感回来。", scores: { martial: 2, resilience: 3, caution: 1 } , lean: { weiqing: 2, hanxin: 1 } },
        { text: "找信得过的人说说，或干脆大吃一顿。", scores: { openness: 3, chivalry: 2, poetic: 1 } },
        { text: "独自待一会儿，等潮水自己退。", scores: { reclusion: 3, independence: 2, resilience: 1 } , lean: { taoyuanming: 2, liqingzhao: 1 } }
      ]
    },
    {
      id: 21,
      text: "如果突然有一个月完全自由，你最想？",
      options: [
        { text: "去一个事先没安排满的地方，让日子慢下来。", scores: { reclusion: 3, poetic: 2, openness: 2 } , lean: { taoyuanming: 2, libai: 1 } },
        { text: "集中做成一件一直想完成的作品或目标。", scores: { ambition: 3, literary: 2, resilience: 2 } , lean: { sima: 2, liqingzhao: 1 } },
        { text: "把平时来不及见的人见一遍，好好聊。", scores: { chivalry: 3, openness: 2, literary: 1 } },
        { text: "系统学习一项能打开下一阶段的能力。", scores: { strategy: 3, ambition: 2, caution: 1 } }
      ]
    },
    {
      id: 22,
      text: "别人夸你时，哪一句你听了会真正高兴？",
      options: [
        { text: "「有你在，事情就稳了。」", scores: { caution: 2, chivalry: 2, leadership: 2 } , lean: { weiqing: 3, zhuge: 1 } },
        { text: "「你看问题总是比别人深一层。」", scores: { strategy: 3, literary: 2, caution: 1 }, lean: { sima: 2, zhuge: 1, zhangliang: 1 } },
        { text: "「跟你在一起，日子会变得有意思。」", scores: { openness: 3, poetic: 2, literary: 1 } , lean: { sushi: 3, libai: 1 }},
        { text: "「你比自己以为的更有力量。」", scores: { resilience: 3, ambition: 2, independence: 1 } , lean: { hanxin: 2, wuzetian: 1 } }
      ]
    },
    {
      id: 23,
      text: "面对「现在忍一下，以后会更好」这种说法，你觉得？",
      options: [
        { text: "可以忍，但必须看得到路径，不能空等。", scores: { strategy: 3, ambition: 2, caution: 1 } },
        { text: "若是为了配得上更大的舞台，我可以忍很久。", scores: { resilience: 3, ambition: 3, martial: 1 } , lean: { hanxin: 3, sima: 1 } },
        { text: "不太吃这套。当下过得不像自己，以后也很难补回来。", scores: { independence: 3, poetic: 2, reclusion: 2 } },
        { text: "能接受短痛，不能接受没完没了地委屈自己。", scores: { openness: 2, chivalry: 2, independence: 2 } }
      ]
    },
    {
      id: 24,
      text: "在聚会上，你通常是怎样的存在？",
      options: [
        { text: "不一定最热闹，但常在关键处接话、照顾场子。", scores: { leadership: 2, caution: 2, chivalry: 2 } },
        { text: "谈兴来了可以很放，话少的时候也不勉强。", scores: { openness: 3, poetic: 1, independence: 2 } , lean: { sushi: 4 } },
        { text: "更喜欢和一两个人深聊，大场子容易累。", scores: { reclusion: 3, literary: 2, poetic: 1 } , lean: { liqingzhao: 2, taoyuanming: 1, sima: 1 } },
        { text: "观察每个人的位置和关系，心里有一张图。", scores: { strategy: 3, caution: 2, leadership: 1 } , lean: { zhangliang: 2, caocao: 1 } }
      ]
    },
    {
      id: 25,
      text: "你怎样看待「出风头」这件事？",
      options: [
        { text: "不必抢，把事做成，光自然会来。", scores: { caution: 2, resilience: 2, martial: 2 } , lean: { weiqing: 3 } },
        { text: "该亮相时就要亮，否则机会会落到别人手里。", scores: { ambition: 3, leadership: 2, independence: 1 } , lean: { hanxin: 3, wuzetian: 1, caocao: 1 } },
        { text: "我更想被少数懂的人看见，而不是被所有人围观。", scores: { literary: 2, reclusion: 2, poetic: 2 } },
        { text: "出不出风头无所谓，别让我为了表演而活。", scores: { independence: 3, reclusion: 2, openness: 1 } , lean: { taoyuanming: 2, zhangliang: 1 } }
      ]
    },
    {
      id: 26,
      text: "答应别人的事做起来比预想困难，你会？",
      options: [
        { text: "尽量兑现。既然应了，就要对得起这句话。", scores: { chivalry: 3, resilience: 3, martial: 1 } , lean: { jingke: 3, zhuge: 1 } },
        { text: "及时说明难度，一起调整方案，而不是硬撑到翻车。", scores: { strategy: 3, caution: 2, leadership: 1 } },
        { text: "会做完，同时告诫自己以后承诺前要更谨慎。", scores: { caution: 3, resilience: 2, literary: 1 } , lean: { sima: 3, zhuge: 1 } },
        { text: "若发现这件事会严重消耗自己，会诚实重新协商。", scores: { independence: 3, reclusion: 2, openness: 1 } }
      ]
    },
    {
      id: 27,
      text: "你挑选电影或书时，更被什么吸引？",
      options: [
        { text: "权谋与抉择，看人如何在乱局里落子。", scores: { strategy: 3, ambition: 2, leadership: 1 } , lean: { caocao: 3, hanxin: 1 } },
        { text: "文字或画面本身的美，以及那些说不清的情绪。", scores: { poetic: 3, literary: 3, reclusion: 1 } , lean: { liqingzhao: 3, libai: 1 } },
        { text: "一个普通人怎样把不可能做成。", scores: { resilience: 3, martial: 2, ambition: 1 } },
        { text: "轻松有趣、看完会觉得生活还挺可爱。", scores: { openness: 3, literary: 1, poetic: 1 } , lean: { sushi: 3 } }
      ]
    },
    {
      id: 28,
      text: "如果领导/长辈的安排让你觉得别扭，你更可能？",
      options: [
        { text: "先做，再找合适时机提出更合理的方法。", scores: { caution: 3, strategy: 2, resilience: 1 } , lean: { weiqing: 2, zhangliang: 1 } },
        { text: "当场礼貌但明确地表达不同意见。", scores: { independence: 3, leadership: 2, chivalry: 1 } , lean: { wuzetian: 2, jingke: 1 } },
        { text: "能按自己的方式悄悄把结果做好，就不硬碰。", scores: { strategy: 2, independence: 2, martial: 1 } },
        { text: "若长期违背自己的原则，会认真考虑离开。", scores: { reclusion: 3, independence: 3, literary: 1 } , lean: { taoyuanming: 3, zhangliang: 1 } }
      ]
    },
    {
      id: 29,
      text: "下雨的下午，你最自然的状态是？",
      options: [
        { text: "听雨发呆，觉得这样的天气本身就值得。", scores: { poetic: 3, reclusion: 2, literary: 2 } , lean: { liqingzhao: 3, taoyuanming: 1 } },
        { text: "正好可以在家把想做的事推进一截。", scores: { ambition: 2, caution: 2, martial: 2 } },
        { text: "拉上人出门，雨天走走也别有意思。", scores: { openness: 3, poetic: 2, chivalry: 1 } , lean: { libai: 2, sushi: 3 } },
        { text: "把账、计划或思路重新整理一遍。", scores: { strategy: 3, caution: 2, literary: 1 } }
      ]
    },
    {
      id: 30,
      text: "你更认同哪一句对自己的提醒？",
      options: [
        { text: "先把布局看清，再把力气用在刀刃上。", scores: { strategy: 3, caution: 2, leadership: 1 } , lean: { zhuge: 2, zhangliang: 1 } },
        { text: "世界不会自动让路，你要自己走上去。", scores: { ambition: 3, leadership: 2, independence: 2 } , lean: { wuzetian: 3, caocao: 1 } },
        { text: "别为了不属于你的生活，把心里的田园荒掉。", scores: { reclusion: 3, poetic: 2, literary: 2 } , lean: { taoyuanming: 3 } },
        { text: "可以柔软，但不能在该挺身的时候退缩。", scores: { chivalry: 3, resilience: 2, martial: 1 } , lean: { jingke: 3 } }
      ]
    },
    {
      id: 31,
      text: "当朋友之间发生矛盾，双方都来找你时，你会？",
      options: [
        { text: "两边听完，帮他们找到都能下的台阶。", scores: { strategy: 3, caution: 2, literary: 1 } },
        { text: "谁有理就支持谁，不和稀泥。", scores: { chivalry: 3, independence: 2, leadership: 1 } },
        { text: "先安抚情绪，事情可以稍后再说。", scores: { openness: 2, poetic: 2, chivalry: 2 } },
        { text: "不太想当裁判，建议他们直接沟通。", scores: { reclusion: 3, independence: 2, caution: 1 } , lean: { taoyuanming: 2 } }
      ]
    },
    {
      id: 32,
      text: "你对「计划」的态度更接近？",
      options: [
        { text: "没有计划会不安，重要的事必须有预案。", scores: { caution: 3, strategy: 3, leadership: 1 } , lean: { zhuge: 2 } },
        { text: "大方向要有，细节可以交给临场。", scores: { strategy: 2, openness: 2, leadership: 1 } },
        { text: "计划太多会把生活过成任务清单，我抗拒。", scores: { openness: 3, poetic: 2, independence: 2 } , lean: { libai: 3, taoyuanming: 1 } },
        { text: "计划是为了自由：把该做的安排好，才有空留给自己。", scores: { reclusion: 2, caution: 2, literary: 1 } , lean: { zhangliang: 2, taoyuanming: 1 } }
      ]
    },
    {
      id: 33,
      text: "如果事业突然做成功了，下一步你更想？",
      options: [
        { text: "乘势把格局再做大，不让机会冷却。", scores: { ambition: 3, leadership: 3, martial: 1 } , lean: { caocao: 4 } },
        { text: "把成果安顿好，然后给自己留一点抽身的空间。", scores: { reclusion: 3, strategy: 2, caution: 2 } , lean: { zhangliang: 3, taoyuanming: 1 } },
        { text: "把这件事写好、记好，让它成为真正留下的东西。", scores: { literary: 3, resilience: 2, poetic: 1 } , lean: { sima: 3 } },
        { text: "跟重要的人分享，再决定要不要继续加油。", scores: { openness: 3, chivalry: 2, poetic: 1 } }
      ]
    },
    {
      id: 34,
      text: "你更难原谅自己的是哪一件？",
      options: [
        { text: "在朋友需要时，因为犹豫而缺席。", scores: { chivalry: 3, resilience: 2, poetic: 1 } , lean: { jingke: 3 } },
        { text: "因为准备不足，把能做成的事搞砸。", scores: { caution: 3, strategy: 2, ambition: 1 } , lean: { zhuge: 2, weiqing: 1 } },
        { text: "为了讨好别人，说出或做出不像自己的事。", scores: { independence: 3, literary: 2, reclusion: 1 } , lean: { sima: 2, taoyuanming: 1, wuzetian: 1 } },
        { text: "明明有机会，却因为害怕而没迈出那一步。", scores: { ambition: 3, martial: 2, leadership: 1 } , lean: { wuzetian: 2, hanxin: 1 } }
      ]
    },
    {
      id: 35,
      text: "逛博物馆或古迹时，你更容易停在哪里？",
      options: [
        { text: "那些改变了局势的人物和决策。", scores: { strategy: 2, leadership: 2, ambition: 2 } , lean: { caocao: 2, wuzetian: 1 } },
        { text: "诗词、信件、器物上留下来的生活痕迹。", scores: { literary: 3, poetic: 3, reclusion: 1 } , lean: { liqingzhao: 3, sima: 1 } },
        { text: "战争与远征的部分，想象当时的压力和选择。", scores: { martial: 3, resilience: 2, strategy: 1 } , lean: { hanxin: 2, weiqing: 2 } },
        { text: "园子、窗景和可以坐下来发呆的角落。", scores: { reclusion: 3, poetic: 2, openness: 1 } , lean: { taoyuanming: 3 } }
      ]
    },
    {
      id: 36,
      text: "一个项目眼看要失败，团队士气很低，你会？",
      options: [
        { text: "重新拆解问题，找出还能挽救的那一块。", scores: { strategy: 3, caution: 2, leadership: 1 } , lean: { zhuge: 2, hanxin: 1 } },
        { text: "站出来稳住大家，把下一步的命令说清楚。", scores: { leadership: 3, martial: 2, ambition: 1 } , lean: { caocao: 3, weiqing: 1 } },
        { text: "主动把最脏最累的部分接下来。", scores: { chivalry: 3, martial: 2, resilience: 2 } , lean: { jingke: 2, weiqing: 2 } },
        { text: "用轻松一点的语气让人先缓过气，再一起看怎么办。", scores: { openness: 3, literary: 1, leadership: 1 } , lean: { sushi: 3 } }
      ]
    },
    {
      id: 37,
      text: "关于「孤独」，你更真实的感受是？",
      options: [
        { text: "孤独是充电。很多想法只有自己待着才会来。", scores: { reclusion: 3, literary: 2, independence: 2 } },
        { text: "偶尔可以，但长期无人分享会觉得空。", scores: { openness: 2, poetic: 2, chivalry: 2 } },
        { text: "不怕一个人，怕的是没有理解自己的人。", scores: { literary: 3, poetic: 2, independence: 1 } , lean: { sima: 2, liqingzhao: 2 } },
        { text: "与其陷在情绪里，不如把孤独变成训练和准备。", scores: { resilience: 3, ambition: 2, martial: 1 } , lean: { hanxin: 3, sima: 1 } }
      ]
    },
    {
      id: 38,
      text: "如果可以送给自己一种能力，你选？",
      options: [
        { text: "看穿复杂局面、提前布局的眼光。", scores: { strategy: 3, caution: 2, leadership: 1 } },
        { text: "无论把你放在何处，都能活得有滋有味。", scores: { openness: 3, poetic: 2, resilience: 2 } , lean: { sushi: 4 } },
        { text: "在关键时刻挺身，并且把承诺守住的勇气。", scores: { chivalry: 3, martial: 2, resilience: 1 } , lean: { jingke: 3 } },
        { text: "让命运改道的决心和手段。", scores: { ambition: 3, leadership: 3, independence: 1 } , lean: { wuzetian: 3 } }
      ]
    },
    {
      id: 39,
      text: "你更希望别人怎样记住你？",
      options: [
        { text: "一个把事情做成、而且让人安心的人。", scores: { caution: 2, leadership: 2, martial: 2 } , lean: { weiqing: 3, zhuge: 1 } },
        { text: "一个活得漂亮、留下过句子和温度的人。", scores: { poetic: 3, literary: 3, openness: 1 } , lean: { liqingzhao: 2, libai: 2, sushi: 3 } },
        { text: "一个在要紧关头不曾辜负信任的人。", scores: { chivalry: 3, resilience: 2, independence: 1 } , lean: { jingke: 3 } },
        { text: "一个按自己的方式过完一生的人。", scores: { independence: 3, reclusion: 3, literary: 1 } , lean: { taoyuanming: 3, libai: 1 } }
      ]
    },
    {
      id: 40,
      text: "测试到最后一题了。若灵魂可以选一种去处，你更向往？",
      options: [
        { text: "一座需要运筹、也能改变许多人命运的大厅。", scores: { strategy: 3, leadership: 2, ambition: 2 } },
        { text: "一片不用争抢的田园，晨昏都由自己安排。", scores: { reclusion: 3, poetic: 2, literary: 2 } , lean: { taoyuanming: 3 } },
        { text: "一条可以远行的路，酒、风和未知都在前面。", scores: { poetic: 3, independence: 2, openness: 2 } , lean: { libai: 3 } },
        { text: "一个还能为他人拔剑、也不辱使命的岗位。", scores: { chivalry: 3, martial: 2, resilience: 2 } , lean: { jingke: 3 } }
      ]
    }
  ];

  function emptyScores() {
    var s = {};
    for (var i = 0; i < DIMENSIONS.length; i++) s[DIMENSIONS[i]] = 0;
    return s;
  }

  function addScores(target, delta) {
    if (!delta) return target;
    for (var k in delta) {
      if (Object.prototype.hasOwnProperty.call(delta, k)) {
        target[k] = (target[k] || 0) + delta[k];
      }
    }
    return target;
  }

  function dot(a, b) {
    var sum = 0;
    for (var i = 0; i < DIMENSIONS.length; i++) {
      var k = DIMENSIONS[i];
      sum += (a[k] || 0) * (b[k] || 0);
    }
    return sum;
  }

  function magnitude(v) {
    var sum = 0;
    for (var i = 0; i < DIMENSIONS.length; i++) {
      var x = v[DIMENSIONS[i]] || 0;
      sum += x * x;
    }
    return Math.sqrt(sum) || 1;
  }

  function topKeys(profile, n) {
    return DIMENSIONS.slice().sort(function (a, b) {
      return (profile[b] || 0) - (profile[a] || 0);
    }).slice(0, n);
  }

  function scoreCharacter(user, character, leans) {
    // 以人物画像为权重，计算作答向量的加权均值，避免「画像更全面」的人在随机作答中稳赢。
    var wsum = 0;
    var psum = 0;
    var i, k, p, u;
    for (i = 0; i < DIMENSIONS.length; i++) {
      k = DIMENSIONS[i];
      p = character.profile[k] || 0;
      u = user[k] || 0;
      wsum += u * p;
      psum += p;
    }
    var weighted = wsum / (psum || 1);

    // 峰值契合：作答能量是否集中在该人物最显著的几个维度上。
    var userTotal = 0;
    for (i = 0; i < DIMENSIONS.length; i++) userTotal += user[DIMENSIONS[i]] || 0;
    var keys = topKeys(character.profile, 4);
    var peakUser = 0;
    for (i = 0; i < keys.length; i++) peakUser += user[keys[i]] || 0;
    var peak = peakUser / (userTotal || 1);

    // 低配维度惩罚：若人物明显不具有的特质在作答中很高，则拉开与相近人物的距离。
    var mismatch = 0;
    var mismatchW = 0;
    for (i = 0; i < DIMENSIONS.length; i++) {
      k = DIMENSIONS[i];
      p = character.profile[k] || 0;
      if (p <= 3) {
        mismatch += (user[k] || 0) * (4 - p);
        mismatchW += (4 - p);
      }
    }
    var penalty = mismatch / (mismatchW || 1);

    var lean = (leans && leans[character.id]) || 0;
    return weighted * 18 + peak * 36 + lean * 2.4 - penalty * 4.5;
  }

  function rankCharacters(userOrResult, leans) {
    var user = userOrResult;
    var leanMap = leans || {};
    if (userOrResult && userOrResult.user) {
      user = userOrResult.user;
      leanMap = userOrResult.leans || {};
    }
    var ranked = CHARACTERS.map(function (c) {
      return { character: c, score: scoreCharacter(user, c, leanMap) };
    });
    ranked.sort(function (a, b) {
      if (b.score !== a.score) return b.score - a.score;
      return a.character.name.localeCompare(b.character.name, "zh");
    });
    return ranked;
  }

  function scoresFromAnswers(answerIndexes) {
    var user = emptyScores();
    var leans = {};
    for (var i = 0; i < QUESTIONS.length; i++) {
      var idx = answerIndexes[i];
      if (idx == null || idx < 0) continue;
      var opt = QUESTIONS[i].options[idx];
      if (opt) {
        addScores(user, opt.scores);
        if (opt.lean) addScores(leans, opt.lean);
      }
    }
    return { user: user, leans: leans };
  }

  global.SOUL_QUIZ = {
    DIMENSIONS: DIMENSIONS,
    CHARACTERS: CHARACTERS,
    QUESTIONS: QUESTIONS,
    emptyScores: emptyScores,
    addScores: addScores,
    scoresFromAnswers: scoresFromAnswers,
    rankCharacters: rankCharacters,
    scoreCharacter: scoreCharacter
  };
})(typeof window !== "undefined" ? window : globalThis);
