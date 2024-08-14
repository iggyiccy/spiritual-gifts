import { useMemo } from "react";

export type CategoryName =
  | "Wisdom 智慧"
  | "Administration 管理"
  | "Apostleship 使徒"
  | "Craftsmanship 工藝"
  | "Creative Communication 創意傳播"
  | "Discernment 辨別"
  | "Encouragement 鼓勵"
  | "Evangelism 傳福音"
  | "Faith 信心"
  | "Giving 奉獻"
  | "Helps 幫助"
  | "Hospitality 好客"
  | "Intercession 代禱"
  | "Knowledge 知識"
  | "Leadership 領導"
  | "Mercy 憐憫"
  | "Prophecy 預言"
  | "Shepherding 牧養"
  | "Teaching 教導";

export interface Category {
  name: CategoryName;
  description: JSX.Element;
  shortName: string;
}

const Verse = ({ verse }: { verse: string }) => (
  <a
    href={`https://www.biblegateway.com/passage/?search=${verse}&version=NASB`}
    rel="noreferrer noopener"
    target="_blank"
  >
    {verse}
  </a>
);

const useCategories = (): Category[] =>
  useMemo<Category[]>(
    () =>
      (
        [
          {
            name: "Wisdom 智慧",
            description: (
              <div>
                <p>
                  The spiritual capability to apply spiritual knowledge
                  effectively. (<Verse verse="1 Corinthians 12:8" />)
                  有效地應用屬靈知識的屬靈能力。（哥林多前書 12:8）
                </p>
                <p>
                  Distinctives: A person with this gift enjoys skillfully
                  applying biblical knowledge to a variety of life situations.
                  They seem to have more common sense than the average person.
                  特點：有這種恩賜的人能夠巧妙地將聖經知識應用於不同的生活處境。
                  他似乎比一般人更有處世的智慧。
                </p>
                <p>
                  Cautions: For God's knowledge to go out, it must first come
                  in. Don't sit on your Bible knowledge as though you "have
                  enough." This gift of wisdom has greater impact as your
                  knowledge of God's Word grows and as you become more involved
                  in other people's lives.
                  注意：若要講出神的知識，你必須先領受它。
                  不要因為你的聖經知識「已經足夠」而停頓下來。
                  隨著你更了解神的話語和更多參與別人的生活，
                  這份智慧的恩賜的影響力亦會加增。
                </p>
              </div>
            ),
          },
          {
            name: "Administration 管理",
            description: (
              <div>
                <p>
                  The spiritual capability to understand what makes an
                  organization function, and the special ability to plan and
                  execute procedures that increase the church's organizational
                  effectiveness. (<Verse verse="1 Corinthians 12:28" />)
                  明白是甚麼使一個團體運作，
                  以及為增進教會的組織效率，構思並執行計劃的屬靈能力。
                  （哥林多前書 12:28）
                </p>
                <p>
                  Distinctives: A person with this gift understands the
                  practical steps that need to be taken in order to realize a
                  given objective. Gifted administrators are committed to
                  effectiveness and efficiency. They can look at a situation and
                  bring order to chaos, keeping the overall picture in mind.
                  Administrators are needed who can "steward" the resources of
                  the local church. These resources include money, buildings,
                  staff, and volunteers. Though a person with this gift is
                  mostly behind the scenes, they enable the "up front"
                  ministries and gifts to be more efficient and effective.
                  特點：有這份恩賜的人了解實現特定目標而必須採取的實際步驟。
                  有恩賜的行政人員重視效能和效率。
                  他能在不同情況下為混亂帶來秩序，顧全整體的利益。
                  地方教會需要懂得管理資源的「管家」。
                  這些資源包括金錢、建築物、教會同工和義工。
                  雖然擁有這種恩賜的人大多在幕後，
                  他卻讓「台前」的事工和恩賜能更有效能和效率。
                </p>
                <p>
                  Cautions: If you have this gift, be careful that you don't
                  stifle the activity of the Holy Spirit in your own life. Good
                  administrators are willing to make a course change if the
                  leadership calls for a shift in plans. This requires a
                  submissive spirit to leadership. There is a danger among
                  administrative people to "use" others to reach a goal. Don't
                  merely strive for the ends; appreciate what God wants to do
                  through the means. Remember that all people are in a process.
                  注意：如果你擁有這種恩賜，請留意不要扼殺聖靈在你生活中的工作。
                  好的行政人員願意隨從領導層的要求來改變計劃。
                  這需要對領導層存順從的心。
                  行政人員有陷入「利用」其他人達致目標的危機。
                  不要單單放眼結果；要領略神藉著過程成就了甚麼。
                  請記住，每個人的生命都是一個過程。
                </p>
              </div>
            ),
          },
          {
            name: "Apostleship 使徒",
            description: (
              <div>
                <p>
                  The spiritual capability to start churches and oversee their
                  development. (<Verse verse="1 Corinthians 12:28" />;{" "}
                  <Verse verse="Ephesians 4:11" />)
                  創辦教會並監督它們的發展的屬靈能力。
                  （哥林多前書 12:28；以弗所書 4:11）
                </p>
                <p>
                  Distinctives: Likened to modern day missionaries, a person
                  with this gift has a heart to preach the gospel to people in a
                  different cultural setting who haven't heard the Gospel. They
                  have a desire to go across cultures and may enjoy starting new
                  churches. "Cross-cultural" work can include inner city or
                  international ministries. The authority of the apostle is
                  based on the Word and the body of believers that sends them
                  out.
                  特點：等同現代宣教士，擁有這種恩賜的人熱衷於向不同文化背景、
                  未聽過福音的人傳福音。
                  他渴望跨越文化，並可能喜歡創辦新的教會。
                  「跨文化」工作可以是貧民區或國際事工。
                  使徒的權威建基於神的話及差派他出去的信眾。
                </p>
                <p>
                  Cautions: You may desire to cut a new path before you are
                  ready to move away from your present ministry efforts. Make
                  certain that there are appropriate provisions for the people
                  that God has entrusted you in your present ministry.
                  注意：你或許還未準備好離開現有的事工，便想去開闢另一條新路。
                  請確保你已經將適當的資源預留給神在現有事工中委託給你的人。
                </p>
              </div>
            ),
          },
          {
            name: "Craftsmanship 工藝",
            description: (
              <div>
                <p>
                  The spiritual capability to enhance ministry through the
                  creative construction of necessary tools for ministry. (
                  <Verse verse="Exodus 31" />)
                  利用創意製作事工所需的工具來增強事工的屬靈能力。
                  （出埃及記 31）
                </p>
                <p>
                  Distinctives: A person with this gift is a hands-on person. He
                  or she may be a builder, architect, designer; someone who
                  enhances ministry by his other unique skills. The gift can be
                  expressed in carpentry, metalworking, and other constructive
                  skills.
                  特點：有這種恩賜的人是一個親力親為的人。
                  他可能是個建築工人、建築師、設計師；
                  他運用自己的獨特技能來提升事工。
                  這種恩賜可以在木工、金工和其他建設性技能上表露出來。
                </p>
                <p>
                  Cautions: If you have this gift, don't belittle your
                  contribution as insignificant or not spiritual because it's so
                  tangible. Don't separate your opportunities to personally
                  minister to people from the ministry project that you're
                  working on.
                  注意：如果你擁有這種恩賜，
                  請不要貶低你的貢獻為微不足道或不屬靈，因為它是如此實在。
                  不要將幫助人的機會與你正在參與事工分割開來。
                </p>
              </div>
            ),
          },
          {
            name: "Creative Communication 創意傳播",
            description: (
              <div>
                <p>
                  The spiritual capability to communicate God's truth through a
                  variety of art forms. (The Holy Spirit's expression is in
                  various forms in the Bible - poetry, song, narrative, parable,
                  metaphor, etc.)
                  通過各種藝術形式傳達神的真理的屬靈能力。
                  （聖靈在聖經中採用了各種表達方式 ——
                  詩章、頌詞、敘事、比喻、隱喻等）
                </p>
                <p>
                  Distinctives: A person with this gift is very creative and
                  imaginative. This person is able to communicate truths in
                  unique ways from a variety of angles. They tend to be visual
                  thinkers. Areas of ministry include programming, sound,
                  lighting, video, drama, music, etc. Public announcements of
                  events may be an application, with the ability to design
                  attractive and catchy flyers to attract more people to events.
                  特點：有這種恩賜的人非常有創意和想像力。
                  這個人能夠以獨特的方式從不同角度傳遞真理。
                  他傾向以視覺進行思考。
                  事工領域包括寫程式、音響、燈光、視訊、戲劇、音樂等。
                  這恩賜可能適用於推廣對外的活動上，例如設計搶眼的傳單，
                  吸引更多人參加活動。
                </p>
                <p>
                  Cautions: Be careful not to be artsy for art's sake. Use your
                  gift to promote God and his kingdom, not yourself. Creative
                  communicators stray when they try to create and do things that
                  enamor people with the art form and the artist rather than the
                  message.
                  注意：切勿只為了藝術而創作藝術。
                  用你的恩賜來促進神和祂的國度，而不是你自己。
                  當創意傳播者嘗圖以他的創作讓人迷戀於作品或創作者，
                  而不是專注在信息上，這便是走歪了。
                </p>
                <p>
                  Creative communicators need to be flexible and willing to
                  submit to the wishes of the people around them. Sometimes they
                  aren't team players. This is an area that God will address.
                  The fact that you have visible talents where others don't does
                  not mean you should have full say in music, drama, or other
                  artistic areas.
                  創意傳播者要有彈性，並且願意順服身邊的人的意願。
                  有時他不懂得合作。這是神要管教的地方。
                  雖然你明顯比別人有才能，但這並不意味著你必然在音樂、
                  戲劇或其他藝術領域掌握大權。
                </p>
              </div>
            ),
          },
          {
            name: "Discernment 辨別",
            description: (
              <div>
                <p>
                  The spiritual capability to distinguish between truth and
                  error, and to identify deception in character and in
                  relationships. (
                  <Verse verse="1 Corinthians 12:10" />, "distinguishing between
                  spirits.")
                  區分真理與謬誤，並在性格上和關係中辨認欺騙的屬靈能力。
                  （哥林多前書 12:10，辨別諸靈）
                </p>
                <p>
                  Distinctives: Discernment is a keen sense of insight that
                  enables someone to recognize potential or actual problems in
                  relationships, imbalance in teachings, the presence of demonic
                  activity, or misuse of scripture. Discernment must be based on
                  knowing Biblical truth. Once this person knows the truth, they
                  can clearly pick out problems or important steps that need to
                  be taken.
                  特點：辨別恩賜是一種敏銳的洞察力，
                  讓人能辨認出關係中的潛在或實際問題，
                  教導中的偏差，鬼魔的工作，或經文被誤用。
                  辨別的能力建基於聖經真理。
                  當人知道真理，
                  便能明確地找出問題或是須採取的重要措施。
                </p>
                <p>
                  Cautions: Many of us have known people that are very
                  discerning and perhaps gifted, but what they do with that
                  discernment is far from God's will. They have great insight,
                  but then take on the role of the Holy Spirit to expose and
                  correct problems in the other person's life on their own time
                  schedule. If you have this gift, learn to use it skillfully by
                  seeking help from others who are gifted in wisdom, counseling,
                  and shepherding.
                  注意：我們或許都認識滿有辨別能力或恩賜的人，
                  但他們如何運用這能力卻遠遠偏離了神的心意。
                  他們擁有強大的洞察力，卻僭越了聖靈的角色，
                  按照自己的時間表矯正別人生命中的問題。
                  如果你擁有這種恩賜，請向那些有智慧、
                  輔導及牧養恩賜的人㝷求協助，
                  學懂如何有技巧地運用它。
                </p>
              </div>
            ),
          },
          {
            name: "Encouragement 鼓勵",
            description: (
              <div>
                <p>
                  The spiritual capability to reassure, strengthen, and affirm
                  those who are discouraged or wavering in their faith. (
                  <Verse verse="Romans 12:8" />)
                  使信仰上感挫敗或信心動搖的人獲安撫、堅固和肯定的屬靈能力。
                  （羅馬書 12:8）
                </p>
                <p>
                  Distinctives: A person with this gift urges others to apply
                  the truth in their lives; it is not just a gift of
                  friendliness and back-slapping. This person is able to get
                  alongside wavering or discouraged people and effectively
                  challenge them to be all they can be spiritually. When you are
                  around these people, you feel like keeping on track and
                  continuing to fight the good fight.
                  特點：擁有這種恩賜的人鼓勵他人把信仰應用於生活上；
                  這份恩賜不止於做朋友或打招呼。
                  這個人會與信心動搖或有挫敗感的人同行，
                  挑戰他們在靈命上竭盡所能。
                  當你身邊有這種人，你會想專注前路，繼續打那美好的仗。
                </p>
                <p>
                  This person tends to be very positive, full of faith,
                  reassuring to the unstable. They also tend to be
                  results-oriented, concerned with consistency of practice with
                  profession, very practical and pragmatic ("What works?"). They
                  tend to be expressive and are often viewed as an "emoter" by
                  other people. Encouragers understand the importance of
                  emotions, but are concerned with knowing and doing God's will
                  as well.
                  此人往往非常樂觀，充滿信心，在不穩定中安定人心。
                  他傾向以結果導向，重視言行一致，
                  非常實際和務實（「甚麼是可行的？」）。
                  他有較強的表現力，亦經常被他人視為「情緒化」。
                  鼓勵者了解情感的重要性，但也看重認識和遵行神的旨意。
                </p>
                <p>
                  Cautions: If you have this gift, you may tend to make things
                  too simple. For example, when someone is hurting, quoting{" "}
                  <Verse verse="Romans 8:28" />
                  ("and we know that God causes all things to work together for
                  good to those who love God, to those who are called according
                  to His purpose") is too simple. This is a great truth but
                  encouragement in a person's walk at that moment may not be
                  what's needed. The individual may simply need your company.
                  注意：如果你擁有這種恩賜，你可能會過份簡化事情。
                  例如，當某人受到傷害時，引用羅馬書 8:28
                  （「我們曉得萬事都互相效力，叫愛神的人得益處，
                  就是按他旨意被召的人」）就過於簡單了。
                  這是一個偉大的真理，但在那一刻卻未必是他行走天路所需的鼓勵。
                  那個人可能只需要你的陪伴。
                </p>
                <p>
                  Your optimism can make others feel as if you haven't really
                  connected; it makes them wonder if you really understand. Take
                  time to learn about what they're going through before helping
                  to build them up.
                  你的樂觀或許會讓別人覺得和你有距離；
                  他們會質疑你是否真的明白他們。
                  在幫助別人成長之前，花點時間了解他們正在經歷的事情。
                </p>
              </div>
            ),
          },
          {
            name: "Evangelism 傳福音",
            description: (
              <div>
                <p>
                  The spiritual capability to effectively communicate the
                  message of Christ to non-Christians so they can respond in
                  faith and move toward discipleship. (
                  <Verse verse="Ephesians 4:11" />)
                  有效地將基督的信息傳給非基督徒的屬靈能力，
                  好讓他們能以信心作出回應並成為門徒。
                  （以弗所書 4:11）
                </p>
                <p>
                  Distinctives: A person with this gift has a strong desire to
                  turn conversations to spiritual matters and has an instinctive
                  ability to do this. The evangelist's desire to share the
                  Gospel with non-believers is often greater than being involved
                  with the grounding and discipleship of believers.
                  特點：擁有這種恩賜的人強烈地渴望將對話轉向屬靈的話題，
                  而且有如此做的本能。
                  傳道者渴望未信者分享福音的情度，
                  往往過於參與建立信徒和門徒訓練。
                </p>
                <p>
                  All Christians are called to witness to non-believers (
                  <Verse verse="1 Peter 3:15" />
                  ). The non-gifted "witnesser" will probably see fewer results
                  and be less "at home" sharing the Gospel than a gifted
                  evangelist.
                  每個基督徒都被要求向未信者作見證。
                  比起一個有恩賜的傳道者，
                  沒有恩賜的「見證人」可能會看到較少的果效，
                  而且在分享福音時覺得較「不自在」。
                  （彼得前書 3:15）
                </p>
                <p>
                  Cautions: Avoid stereotypes (as with all the gifts) as to the
                  environment or ministry in which this would be used. Most
                  people won't be knocking on doors or using cold-medium
                  evangelism. Don't be satisfied with just one approach. Be
                  willing to read about evangelism and talk with other
                  Christians about their approach so that God can develop your
                  gift, using it in a variety of ways. Be careful that a
                  critical spirit doesn't emerge because other believers aren't
                  speaking to three to five people per week - that is gift
                  projection. You can be hard on others when you don't see them
                  expressing themselves with the same intensity in the areas
                  that you've been gifted.
                  注意：避免規限此恩賜所適用的環境或事工（其他恩賜亦一樣）。
                  大多數人不會遂戶敲門或向陌生人傳福音。
                  不要滿足於單一種方法。
                  嘗試閱讀有關傳福音的內容，並與其他基督徒討論他們的方法，
                  好讓神能發展你的恩賜，並以不同方式使用它。
                  請留意，不要因為其他信徒沒有每週向三至五個人傳福音便作出批評
                  —— 這是恩賜投射。
                  在你有恩賜的領域中，當你看到別人不及你落力時，
                  你可能會苛刻對待他們。
                </p>
              </div>
            ),
          },
          {
            name: "Faith 信心",
            description: (
              <div>
                <p>
                  The spiritual capability to trust God's will and act on it
                  with unwavering belief in His ability. (
                  <Verse verse="1 Corinthians 12:9" />)
                  相信神的旨意，且因著深信神的能力而採取行動的屬靈能力。
                  （哥林多前書 12:9）
                </p>
                <p>
                  Distinctives: This gift is often expressed in a strong prayer
                  life. A person with this gift lives in constant awareness of
                  the reality of the supernatural as well as the natural. This
                  person is certain that God will bring to pass what He promises
                  and is therefore reliable during trials. He or she can also
                  help others see God working in trials.
                  特點：這種恩賜往往形於強建的禱告生活。
                  擁有這種恩賜的人無時無刻對超自然和自然現實都有所認知。
                  這個人確信神必實現祂的應許，在試煉中是可靠的。
                  他還可以幫助其他人看到神在試煉中的作為。
                </p>
                <p>
                  Cautions: Remember that faith is active. It isn't only God's
                  work; we must be willing to obey His commands. God works
                  through people in reaching the lost and in helping Christians
                  grow. If you have this gift, you might look and critique your
                  group, asking, "Why doesn't our group have the vitality I read
                  about in <Verse verse="Acts 2" />? Is it because the Spirit is
                  different or absent?" Recognize that God is at work in all
                  churches and that human action does matter.
                  注意：記住，信心是帶有行動的。
                  除了神在作工，我們也必須願意遵從祂的命令。
                  神透過人來接觸失喪的人並幫助基督徒成長。
                  如果你有這種恩賜，你可以審視並批評你的小組，問：
                  「為甚麼我們的小組沒有我在使徒行傳 2 章中讀到的活力？
                  是因為聖靈變了或不存在嗎？」
                  請認識到神在每個教會中工作，而且人的行動是重要的。
                </p>
              </div>
            ),
          },
          {
            name: "Giving 奉獻",
            description: (
              <div>
                <p>
                  The spiritual capability to contribute money and material
                  resources to the work of the Lord with cheerfulness and
                  liberality. (<Verse verse="Romans 12:8" />)
                  樂意、慷慨地為主的事工奉獻金錢和物資的屬靈能力。
                  （羅馬書 12:8）
                </p>
                <p>
                  Distinctives: God has given the person with this gift the
                  ability to give well beyond normal levels, either through
                  wealth or faith. God has often blessed this person with
                  financial ability through increased income or other means in
                  order to build up the Kingdom of God. Serving others this way
                  causes a sense of joy, a sense of confidence in leadership and
                  a desire to encourage that ministry in others and do it with
                  liberality. All Christians are called to give, but some are
                  compelled to give much more. The gifted giver is often asking,
                  "How can I free up the most amount of resources to maximize
                  their potential for kingdom use?" Often gifted givers try to
                  help others to see success in their own financial stewardship.
                  特點：神賦予了擁有這種恩賜的人遠超於常人的奉獻能力，
                  因財富或信心而奉獻。
                  神往往透過收入加增或其他方式來賜福給這個有經濟能力的人，
                  藉以建立神的國度。
                  以這種方式服務他人會帶來喜樂，建立對領導層的信任，
                  並產生一種鼓勵他人慷慨奉獻的意願。
                  每個基督徒都被要求去奉獻，但有些卻被感動去獻上更多。
                  有恩賜的奉獻者經常會問：「我怎樣才能釋放最多的資源，
                  在國度中發揮最大限度的潛力？」
                  有恩賜的奉獻者常常試圖幫助他人在自己的財務管理上取得成功。
                </p>
                <p>
                  Cautions: If you have this gift, you might not see it as a
                  spiritual ministry. Since all Christians are called to give,
                  you may believe that you're only doing a perfunctory, mandated
                  service. Or you may think that giving money is too tangible to
                  be a spiritual gift. Realize that financial resources are
                  necessary in ministry to bring the lost to Christ. Be careful
                  that you don't inadvertently use resources for "personal
                  agenda" giving within the church. Allow the leadership to
                  dispense those resources as it sees fit. Be a generous giver
                  and stimulate others to give.
                  注意：如果你擁有這種恩賜，你可能不會將其視為屬靈事工。
                  由於所有基督徒都被要求去奉獻，
                  你也許認為你只是在履行一個遁例、必須的責任。
                  或者你認為捐錢太物質化了，不能算為屬靈恩賜。
                  請意識到教會事工需要經濟資源才能帶領失喪的人到基督面前。
                  請小心，不要無意中按「個人心意」將資源捐贈給教會。
                  允許領導階層適切地分配這些資源。
                  做一個慷慨的給予者並激勵他人奉獻。
                </p>
              </div>
            ),
          },
          {
            name: "Helps 幫助",
            description: (
              <div>
                <p>
                  The spiritual ability to attach spiritual value to the
                  accomplishment of practical and necessary tasks which support
                  the body of Christ. (<Verse verse="Romans 12:7" />;{" "}
                  <Verse verse="1 Corinthians 12:28" />)
                  對於支持基督身體的實務和必要工作被完成，
                  視為有屬靈價值的屬靈能力。
                  （羅馬書 12:7；哥林多前書 12:28）
                </p>
                <p>
                  Distinctives: A person with this gift sees the spiritual value
                  of and finds God's purposes in the practical aspects of
                  ministry and living. Someone with this gift might help to
                  maintain a facility or assist a teacher with some household
                  task to free him or her up for study.
                  特點：擁有這種恩賜的人在事工和生活的實務層面上看見
                  屬靈價值和神的心意。
                  擁有這種恩賜的人可能會幫忙維護設施，
                  或協助一位老師做些家務，好讓對方有時間進修。
                </p>
                <p>
                  The gift of helps is a tangible expression of what the
                  non-believing world rejects - helping others for the sheer
                  satisfaction of helping. A person with this gift edifies the
                  body of Christ by supporting others in their pursuit of
                  ministry. Like our Helper, the Holy Spirit, gifted helpers
                  derive enjoyment out of serving others.
                  幫助的恩賜所表現的是不信世界所拒絕的 ——
                  純粹因為助人帶來的滿足感而幫助人。
                  擁有這種恩賜的人透過支持他人的事工而造就基督的身體。
                  正如我們的保惠師聖靈一樣，
                  有恩賜的幫助者從服侍他人中獲得樂趣。
                </p>
                <p>
                  Cautions: If you have this gift, you may often need help from
                  the leadership to see clearly what will be most supportive for
                  the church. You may also struggle with false humility. Because
                  the effects are less dramatic and tangible, the tendency is to
                  undermine the spiritual significance of your gift. The
                  challenge is to think through your acts of service beyond
                  their functional end. (For example, an individual helping
                  clean walls and painting in a home to get ready for Home
                  Church.)
                  注意：如果你擁有這種恩賜，
                  你可能經常需要依賴領導階層才能看清楚甚麼最能支持教會。
                  你也可能會因假謙卑而掙扎。
                  由於你的恩賜的果效不太顯眼或實在，你會傾向低估它的屬靈意義。
                  挑戰自己思考服侍背後的意義，不要只停留在所做的事上。
                  （例如，一個人在家中清潔和粉刷牆壁，為家庭教堂做準備。）
                </p>
              </div>
            ),
          },
          {
            name: "Hospitality 好客",
            description: (
              <div>
                <p>
                  The spiritual capability to personally care for people by
                  providing fellowship, food, or shelter. (
                  <Verse verse="1 Peter 4:9" />)
                  透過提供團契、食物或住所來親自照顧人們的屬靈能力。
                  （彼得前書 4:9）
                </p>
                <p>
                  Distinctives: A person with this gift enjoys providing a
                  caring, warm atmosphere for those whom God is calling to the
                  church. They have an ability to connect with people; they
                  provide environments where people feel welcome. This person
                  tends to gravitate toward those who are standing off to the
                  side, looking confused. A good host loves to have people to
                  their home and is more preoccupied with the comfort of others
                  than the image of their home. This gift is especially needed
                  in a large church. One of the more frequent questions asked by
                  newer people is, "Can a church this size care for me
                  personally?"
                  特點：擁有這種恩賜的人喜歡為神呼喚到教會的人提供一個關懷、
                  溫暖的環境。
                  他能與人連繫；他提供讓人感到受歡迎的環境。
                  此人往往會特別留意那些站在一旁、滿臉茫然的人。
                  一位好的主人喜歡別人到家裡作客，
                  並且關心別人的舒適度過於自己家居的形象。
                  大型教會尤其需要這份恩賜。
                  新來賓最常問的問題之一是：「這麼大的教會能個別關顧我嗎？」
                </p>
                <p>
                  People with the gift of hospitality can have incredible impact
                  on children. As someone with this gift opens up their house
                  for others, their children see the value of fellowship and
                  using material blessings as a stewardship for the Lord's work.
                  Of course this doesn't mean that they never get time alone
                  with their family at home.
                  擁有好客恩賜的人可以對兒女產生巨大的影響力。
                  當擁有這種恩賜的人向他人開放自己的家時，
                  他的兒女就會看到團契的價值，和如何善用神所賜的物質作主工。
                  當然，這並不意味著他沒有時間與家人獨處。
                </p>
                <p>
                  Cautions: If you have this gift, the challenge is to serve
                  without complaint. Struggles with materialism can suppress the
                  expression of this gift. It can be difficult and tiresome at
                  times. Regularly reflect on the contribution you are making to
                  the work of Christ.
                  注意：如果你擁有這種恩賜，你的挑戰就是要默默服侍而不抱怨。
                  物質主義會抑制你發揮這恩賜。有時你或許會感到困倦或厭煩。
                  定期反思你對基督的工作所作出的貢獻。
                </p>
              </div>
            ),
          },
          {
            name: "Intercession 代禱",
            description: (
              <div>
                <p>
                  The divine enablement to consistently pray on behalf of and
                  for others, seeing frequent and specific results. (
                  <Verse verse="Romans 8:26-27" />;{" "}
                  <Verse verse="John 17:9-26" />)
                  從神而來，持續為他人代禱並經常看到具體結果的能力。
                  （羅馬書 8:26-27；約翰福音 17:9-26）
                </p>
                <p>
                  Distinctives: A person with this gift feels compelled to
                  earnestly pray on behalf of someone or a cause. They have a
                  daily awareness of spiritual battles being waged and are
                  convinced God moves in direct response to prayer. They pray in
                  response to the leading of the Spirit.
                  特點：擁有這種恩賜的人感到有必要為某人或某件事竭力禱告。
                  他們每天都意識到屬靈爭戰正在發生，且相信神會直接回應禱告。
                  他們的禱告是回應聖靈的引導。
                </p>
                <p>
                  Cautions: This person should avoid feeling his/her gifts is
                  not valued and should avoid using prayer as an escape from
                  fulfilling responsibilities. They will need to avoid a
                  “holier-than-thou” attitude sometimes caused by extended time
                  of prayer and spiritual intimacy with God.
                  注意：此人應避免覺得自己的恩賜不受重視，
                  並避免利用祈禱來逃避履行責任。
                  縱使他長時間祈禱和與神有親密接觸，
                  卻要避免產生「自命清高」的態度。
                </p>
              </div>
            ),
          },
          {
            name: "Knowledge 知識",
            description: (
              <div>
                <p>
                  The divine empowerment to accumulate and analyze information
                  effectively. (<Verse verse="1 Corinthians 12:8" />)
                  從神而來，能夠有效累積和分析資訊的能力。
                  （哥林多前書 12:8）
                </p>
                <p>
                  Distinctives: A person with this gift enjoys studying, doing
                  research, and digging for nuggets of truth. They like to
                  assess and accumulate information, facts, and data. They are
                  great helpers for teachers and Word-oriented programs. "Word
                  of Knowledge" indicates that they can communicate that truth
                  as well, even if not through a teaching or prophetic gift.
                  特點：擁有這種恩賜的人喜歡學習、研究和發掘真理。
                  他喜歡評估和累積資訊、事實和數據。
                  他是教師和研經活動中的好幫手。
                  即使不是透過教導或預言的恩賜，
                  他可藉著「知識的言語」傳達真理，
                </p>
                <p>
                  Cautions: If you have this gift, watch for a tendency to be
                  reclusive. You will have to balance time alone studying with
                  pursuit of close relationships.
                  注意：要是你擁有這種恩賜，請注意你那份孤僻的傾向。
                  你必須平衡獨自學習和建立緊密關係的時間。
                </p>
              </div>
            ),
          },
          {
            name: "Leadership 領導",
            description: (
              <div>
                <p>
                  The spiritual capability to instill vision, to motivate, and
                  to direct people to accomplish the work of the ministry. (
                  <Verse verse="Romans 12:8" />)
                  傳遞異象，激勵和指導人們完成事工的屬靈能力。
                  （羅馬書 12:8）
                </p>
                <p>
                  Distinctives: A person with this gift is a "goal setter" in
                  the church. They often sense the direction in which God wants
                  to move the body of Christ. They can then motivate people to
                  move in that direction. Gifted leaders think about and
                  communicate the potential they see in other people. This gift
                  is needed in any effective ministry.
                  特點：擁有這種恩賜的人是教會中的「目標設定者」。
                  他常常感受到神要如何動用基督的身體。
                  然後他便激勵人朝這個方向前進。
                  有恩賜的領袖會思考並分享他在其他人身上看到的潛力。
                  若要事工有效，這種恩賜是必需要的。
                </p>
                <p>
                  Cautions: Realize that good relationships give leaders
                  credibility. People need to have the sense that you have their
                  best interest at heart, that you walk with God and that the
                  vision you have is not of your own concoction. This gift will
                  be proven over time; there needs to be proven faithfulness
                  here. Leaders need the ability to keep moving in the face of
                  put-downs and doubt. Because this is a very visible gift with
                  lots of feedback being given, you'll have to be keenly aware
                  of your motivations for service. You will be tested in this
                  area through success as well as failure. God will want to help
                  you become consistent and diligent in either situation,
                  relying on Him. There may be a strong tendency to draw people
                  to you rather than to God. Remember that all have a sphere of
                  influence and you can take a leadership position without this
                  gift.
                  注意：要認識到良好的關係為領袖帶來公信力。
                  人們需要感受到你關心他們的利益，你與神同行，
                  而你的異像不是自己捏造的。
                  這種恩賜隨著時間的推移而得到引證；你必須證明你的忠心。
                  領袖要能夠在面對貶低和質疑時繼續前進。
                  由於這是種十分外顯的恩賜，會帶來很多回饋，
                  你必須敏銳於自己服侍的動機。
                  不論成功或失敗你都會在這方面接受考驗。
                  神會幫助你在這兩種情況下堅持到底，勤奮事奉，單單依靠祂。
                  你可能有一種強烈的傾向，把人吸引到自己而不是神那裡。
                  請記住，每個人都有一份影響力，即使沒有這種恩賜，
                  你也可以擔任領袖的角色。
                </p>
              </div>
            ),
          },
          {
            name: "Mercy 憐憫",
            description: (
              <div>
                <p>
                  The spiritual capability to minister cheerfully and
                  appropriately to people who are suffering. (
                  <Verse verse="Romans 12:8" />)
                  以喜樂、適切的方式服侍遭受苦難的人的屬靈能力。
                  （羅馬書 12:8）
                </p>
                <p>
                  Distinctives: A person with this gift enjoys serving alongside
                  hurting people. They have a strong desire to remove the pain
                  or discomfort in the lives of others while at the same time
                  remaining strong in their own faith. If this gift isn't
                  exhibited in the body, we're missing a key part of the heart
                  of God.
                  特點：擁有這種恩賜的人樂於服侍受傷害的人。
                  他強烈渴望消除他人生活中的痛苦或不適，與此同時持守堅定的信心。
                  如果教會沒有這種恩賜，我們就缺失了神心意的關鍵部分。
                </p>
                <p>
                  This is different than compassion (a heart for hurting
                  people). Mercy requires coming alongside people on a regular
                  basis, feeling that pain and directing it toward godly action
                  to alleviate that pain. They often work well alongside a
                  prophet whom God has used to expose sin and pain in someone's
                  life. The person with mercy comes next to that person,
                  empathizing deeply with the pain, but offering God's solution
                  for healing.
                  這有別於同情心（關心受傷害的人）。
                  憐憫者會定期與受苦者同行，
                  將那人所感受的痛苦導引到敬虔的行動上，藉以減輕痛苦。
                  他經常與有先知恩賜的人一起工作，
                  因神透過先知揭露某人生活中的罪惡和痛苦。
                  有憐憫恩賜的人來到那人身邊，感同身受那個人的痛苦，
                  提供神的醫治方法。
                </p>
                <p>
                  Cautions: If you have this gift, you probably have a strong
                  emotional component to your relational skills. Often though,
                  when your emotional skills are strong, it is less natural to
                  offer direction and truth based on God's word.
                  注意：如果你擁有這種恩賜，你的交際技巧中可能有很強的情感成分。
                  很多時當你有高超的情感技巧，你未必會按神的話語提供指引和真理。
                </p>
                <p>
                  You may fail to recognize the benefits that difficult times
                  can bring to a person's life. For example, you may overlook
                  how God is using a situation to bring about repentance or
                  restitution. If you act too quickly you may short-circuit what
                  God is trying to do.
                  你也許不能理解到難關能為一個人帶來好處。
                  例如，你可能看不見神正在利用某個情況帶來悔改或復興。
                  如果你行動得太快，你可能會阻礙神的工作。
                </p>
                <p>
                  Be careful you don't become so overwhelmed with others'
                  problems that you don't take care of your own personal
                  obligations.
                  小心不要被別人的問題而壓垮，以致忽略了自己的個人義務。
                </p>
              </div>
            ),
          },
          {
            name: "Prophecy 預言",
            description: (
              <div>
                <p>
                  The spiritual capability to proclaim God's truth with power
                  and clarity in a timely and culturally sensitive fashion for
                  correction, repentance, or edification. (
                  <Verse verse="Romans 12:6" />;{" "}
                  <Verse verse="1 Corinthians 12:10, 28" />;{" "}
                  <Verse verse="Ephesians 4:11" />)
                  能適時地以顧及文化差異的方式，有力且清晰地宣揚神的真理，
                  使人歸正，悔改，被造就的屬靈能力。
                  （羅馬書 12:6；哥林多前書 12:10,28；以弗所書 4:11）
                </p>
                <p>
                  Distinctives: A person with this gift has an amazing ability
                  to understand biblical truth, to apply it to the events and
                  nuances of culture, and to expose the culture in its
                  deception. They may seem like they aren't really compassionate
                  - "they just say the truth and let the chips fall where they
                  may." When they are effective, others often feel uncomfortable
                  because God convicts them through the person with this gift.
                  They are discerning, expressive, desire time alone (to get
                  clarity), opinionated, and authoritative. They often see and
                  articulate what many are oblivious to, or see only dimly.
                  Those with the gift of prophecy express themselves in many
                  ways: speaking publicly, sharing in Home Church, or
                  communicating one-on-one.
                  特點：擁有這種恩賜的人對聖經真理具有驚人的理解能力，
                  能透過真理看各樣文化活動和精髓，並揭露背後的屬靈謊言。
                  他可能看起來缺乏同情心 —— 「他只講真理，後果就順其自然。」
                  當他起作用時，其他人常常會感到不舒服，
                  因為神透過擁有這種恩賜的人來宣告他們的罪。
                  他洞察力強，善於表達，渴望獨處（以澄清問題），
                  堅持己見，滿有權威。
                  他經常看到並表達出許多人忽略，或只隱約看到的事情。
                  擁有預言恩賜的人透過多種方式表達自己：
                  公開演講，在家庭教會中分享，或一對一交流。
                </p>
                <p>
                  Cautions: Beware of lacking compassion. Your commitment to
                  speak the truth may be so strong that you forget to say it
                  with love (
                  <Verse verse="Ephesians 4:15" />,{" "}
                  <Verse verse="1 Corinthians 13" />,{" "}
                  <Verse verse="Romans 12:9ff" />, <Verse verse="1 Peter 4:8" />
                  ). You can discourage people if you're not careful.
                  Nonetheless, remember that the purpose of your gift is to
                  console, encourage, exhort (
                  <Verse verse="1 Corinthians 14:3" />
                  ), even if others may become uncomfortable. Also beware of
                  pride and thinking you're the only one who sees things the way
                  they really are.
                  注意：慎防缺乏同情心。
                  你對說出真理的強烈決心可能會導致你忘記用愛說出來。
                  （以弗所書 4:15；哥林多前書 13；羅馬書 12:9"）
                  如果你不小心的話，你可能會叫人氣餒。
                  儘管如此，請謹記你的恩賜是用來造就、安慰、勸勉人
                  （哥林多前書 14:3），即使別人有可能會感到不舒服。
                  你也要小心驕傲，不要認為自己是唯一能看透事實的人。
                </p>
              </div>
            ),
          },
          {
            name: "Shepherding 牧養",
            description: (
              <div>
                <p>
                  The spiritual capability to guide, care for, and nurture
                  individuals or groups in the body of Christ as they grow in
                  faith. (<Verse verse="Ephesians 4:11" />)
                  指導、關顧和培育基督身體中的個人或團體，
                  讓他們在信仰上成長的屬靈能力。
                  （以弗所書 4:11）
                </p>
                <p>
                  Distinctives: A person with this gift provides oversight. They
                  have a natural tendency to nurture people and give them
                  direction. Shepherds are willing to provide the long-term care
                  needed to help others work through issues in their lives. They
                  like to spend time with people, feeding, protecting and
                  disciplining in love. They gravitate towards building
                  discipleship relationships. Gifted shepherds are a good
                  balance for the gifted administrator or leader.
                  特點：擁有這種恩賜的人可以提供監督。
                  他有一種自然的傾向來培養人們並給他們指導。
                  牧羊人樂意提供長期關顧，幫助他人解決生活中的問題。
                  他喜歡與人共渡時光，用愛來餵養、保護和管教。
                  他傾向於建立門徒關係。
                  有恩賜的牧羊人能與有恩賜的管理者或領袖作為互補。
                </p>
                <p>
                  Cautions: If you have this gift, don't use your oversight and
                  concern to shield people from real-life experiences. Also, be
                  careful to not view people as projects. Shepherds often have a
                  clear vision for someone's growth. Don't impose your concerns
                  and vision on someone else. Allow room for the Holy Spirit to
                  convict and move them. The process remains between them and
                  God. Remember that it is God that causes the growth; don't
                  take responsibility for their problems.
                  注意：如果你擁有這種恩賜，
                  不要利用你的監督和關顧來阻止人從現實生活中獲取教訓。
                  另外，請注意不要將人視為工程。
                  牧羊人通常對某人的成長有清晰的理念。
                  不要將你的擔憂和異象強加給別人。
                  容讓聖靈去使他們知罪並感動他們。
                  這是他們與神之間的一個進程。
                  請記住，是神叫人成長；請不要為他人的問題負責任。
                </p>
              </div>
            ),
          },
          {
            name: "Teaching 教導",
            description: (
              <div>
                <p>
                  The spiritual capability to understand, clearly explain, and
                  apply the Word of God to the lives of listeners. (
                  <Verse verse="Romans 12:7" />;{" "}
                  <Verse verse="1 Corinthians 12:28" />;{" "}
                  <Verse verse="Ephesians 4:11" />)
                  明白神話語，清楚地解釋，並應用在聽眾生活上的屬靈能力。
                  （羅馬書 12:7；哥林多前書 12:28；以弗所書 4:11）
                </p>
                <p>
                  Distinctives: Teachers have a real thirst for knowledge and
                  have an insatiable desire to share that knowledge. A person
                  with this gift can develop the ability to understand and
                  fashion the message in a learner-oriented manner. They tend to
                  be self-disciplined and prefer to teach groups rather than
                  individuals.
                  特點：教師對知識有著真正的渴求，並且極度渴望分享這些知識。
                  擁有有這種恩賜的人能夠以學習者為主的方式理解和塑造信息內容。
                  他們傾向於自律，更喜歡團體而不是個別授教。
                </p>
                <p>
                  Cautions: Teachers often study and learn much more than can
                  actually be conveyed in a single teaching. The teaching itself
                  must convey the most important truths and be practical. You
                  may tend to be too profound or detail- oriented. Make certain
                  that you keep the teaching focused enough for the audience to
                  hear it and digest its application. It is also common for a
                  teacher to struggle with pride because she or he often has
                  more knowledge than others do. Be careful not to become upset
                  with people who are not as excited about a truth as you are.
                  Most importantly, make certain that you are as interested in
                  people as you are in facts.
                  注意：教師在究研和學習中所領略到的往往過於一次教導所能傳遞的。
                  課堂本身必須傳達最重要的真理，並且有實用性。
                  你的教導可能傾向於過度艱深或注重細節。
                  請確保你的教導是集中的，好讓聽眾能夠聽得明白，並吸收應用。
                  教師因驕傲而掙扎也是常見的，因為他往往比其他人擁有更多的知識。
                  小心不要因為別人對真理的熱誠不及你而感到不滿。
                  最重要的是，確保你對人的興趣和對事實的興趣一樣濃厚。
                </p>
                <p>
                  If you find out that this may be where you are gifted, realize
                  that doesn't qualify you to present at Central Teaching or
                  even Home Church tomorrow. A teaching gift takes time to
                  develop. Choose a ministry that you are interested in, get
                  involved, and pray for opportunities for your gifting to be
                  used.
                  如果你發現這可能是你的恩賜，
                  請意識到這並不等於你有資格明天在教學大樓甚至家庭教會演講。
                  教導恩賜需要時間來培養。
                  選擇你有興趣的事工，參與其中，並求神讓你有機會使用你的恩賜。
                </p>
                <p>
                  Watch out for self-promotion. You may hear yourself think,
                  "They ought to put me up to teach!" You may feel anger or
                  resentment that you haven't been asked to teach yet or teach
                  often enough.
                  不要自我吹嚧。
                  你可能會發現自己在想：「他們應該讓我帶教導！」
                  你也許會因為未獲邀請去授課或課堂不足而發怒或抱怨。
                </p>
              </div>
            ),
          },
        ] as { name: CategoryName; description: JSX.Element }[]
      )
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((category, index) => ({
          ...category,
          shortName: index.toString(),
        })),
    []
  );

export default useCategories;
