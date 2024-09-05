import { Helmet } from "react-helmet-async";
import { NotebookPen } from "lucide-react";
import { Textarea } from "../../components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export default function Notes() {
  const [devotion1Notes, setDevotion1Notes] = useState("");
  const [devotion2Notes, setDevotion2Notes] = useState("");
  const [day1Notes, setDay1Notes] = useState("");
  const [day2Notes, setDay2Notes] = useState("");
  const [day3Notes, setDay3Notes] = useState("");

  useEffect(() => {
    // load the notes from local storage
    const savedDevotion1Notes = localStorage.getItem("devotion1Notes");
    const savedDevotion2Notes = localStorage.getItem("devotion2Notes");
    const savedDay1Notes = localStorage.getItem("day1Notes");
    const savedDay2Notes = localStorage.getItem("day2Notes");
    const savedDay3Notes = localStorage.getItem("day3Notes");

    if (savedDevotion1Notes) setDevotion1Notes(savedDevotion1Notes);
    if (savedDevotion2Notes) setDevotion2Notes(savedDevotion2Notes);
    if (savedDay1Notes) setDay1Notes(savedDay1Notes);
    if (savedDay2Notes) setDay2Notes(savedDay2Notes);
    if (savedDay3Notes) setDay3Notes(savedDay3Notes);
  }, []);

  const handleSave = (key: string, value: string) => {
    // save the notes to local storage
    localStorage.setItem(key, value);
    alert("Notes saved successfully!");
  };

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <Helmet>
        <title>2024 NLEC 巴拿巴生活營 Notes</title>
      </Helmet>
      {/* <Alert className="hover:bg-zinc-100 dark:hover:bg-zinc-800">
        <NotebookPen className="h-4 w-4" />
        <AlertTitle>Looking to take some notes during the camp?</AlertTitle>
        <AlertDescription>
          You can start taking notes here! 📝 ️
        </AlertDescription>
      </Alert> */}
      <Tabs defaultValue="devotion1" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="devotion1">Devotion 1</TabsTrigger>
          <TabsTrigger value="devotion2">Devotion 2</TabsTrigger>
          <TabsTrigger value="day1">Talk 1</TabsTrigger>
          <TabsTrigger value="day2">Talk 2</TabsTrigger>
          <TabsTrigger value="day3">Talk 3</TabsTrigger>
        </TabsList>
        <TabsContent value="devotion1">
          <Card className="h-[80vh]">
            <CardHeader>
              <CardTitle>週六靈修 Day2 Devotion 📚</CardTitle>
              <CardDescription className="max-h-48 overflow-scroll">
                In an article from Adobe’s tutorial webpage, the answer to the
                question “What is the perfect Instagram video length?” is:
                “Instagram videos with the most comments typically average
                around 26 seconds long. If you want to maintain your viewers’
                attention and engage with your audience, it’s a good idea to
                keep your Instagram videos under 30 seconds.” In our devotion,
                it is not a good idea to complete in 30 seconds. On the
                contrary, we must learn to slow down, read and think through the
                scriptures. Transform words and thoughts that move or challenge
                you into your own prayers. Rom 5:1-5 (NIV) Therefore, since we
                have been justified through faith, we have peace with God
                through our Lord Jesus Christ, through whom we have gained
                access by faith into this grace in which we now stand. And we
                boast in the hope of the glory of God. Not only so, but we also
                glory in our sufferings, because we know that suffering produces
                perseverance; perseverance, character; and character, hope. And
                hope does not put us to shame, because God’s love has been
                poured out into our hearts through the Holy Spirit, who has been
                given to us. When we read Romans 5:1-5 carefully, we will
                realize that Paul brings out the situation in our lives. “We
                boast in the hope of the glory of God”, but at the same time we
                are hemmed in with troubles. Trouble is still part of our life
                even though we are reconciled to God. Our "sufferings" may be
                conflicts in family relationships, physical health issues,
                overwhelming work demands, financial pressure, uncertainty in
                our career, finding a life partner, wandering whether to settle
                in Melbourne, or to leave. . . . etc. However, these troubles
                that seem to hinder us are also paths to forge us to have a
                character that can stand tests. Josh Shipp wrote this “You
                either get bitter or you get better. It's that simple. You
                either take what has been dealt to you and allow it to make you
                a better person, or you allow it to tear you down. The choice
                does not belong to fate, it belongs to you.” The author
                emphasizes that personal choices can trump fate, but who is “a
                better person”? Will it be someone who is good at seeking self
                interest? In this passage, Paul reminds us that we need to have
                a better perspective of our situation. Other than our fate and
                ourselves, we are reconciled to the God, who created heaven and
                earth, through faith in our Lord Jesus Christ. In this way, we
                can “level up” in adversity, not only because of our personal
                choices, but also because we have faith in a loving God who is
                with us in our sufferings. In the process, we can grow into a
                person who will seek God’s heart. Furthermore, we have the hope
                of enjoying God’s glory in the future. Re-read and reflect on
                this passage. We can put our “sufferings” we are facing into our
                prayers.在 Adobe 網站的文章 “What is the perfect Instagram video
                length?” 有這一段文字： “Instagram videos with the most comments
                typically average around 26 seconds long. If you want to
                maintain your viewers’ attention and engage with your audience,
                it’s a good idea to keep your Instagram videos under 30
                seconds.”
                靈修讀經不應是要在三十秒內完成，反之，我們要學會慢下來，反覆閱讀、思想經文。將對你
                有所感動或挑戰的字句、思想，轉化成為你自己的禱告。 羅馬書 5:1-5
                (環球聖經譯本)
                所以，我們既然因信稱義，就藉著我們的主耶穌基督，得以與神和睦相處；我們也藉著
                他，因信得以進入我們現在享有的這恩典，並且因為盼望得享神的榮耀而歡呼自豪。不
                但如此，我們也在患難中歡呼自豪，因為知道患難產生堅忍，堅忍產生經得起考驗的品
                格，經得起考驗的品格產生盼望；這盼望不會令我們蒙羞，因為神的愛，藉著他賜給我
                們的聖靈，已經傾注在我們心裡。 當我們細心閱讀羅馬書
                5:1-5，我們會發覺到保羅說出了我們生活上的景況。 “盼望得享神的榮
                耀而歡呼自豪” 的同時
                “我們也在患難中歡呼自豪”。我們信主得著救恩，但我們也在患難中。
                患難並沒有因為我們與神和好而離開我們。
                我們的「患難」可能是家庭關係的磨擦、身體健康的困擾、工作要求的挑戰、經濟上的壓力、
                尋找工作方向的迷惘、尋找另一半的希望、如何在墨爾本安頓下來、又或是否要離開
                . . . 等。
                不過，這些看似攔阻我們得享恩典的日常生活的難處，是操練我們成長的途徑，使我們有「經
                得起考驗的品格」。 作家 Josh Shipp 這樣說 “You either get bitter
                or you get better. It's that simple. You either take what has
                been dealt to you and allow it to make you a better person, or
                you allow it to tear you down. The choice does not belong to
                fate, it belongs to you.”
                作者强調的是個人的抉擇能勝過命運，但這是甚
                樣的更好(better)？更懂得為自己謀取利益？更加自我為中心？
                在這一段，保羅提醒我們，對所處的境況要有全面的認知。在「命運」與自己之外，我們因著
                信我們的主耶穌基督，可以與那創造天地的神和好。這樣，在患難中我們可以堅忍更上一層，
                不只是個人的抉擇，更是因我們所信是慈愛的神，祂與我們同在。在這個過程中，我們可以成
                長，建立更合神心意的品格。並且，我們有得享神的榮耀的最終盼望。
                我們可以重讀思想這段經文，將一些我們正在面對的「患難」挑戰放在禱告中。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                placeholder="Type your notes here..."
                className="w-full h-[28vh]"
                value={devotion1Notes}
                onChange={(e) => setDevotion1Notes(e.target.value)}
              />
              <Button
                onClick={() => handleSave("devotion1Notes", devotion1Notes)}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="devotion2">
          <Card className="h-[80vh]">
            <CardHeader>
              <CardTitle>週日靈修 Day3 Devotion 📚</CardTitle>
              <CardDescription className="max-h-48 overflow-scroll">
                Rom 12:1- (NIV) Therefore, I urge you, brothers and sisters, in
                view of God’s mercy, to offer your bodies as a living sacrifice,
                holy and pleasing to God—this is your true and proper worship.
                Do not conform to the pattern of this world, but be transformed
                by the renewing of your mind. Then you will be able to test and
                approve what God’s will is—his good, pleasing and perfect will.
                You may be very familiar with Romans 12:1-2. This was once a
                Bible verse of Barnabas Fellowship. In Romans 12:1-2, Paul
                pointed a way to “level up”, which is to offer your body as a
                living sacrifice, not to conform to the pattern of this age, be
                transformed (by God) by the renewing of your mind. In The
                Message, Eugene Peterson has a very insightful translation of
                this passage, “Take your everyday, ordinary life—your sleeping,
                eating, going-to-work, and walking-around life—and place it
                before God as an offering. . . . Don’t become so well-adjusted
                to your culture that you fit into it without even thinking.
                Instead, fix your attention on God. You’ll be changed from the
                inside out. . . .” To you, after reading Romans 12:1-2, what
                will you offer as a living sacrifice? Your daily routine?
                Difficulties and stress in your life? Success or failure in your
                life? First of all, what pleases God is your willingness to
                think about what pleases God, your willingness to renew your
                mind, and your willingness to offer. Paul goes on to say that we
                can discern what God’s will is. How can you discern God's will
                in your life situation? You may focus on one aspect, put it in
                your prayers, and make it your living sacrifice.羅馬書 12:1-2
                (環球聖經譯本)
                所以，弟兄們，我本著神的憐憫，勸勉你們把身體獻上為祭，這祭是活著的、聖潔的、
                蒙神喜悅的，是你們有思想靈性的侍奉。不要模仿這現世時代，卻要藉著心意的更新而
                改變，使你們可以分辨出甚麼是神的旨意，即甚麼是美好、蒙他喜悅和完美的。
                你可能已經十分熟悉羅馬書12:1-2。這段經文曾經是巴拿巴團的團訓。
                羅馬書12:1-2 保羅提到一個更上一層 “level up”
                的方向，就是把身體獻上為活祭，不要模仿這
                現世時代，而後心意(被神)更新而改變。 Eugene Peterson 在 The
                Message 對這段有十分傳神的翻譯 “Take your everyday, ordinary
                life— your sleeping, eating, going-to-work, and walking-around
                life—and place it before God as an offering. . . . Don’t become
                so well-adjusted to your culture that you fit into it without
                even thinking. Instead, fix your attention on God. You’ll be
                changed from the inside out. . . . ” (把你每天平凡的生活
                ──你的睡覺、吃飯、上班、行走的生活──當作祭物放在神面前。 . . .
                .不要太適應在你所處
                的文化，以至於不假思索就融入其中。相反，將你的注意力在神身上。你將會有由內而外的蛻
                變。) 讀完羅馬書
                12:1-2，對你來說，你會拿什麼作為活祭？你的日常生活作息？你的生活中的難處
                壓力？你的生活中的成功或者成敗？首先，神所喜悅的是你願意去思想什麼是神所喜悅的，願
                意讓自己心意更新，願意去獻上。
                保羅跟著說我們可以分辨出甚麼是神的旨意。在你的身上，在你所處的境況，你可以甚樣分辨
                出神的旨意？你可以集中一個方面，放在你的禱告中，以這作為你的活祭。
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                placeholder="Type your notes here..."
                className="w-full h-[28vh]"
                value={devotion2Notes}
                onChange={(e) => setDevotion2Notes(e.target.value)}
              />
              <Button
                onClick={() => handleSave("devotion2Notes", devotion2Notes)}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day1">
          <Card className="h-[80vh]">
            <CardHeader>
              <CardTitle>Theme Talk: 信仰GOD 💬</CardTitle>
              <CardDescription className="max-h-48 overflow-scroll">
                Feel free to take notes here!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                placeholder="Type your notes here..."
                className="w-full h-[28vh]"
                value={day1Notes}
                onChange={(e) => setDay1Notes(e.target.value)}
              />
              <Button onClick={() => handleSave("day1Notes", day1Notes)}>
                Save
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day2">
          <Card className="h-[80vh]">
            <CardHeader>
              <CardTitle>
                Theme Talk: 信仰與恩賜 🎁 & Theme Movie Reflection 🍿
              </CardTitle>
              <CardDescription className="max-h-48 overflow-scroll">
                Feel free to take notes here!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                placeholder="Type your notes here..."
                className="w-full h-[28vh]"
                value={day2Notes}
                onChange={(e) => setDay2Notes(e.target.value)}
              />
              <Button onClick={() => handleSave("day2Notes", day2Notes)}>
                Save
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="day3">
          <Card className="h-[80vh]">
            <CardHeader>
              <CardTitle>Theme Talk: 突破信仰的阻礙 🏃‍➡️</CardTitle>
              <CardDescription className="max-h-48 overflow-scroll">
                Feel free to take notes here!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Textarea
                placeholder="Type your notes here..."
                className="w-full h-[28vh]"
                value={day3Notes}
                onChange={(e) => setDay3Notes(e.target.value)}
              />
              <Button onClick={() => handleSave("day3Notes", day3Notes)}>
                Save
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
