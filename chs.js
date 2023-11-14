/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "Level": "等级",
    "Level Cap": "等级上限",
    "Join our": "加入我们的",
    "Magical Dmg": "魔法伤害",
    "Skill Points": "技能点",
    "Spell Dmg": "法术伤害",
    "Name": "名称",
    "Move Speed": "移动速度",
    "Monetization Changes:": "盈利变化：",
    "Most health, base damage, create, and expend nodes have been buffed": "大多数生命值、基础伤害、创造和扩展节点都已得到增强",
    "Nerve Damage": "神经损伤",
    "Damage dealt": "造成伤害",
    "Create Dmg": "创造伤害",
    "Crit Damage": "暴击伤害",
    "Crit Chance": "暴击几率",
    "Damage/sec": "伤害/秒",
    "Defense": "防御",
    "Defense Pen": "防御笔",
    "Deference": "尊重",
    "Energy Cage": "能量笼",
    "Enhancements:": "增强：",
    "Get ready to theorycraft your way to victory as you\n                explore the world of Solus. This is an idle/incremental game of min/maxing and ensuring your character\n                has the strongest possible build as you explore the world. Unlock points on the skill tree, then use\n                them to earn Quiddity and purchase new abilities.": "探索 Solus 的世界时，准备好用理论设计你的胜利之路。 这是一款最小/最大的闲置/增量游戏，并确保您的角色在探索世界时拥有尽可能强大的构建。 解锁技能树上的点数，然后使用它们来赚取 Quiddity 并购买新的能力。",
    "Attack Dmg": "攻击伤害",
    "Attack Dmg dealt": "造成的攻击伤害",
    "Attack dmg dealt": "造成的攻击伤害",
    "Attack Dmg received": "受到的攻击伤害",
    "Attack dmg received": "受到的攻击伤害",
    "Attack Speed": "攻击速度",
    "Beast Cleave": "野兽劈砍",
    "Bark Skin": "树皮",
    "Bugfixes:": "修复Bug：",
    "Be sure to right-click and PAN the skill tree\n                around. Mouse over (or tap on mobile) everything you see - there are often tooltips waiting to help you\n                out!": "请务必右键单击并平移技能树\n。 将鼠标悬停（或在移动设备上点击）您看到的所有内容 - 通常会有工具提示等待帮助您！\n！",
    "Base Damage": "基础伤害",
    "Welcome to": "欢迎来到",
    "What is your name?": "你叫什么名字？",
    "Winter Wisp": "冬之小精灵",
    "You can now purchase ZOOMIES in the Quiddity Shop!": "您现在可以在 Quiddity 商店购买 ZOOMIES！",
    "You no longer lose Quiddity when Energizing, and you still receive the full Energize effect": "充能时你不再失去 Quiddity，并且你仍然可以获得完整的充能效果",
    "The Tiny Theorycrafter": "小小理论创造者",
    "Prestige!": "声望!",
    "Prestige Rank": "声望等级",
    "Light!": "光!",
    "[World #": "[世界 #",
    "A brand new orb:": "一个全新的宝珠：",
    "Abilities used": "使用的能力",
    "Ability Balance:": "能力平衡：",
    "Ability Logic:": "能力逻辑：",
    "Name - Stat - Added - Increased - More": "名称\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t-\t\t\t\t\t\t\t\t\t\t\t\t\t统计\t\t\t\t-\t\t\t\t\t\t\t\t\t\t\t添加\t\t\t\t\t-\t\t\t\t\t\t\t\t\t\t增加\t\t\t\t\t\t\t\t\t-\t\t\t\t更多\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
    "Import Character": "导入角色",
    "Exp Bonuses": "经验奖励",
    "EXP/sec": "经验/秒",
    "Expend Dmg": "消耗伤害",
    "Experience": "经验值",
    "Pre-Launch!": "预启动！",
    "Export\n                                    Character": "导出角色",
    "Play": "开始",
    "Resist": "抵抗",
    "Quiddity/sec": "Quiddity/秒",
    "Quiddity/min": "Quiddity/分钟",
    "Quid Transfer": "Quid 转移",
    "Ring of Fire": "火焰之戒",
    "Spell dmg dealt": "造成的法术伤害",
    "Spell dmg received": "受到的法术伤害",
    "Spiritfire": "精神之火",
    "Spiritual Dmg": "精神伤害",
    "Strength": "力量",
    "Submit": "提交",
    "Thunderbolt": "霹雳",
    "Sword Dance": "剑舞",
    "Time spent walking": "走路所花费的时间",
    "Time spent fighting": "战斗所花费的时间",
    "Transforming Light": "变换光",
    "Evasion": "闪避",
    "Vital Destruction": "致命毁灭",
    "Equalizer": "均衡器",
    "Ethereal Fist": "空灵之拳",
    "Frozen Earth": "冻土",
    "Frozen Execution": "冷冻处决",
    "Furthest screen": "最远画面",
    "Furthest screen/now": "最远画面/现在",
    "Agility": "敏捷",
    "Agility of the Creator now grants: 10% more agility, 10% more Create Damage, 10% more Attack\n                        Speed, 35% less Expend Damage": "造物主敏捷现在提供：敏捷性提高 10%，创造伤害提高 10%，攻击\n速度提高 10%，消耗伤害降低 35%",
    "Berserker": "狂战士",
    "Blaze Kick": "火焰踢",
    "Burgeoning Stature": "地位不断提升",
    "Burn From Within": "从内部燃烧",
    "Chain Lightning": "连锁闪电",
    "Channel": "通道",
    "Damage received": "受到的伤害",
    "Damage taken/sec": "受到的伤害/秒",
    "Download the data as a text file": "将存档数据下载为文本文件",
    "Health": "生命值",
    "Inflame": "激怒",
    "Intelligence": "智力",
    "Kaleidoscope Beam": "万花筒光束",
    "Lightning Strike": "闪电打击",
    "Mental Fatigue": "精神疲劳",
    "New\n                Character": "新角色",
    "Other Balance:": "其它平衡：",
    "Physical Dmg": "物理伤害",
    "Phantom Blade": "幻影之刃",
    "Permanent progression!": "永久进度！",
    "Prestige": "声望",
    "Prestige level cap thresholds have been changed to allow a prestige every 10 levels.": "声望等级上限阈值已更改，每 10 级可获得一个声望。",
    "Skill Board Balance:": "技能板平衡：",
    "Jumble": "混乱",
    "Rime Dagger": "雾凇匕首",
    "Solarburn": "太阳灼伤",
    "Stagger": "踉跄",
    "The\n                    Tiny Theorycrafter": "小小理论创造者",
    "Total time": "总计时长",
    "Quid Energize": "Quid 激励",
    "Attack": "攻击",
    "Create": "创造",
    "Expend": "消耗",
    "Essence Transfer": "精华转移",
    "Spell": "法术",
    "Spiritual": "精神",
    "Physical": "物理",
    "Magical": "魔法",
    "Duration": "持续时间",
    "Cold Counter": "冷柜",
    "Fire": "火",
    "Form": "形态",
    "Light": "光",
    "Nature": "自然",
    "Supernatural": "超自然",
    "Blue Slime": "蓝色史莱姆",
    "Quiddity Slime": "本质史莱姆",
    "Liquid Gold Slime": "液态金史莱姆",
    "Red Slime": "红色史莱姆",
    "Green Slime": "绿色史莱姆",
    "Blue Bird": "蓝鸟",
    "Blue Gelatinous Cube": "蓝色凝胶块",
    "Red Gelatinous Cube": "红色凝胶块",
    "Green Gelatinous Cube": "绿色凝胶块",
    "Fire Elemental": "火元素",
    "Blue Flame": "蓝色火焰",
    "Floating Eye": "漂浮之眼",
    "Elf Mage": "精灵法师",
    "Dark Mage": "暗法师",
    "Fire Mage": "火法师",
    "Bandit": "强盗",
    "Elf Bandit": "精灵强盗",
    "Troll Bandit": "巨魔强盗",
    "Assassin": "刺客",
    "Troll Assassin": "巨魔刺客",
    "Elf Assassin": "精灵刺客",
    "Fire Assassin": "火刺客",
    "Djinni": "风巨灵",
    "Mimic": "拟态",
    "Fire Demon": "火魔",
    "Elite Demon": "精英恶魔",
    "Water Demon": "水魔",
    "Minotuar": "矿工",
    "Wolfman": "狼人",
    "Wolfman Chief": "狼人酋长",
    "Gold Wyvern": "金飞龙",
    "Swamp Wyvern": "沼泽飞龙",
    "Poison Wyvern": "毒飞龙",
    "Fire Wyvern": "火飞龙",
    "Witch": "女巫",
    "Water Witch": "水女巫",
    "Swamp Witch": "沼泽女巫",
    "Ghost": "幽灵",
    "Shadow Thief": "暗影盗贼",
    "Sludge Monster": "污泥怪物",
    "Ice Monster": "冰怪",
    "Zombie": "僵尸",
    "Mummy": "木乃伊",
    "Skeleton": "骨骼",
    "Skeleton Archer": "骷髅弓箭手",
    "Reaper": "收割者",
    "Vampire": "吸血鬼",
    "Cursed Knight": "被诅咒的骑士",
    "Cyclops": "独眼巨人",
    "Ogre": "食人魔",
    "Cerberus": "塞伯鲁斯",
    "Crow": "乌鸦",
    "Blue Bird": "蓝鸟",
    "Wolf": "狼",
    "Silver Wolf": "银狼",
    "Dark Wolf": "黑狼",
    "Grizzly Bear": "大灰熊",
    "Black Bear": "黑熊",
    "Polar Bear": "北极熊",
    "Bat": "蝙蝠",
    "Fire Bat": "火蝙蝠",
    "Sand Scorpion": "沙蝎",
    "Death Scorpion": "死亡蝎子",
    "Fire Scorpion": "火蝎",
    "Black Widow": "黑寡妇",
    "Snake": "蛇",
    "Worm": "虫",
    "Evil Eye": "邪恶的眼睛",
    "COVID-19": "新冠肺炎",
    "Rancid Onion": "腐臭洋葱",
    "Crazed Butcher": "疯狂屠夫",
    "Lizard Chieftain": "蜥蜴酋长",
    "Misguided Fairy Godmother": "误入歧途的仙女教母",
    "Vampire King": "吸血鬼王",
    "Pharaoh": "法老",
    "Harold": "哈罗德",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "New ability: ": "新能力：",
    "Plasma Ray": "等离子射线",
    "Nerve Damage": "神经损伤",
    "Ethereal Fist": "空灵之拳",
    "Channel": "通道",
    "Annihilation": "湮灭",
    "Dice": "骰子",
    "Cold": "冰冷",
    "Vine Whip": "藤鞭",
    "Basic Attack": "基础攻击",
    "Berserker": "狂战士",
    "Blue Fire": "蓝火",
    "Deference": "尊重",
    "Ice Pillar": "冰柱",
    "Grep": "Grep",
    "Essence Transfer": "精华转移",
    "Ethereal Chase": "空灵追击",
    "Fire and Ice": "火与冰",
    "Blade Thrust": "叶片推力",
    "Fireball": "火球",
    "Flourish": "繁荣",
    "Frozen Execution": "冷冻处决",
    "Rancor Charge": "怨恨冲锋",
    "Rising Flames": "火焰升腾",
    "Spirit Blade": "灵刃",
    "Mark of Justice": "正义印记",
    "Zap": "电击",
    "Thrust": "推力",
    "Stranglethorns": "荆棘谷",
    "Slice": "切片",
    "Power Slash": "强力斩击",
    "Flame Burst": "火焰爆发",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^Added(.+)$/,
    /^Fixed(.+)$/,
    /^Beta Patch(.+)$/,
    /^{{(.+)$/,
    /^新(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)         $/,
    /^([\d\.]+)           $/,
    /^([\d\.]+)            $/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Skill (.+) Quid (.+)$/, '技能 $1 Quid $2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);