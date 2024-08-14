import { CategoryName } from "hooks/useCategories";

export interface Question {
  category: CategoryName;
  number: number;
  textContent: string;
  chineseContent: string;
}

const useQuestions = (): Question[] => [
  {
    textContent: "I like to organize people, tasks, and events. ",
    number: 1,
    chineseContent: "我喜歡安排人事，工作和活動。",
    category: "Administration 管理",
  },
  {
    textContent:
      "I would like to start churches in places where they do not presently exist. ",
    chineseContent: "我想在未有教會的地方建立教會。",
    number: 2,
    category: "Apostleship 使徒",
  },
  {
    textContent:
      "I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials. ",
    number: 3,
    chineseContent:
      "我喜歡運用木材、布料、油漆、金屬、玻璃等材料進行創作。",
    category: "Craftsmanship 工藝",
  },
  {
    textContent:
      "I enjoy challenging people’s perspective of God by using various forms of art. ",
    number: 4,
    category: "Creative Communication 創意傳播",
    chineseContent: "我喜歡通過不同形式的藝術來挑戰人們對神的看法。",
  },
  {
    textContent:
      "I can readily distinguish between spiritual truth and error, good and evil.",
    number: 5,
    category: "Discernment 辨別",
    chineseContent: "我能輕易地辨別屬靈真理與謬論，善與惡。",
  },
  {
    textContent: "I tend to see the potential in people.",
    number: 6,
    category: "Encouragement 鼓勵",
    chineseContent: "我傾向於看到人的潛力。",
  },
  {
    textContent:
      "I communicate the gospel to other with clarity and effectiveness. ",
    number: 7,
    category: "Evangelism 傳福音",
    chineseContent: "我能清楚、有效地向別人傳福音。",
  },
  {
    textContent:
      "I find it natural and easy to trust God to answer my prayers. ",
    number: 8,
    category: "Faith 信心",
    chineseContent: "相信神必會回答我的禱告是件很自然的事。",
  },
  {
    textContent:
      "I give liberally and joyfully to people in financial need or to projects requiring support.",
    number: 9,
    category: "Giving 奉獻",
    chineseContent: "我樂意且慷慨地施予有財務需求的人或缺乏支援的項目。",
  },
  {
    textContent:
      "I enjoy working behind the scenes to support the work of others. ",
    number: 10,
    category: "Helps 幫助",
    chineseContent: "我喜歡在幕後工作，支持他人的工作。",
  },
  {
    textContent: "I view my home as a place to minister to people in need. ",
    number: 11,
    category: "Hospitality 好客",
    chineseContent: "我把我的家視為服務有需要的人的地方。",
  },
  {
    textContent:
      "I take prayer requests from other and consistently pray for them.",
    number: 12,
    category: "Intercession 代禱",
    chineseContent: "我聽取他人的代禱事項，並持續地為他們禱告。",
  },
  {
    textContent:
      "I am approached by people who want to know my perspective on a particular passage or biblical truth. ",
    number: 13,
    category: "Knowledge 知識",
    chineseContent: "別人會詢問我對特定經文或聖經真理的看法。",
  },
  {
    textContent: "I am able to motivate others to accomplish a goal. ",
    number: 14,
    category: "Leadership 領導",
    chineseContent: "我能夠激勵他人達成目標。",
  },
  {
    textContent:
      "I empathize with hurting people and desire to help in their healing process. ",
    number: 15,
    category: "Mercy 憐憫",
    chineseContent: "我與受傷的人感同身受，並渴望幫助他們療愈。",
  },
  {
    textContent:
      "I can speak in a way that results in conviction and change in the lives of others. ",
    number: 16,
    category: "Prophecy 預言",
    chineseContent: "我能用說話使他人產生信念和使生命被改變。",
  },
  {
    textContent: "I enjoy spending time nurturing and caring for others. ",
    number: 17,
    category: "Shepherding 牧養",
    chineseContent: "我喜歡花時間培育和照顧他人。",
  },
  {
    textContent: "I am able to communicate God’s word effectively. ",
    number: 18,
    category: "Teaching 教導",
    chineseContent: "我能有效地傳達神的話。",
  },
  {
    textContent:
      "I am often sought out by others for advice about spiritual or personal matters. ",
    number: 19,
    category: "Wisdom 智慧",
    chineseContent: "別人經常向我尋求有關屬靈或個人事項的建議。",
  },
  {
    textContent: "I am careful, thorough, and skilled at managing details. ",
    number: 20,
    category: "Administration 管理",
    chineseContent: "我為人細心，縝密，並擅長管理細節。",
  },
  {
    textContent:
      "I am attracted to the idea of serving in another country or ethnic community. ",
    number: 21,
    category: "Apostleship 使徒",
    chineseContent: "我有興趣在另一個國家或族裔中服侍神。",
  },
  {
    textContent: "I am skilled in working with different kinds of tools.",
    number: 22,
    category: "Craftsmanship 工藝",
    chineseContent: "我擅長使用不同類型的工具。",
  },
  {
    textContent:
      "I enjoy developing and using my artistic skills (art, drama, music, photography, etc.) for ministry. ",
    number: 23,
    category: "Creative Communication 創意傳播",
    chineseContent:
      "我喜歡發展和利用我的藝術技能（美術、戲劇、音樂、攝影等）來事奉神。",
  },
  {
    textContent:
      "I frequently am able to judge a person’s character based upon first impressions. ",
    number: 24,
    category: "Discernment 辨別",
    chineseContent: "我經常能夠根據第一印象來判斷一個人的性格。",
  },
  {
    textContent:
      "I enjoy reassuring and strengthening those who are discouraged.",
    number: 25,
    category: "Encouragement 鼓勵",
    chineseContent: "我喜歡安慰和鼓勵沮喪的人。",
  },
  {
    textContent:
      "I consistently look for opportunities to build relationships with non-Christians.",
    number: 26,
    category: "Evangelism 傳福音",
    chineseContent: "我經常尋找機會與非基督徒建立關係。",
  },
  {
    textContent:
      "I have confidence in God’s continuing provision and help, even in difficult times. ",
    number: 27,
    category: "Faith 信心",
    chineseContent: "縱使面對困難，我仍相信神的持續供應和幫助。",
  },
  {
    textContent:
      "I give more than a tithe so that kingdom work can be accomplished.",
    number: 28,
    category: "Giving 奉獻",
    chineseContent: "我奉獻多於十分之一來成就神國的事工。",
  },
  {
    textContent: "I enjoy doing routine tasks that support the ministry. ",
    number: 29,
    category: "Helps 幫助",
    chineseContent: "我喜歡做教會事工中的日常事務。",
  },
  {
    textContent:
      "I enjoy meeting new people and helping them to feel welcomed. ",
    number: 30,
    category: "Hospitality 好客",
    chineseContent: "我喜歡認識新朋友並讓他們感到受歡迎。",
  },
  {
    textContent:
      "I enjoy praying for long periods of time and receive leadings as to what God wants me to pray for. ",
    number: 31,
    category: "Intercession 代禱",
    chineseContent: "我喜歡長時間祈禱，並由神引導我為不同的事情禱告。",
  },
  {
    textContent:
      "I receive information from the Spirit that I did not acquire through natural means. ",
    number: 32,
    category: "Knowledge 知識",
    chineseContent: "我透過超自然的方式從聖靈接收訊息。",
  },
  {
    textContent: "I am able to influence others to achieve a vision. ",
    number: 33,
    category: "Leadership 領導",
    chineseContent: "我能夠影響他人實現願景。",
  },
  {
    textContent:
      "I can patiently support those going through painful experiences as they try to stabilize their lives. ",
    number: 34,
    category: "Mercy 憐憫",
    chineseContent:
      "我可以耐心地支持那些身處苦痛經歷，試圖過穩定生活的人。",
  },
  {
    textContent: "I feel responsible to confront others with the truth. ",
    number: 35,
    category: "Prophecy 預言",
    chineseContent: "我感到有責任向他人宣告真理。",
  },
  {
    textContent:
      "I have compassion for wandering believers and want to protect them. ",
    number: 36,
    category: "Shepherding 牧養",
    chineseContent: "我同情那些流離的信徒，並想保護他們。",
  },
  {
    textContent:
      "I can spend time in study knowing that presenting truth will make a difference in the lives of people. ",
    number: 37,
    category: "Teaching 教導",
    chineseContent: "我願意花時間學習，因為我知道教導真理能改變生命。",
  },
  {
    textContent:
      "I can often find simple, practical solutions in the midst of conflict or confusion. ",
    number: 38,
    category: "Wisdom 智慧",
    chineseContent: "我經常在衝突或混亂中找到簡單、可行的解決方案。",
  },
  {
    textContent:
      "I can clarify goals and develop strategies or plans to accomplish them. ",
    number: 39,
    category: "Administration 管理",
    chineseContent: "我可以澄清目標並製定策略或計劃來達成目標。",
  },
  {
    textContent:
      "I am willing to take an active part in starting a new church. ",
    number: 40,
    category: "Apostleship 使徒",
    chineseContent: "我願意積極參與開創新教會。",
  },
  {
    textContent: "I enjoy making things for use in ministry. ",
    number: 41,
    category: "Craftsmanship 工藝",
    chineseContent: "我喜歡為教會事工製作不同用品。",
  },
  {
    textContent:
      "I help people understand themselves, their relationships, and God better through artistic expression. ",
    number: 42,
    category: "Creative Communication 創意傳播",
    chineseContent: "我通過藝術表達幫助人們更好地了解自己，他們的關係和神。",
  },
  {
    textContent:
      "I can see through phoniness or deceit before it is evident to others. ",
    number: 43,
    category: "Discernment 辨別",
    chineseContent: "我可以比別人更早看穿虛偽或欺騙。",
  },
  {
    textContent:
      "I give hope to others by directing them to the promises of God. ",
    number: 44,
    category: "Encouragement 鼓勵",
    chineseContent: "通過引導人到神的應許，我為他們帶來希望。",
  },
  {
    textContent:
      "I am effective at adapting the gospel message so that it connects with an individual's felt need. ",
    number: 45,
    category: "Evangelism 傳福音",
    chineseContent: "我擅長調整福音信息，迎合聽者的個人需要。",
  },
  {
    textContent: "I believe that God will help me to accomplish great things. ",
    number: 46,
    category: "Faith 信心",
    chineseContent: "我相信神會幫助我成就大事。",
  },
  {
    textContent:
      "I manage my money well in order to free more of it for giving. ",
    number: 47,
    category: "Giving 奉獻",
    chineseContent: "我妥善地管理我的金錢，以便能撥出更多作施予。",
  },
  {
    textContent:
      "I willingly take on a variety of odd jobs around the church to meet the needs of others. ",
    number: 48,
    category: "Helps 幫助",
    chineseContent: "我樂意在教會做瑣碎的工作，滿足他人的需要。",
  },
  {
    textContent:
      "I genuinely believe the Lord directs strangers to me who need to get connected to others. ",
    number: 49,
    category: "Hospitality 好客",
    chineseContent: "我真誠地相信主會引導陌生人來找我，因為他們需要與別人聯繫。",
  },
  {
    textContent: "I am conscious of ministering to others as I pray. ",
    number: 50,
    category: "Intercession 代禱",
    chineseContent: "我在祈禱時能意識到我正在服侍他人。",
  },
  {
    textContent:
      "I am committed, and schedule blocks of time for reading and studying scripture, to understand biblical truth fully and accurately. ",
    number: 51,
    category: "Knowledge 知識",
    chineseContent: "我致力分配時間閱讀和研究經文，好讓自己能整全並準確地理解聖經真理。",
  },
  {
    textContent:
      "I can adjust my leadership style to bring out the best in others. ",
    number: 52,
    category: "Leadership 領導",
    chineseContent: "我可以調整我的領導風格，幫助他人發揮最大潛力。",
  },
  {
    textContent:
      "I enjoy helping people sometimes regarded as under-deserving or beyond help. ",
    number: 53,
    category: "Mercy 憐憫",
    chineseContent: "我喜歡幫助那些或許被認為不值得幫助或無可救藥的人。",
  },
  {
    textContent:
      "I boldly expose cultural trends, teachings, or events that contradict biblical principles. ",
    number: 54,
    category: "Prophecy 預言",
    chineseContent: "我大膽揭示與聖經原則相矛盾的文化趨勢、教導或活動。",
  },
  {
    textContent:
      "I like to provide guidance for the whole person – relationally, emotionally, spiritually, etc. ",
    number: 55,
    category: "Shepherding 牧養",
    chineseContent: "我喜歡提供全人指導，包括：人際、情感、屬靈等。",
  },
  {
    textContent:
      "I pay close attentions to the words, phrases, and meaning of those who teach. ",
    number: 56,
    category: "Teaching 教導",
    chineseContent: "我密切關注教導者的言辭、字句和含義。",
  },
  {
    textContent:
      "I can easily select the most effective course of action from among several alternatives. ",
    number: 57,
    category: "Wisdom 智慧",
    chineseContent: "我可以輕鬆地從幾個選擇中選擇最有效的行動方案。",
  },
  {
    textContent:
      "I can identify and effectively use the resources needed to accomplish tasks. ",
    number: 58,
    category: "Administration 管理",
    chineseContent: "我可以識別並有效地使用完成工作所需的資源。",
  },
  {
    textContent: "I can adapt well to different cultures and surroundings. ",
    number: 59,
    category: "Apostleship 使徒",
    chineseContent: "我能很好地適應不同的文化和環境。",
  },
  {
    textContent:
      "I can visualize how something should be constructed before I build it. ",
    number: 60,
    category: "Craftsmanship 工藝",
    chineseContent: "我可以在建造之前想像應該如何構建。",
  },
  {
    textContent:
      "I like finding new and fresh ways of communicating God’s truth. ",
    number: 61,
    category: "Creative Communication 創意傳播",
    chineseContent: "我喜歡尋找創新的方式傳遞神的真理。",
  },
  {
    textContent: "I tend to see rightness or wrongness in situations. ",
    number: 62,
    category: "Discernment 辨別",
    chineseContent: "我傾向於看見不同情況的對與錯。",
  },
  {
    textContent:
      "I reassure those who need to take courageous action in their faith, family, or life. ",
    number: 63,
    category: "Encouragement 鼓勵",
    chineseContent: "我鼓勵那些需要在信仰、家庭或生活中採取勇敢行動的人。",
  },
  {
    textContent: "I invite unbelievers to accept Christ as their Savior. ",
    number: 64,
    category: "Evangelism 傳福音",
    chineseContent: "我邀請未信者接受基督為他們的救主。",
  },
  {
    textContent:
      "I trust God in circumstances where success cannot be guaranteed by human effort alone. ",
    number: 65,
    category: "Faith 信心",
    chineseContent: "我在單靠人的努力無法保證成功的情況下信任神。",
  },
  {
    textContent:
      "I am challenged to limit my lifestyle in order to give away a higher percentage of my income. ",
    number: 66,
    category: "Giving 奉獻",
    chineseContent: "我挑戰自己過節約的生活，以便能捐出更高比例的收入。",
  },
  {
    textContent: "I see spiritual significance in doing practical tasks. ",
    number: 67,
    category: "Helps 幫助",
    chineseContent: "我在做實務的工作時看到屬靈意義。",
  },
  {
    textContent:
      "I like to create a place where people do not feel that they are alone. ",
    number: 68,
    category: "Hospitality 好客",
    chineseContent: "我喜歡創造一個讓人們不覺得孤單的地方。",
  },
  {
    textContent:
      "I pray with confidence because I know that God works in response to prayer. ",
    number: 69,
    category: "Intercession 代禱",
    chineseContent: "我有信心祈求，因為我知道神會回應禱告。",
  },
  {
    textContent: "I have insight or just know something to be true. ",
    number: 70,
    category: "Knowledge 知識",
    chineseContent: "我有洞察力或能確實知道某些事情。",
  },
  {
    textContent:
      "I set goals and manage people and resources affectively to accomplish them. ",
    number: 71,
    category: "Leadership 領導",
    chineseContent: "我設定目標，並有效地管理人事和資源以達成目標。",
  },
  {
    textContent: "I have great compassion for hurting people. ",
    number: 72,
    category: "Mercy 憐憫",
    chineseContent: "我對受傷害的人有很大的同情心。",
  },
  {
    textContent:
      "I see most actions as right or wrong, and feel the need to correct the wrong. ",
    number: 73,
    category: "Prophecy 預言",
    chineseContent: "我用對或錯來釐定多數行為，並感到有必要糾正錯誤。",
  },
  {
    textContent:
      "I can faithfully provide long-term support and concern for others. ",
    number: 74,
    category: "Shepherding 牧養",
    chineseContent: "我可以忠實地為他人提供長期支持和關心。",
  },
  {
    textContent:
      "I like to take a systematic approach to my study of the bible. ",
    number: 75,
    category: "Teaching 教導",
    chineseContent: "我喜歡有系統地研究聖經。",
  },
  {
    textContent:
      "I can anticipate the likely consequences of an individual’s or a group’s action. ",
    number: 76,
    category: "Wisdom 智慧",
    chineseContent: "我能預料個人或團體行動的可能後果。",
  },
  {
    textContent:
      "I like to help organizations or groups become more efficient. ",
    number: 77,
    category: "Administration 管理",
    chineseContent: "我喜歡幫助團體或小組變得更有效率。",
  },
  {
    textContent: "I can relate to others in culturally sensitive ways. ",
    number: 78,
    category: "Apostleship 使徒",
    chineseContent: "我與他人相處時能夠顧及文化上的差異。",
  },
  {
    textContent: "I honor God with my handcrafted gifts. ",
    number: 79,
    category: "Craftsmanship 工藝",
    chineseContent: "我用手工製作的禮物來榮耀神。",
  },
  {
    textContent:
      "I apply various artistic expressions to communicate God’s truth. ",
    number: 80,
    category: "Creative Communication 創意傳播",
    chineseContent: "我應用各種藝術表達來傳達神的真理。",
  },
  {
    textContent:
      "I receive affirmation from others concerning the reliability of my insights or perceptions. ",
    number: 81,
    category: "Discernment 辨別",
    chineseContent: "我獲別人肯定我的洞察力或感知力是可靠的。",
  },
  {
    textContent: "I strengthen those who are wavering in their faith. ",
    number: 82,
    category: "Encouragement 鼓勵",
    chineseContent: "我堅固那些在信仰上動搖的人。",
  },
  {
    textContent:
      "I openly tell people that I am a Christian and want them to ask me about my faith. ",
    number: 83,
    category: "Evangelism 傳福音",
    chineseContent: "我公開告訴人們我是基督徒，並希望他們問我有關我的信仰。",
  },
  {
    textContent:
      "I am convinced of God’s daily presence and action in my life. ",
    number: 84,
    category: "Faith 信心",
    chineseContent: "我相信神每天都與我同在並在我生命中工作。",
  },
  {
    textContent:
      "I like knowing that my financial support makes a real difference in the lives and ministries of God’s people. ",
    number: 85,
    category: "Giving 奉獻",
    chineseContent:
      "我喜歡知道我的經濟支持對神的子民的生活和事工有實質影響。",
  },
  {
    textContent:
      "I like to find small things that need to be done and often do them without being asked. ",
    number: 86,
    category: "Helps 幫助",
    chineseContent: "我喜歡找到需要做的小事，並經常在沒有被要求的情況下做。",
  },
  {
    textContent: "I enjoy entertaining people and opening my home to others. ",
    number: 87,
    category: "Hospitality 好客",
    chineseContent: "我喜歡招待人，並向他人開放我的家居。",
  },
  {
    textContent:
      "When I hear about needy situations, I feel burdened to pray. ",
    number: 88,
    category: "Intercession 代禱",
    chineseContent: "當我聽到有需要的情況時，我感到有負擔要祈禱。",
  },
  {
    textContent:
      "I have suddenly known some things about others, but did not know how I knew them.",
    number: 89,
    category: "Knowledge 知識",
    chineseContent: "我曾突然知道一些關於別人的事情，但不清楚我是怎麼知道的。",
  },
  {
    textContent:
      "I influence others to perform to the best of their capability. ",
    number: 90,
    category: "Leadership 領導",
    chineseContent: "我影響他人發揮他們的最大能力。",
  },
  {
    textContent:
      "I can look beyond a person’s handicaps or problems to see a life that matters to God. ",
    number: 91,
    category: "Mercy 憐憫",
    chineseContent: "我可以超越一個人的殘疾或問題，看到一個對神重要的生命。",
  },
  {
    textContent: "I like people who are honest and will speak the truth. ",
    number: 92,
    category: "Prophecy 預言",
    chineseContent: "我喜歡誠實的人，並會說出真相。",
  },
  {
    textContent:
      "I enjoy giving guidance and practical support to a small group of people. ",
    number: 93,
    category: "Shepherding 牧養",
    chineseContent: "我喜歡給一小群人指導和實際支持。",
  },
  {
    textContent:
      "I can communicate scripture in ways that motivate others to study and want to learn more. ",
    number: 94,
    category: "Teaching 教導",
    chineseContent: "我傳達經文的方式可以激勵他人學習並作更深入的研究。",
  },
  {
    textContent:
      "I give practical advice to help others through complicated situations. ",
    number: 95,
    category: "Wisdom 智慧",
    chineseContent: "我給予實際的建議，幫助他人渡過複雜的情況。",
  },
  {
    textContent: "I enjoy learning about how organizations function. ",
    number: 96,
    category: "Administration 管理",
    chineseContent: "我喜歡了解團體如何運作。",
  },
  {
    textContent: "I enjoy pioneering new undertakings. ",
    number: 97,
    category: "Apostleship 使徒",
    chineseContent: "我喜歡開創新事工。",
  },
  {
    textContent: "I am good at and enjoy working with my hands. ",
    number: 98,
    category: "Craftsmanship 工藝",
    chineseContent: "我擅長並喜歡動手做事。",
  },
  {
    textContent: "I am creative and imaginative. ",
    number: 99,
    category: "Creative Communication 創意傳播",
    chineseContent: "我有創造力和想像力。",
  },
  {
    textContent:
      "I can identify preaching, teaching, or communication that is not biblically true. ",
    number: 100,
    category: "Discernment 辨別",
    chineseContent: "我可以識別不符合聖經真理的講道、教導或信息。",
  },
  {
    textContent:
      "I like motivating others to take steps for spiritual growth. ",
    number: 101,
    category: "Encouragement 鼓勵",
    chineseContent: "我喜歡激勵他人邁向更成熟的靈命。",
  },
  {
    textContent:
      "I openly and confidently tell others what Christ has done for me. ",
    number: 102,
    category: "Evangelism 傳福音",
    chineseContent: "我公開且自信地告訴別人基督為我做了甚麼。",
  },
  {
    textContent: "I am regularly challenging other to trust God. ",
    number: 103,
    category: "Faith 信心",
    chineseContent: "我經常挑戰其他人信任神。",
  },
  {
    textContent: "I give generously due to my commitment to stewardship. ",
    number: 104,
    category: "Giving 奉獻",
    chineseContent: "我基於對作神管家的委身而慷慨施予。",
  },
  {
    textContent:
      "I feel comfortable being a helper, assisting others to do their job more effectively. ",
    number: 105,
    category: "Helps 幫助",
    chineseContent: "我樂於做一個助手，幫助別人更有效地完成他們的工作。",
  },
  {
    textContent: "I do whatever I can to make people feel that they belong. ",
    number: 106,
    category: "Hospitality 好客",
    chineseContent: "我盡我所能讓人們感到自己屬於這個群體。",
  },
  {
    textContent: "I am honored when someone asks me to pray for them. ",
    number: 107,
    category: "Intercession 代禱",
    chineseContent: "當有人請我為他們祈禱時，我感到榮幸。",
  },
  {
    textContent:
      "I discover important Biblical truths when reading or studying. ",
    number: 108,
    category: "Knowledge 知識",
    chineseContent: "我在閱讀或學習時發現重要的聖經真理。",
  },
  {
    textContent:
      "I am able to cast a vision that others want to be a part of. ",
    number: 109,
    category: "Leadership 領導",
    chineseContent: "我能構思一個讓其他人想參與的願景。",
  },
  {
    textContent:
      "I enjoy bringing hope and joy to people living in difficult circumstances. ",
    number: 110,
    category: "Mercy 憐憫",
    chineseContent: "我喜歡給生活在困境中的人帶來希望和喜樂。",
  },
  {
    textContent:
      "I will speak God’s truth, even in places where it is unpopular or difficult. ",
    number: 111,
    category: "Prophecy 預言",
    chineseContent: "即使不受歡迎或遇到攔阻，我仍會說出神的真理。",
  },
  {
    textContent:
      "I can gently restore wandering believers to faith and fellowship. ",
    number: 112,
    category: "Shepherding 牧養",
    chineseContent: "我可以溫和地恢復流離信徒的信仰和團契。",
  },
  {
    textContent:
      "I can present information and skills to others at a level that makes it easy for them to grasp and apply to their lives. ",
    number: 113,
    category: "Teaching 教導",
    chineseContent:
      "我向人傳遞信息和技能時可以調整內容，方便他們理解並應用到生活中。",
  },
  {
    textContent:
      "I can apply Scriptural truth that others regard as practical and helpful.",
    number: 114,
    category: "Wisdom 智慧",
    chineseContent: "我可以應用經文真理，其他人認為是實用和有幫助的。",
  },
  {
    textContent:
      "I can visualize a coming event, anticipate potential problems, and develop backup plans. ",
    number: 115,
    category: "Administration 管理",
    chineseContent: "我可以想像即將到來的活動，預見潛在問題，並制定後備方案。",
  },
  {
    textContent:
      "I am able to orchestrate or oversee several church ministries. ",
    number: 116,
    category: "Apostleship 使徒",
    chineseContent: "我能夠統籌或監督幾項教會事工。",
  },
  {
    textContent:
      "I am able to design and construct things that help the church. ",
    number: 117,
    category: "Craftsmanship 工藝",
    chineseContent: "我能夠設計和建造有助於教會的物件。",
  },
  {
    textContent:
      "I regularly need to get alone to reflect and develop my imagination. ",
    number: 118,
    category: "Creative Communication 創意傳播",
    chineseContent: "我經常需要獨處來反思和發展我的想像力。",
  },
  {
    textContent:
      "I can sense when demonic forces are at work in a person or situation. ",
    number: 119,
    category: "Discernment 辨別",
    chineseContent: "我可以感覺到魔鬼何時在一個人或情況中工作。",
  },
  {
    textContent:
      "I am able to challenge or rebuke others in order to foster spiritual growth. ",
    number: 120,
    category: "Encouragement 鼓勵",
    chineseContent: "我能夠挑戰或指責他人以促進靈命成長。",
  },
  {
    textContent:
      "I seek opportunities to talk about spiritual matters with unbelievers. ",
    number: 121,
    category: "Evangelism 傳福音",
    chineseContent: "我尋求機會與未信者談論屬靈的事。",
  },
  {
    textContent:
      "I can move forward in spite of opposition or lack of support when I sense God’s blessing on an undertaking. ",
    number: 122,
    category: "Faith 信心",
    chineseContent:
      "當我感到神在祝福一件事情時，儘管遇到反對或缺乏支持，我仍能向前進。",
  },
  {
    textContent:
      "I believe I have been given an abundance of resources so that I may give more to the Lord’s work. ",
    number: 123,
    category: "Giving 奉獻",
    chineseContent:
      "我相信我已經得到了豐富的資源，讓我可以為主的工作獻上更多。",
  },
  {
    textContent:
      "I readily and happily use my natural skills to help wherever needed. ",
    number: 124,
    category: "Helps 幫助",
    chineseContent: "我樂於使用我的天賦技能在有需要的地方提供幫助。",
  },
  {
    textContent:
      "I can make people feel at ease even in unfamiliar surroundings. ",
    number: 125,
    category: "Hospitality 好客",
    chineseContent: "即使在陌生的環境中，我也可以讓人們感到輕鬆自在。",
  },
  {
    textContent:
      "I often see specific results in direct response to my prayers. ",
    number: 126,
    category: "Intercession 代禱",
    chineseContent: "我經常看到由於我的祈禱而帶來的特定果效。",
  },
  {
    textContent: "I confidently share my knowledge and insights with others. ",
    number: 127,
    category: "Knowledge 知識",
    chineseContent: "我自信地與他人分享我的知識和見解。",
  },
  {
    textContent:
      "I figure out where we need to go and help others to get there. ",
    number: 128,
    category: "Leadership 領導",
    chineseContent: "我斷定我們的去向，並幫助其他人到達目標。",
  },
  {
    textContent: "I enjoy doing practical things for others who are in need. ",
    number: 129,
    category: "Mercy 憐憫",
    chineseContent: "我喜歡為有需要的人做實際的事情。",
  },
  {
    textContent:
      "I feel compelled to expose sin when I see it and challenge people to repent. ",
    number: 130,
    category: "Prophecy 預言",
    chineseContent: "當我看到罪惡時，我感到有必要揭露罪惡並挑戰人們悔改。",
  },
  {
    textContent: "I enjoy patiently but firmly nurturing others as believers. ",
    number: 131,
    category: "Shepherding 牧養",
    chineseContent: "我喜歡耐心但堅定地培育其他人成為信徒。",
  },
  {
    textContent: "I enjoy explaining things to people so that they can grow. ",
    number: 132,
    category: "Teaching 教導",
    chineseContent: "我喜歡向人們解釋事情，以便他們可以成長。",
  },
  {
    textContent:
      "I have insights into how to solve problems that others do not see. ",
    number: 133,
    category: "Wisdom 智慧",
    chineseContent: "對於如何解決其他人看不到的問題，我能提出見解。",
  },
];

export default useQuestions;
