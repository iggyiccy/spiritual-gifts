import { CategoryName } from "hooks/useCategories";

export interface Question {
  category: CategoryName;
  number: number;
  textContent: string;
}

const useQuestions = (): Question[] => [
  {
    textContent:
      "I like to organize people, tasks, and events. 我喜歡組織人，任務和事件。",
    number: 1,
    category: "Administration",
  },
  {
    textContent:
      "I would like to start churches in places where they do not presently exist. 我想在目前尚不存在的地方開始教會。",
    number: 2,
    category: "Apostleship",
  },
  {
    textContent:
      "I enjoy working creatively with wood, cloth, paints, metal, glass, or other materials. 我喜歡與木材，布料，油漆，金屬，玻璃或其他材料進行創造性工作。",
    number: 3,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I enjoy challenging people’s perspective of God by using various forms of art. 我喜歡通過各種形式的藝術來挑戰人們對上帝的看法。",
    number: 4,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can readily distinguish between spiritual truth and error, good and evil. 我可以很容易地辨別靈性真理和錯誤，善惡。",
    number: 5,
    category: "Discernment",
  },
  {
    textContent:
      "I tend to see the potential in people. 我傾向於看到人的潛力。",
    number: 6,
    category: "Encouragement",
  },
  {
    textContent:
      "I communicate the gospel to other with clarity and effectiveness. 我清晰有效地向他人傳遞福音。",
    number: 7,
    category: "Evangelism",
  },
  {
    textContent:
      "I find it natural and easy to trust God to answer my prayers. 我發現信任上帝回答我的禱告是自然而容易的。",
    number: 8,
    category: "Faith",
  },
  {
    textContent:
      "I give liberally and joyfully to people in financial need or to projects requiring support. 我樂意且高興地給予有財務需求的人或需要支持的項目。",
    number: 9,
    category: "Giving",
  },
  {
    textContent:
      "I enjoy working behind the scenes to support the work of others. 我喜歡在幕後工作，支持他人的工作。",
    number: 10,
    category: "Helps",
  },
  {
    textContent:
      "I view my home as a place to minister to people in need. 我把我的家視為服務有需要的人的地方。",
    number: 11,
    category: "Hospitality",
  },
  {
    textContent:
      "I take prayer requests from other and consistently pray for them. 我接受他人的祈禱請求，並為他們不斷祈禱。",
    number: 12,
    category: "Intercession",
  },
  {
    textContent:
      "I am approached by people who want to know my perspective on a particular passage or biblical truth. 我被人們接近，想知道我對特定經文或聖經真理的看法。",
    number: 13,
    category: "Knowledge",
  },
  {
    textContent:
      "I am able to motivate others to accomplish a goal. 我能夠激勵他人實現目標。",
    number: 14,
    category: "Leadership",
  },
  {
    textContent:
      "I empathize with hurting people and desire to help in their healing process. 我與受傷的人感同身受，並渴望幫助他們療愈。",
    number: 15,
    category: "Mercy",
  },
  {
    textContent:
      "I can speak in a way that results in conviction and change in the lives of others. 我可以以一種能使他人生活中產生信念和改變的方式講話。",
    number: 16,
    category: "Prophecy",
  },
  {
    textContent:
      "I enjoy spending time nurturing and caring for others. 我喜歡花時間培育和照顧他人。",
    number: 17,
    category: "Shepherding",
  },
  {
    textContent:
      "I am able to communicate God’s word effectively. 我能有效地傳達上帝的話。",
    number: 18,
    category: "Teaching",
  },
  {
    textContent:
      "I am often sought out by others for advice about spiritual or personal matters. 我經常被他人尋求有關精神或個人事項的建議。",
    number: 19,
    category: "Wisdom",
  },
  {
    textContent:
      "I am careful, thorough, and skilled at managing details. 我小心，仔細，並擅長管理細節。",
    number: 20,
    category: "Administration",
  },
  {
    textContent:
      "I am attracted to the idea of serving in another country or ethnic community. 我對在另一個國家或民族社區服務的想法感到吸引。",
    number: 21,
    category: "Apostleship",
  },
  {
    textContent:
      "I am skilled in working with different kinds of tools. 我擅長使用不同類型的工具。",
    number: 22,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I enjoy developing and using my artistic skills (art, drama, music, photography, etc.) for ministry. 我喜歡發展和利用我的藝術技能（藝術，戲劇，音樂，攝影等）來進行事工。",
    number: 23,
    category: "Creative Communication",
  },
  {
    textContent:
      "I frequently am able to judge a person’s character based upon first impressions. 我經常能夠根據第一印象判斷一個人的性格。",
    number: 24,
    category: "Discernment",
  },
  {
    textContent:
      "I enjoy reassuring and strengthening those who are discouraged. 我喜歡安慰和加強那些感到沮喪的人。",
    number: 25,
    category: "Encouragement",
  },
  {
    textContent:
      "I consistently look for opportunities to build relationships with non-Christians. 我一直在尋找與非基督徒建立關係的機會。",
    number: 26,
    category: "Evangelism",
  },
  {
    textContent:
      "I have confidence in God’s continuing provision and help, even in difficult times. 我對上帝在困難時期的持續供應和幫助充滿信心。",
    number: 27,
    category: "Faith",
  },
  {
    textContent:
      "I give more than a tithe so that kingdom work can be accomplished. 我捐獻超過十分之一的金錢，以便完成神國的事工。",
    number: 28,
    category: "Giving",
  },
  {
    textContent:
      "I enjoy doing routine tasks that support the ministry. 我喜歡做支持事工的日常任務。",
    number: 29,
    category: "Helps",
  },
  {
    textContent:
      "I enjoy meeting new people and helping them to feel welcomed. 我喜歡認識新朋友並幫助他們感到受歡迎。",
    number: 30,
    category: "Hospitality",
  },
  {
    textContent:
      "I enjoy praying for long periods of time and receive leadings as to what God wants me to pray for. 我喜歡長時間祈禱，並接受上帝希望我為之祈禱的引導。",
    number: 31,
    category: "Intercession",
  },
  {
    textContent:
      "I receive information from the Spirit that I did not acquire through natural means. 我透過非自然方式的靈去接收訊息",
    number: 32,
    category: "Knowledge",
  },
  {
    textContent:
      "I am able to influence others to achieve a vision. 我能夠影響他人實現願景。",
    number: 33,
    category: "Leadership",
  },
  {
    textContent:
      "I can patiently support those going through painful experiences as they try to stabilize their lives. 我可以耐心地支持那些正在經歷痛苦經歷的人，因為他們試圖穩定自己的生活。",
    number: 34,
    category: "Mercy",
  },
  {
    textContent:
      "I feel responsible to confront others with the truth. 我感到有責任用真理面對他人。",
    number: 35,
    category: "Prophecy",
  },
  {
    textContent:
      "I have compassion for wandering believers and want to protect them. 我對 流離信徒有同情心，並想保護他們。",
    number: 36,
    category: "Shepherding",
  },
  {
    textContent:
      "I can spend time in study knowing that presenting truth will make a difference in the lives of people. 我可以花時間學習，知道呈現真理將改變人們的生活。",
    number: 37,
    category: "Teaching",
  },
  {
    textContent:
      "I can often find simple, practical solutions in the midst of conflict or confusion. 我經常在衝突或混亂中找到簡單，實用的解決方案。",
    number: 38,
    category: "Wisdom",
  },
  {
    textContent:
      "I can clarify goals and develop strategies or plans to accomplish them. 我可以澄清目標並製定策略或計劃來實現目標。",
    number: 39,
    category: "Administration",
  },
  {
    textContent:
      "I am willing to take an active part in starting a new church. 我願意積極參與開創新教會。",
    number: 40,
    category: "Apostleship",
  },
  {
    textContent:
      "I enjoy making things for use in ministry. 我喜歡製作事工用品。",
    number: 41,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I help people understand themselves, their relationships, and God better through artistic expression. 我通過藝術表達幫助人們更好地了解自己，他們的關係和上帝。",
    number: 42,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can see through phoniness or deceit before it is evident to others. 我可以在別人之前看出虛偽或欺騙。",
    number: 43,
    category: "Discernment",
  },
  {
    textContent:
      "I give hope to others by directing them to the promises of God. 我通過引導他們到上帝的應許來給予他人希望。",
    number: 44,
    category: "Encouragement",
  },
  {
    textContent:
      "I am effective at adapting the gospel message so that it connects with an individual's felt need. 我擅長調整福音信息，使其與個人的需求相連。",
    number: 45,
    category: "Evangelism",
  },
  {
    textContent:
      "I believe that God will help me to accomplish great things. 我相信上帝會幫助我完成偉大的事。",
    number: 46,
    category: "Faith",
  },
  {
    textContent:
      "I manage my money well in order to free more of it for giving. 我管理我的金錢，以便有更多的金錢可以給予。",
    number: 47,
    category: "Giving",
  },
  {
    textContent:
      "I willingly take on a variety of odd jobs around the church to meet the needs of others. 我樂意接受教會周圍各種奇怪的工作，以滿足他人的需求。",
    number: 48,
    category: "Helps",
  },
  {
    textContent:
      "I genuinely believe the Lord directs strangers to me who need to get connected to others. 我真誠地相信主會引導陌生人來找我，他們需要與他人聯繫。",
    number: 49,
    category: "Hospitality",
  },
  {
    textContent:
      "I am conscious of ministering to others as I pray. 我在祈禱時意識到要事奉他人。",
    number: 50,
    category: "Intercession",
  },
  {
    textContent:
      "I am committed, and schedule blocks of time for reading and studying scripture, to understand biblical truth fully and accurately. 我致力於閱讀和研究經文，以充分且準確地理解聖經真理。",
    number: 51,
    category: "Knowledge",
  },
  {
    textContent:
      "I can adjust my leadership style to bring out the best in others. 我可以調整我的領導風格，使他人發揮最大潛力。",
    number: 52,
    category: "Leadership",
  },
  {
    textContent:
      "I enjoy helping people sometimes regarded as under-deserving or beyond help. 我喜歡幫助有時被認為不值得或無法幫助的人。",
    number: 53,
    category: "Mercy",
  },
  {
    textContent:
      "I boldly expose cultural trends, teachings, or events that contradict biblical principles. 我大膽揭示與聖經原則相矛盾的文化趨勢，教導或事件。",
    number: 54,
    category: "Prophecy",
  },
  {
    textContent:
      "I like to provide guidance for the whole person – relationally, emotionally, spiritually, etc. 我喜歡為提供全人指導 - 在人際，情感，精神等方面。",
    number: 55,
    category: "Shepherding",
  },
  {
    textContent:
      "I pay close attentions to the words, phrases, and meaning of those who teach. 我密切關注教導者的言辭，詞語和含義。",
    number: 56,
    category: "Teaching",
  },
  {
    textContent:
      "I can easily select the most effective course of action from among several alternatives. 我可以輕鬆地從幾個選擇中選擇最有效的行動方案。",
    number: 57,
    category: "Wisdom",
  },
  {
    textContent:
      "I can identify and effectively use the resources needed to accomplish tasks. 我可以識別並有效地使用完成任務所需的資源。",
    number: 58,
    category: "Administration",
  },
  {
    textContent:
      "I can adapt well to different cultures and surroundings. 我能很好地適應不同的文化和環境。",
    number: 59,
    category: "Apostleship",
  },
  {
    textContent:
      "I can visualize how something should be constructed before I build it. 我可以在建造之前想像應該如何構建。",
    number: 60,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I like finding new and fresh ways of communicating God’s truth. 我喜歡尋找並以創新的方式傳達上帝真理。",
    number: 61,
    category: "Creative Communication",
  },
  {
    textContent:
      "I tend to see rightness or wrongness in situations. 我傾向於看到情況的正確與錯誤。",
    number: 62,
    category: "Discernment",
  },
  {
    textContent:
      "I reassure those who need to take courageous action in their faith, family, or life. 我鼓勵那些需要在信仰，家庭或生活中採取勇敢行動的人。",
    number: 63,
    category: "Encouragement",
  },
  {
    textContent:
      "I invite unbelievers to accept Christ as their Savior. 我邀請非信徒接受基督為他們的救主。",
    number: 64,
    category: "Evangelism",
  },
  {
    textContent:
      "I trust God in circumstances where success cannot be guaranteed by human effort alone. 我在人類努力無法保證成功的情況下信任上帝。",
    number: 65,
    category: "Faith",
  },
  {
    textContent:
      "I am challenged to limit my lifestyle in order to give away a higher percentage of my income. 我受到挑戰，要限制我的生活方式，以便捐出更高比例的收入。",
    number: 66,
    category: "Giving",
  },
  {
    textContent:
      "I see spiritual significance in doing practical tasks. 我在做實際任務時看到屬靈意義。",
    number: 67,
    category: "Helps",
  },
  {
    textContent:
      "I like to create a place where people do not feel that they are alone. 我喜歡創造一個人們不覺得孤單的地方。",
    number: 68,
    category: "Hospitality",
  },
  {
    textContent:
      "I pray with confidence because I know that God works in response to prayer. 我有信心祈禱，因為我知道上帝會回應祈禱。",
    number: 69,
    category: "Intercession",
  },
  {
    textContent:
      "I have insight or just know something to be true. 我有洞察力或知道某事是真的。",
    number: 70,
    category: "Knowledge",
  },
  {
    textContent:
      "I set goals and manage people and resources affectively to accomplish them. 我設定目標，有效地管理人員和資源以實現目標。",
    number: 71,
    category: "Leadership",
  },
  {
    textContent:
      "I have great compassion for hurting people. 我對受傷的人有很大的同情心。",
    number: 72,
    category: "Mercy",
  },
  {
    textContent:
      "I see most actions as right or wrong, and feel the need to correct the wrong. 我認為大多數行為是對還是錯，並感到有必要糾正錯誤。",
    number: 73,
    category: "Prophecy",
  },
  {
    textContent:
      "I can faithfully provide long-term support and concern for others. 我可以忠實地為他人提供長期支持和關心。",
    number: 74,
    category: "Shepherding",
  },
  {
    textContent:
      "I like to take a systematic approach to my study of the bible. 我喜歡系統地研究聖經。",
    number: 75,
    category: "Teaching",
  },
  {
    textContent:
      "I can anticipate the likely consequences of an individual’s or a group’s action. 我可以預見個人或團體行動的可能後果。",
    number: 76,
    category: "Wisdom",
  },
  {
    textContent:
      "I like to help organizations or groups become more efficient. 我喜歡幫助組織或團體變得更有效率。",
    number: 77,
    category: "Administration",
  },
  {
    textContent:
      "I can relate to others in culturally sensitive ways. 我可以以文化敏感的方式與他人相處。",
    number: 78,
    category: "Apostleship",
  },
  {
    textContent:
      "I honor God with my handcrafted gifts. 我用手工製作的禮物來榮耀上帝。",
    number: 79,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I apply various artistic expressions to communicate God’s truth. 我應用各種藝術表達來傳達上帝的真理。",
    number: 80,
    category: "Creative Communication",
  },
  {
    textContent:
      "I receive affirmation from others concerning the reliability of my insights or perceptions. 我從他人那裡得到肯定，他們認為我的洞察力或感知是可靠的。",
    number: 81,
    category: "Discernment",
  },
  {
    textContent:
      "I strengthen those who are wavering in their faith. 我加強那些在信仰上動搖的人。",
    number: 82,
    category: "Encouragement",
  },
  {
    textContent:
      "I openly tell people that I am a Christian and want them to ask me about my faith. 我公開告訴人們我是基督徒，並希望他們問我有關我的信仰。",
    number: 83,
    category: "Evangelism",
  },
  {
    textContent:
      "I am convinced of God’s daily presence and action in my life. 我相信上帝每天都在我的生活中存在並行動。",
    number: 84,
    category: "Faith",
  },
  {
    textContent:
      "I like knowing that my financial support makes a real difference in the lives and ministries of God’s people. 我喜歡知道我的財務支持對上帝的子民的生活和事工有實質影響。",
    number: 85,
    category: "Giving",
  },
  {
    textContent:
      "I like to find small things that need to be done and often do them without being asked. 我喜歡找到需要做的小事，並經常在沒有被要求的情況下做。",
    number: 86,
    category: "Helps",
  },
  {
    textContent:
      "I enjoy entertaining people and opening my home to others. 我喜歡招待人，並向他人敞開我的家。",
    number: 87,
    category: "Hospitality",
  },
  {
    textContent:
      "When I hear about needy situations, I feel burdened to pray. 當我聽到有需要的情況時，我感到有負擔要祈禱。",
    number: 88,
    category: "Intercession",
  },
  {
    textContent:
      "I have suddenly known some things about others, but did not know how I knew them. 我突然知道一些關於別人的事情，但不知道我是怎么知道的。",
    number: 89,
    category: "Knowledge",
  },
  {
    textContent:
      "I influence others to perform to the best of their capability. 我影響他人發揮他們的最大能力。",
    number: 90,
    category: "Leadership",
  },
  {
    textContent:
      "I can look beyond a person’s handicaps or problems to see a life that matters to God. 我可以超越一個人的殘疾或問題，看到一個對上帝重要的生命。",
    number: 91,
    category: "Mercy",
  },
  {
    textContent:
      "I like people who are honest and will speak the truth. 我喜歡誠實的人，並會說出真相。",
    number: 92,
    category: "Prophecy",
  },
  {
    textContent:
      "I enjoy giving guidance and practical support to a small group of people. 我喜歡給一小群人指導和實際支持。",
    number: 93,
    category: "Shepherding",
  },
  {
    textContent:
      "I can communicate scripture in ways that motivate others to study and want to learn more. 我可以以激勵他人學習並想要更多學習的方式傳達經文。",
    number: 94,
    category: "Teaching",
  },
  {
    textContent:
      "I give practical advice to help others through complicated situations. 我給予實際的建議，幫助他人度過複雜的情況。",
    number: 95,
    category: "Wisdom",
  },
  {
    textContent:
      "I enjoy learning about how organizations function. 我喜歡了解組織如何運作。",
    number: 96,
    category: "Administration",
  },
  {
    textContent: "I enjoy pioneering new undertakings. 我喜歡開創新事業。",
    number: 97,
    category: "Apostleship",
  },
  {
    textContent:
      "I am good at and enjoy working with my hands. 我擅長並喜歡動手做事。",
    number: 98,
    category: "Craftsmanship",
  },
  {
    textContent: "I am creative and imaginative. 我有創造力和想像力。",
    number: 99,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can identify preaching, teaching, or communication that is not biblically true. 我可以識別不符合聖經真理的講道，教導或溝通。",
    number: 100,
    category: "Discernment",
  },
  {
    textContent:
      "I like motivating others to take steps for spiritual growth. 我喜歡激勵他人採取精神成長的步驟。",
    number: 101,
    category: "Encouragement",
  },
  {
    textContent:
      "I openly and confidently tell others what Christ has done for me. 我公開且自信地告訴別人基督為我做了什麼。",
    number: 102,
    category: "Evangelism",
  },
  {
    textContent:
      "I am regularly challenging other to trust God. 我經常挑戰其他人信任上帝。",
    number: 103,
    category: "Faith",
  },
  {
    textContent:
      "I give generously due to my commitment to stewardship. 我由於對管理的承諾而慷慨。",
    number: 104,
    category: "Giving",
  },
  {
    textContent:
      "I feel comfortable being a helper, assisting others to do their job more effectively. 我感到舒適成為助手，幫助他人更有效地完成工作。",
    number: 105,
    category: "Helps",
  },
  {
    textContent:
      "I do whatever I can to make people feel that they belong. 我盡我所能讓人們感到自己屬於。",
    number: 106,
    category: "Hospitality",
  },
  {
    textContent:
      "I am honored when someone asks me to pray for them. 當有人請我為他們祈禱時，我感到榮幸。",
    number: 107,
    category: "Intercession",
  },
  {
    textContent:
      "I discover important Biblical truths when reading or studying. 我在閱讀或學習時發現重要的聖經真理。",
    number: 108,
    category: "Knowledge",
  },
  {
    textContent:
      "I am able to cast a vision that others want to be a part of. 我能夠提出一個讓其他人想參與的願景。",
    number: 109,
    category: "Leadership",
  },
  {
    textContent:
      "I enjoy bringing hope and joy to people living in difficult circumstances. 我喜歡給生活在困難環境中的人帶來希望和喜樂。",
    number: 110,
    category: "Mercy",
  },
  {
    textContent:
      "I will speak God’s truth, even in places where it is unpopular or difficult. 我會說出上帝的真理，即使在不受歡迎或困難的地方。",
    number: 111,
    category: "Prophecy",
  },
  {
    textContent:
      "I can gently restore wandering believers to faith and fellowship. 我可以溫和地恢復流離的信徒的信仰和團契。",
    number: 112,
    category: "Shepherding",
  },
  {
    textContent:
      "I can present information and skills to others at a level that makes it easy for them to grasp and apply to their lives. 我可以將信息和技能以一個使他們易於理解並應用到生活中的水平呈現給其他人。",
    number: 113,
    category: "Teaching",
  },
  {
    textContent:
      "I can apply Scriptural truth that others regard as practical and helpful. 我可以應用經文真理，其他人認為是實用和有幫助的。",
    number: 114,
    category: "Wisdom",
  },
  {
    textContent:
      "I can visualize a coming event, anticipate potential problems, and develop backup plans. 我可以想像即將到來的事件，預見潛在問題，並制定備用計劃。",
    number: 115,
    category: "Administration",
  },
  {
    textContent:
      "I am able to orchestrate or oversee several church ministries. 我能夠組織或監督幾個教會事工。",
    number: 116,
    category: "Apostleship",
  },
  {
    textContent:
      "I am able to design and construct things that help the church. 我能夠設計和建造有助於教會的事物。",
    number: 117,
    category: "Craftsmanship",
  },
  {
    textContent:
      "I regularly need to get alone to reflect and develop my imagination. 我經常需要獨處來反思和發展我的想像力。",
    number: 118,
    category: "Creative Communication",
  },
  {
    textContent:
      "I can sense when demonic forces are at work in a person or situation. 我可以感覺到魔鬼在一個人或情況中起作用。",
    number: 119,
    category: "Discernment",
  },
  {
    textContent:
      "I am able to challenge or rebuke others in order to foster spiritual growth. 我能夠挑戰或指責他人以促進精神成長。",
    number: 120,
    category: "Encouragement",
  },
  {
    textContent:
      "I seek opportunities to talk about spiritual matters with unbelievers. 我尋求與非信徒談論屬靈事務的機會。",
    number: 121,
    category: "Evangelism",
  },
  {
    textContent:
      "I can move forward in spite of opposition or lack of support when I sense God’s blessing on an undertaking. 我可以在感覺到上帝祝福的事業中，盡管遇到反對或缺乏支持，我仍然可以前進。",
    number: 122,
    category: "Faith",
  },
  {
    textContent:
      "I believe I have been given an abundance of resources so that I may give more to the Lord’s work. 我相信我已經得到了豐富的資源，以便我可以給予主的工作更多。",
    number: 123,
    category: "Giving",
  },
  {
    textContent:
      "I readily and happily use my natural skills to help wherever needed. 我樂意並高興地使用我的天賦技能來幫助任何需要的地方。",
    number: 124,
    category: "Helps",
  },
  {
    textContent:
      "I can make people feel at ease even in unfamiliar surroundings. 我可以讓人們即使在陌生的環境中也感到輕鬆自在。",
    number: 125,
    category: "Hospitality",
  },
  {
    textContent:
      "I often see specific results in direct response to my prayers. 我經常看到對我的祈禱的直接回應。",
    number: 126,
    category: "Intercession",
  },
  {
    textContent:
      "I confidently share my knowledge and insights with others. 我自信地與他人分享我的知識和見解。",
    number: 127,
    category: "Knowledge",
  },
  {
    textContent:
      "I figure out where we need to go and help others to get there. 我找出我們需要去哪裡，並幫助其他人到達那裡。",
    number: 128,
    category: "Leadership",
  },
  {
    textContent:
      "I enjoy doing practical things for others who are in need. 我喜歡為有需要的人做實際的事情。",
    number: 129,
    category: "Mercy",
  },
  {
    textContent:
      "I feel compelled to expose sin when I see it and challenge people to repent. 當我看到罪惡時，我感到有必要揭露罪惡並挑戰人們悔改。",
    number: 130,
    category: "Prophecy",
  },
  {
    textContent:
      "I enjoy patiently but firmly nurturing others as believers. 我喜歡耐心但堅定地培育其他人成為信徒。",
    number: 131,
    category: "Shepherding",
  },
  {
    textContent:
      "I enjoy explaining things to people so that they can grow. 我喜歡向人們解釋事情，以便他們可以成長。",
    number: 132,
    category: "Teaching",
  },
  {
    textContent:
      "I have insights into how to solve problems that others do not see. 我對如何解決其他人看不到的問題有見解。",
    number: 133,
    category: "Wisdom",
  },
];

export default useQuestions;
