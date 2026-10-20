const assetPathPrefix = "https://www.figma.com/api/mcp/asset/d8f1865c-5176-4dfe-ae31-89aa0ac2dc25";
const imgIcon = `${assetPathPrefix}/55608.svg`;
const imgIcon1 = `${assetPathPrefix}/04eeb.svg`;
const imgHero = `${assetPathPrefix}/1e9ab.png`;
const imgLogo = `${assetPathPrefix}/086e4.png`;
const imgAboutImage = `${assetPathPrefix}/7711b.png`;
const imgTile = `${assetPathPrefix}/bff79.png`;
const imgTile1 = `${assetPathPrefix}/e04dd.png`;
const imgTile2 = `${assetPathPrefix}/807a3.png`;
const imgTile3 = `${assetPathPrefix}/65ef3.png`;
const imgPhilosophy = `${assetPathPrefix}/17a0b.png`;
const imgColor = `${assetPathPrefix}/31138.png`;
const imgOrnamentRing = `${assetPathPrefix}/7f63f.png`;
const imgAboutRoundImage = `${assetPathPrefix}/ede04.png`;
const imgForWhomImage = `${assetPathPrefix}/6a4aa.png`;
const imgGiftImage = `${assetPathPrefix}/7aa64.png`;
const imgWave = `${assetPathPrefix}/a44c9.svg`;
const imgLogo1 = `${assetPathPrefix}/e113c.svg`;
const imgFrame = `${assetPathPrefix}/cb030.svg`;
const imgLogo2 = `${assetPathPrefix}/8249d.svg`;
const imgEllipse = `${assetPathPrefix}/a3716.svg`;
const imgGroup = `${assetPathPrefix}/f2402.svg`;
const imgGroup1 = `${assetPathPrefix}/0e0af.svg`;
const imgGroup2 = `${assetPathPrefix}/18a75.svg`;
const imgGroup3 = `${assetPathPrefix}/63f7a.svg`;
const imgWave1 = `${assetPathPrefix}/f713d.svg`;
const imgFrame1 = `${assetPathPrefix}/0ef34.svg`;
const imgGroup4 = `${assetPathPrefix}/77e29.svg`;
const imgGroup5 = `${assetPathPrefix}/1fc80.svg`;
const imgGroup6 = `${assetPathPrefix}/ba67a.svg`;
const imgBullet = `${assetPathPrefix}/6d4ef.svg`;

type ButtonGhostHeProps = {
  className?: string;
  label?: string;
};

function ButtonGhostHe({ className, label = "לפרטים נוספים" }: ButtonGhostHeProps) {
  return (
    <div className={className || "bg-[rgba(255,255,255,0.16)] border-[1.5px] border-[rgba(255,255,255,0.85)] border-solid content-stretch flex gap-[12px] h-[58px] items-center justify-center relative rounded-[999px] w-[388px]"} data-node-id="8:67" data-name="Button/Ghost HE">
      <div className="relative shrink-0 size-[26px]" data-node-id="8:69" data-name="Icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
      </div>
      <p className="[word-break:break-word] font-['Heebo:SemiBold'] font-semibold leading-[normal] relative shrink-0 text-[23px] text-white whitespace-nowrap" dir="auto" data-node-id="8:68">
        {label}
      </p>
    </div>
  );
}

type ButtonHeroHeProps = {
  className?: string;
  label?: string;
};

function ButtonHeroHe({ className, label = "צרי קשר" }: ButtonHeroHeProps) {
  return (
    <div className={className || "bg-white content-stretch flex gap-[12px] h-[53px] items-center justify-center relative rounded-[999px] w-[415px]"} data-node-id="8:62" data-name="Button/Hero HE">
      <div className="relative shrink-0 size-[26px]" data-node-id="8:64" data-name="Icon">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon1} />
      </div>
      <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[#2b1f1a] text-[23px] whitespace-nowrap" dir="auto" data-node-id="8:63">
        {label}
      </p>
    </div>
  );
}

export default function Component2() {
  return (
    <div className="bg-[#fbfbf9] relative size-full" data-node-id="8:84" data-name="דף בית2 עברית">
      <div className="absolute h-[794px] left-[30px] overflow-clip rounded-[28px] top-[65px] w-[1382px]" data-node-id="8:85" data-name="Hero">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgHero} />
        <div className="absolute bg-gradient-to-b from-[rgba(26,15,10,0.3)] h-[794px] left-0 to-[rgba(26,15,10,0.6)] top-0 via-[55%] via-[rgba(26,15,10,0.38)] w-[1382px]" data-node-id="8:86" data-name="Overlay" />
        <div className="absolute border border-[rgba(255,255,255,0.32)] border-solid h-[706px] left-[28px] rounded-[20px] top-[28px] w-[1326px]" data-node-id="111:499" data-name="detail / inset frame" />
        <div className="absolute h-[60px] left-0 top-[734px] w-[1382px]" data-node-id="8:87" data-name="Wave">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWave} />
        </div>
        <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[691px] not-italic text-[80px] text-center text-white top-[180px] tracking-[-0.8px] whitespace-nowrap" data-node-id="8:89">
          <p className="leading-[88px] mb-0" dir="auto">
            קחי נשימה מגיע לך
          </p>
          <p className="leading-[88px]" dir="auto">
            רגע של פינוק
          </p>
        </div>
        <ButtonHeroHe className="absolute bg-white content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[709px] rounded-[999px] top-[528px] w-[200px]" label="שנדבר?" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Heebo:Light'] font-light leading-[35px] left-[691px] text-[21px] text-[rgba(255,255,255,0.92)] text-center top-[418px] w-[720px]" dir="auto" data-node-id="89:493">
          היי, אני דבורה מנחם. מטפלת מוסמכת ברפלקסולוגיה ועיסוי משולב. מתמחה בטיפול המאזן בין גוף ונפש, תוך הקשבה עמוקה והתאמה אישית לכל מטופלת.
        </p>
        <ButtonGhostHe className="absolute bg-[rgba(255,255,255,0.16)] border-[1.5px] border-[rgba(255,255,255,0.85)] border-solid content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[473px] rounded-[999px] top-[528px] w-[220px]" label="השירותים שלי" />
        <div className="absolute h-[10px] left-[616px] overflow-clip top-[382px] w-[150px]" data-node-id="111:500" data-name="detail / divider">
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-0 top-[5px] w-[62px]" data-node-id="111:501" data-name="Rectangle" />
          <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="111:502">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(255,255,255,0.85)] relative size-[6px]" data-name="Rectangle" />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="111:503" data-name="Rectangle" />
        </div>
        <div className="absolute h-[22px] left-[1187px] overflow-clip top-[640px] w-[131px]" data-node-id="111:504" data-name="detail / corner note">
          <p className="[word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-0 text-[15px] text-[rgba(255,255,255,0.85)] top-0 tracking-[0.9px] whitespace-nowrap" dir="auto" data-node-id="111:505">
            לנשים בלבד
          </p>
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-[95px] top-[11px] w-[36px]" data-node-id="111:506" data-name="Rectangle" />
        </div>
        <div className="absolute h-[22px] left-[64px] overflow-clip top-[640px] w-[127px]" data-node-id="111:507" data-name="detail / corner note">
          <p className="[word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[48px] text-[15px] text-[rgba(255,255,255,0.85)] top-0 tracking-[0.9px] whitespace-nowrap" dir="auto" data-node-id="111:508">
            מגדל העמק
          </p>
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-0 top-[11px] w-[36px]" data-node-id="111:509" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.95)] h-[78px] left-[130px] overflow-clip rounded-[39px] shadow-[0px_10px_30px_0px_rgba(43,31,26,0.1)] top-[24px] w-[1180px]" data-node-id="8:95" data-name="Nav">
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[860px] text-[21px] text-[rgba(30,30,30,0.8)] text-right top-[23.5px] whitespace-nowrap" dir="auto" data-node-id="8:101">
          מי אני?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[752px] text-[21px] text-[rgba(30,30,30,0.8)] text-right top-[23.5px] whitespace-nowrap" dir="auto" data-node-id="8:102">
          למה לבחור בי?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[580px] text-[21px] text-[rgba(30,30,30,0.8)] text-right top-[23.5px] whitespace-nowrap" dir="auto" data-node-id="8:103">
          השירותים שלי
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[409px] text-[21px] text-[rgba(30,30,30,0.8)] text-right top-[23.5px] whitespace-nowrap" dir="auto" data-node-id="8:104">
          המלצות
        </p>
        <div className="absolute h-[53.913px] left-[968px] top-[12.04px] w-[180px]" data-node-id="97:495" data-name="Logo – דבי מנחם">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
        </div>
        <div className="absolute bg-[#2b1f1a] content-stretch flex gap-[12px] h-[50px] items-center justify-center left-[14px] rounded-[999px] top-[14px] w-[150px]" data-node-id="97:497" data-name="Nav CTA">
          <div className="relative shrink-0 size-[26px]" data-node-id="I97:497;8:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[20px] text-white whitespace-nowrap" dir="auto" data-node-id="I97:497;8:63">
            שנדבר?
          </p>
        </div>
      </div>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#1e1e1e] text-[52px] text-right top-[1130px] whitespace-nowrap" data-node-id="8:106">
        <p className="leading-[62px] mb-0" dir="auto">
          היי,
        </p>
        <p className="leading-[62px]" dir="auto">
          אני דבורה מנחם
        </p>
      </div>
      <div className="absolute h-[849px] left-[118px] rounded-[28px] top-[1130px] w-[560px]" data-node-id="8:108" data-name="About Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgAboutImage} />
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.55)] border-solid h-[817px] left-[134px] rounded-[20px] top-[1146px] w-[528px]" data-node-id="114:503" data-name="detail / inset frame" />
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#1e1e1e] text-[48px] text-right top-[2193px] whitespace-nowrap" data-node-id="8:109">
        <p className="leading-[60px] mb-0" dir="auto">
          השירותים שלי:
        </p>
        <p className="leading-[60px]" dir="auto">
          כי את צריכה את זה!
        </p>
      </div>
      <div className="absolute h-[203px] left-[937px] overflow-clip rounded-[23px] top-[2369px] w-[385px]" data-node-id="8:110" data-name="Tile – רפלקסולוגיה">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgTile} />
        <div className="absolute bg-gradient-to-b from-[35%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" data-node-id="I8:110;8:73" data-name="Shade" />
        <p className="[word-break:break-word] absolute bottom-[65px] font-['Heebo:SemiBold'] font-semibold leading-[normal] right-[32px] text-[24px] text-right text-white translate-y-full w-[330px]" data-node-id="I8:110;8:74">
          רפלקסולוגיה
        </p>
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid h-[179px] left-[949px] rounded-[15px] top-[2381px] w-[361px]" data-node-id="114:518" data-name="detail / inset frame" />
      <div className="absolute h-[203px] left-[520px] overflow-clip rounded-[23px] top-[2369px] w-[385px]" data-node-id="8:113" data-name="Tile – עיסוי משולב">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgTile1} />
        <div className="absolute bg-gradient-to-b from-[35%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" data-node-id="I8:113;8:73" data-name="Shade" />
        <p className="[word-break:break-word] absolute bottom-[65px] font-['Heebo:SemiBold'] font-semibold leading-[normal] right-[32px] text-[24px] text-right text-white translate-y-full w-[330px]" data-node-id="I8:113;8:74">
          עיסוי משולב
        </p>
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid h-[179px] left-[532px] rounded-[15px] top-[2381px] w-[361px]" data-node-id="114:519" data-name="detail / inset frame" />
      <div className="absolute h-[443px] left-[122px] overflow-clip rounded-[23px] top-[2369px] w-[365px]" data-node-id="8:116" data-name="Tile – עיסוי באבנים חמות">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23px]">
          <img alt="" className="absolute h-[100.02%] left-[-12.08%] max-w-none top-[-0.01%] w-[324.48%]" src={imgTile2} />
        </div>
        <div className="absolute bg-gradient-to-b from-[35%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" data-node-id="I8:116;8:73" data-name="Shade" />
        <p className="[word-break:break-word] absolute bottom-[65px] font-['Heebo:SemiBold'] font-semibold leading-[normal] right-[32px] text-[24px] text-right text-white translate-y-full w-[330px]" data-node-id="I8:116;8:74">
          עיסוי באבנים חמות
        </p>
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid h-[419px] left-[134px] rounded-[15px] top-[2381px] w-[341px]" data-node-id="114:520" data-name="detail / inset frame" />
      <div className="absolute h-[210px] left-[526px] overflow-clip rounded-[23px] top-[2602px] w-[796px]" data-node-id="8:119" data-name="Tile – עיסוי בכוסות רוח">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgTile3} />
        <div className="absolute bg-gradient-to-b from-[35%] from-[rgba(0,0,0,0)] inset-0 to-[rgba(0,0,0,0.6)]" data-node-id="I8:119;8:73" data-name="Shade" />
        <p className="[word-break:break-word] absolute bottom-[65px] font-['Heebo:SemiBold'] font-semibold leading-[normal] right-[32px] text-[24px] text-right text-white translate-y-full w-[330px]" data-node-id="I8:119;8:74">
          עיסוי בכוסות רוח
        </p>
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.5)] border-solid h-[186px] left-[538px] rounded-[15px] top-[2614px] w-[772px]" data-node-id="114:521" data-name="detail / inset frame" />
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[720px] not-italic text-[#1e1e1e] text-[48px] text-center top-[5467px] whitespace-nowrap" data-node-id="8:141">
        <p className="leading-[58px] mb-0" dir="auto">
          המלצות:
        </p>
        <p className="leading-[58px]" dir="auto">
          מה הלקוחות שלי מספרות?!
        </p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] font-normal leading-[130px] left-[1081.5px] text-[160px] text-[rgba(107,84,70,0.12)] text-center top-[5574px] whitespace-nowrap" dir="auto" data-node-id="98:526">
        ״
      </p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[46px] left-[720px] text-[#1e1e1e] text-[28px] text-center top-[5653px] w-[760px]" dir="auto" data-node-id="8:142">
        ״הבת שלי סבלה מכאבי מחזור קשים. דבי יצרה איתה קשר כל כך נעים, והיום היא מחכה לטיפולים ומרגישה הרבה יותר טוב.״
      </p>
      <div className="absolute h-[96px] left-0 overflow-clip top-[905px] w-[1440px]" data-node-id="89:494" data-name="Marquee">
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-0 top-0 w-[1440px]" data-node-id="89:495" data-name="hairline" />
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-0 top-[95px] w-[1440px]" data-node-id="89:496" data-name="hairline" />
        <div className="absolute content-stretch flex gap-[28px] items-center left-[-274.05px] overflow-clip top-[32px]" data-node-id="89:497" data-name="items">
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:498">
            עיסוי בכוסות רוח
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:587">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:504">
            עיסוי באבנים חמות
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:588">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:510">
            עיסוי משולב
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:589">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:516">
            רפלקסולוגיה
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:590">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:522">
            עיסוי בכוסות רוח
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:591">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:528">
            עיסוי באבנים חמות
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:592">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:534">
            עיסוי משולב
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:593">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:540">
            רפלקסולוגיה
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:594">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:546">
            עיסוי בכוסות רוח
          </p>
          <div className="flex items-center justify-center relative shrink-0 size-[9.899px]" data-node-id="114:595">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.7)] relative size-[7px]" data-name="Rectangle" />
            </div>
          </div>
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[#2b1f1a] text-[28px] text-right whitespace-nowrap" dir="auto" data-node-id="89:552">
            עיסוי באבנים חמות
          </p>
        </div>
        <div className="absolute bg-gradient-to-r from-[#fbfbf9] h-[94px] left-0 to-[rgba(251,251,249,0)] top-px w-[200px]" data-node-id="89:553" data-name="fade" />
        <div className="absolute bg-gradient-to-l from-[#fbfbf9] h-[94px] left-[1240px] to-[rgba(251,251,249,0)] top-px w-[200px]" data-node-id="89:554" data-name="fade" />
      </div>
      <div className="absolute bg-[#2b1f1a] content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[1132px] rounded-[999px] top-[1923px] w-[190px]" data-node-id="89:566" data-name="CTA – לקביעת טיפול">
        <div className="relative shrink-0 size-[26px]" data-node-id="I89:566;8:64" data-name="Icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
        </div>
        <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[23px] text-white whitespace-nowrap" dir="auto" data-node-id="I89:566;8:63">
          שנדבר?
        </p>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.94)] content-stretch flex gap-[10px] items-center left-[142px] overflow-clip px-[20px] py-[12px] rounded-[999px] top-[1154px]" data-node-id="89:572" data-name="Image badge">
        <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[#2b1f1a] text-[16px] text-right whitespace-nowrap" dir="auto" data-node-id="89:578">
          רפלקסולוגיה ועיסוי משולב
        </p>
        <div className="h-[18px] relative shrink-0 w-[16px]" data-node-id="89:573" data-name="Logo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo1} />
        </div>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[1044px] top-[2882px] w-[278px]" data-node-id="90:503" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[1322px] not-italic text-[#6b5446] text-[34px] text-right top-[2904px] whitespace-nowrap" data-node-id="90:504">
        01
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[1322px] text-[#2b1f1a] text-[23px] text-right top-[2951px] whitespace-nowrap" dir="auto" data-node-id="90:505">
        רפלקסולוגיה
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[1322px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3063px] w-[278px]" dir="auto" data-node-id="90:506">
        מי ידע שכפות הרגליים יכולות לגלות כל כך הרבה? עם נגיעות מדויקות בנקודות הנכונות, אני יכולה לעזור לך לשפר את הבריאות הפיזית והרגשית, להפיג מתחים ולהחזיר לך איזון אמיתי.
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[735px] top-[2882px] w-[278px]" data-node-id="90:508" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[1013px] not-italic text-[#6b5446] text-[34px] text-right top-[2904px] whitespace-nowrap" data-node-id="90:509">
        02
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[1013px] text-[#2b1f1a] text-[23px] text-right top-[2951px] whitespace-nowrap" dir="auto" data-node-id="90:510">
        עיסוי משולב
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[1013px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3033px] w-[278px]" dir="auto" data-node-id="90:511">
        אם את רוצה גם רוגע, גם שחרור וגם זרימה טובה יותר בגוף – זה בדיוק בשבילך! אני משלבת טכניקות שונות כדי לתת לך טיפול מותאם אישית שיעשה לך רק טוב.
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[426px] top-[2882px] w-[278px]" data-node-id="90:513" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[704px] not-italic text-[#6b5446] text-[34px] text-right top-[2904px] whitespace-nowrap" data-node-id="90:514">
        03
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[704px] text-[#2b1f1a] text-[23px] text-right top-[2951px] whitespace-nowrap" dir="auto" data-node-id="90:515">
        עיסוי באבנים חמות
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[704px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3033px] w-[278px]" dir="auto" data-node-id="90:516">
        אבני בזלת חמות מחליקות על העור, חודרות לעומק השרירים ומעניקות תחושת רוגע מופלאה. מושלם לכל מי שזקוקה להפחתת מתחים עמוקים ולהזרמת אנרגיה חדשה בגוף.
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[117px] top-[2882px] w-[278px]" data-node-id="90:518" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[395px] not-italic text-[#6b5446] text-[34px] text-right top-[2904px] whitespace-nowrap" data-node-id="90:519">
        04
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[395px] text-[#2b1f1a] text-[23px] text-right top-[2951px] whitespace-nowrap" dir="auto" data-node-id="90:520">
        עיסוי בכוסות רוח
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[395px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3033px] w-[278px]" dir="auto" data-node-id="90:521">
        כן, כן, זה בדיוק כמו שזה נשמע – כוסות מיוחדות שעושות קסמים! שיטה מסורתית שמפחיתה כאבים, משחררת חסימות ומשפרת את זרימת הדם.
      </p>
      <div className="absolute bg-[#f3eee8] h-[688px] left-[30px] rounded-[28px] top-[3393px] w-[1382px]" data-node-id="90:523" data-name="Process panel" />
      <div className="absolute border border-[rgba(43,31,26,0.12)] border-solid h-[660px] left-[44px] rounded-[18px] top-[3407px] w-[1354px]" data-node-id="114:526" data-name="detail / inset frame" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[60px] left-[1322px] not-italic text-[#1e1e1e] text-[48px] text-right top-[3493px] whitespace-nowrap" dir="auto" data-node-id="90:526">
        למה לבחור בי?
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[36px] left-[558px] text-[22px] text-[rgba(30,30,30,0.8)] text-right top-[3503px] w-[440px]" dir="auto" data-node-id="90:527">
        ובנוסף - אני כאן כדי להעניק לך רגע של שלווה, רוגע ושחרור אמיתי.
      </p>
      <div className="absolute bg-[#2b1f1a] content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[368px] rounded-[999px] top-[3597px] w-[190px]" data-node-id="90:528" data-name="CTA – לשיחת היכרות">
        <div className="relative shrink-0 size-[26px]" data-node-id="I90:528;8:64" data-name="Icon">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
        </div>
        <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[23px] text-white whitespace-nowrap" dir="auto" data-node-id="I90:528;8:63">
          שנדבר?
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.25)] h-px left-[138px] top-[3773px] w-[1164px]" data-node-id="90:533" data-name="timeline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[80px] left-[1322px] not-italic text-[80px] text-[rgba(107,84,70,0.35)] text-right top-[3681px] whitespace-nowrap" data-node-id="90:534">
        1
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[0] left-[1322px] text-[#2b1f1a] text-[23px] text-right top-[3805px] w-[258px]" data-node-id="90:536">
        <p className="leading-[32px] mb-0" dir="auto">
          אין פה טיפול אחד
        </p>
        <p className="leading-[32px]" dir="auto">
          שמתאים לכולן!
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[1322px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3879px] w-[258px]" dir="auto" data-node-id="90:537">
        כל עיסוי מותאם בדיוק לך, בשילוב טכניקות שמביאות לרוגע עמוק ושחרור מתחים.
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[80px] left-[1013px] not-italic text-[80px] text-[rgba(107,84,70,0.35)] text-right top-[3681px] whitespace-nowrap" data-node-id="90:538">
        2
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[0] left-[1013px] text-[#2b1f1a] text-[23px] text-right top-[3805px] w-[258px]" data-node-id="90:540">
        <p className="leading-[32px] mb-0" dir="auto">
          אני לא רק מטפלת,
        </p>
        <p className="leading-[32px] mb-0" dir="auto">
          אני מקשיבה לגוף שלך
        </p>
        <p className="leading-[32px]" dir="auto">
          ולמה שהוא צריך באמת.
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[1013px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3911px] w-[258px]" dir="auto" data-node-id="90:541">
        כל מגע מחושב, מקצועי ומגיע מתוך הבנה עמוקה.
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[80px] left-[704px] not-italic text-[80px] text-[rgba(107,84,70,0.35)] text-right top-[3681px] whitespace-nowrap" data-node-id="90:542">
        3
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[0] left-[704px] text-[#2b1f1a] text-[23px] text-right top-[3805px] w-[258px]" data-node-id="90:544">
        <p className="leading-[32px] mb-0" dir="auto">
          כאן את יכולה לשים
        </p>
        <p className="leading-[32px]" dir="auto">
          את כל הדאגות בצד, לקחת
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[704px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3879px] w-[258px]" dir="auto" data-node-id="90:545">
        נשימה עמוקה ולתת לעצמך להתמסר לרוגע מוחלט.
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[80px] left-[395px] not-italic text-[80px] text-[rgba(107,84,70,0.35)] text-right top-[3681px] whitespace-nowrap" data-node-id="90:546">
        4
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[32px] left-[395px] text-[#2b1f1a] text-[23px] text-right top-[3805px] w-[258px]" dir="auto" data-node-id="90:548">
        אני דואגת להתעדכן
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[395px] text-[18px] text-[rgba(30,30,30,0.78)] text-right top-[3847px] w-[258px]" dir="auto" data-node-id="90:549">
        בשיטות הטיפול החדשות ביותר כדי להעניק לך את החוויה הכי מקצועית ואיכותית.
      </p>
      <div className="absolute h-[450px] left-[118px] overflow-clip rounded-[23px] top-[4231px] w-[1204px]" data-node-id="91:487" data-name="Philosophy – הגישה שלי">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgPhilosophy} />
        <div className="absolute bg-gradient-to-b from-[rgba(26,18,13,0.55)] h-[450px] left-0 to-[rgba(26,18,13,0.78)] top-0 w-[1204px]" data-node-id="91:488" data-name="Dim" />
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[72px] left-[602px] not-italic text-[64px] text-center text-white top-[120px] whitespace-nowrap" dir="auto" data-node-id="91:490">
          טיפולי גוף ונפש
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[602px] not-italic text-[28px] text-center text-white top-[298px] whitespace-nowrap" dir="auto" data-node-id="91:492">
          דבורה מנחם
        </p>
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[602px] text-[22px] text-[rgba(255,255,255,0.8)] text-center top-[248px] whitespace-nowrap" dir="auto" data-node-id="91:493">
          רפלקסולוגיה ועיסוי משולב - לנשים בלבד
        </p>
        <div className="absolute h-[10px] left-[527px] overflow-clip top-[218px] w-[150px]" data-node-id="114:537" data-name="detail / divider">
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-0 top-[5px] w-[62px]" data-node-id="114:538" data-name="Rectangle" />
          <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="114:539">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(255,255,255,0.85)] relative size-[6px]" data-name="Rectangle" />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="114:540" data-name="Rectangle" />
        </div>
        <div className="absolute border border-[rgba(255,255,255,0.35)] border-solid h-[406px] left-[22px] rounded-[14px] top-[22px] w-[1160px]" data-node-id="114:541" data-name="detail / inset frame" />
        <div className="absolute h-[22px] left-[1017px] overflow-clip top-[392px] w-[131px]" data-node-id="114:542" data-name="detail / corner note">
          <p className="[word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-0 text-[15px] text-[rgba(255,255,255,0.85)] top-0 tracking-[0.9px] whitespace-nowrap" dir="auto" data-node-id="114:543">
            לנשים בלבד
          </p>
          <div className="absolute bg-[rgba(255,255,255,0.64)] h-px left-[95px] top-[11px] w-[36px]" data-node-id="114:544" data-name="Rectangle" />
        </div>
        <div className="absolute h-[22px] left-[56px] overflow-clip top-[392px] w-[127px]" data-node-id="114:545" data-name="detail / corner note">
          <p className="[word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[48px] text-[15px] text-[rgba(255,255,255,0.85)] top-0 tracking-[0.9px] whitespace-nowrap" dir="auto" data-node-id="114:546">
            מגדל העמק
          </p>
          <div className="absolute bg-[rgba(255,255,255,0.64)] h-px left-0 top-[11px] w-[36px]" data-node-id="114:547" data-name="Rectangle" />
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1270px] text-[#6b5446] text-[18px] text-right top-[4841px] tracking-[0.72px] whitespace-nowrap" dir="auto" data-node-id="91:501">
        למי זה מתאים
      </p>
      <div className="absolute bg-[#6b5446] h-[1.5px] left-[1282px] top-[4854px] w-[40px]" data-node-id="91:502" data-name="eyebrow line" />
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#1e1e1e] text-[48px] text-right top-[4885px] whitespace-nowrap" data-node-id="91:503">
        <p className="leading-[60px] mb-0" dir="auto">
          כשהגוף מבקש
        </p>
        <p className="leading-[60px]" dir="auto">
          קצת תשומת לב
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[36px] left-[1322px] text-[22px] text-[rgba(30,30,30,0.8)] text-right top-[5029px] w-[420px]" dir="auto" data-node-id="91:504">
        הטיפולים מתאימים לנשים ולנערות בכל גיל ובכל שלב בחיים – ובמיוחד כשמשהו בגוף או בנפש מאותת שהגיע הזמן לעצור.
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[466px] top-[4849px] w-[300px]" data-node-id="91:505" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[736px] text-[#2b1f1a] text-[22px] text-right top-[4871px] whitespace-nowrap" dir="auto" data-node-id="91:511">
        כאבי גב וכתפיים
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[736px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[4911px] whitespace-nowrap" data-node-id="91:512">
        <p className="leading-[30px] mb-0" dir="auto">
          שחרור שרירים תפוסים
        </p>
        <p className="leading-[30px]" dir="auto">
          ושיפור טווחי התנועה
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[118px] top-[4849px] w-[300px]" data-node-id="91:513" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[388px] text-[#2b1f1a] text-[22px] text-right top-[4871px] whitespace-nowrap" dir="auto" data-node-id="91:519">
        מתח, לחץ וחרדה
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[388px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[4911px] whitespace-nowrap" data-node-id="91:520">
        <p className="leading-[30px] mb-0" dir="auto">
          הרגעת מערכת העצבים
        </p>
        <p className="leading-[30px]" dir="auto">
          וחזרה לנשימה עמוקה
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[466px] top-[4999px] w-[300px]" data-node-id="91:521" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[736px] text-[#2b1f1a] text-[22px] text-right top-[5021px] whitespace-nowrap" dir="auto" data-node-id="91:527">
        הפרעות שינה
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[736px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[5061px] whitespace-nowrap" data-node-id="91:528">
        <p className="leading-[30px] mb-0" dir="auto">
          שינה רציפה, עמוקה
        </p>
        <p className="leading-[30px]" dir="auto">
          ומרעננת יותר
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[118px] top-[4999px] w-[300px]" data-node-id="91:529" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[388px] text-[#2b1f1a] text-[22px] text-right top-[5021px] whitespace-nowrap" dir="auto" data-node-id="91:535">
        מחזור וגיל המעבר
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[388px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[5061px] whitespace-nowrap" data-node-id="91:536">
        <p className="leading-[30px] mb-0" dir="auto">
          הקלה בכאבים ותמיכה
        </p>
        <p className="leading-[30px]" dir="auto">
          באיזון הורמונלי טבעי
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[466px] top-[5149px] w-[300px]" data-node-id="91:537" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[736px] text-[#2b1f1a] text-[22px] text-right top-[5171px] whitespace-nowrap" dir="auto" data-node-id="91:543">
        תקופת ההריון
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[736px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[5211px] whitespace-nowrap" data-node-id="91:544">
        <p className="leading-[30px] mb-0" dir="auto">
          מגע בטוח ועוטף, הקלה
        </p>
        <p className="leading-[30px]" dir="auto">
          על כאבים ונפיחות
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[118px] top-[5149px] w-[300px]" data-node-id="91:545" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[388px] text-[#2b1f1a] text-[22px] text-right top-[5171px] whitespace-nowrap" dir="auto" data-node-id="91:551">
        עייפות ועומס רגשי
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[0] left-[388px] text-[18px] text-[rgba(30,30,30,0.75)] text-right top-[5211px] whitespace-nowrap" data-node-id="91:552">
        <p className="leading-[30px] mb-0" dir="auto">
          מילוי מצברים ופינוי
        </p>
        <p className="leading-[30px]" dir="auto">
          מקום לנשימה ולרגש
        </p>
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[118px] top-[5297px] w-[300px]" data-node-id="91:553" data-name="hairline" />
      <div className="absolute bg-[rgba(43,31,26,0.16)] h-px left-[466px] top-[5297px] w-[300px]" data-node-id="91:554" data-name="hairline" />
      <div className="absolute content-stretch flex gap-[14px] items-center left-[643px] overflow-clip top-[5779px]" data-node-id="91:557" data-name="Person">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[2px] items-end leading-[normal] overflow-clip relative shrink-0 text-right whitespace-nowrap" data-node-id="91:558" data-name="Frame">
          <p className="font-['Heebo:SemiBold'] font-semibold relative shrink-0 text-[#2b1f1a] text-[20px]" dir="auto" data-node-id="91:559">
            רונית א.
          </p>
          <p className="font-['Heebo:Regular'] font-normal relative shrink-0 text-[#6b5446] text-[16px]" dir="auto" data-node-id="91:560">
            טיפול לנערות
          </p>
        </div>
        <div className="bg-[#2b1f1a] content-stretch flex items-center justify-center overflow-clip relative rounded-[26px] shrink-0 size-[52px]" data-node-id="91:561" data-name="Frame">
          <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap" dir="auto" data-node-id="91:562">
            ר
          </p>
        </div>
      </div>
      <div className="absolute content-stretch flex gap-[22px] items-center left-[624px] overflow-clip top-[5878px]" data-node-id="91:563" data-name="Carousel controls">
        <div className="bg-[#2b1f1a] content-stretch flex items-center justify-center overflow-clip relative rounded-[27px] shrink-0 size-[54px]" data-node-id="91:568" data-name="Frame">
          <p className="[word-break:break-word] font-['Heebo:Regular'] font-normal leading-[normal] relative shrink-0 text-[22px] text-center text-white whitespace-nowrap" data-node-id="91:569">
            ←
          </p>
        </div>
        <div className="h-[10px] relative shrink-0 w-[40px]" data-node-id="91:564" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <div className="border border-[rgba(43,31,26,0.4)] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[27px] shrink-0 size-[54px]" data-node-id="91:570" data-name="Frame">
          <p className="[word-break:break-word] font-['Heebo:Regular'] font-normal leading-[normal] relative shrink-0 text-[#2b1f1a] text-[22px] text-center whitespace-nowrap" data-node-id="91:571">
            →
          </p>
        </div>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1270px] text-[#6b5446] text-[18px] text-right top-[6894px] tracking-[0.72px] whitespace-nowrap" dir="auto" data-node-id="92:487">
        שאלות נפוצות
      </p>
      <div className="absolute bg-[#6b5446] h-[1.5px] left-[1282px] top-[6907px] w-[40px]" data-node-id="92:488" data-name="eyebrow line" />
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#1e1e1e] text-[48px] text-right top-[6938px] whitespace-nowrap" data-node-id="92:489">
        <p className="leading-[60px] mb-0" dir="auto">
          כל מה שרצית
        </p>
        <p className="leading-[60px]" dir="auto">
          לשאול
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[36px] left-[1322px] text-[22px] text-[rgba(30,30,30,0.8)] text-right top-[7082px] w-[470px]" dir="auto" data-node-id="92:490">
        ריכזתי כאן את השאלות שאני נשאלת הכי הרבה. ואם נשארה לך שאלה – אני תמיד זמינה לשיחה.
      </p>
      <div className="absolute bg-[#2a2220] h-[250px] left-[852px] overflow-clip rounded-[23px] top-[7194px] w-[470px]" data-node-id="92:491" data-name="לא מצאת תשובה?">
        <div className="absolute h-[30px] left-[404px] top-[36px] w-[26px]" data-node-id="92:492" data-name="Logo">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLogo2} />
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[390px] text-[26px] text-right text-white top-[34px] whitespace-nowrap" dir="auto" data-node-id="92:497">
          לא מצאת תשובה?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[30px] left-[430px] text-[19px] text-[rgba(255,255,255,0.85)] text-right top-[84px] w-[390px]" dir="auto" data-node-id="92:498">
          שלחי לי הודעה בוואטסאפ ואחזור אלייך עוד היום.
        </p>
        <ButtonGhostHe className="absolute bg-[rgba(255,255,255,0.16)] border-[1.5px] border-[rgba(255,255,255,0.85)] border-solid content-stretch flex gap-[12px] h-[54px] items-center justify-center left-[230px] rounded-[999px] top-[160px] w-[200px]" label="דברי איתי" />
        <div className="absolute border border-[rgba(255,255,255,0.25)] border-solid h-[222px] left-[14px] rounded-[12px] top-[14px] w-[442px]" data-node-id="114:571" data-name="detail / inset frame" />
      </div>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[6900px] w-[600px]" data-node-id="92:504" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[6928px] whitespace-nowrap" dir="auto" data-node-id="92:505">
        כמה זמן נמשך טיפול?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[6924px] whitespace-nowrap" data-node-id="92:506">
        −
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[32px] left-[714px] text-[19px] text-[rgba(30,30,30,0.78)] text-right top-[6974px] w-[540px]" dir="auto" data-node-id="92:507">
        טיפול רגיל נמשך כשעה. בפגישה הראשונה נקדיש עוד כרבע שעה לשיחת היכרות ואבחון, כדי להתאים את הטיפול בדיוק לך.
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7066px] w-[600px]" data-node-id="92:508" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[7094px] whitespace-nowrap" dir="auto" data-node-id="92:509">
        כמה טיפולים אצטרך?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[7090px] whitespace-nowrap" data-node-id="92:510">
        +
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7154px] w-[600px]" data-node-id="92:511" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[7182px] whitespace-nowrap" dir="auto" data-node-id="92:512">
        האם אפשר לקבל טיפול בזמן הריון?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[7178px] whitespace-nowrap" data-node-id="92:513">
        +
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7242px] w-[600px]" data-node-id="92:514" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[7270px] whitespace-nowrap" dir="auto" data-node-id="92:515">
        מה כדאי ללבוש ולהביא לטיפול?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[7266px] whitespace-nowrap" data-node-id="92:516">
        +
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7330px] w-[600px]" data-node-id="92:517" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[7358px] whitespace-nowrap" dir="auto" data-node-id="92:518">
        האם יש החזר מקופת החולים או מביטוח משלים?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[7354px] whitespace-nowrap" data-node-id="92:519">
        +
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7418px] w-[600px]" data-node-id="92:520" data-name="hairline" />
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[714px] text-[#2b1f1a] text-[22px] text-right top-[7446px] whitespace-nowrap" dir="auto" data-node-id="92:521">
        מאיזה גיל אפשר להגיע לטיפול?
      </p>
      <p className="[word-break:break-word] absolute font-['Bellefair:Regular'] leading-[34px] left-[122px] not-italic text-[#6b5446] text-[34px] top-[7442px] whitespace-nowrap" data-node-id="92:522">
        +
      </p>
      <div className="absolute bg-[rgba(43,31,26,0.18)] h-px left-[118px] top-[7506px] w-[600px]" data-node-id="92:523" data-name="hairline" />
      <div className="absolute h-[656px] left-[30px] overflow-clip rounded-[28px] top-[7676px] w-[1382px]" data-node-id="92:524" data-name="Contact – בואי נדבר">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[28px] size-full" src={imgHero} />
        <div className="absolute bg-gradient-to-l from-[rgba(26,15,10,0.78)] h-[656px] left-0 to-[rgba(26,15,10,0.35)] top-0 via-[55%] via-[rgba(26,15,10,0.55)] w-[1382px]" data-node-id="92:525" data-name="Overlay" />
        <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1262px] not-italic text-[60px] text-right text-white top-[110px] whitespace-nowrap" data-node-id="110:499">
          <p className="leading-[70px] mb-0" dir="auto">
            שנדבר?
          </p>
          <p className="leading-[70px] mb-0" dir="auto">
            כי מגיע לך
          </p>
          <p className="leading-[70px]" dir="auto">
            רגע של פינוק!
          </p>
        </div>
        <div className="absolute left-[1214px] size-[48px] top-[370px]" data-node-id="110:500" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <div className="absolute left-[1227px] overflow-clip size-[22px] top-[383px]" data-node-id="110:501" data-name="Frame">
          <div className="absolute inset-[16.67%_16.67%_12.5%_12.5%]" data-node-id="110:502" data-name="Group">
            <div className="absolute inset-[-4.81%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup} />
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1196px] text-[21px] text-right text-white top-[381px] whitespace-nowrap" data-node-id="110:504">
          058-450-2900
        </p>
        <div className="absolute left-[1214px] size-[48px] top-[438px]" data-node-id="110:505" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <div className="absolute left-[1227px] overflow-clip size-[22px] top-[451px]" data-node-id="110:506" data-name="Frame">
          <div className="absolute inset-[20.83%_12.5%]" data-node-id="110:507" data-name="Group">
            <div className="absolute inset-[-5.84%_-4.55%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1196px] text-[21px] text-right text-white top-[449px] whitespace-nowrap" data-node-id="110:510">
          deby2900@gmail.com
        </p>
        <div className="absolute left-[1214px] size-[48px] top-[506px]" data-node-id="110:511" data-name="Ellipse">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse} />
        </div>
        <div className="absolute left-[1227px] overflow-clip size-[22px] top-[519px]" data-node-id="110:512" data-name="Frame">
          <div className="absolute inset-[8.33%_20.83%_12.5%_20.83%]" data-node-id="110:513" data-name="Group">
            <div className="absolute inset-[-4.31%_-5.84%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup2} />
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1196px] text-[21px] text-right text-white top-[517px] whitespace-nowrap" dir="auto" data-node-id="110:516">
          הרב בוסקילה 10, מגדל העמק
        </p>
        <div className="absolute bg-[#fbfbf9] h-[476px] left-[90px] overflow-clip rounded-[23px] top-[90px] w-[540px]" data-node-id="110:517" data-name="Form">
          <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[500px] text-[19px] text-[rgba(30,30,30,0.55)] text-right top-[56px] whitespace-nowrap" dir="auto" data-node-id="110:518">
            איך לקרוא לך?
          </p>
          <div className="absolute bg-[rgba(43,31,26,0.25)] h-px left-[40px] top-[100px] w-[460px]" data-node-id="110:519" data-name="hairline" />
          <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[500px] text-[19px] text-[rgba(30,30,30,0.55)] text-right top-[140px] whitespace-nowrap" dir="auto" data-node-id="110:520">
            לאיזה מספר אוכל להתקשר?
          </p>
          <div className="absolute bg-[rgba(43,31,26,0.25)] h-px left-[40px] top-[184px] w-[460px]" data-node-id="110:521" data-name="hairline" />
          <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[500px] text-[19px] text-[rgba(30,30,30,0.55)] text-right top-[224px] whitespace-nowrap" dir="auto" data-node-id="110:522">
            מה המייל שלך?
          </p>
          <div className="absolute bg-[rgba(43,31,26,0.25)] h-px left-[40px] top-[268px] w-[460px]" data-node-id="110:523" data-name="hairline" />
          <div className="absolute bg-white border-[1.5px] border-[rgba(43,31,26,0.45)] border-solid left-[478px] rounded-[6px] size-[22px] top-[312px]" data-node-id="110:524" data-name="Checkbox" />
          <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[466px] text-[17px] text-[rgba(30,30,30,0.8)] text-right top-[310px] whitespace-nowrap" dir="auto" data-node-id="110:525">
            אני מאשרת קבלת תוכן שיווקי ומסרים במייל
          </p>
          <div className="absolute bg-[#2b1f1a] content-stretch flex gap-[12px] h-[58px] items-center justify-center left-[40px] rounded-[999px] top-[368px] w-[460px]" data-node-id="110:526" data-name="Button/Hero HE">
            <div className="relative shrink-0 size-[26px]" data-node-id="I110:526;8:64" data-name="Icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
            <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[23px] text-white whitespace-nowrap" dir="auto" data-node-id="I110:526;8:63">
              אני רוצה רגע של פינוק!
            </p>
          </div>
        </div>
        <div className="absolute border border-[rgba(255,255,255,0.32)] border-solid h-[612px] left-[22px] rounded-[20px] top-[22px] w-[1338px]" data-node-id="114:572" data-name="detail / inset frame" />
        <div className="absolute flex h-[135px] items-center justify-center left-[592px] top-[476px] w-[108px]" data-node-id="114:573">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="h-[135px] overflow-clip relative w-[108px]" data-name="detail / line-art sprig">
              <div className="absolute inset-[5.33%_15%_2.67%_15%]" data-node-id="114:574" data-name="Group">
                <div className="absolute inset-[-0.4%_-0.66%]">
                  <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[10px] left-[1112px] overflow-clip top-[338px] w-[150px]" data-node-id="114:583" data-name="detail / divider">
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-0 top-[5px] w-[62px]" data-node-id="114:584" data-name="Rectangle" />
          <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="114:585">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(255,255,255,0.85)] relative size-[6px]" data-name="Rectangle" />
            </div>
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.6)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="114:586" data-name="Rectangle" />
        </div>
      </div>
      <div className="absolute bg-[#2b1f1a] h-[470px] left-0 overflow-clip top-[8452px] w-[1440px]" data-node-id="92:565" data-name="Footer">
        <div className="absolute flex h-[60px] items-center justify-center left-0 top-0 w-[1440px]" data-node-id="92:566">
          <div className="flex-none rotate-180">
            <div className="h-[60px] relative w-[1440px]" data-name="Wave">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWave1} />
            </div>
          </div>
        </div>
        <div className="absolute h-[57px] left-[1132px] top-[130px] w-[190px]" data-node-id="97:518" data-name="Logo – דבי מנחם (לבן)">
          <div className="absolute bg-white h-[57px] left-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[190px_57px] top-0 w-[190px]" data-node-id="97:520" style={{ maskImage: `url("${imgColor}")` }} data-name="color" />
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[880px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[138px] whitespace-nowrap" dir="auto" data-node-id="110:531">
          מי אני?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[880px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[170px] whitespace-nowrap" dir="auto" data-node-id="110:532">
          למה לבחור בי?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[880px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[202px] whitespace-nowrap" dir="auto" data-node-id="110:533">
          השירותים שלי
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[880px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[234px] whitespace-nowrap" dir="auto" data-node-id="110:534">
          המלצות
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[630px] text-[18px] text-right text-white top-[134px] whitespace-nowrap" dir="auto" data-node-id="110:535">
          השירותים שלי
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[630px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[174px] whitespace-nowrap" dir="auto" data-node-id="110:536">
          רפלקסולוגיה
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[630px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[206px] whitespace-nowrap" dir="auto" data-node-id="110:537">
          עיסוי משולב
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[630px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[238px] whitespace-nowrap" dir="auto" data-node-id="110:538">
          עיסוי באבנים חמות
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[630px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[270px] whitespace-nowrap" dir="auto" data-node-id="110:539">
          עיסוי בכוסות רוח
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[380px] text-[18px] text-right text-white top-[134px] whitespace-nowrap" dir="auto" data-node-id="110:540">
          שנדבר?
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[380px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[174px] whitespace-nowrap" data-node-id="110:541">
          058-450-2900
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[380px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[206px] whitespace-nowrap" data-node-id="110:542">
          deby2900@gmail.com
        </p>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[380px] text-[16px] text-[rgba(255,255,255,0.7)] text-right top-[238px] whitespace-nowrap" dir="auto" data-node-id="110:543">
          הרב בוסקילה 10, מגדל העמק
        </p>
        <div className="absolute bg-[rgba(255,255,255,0.16)] h-px left-[118px] top-[380px] w-[1204px]" data-node-id="110:544" data-name="hairline" />
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[1322px] text-[14px] text-[rgba(255,255,255,0.6)] text-right top-[410px] whitespace-nowrap" dir="auto" data-node-id="110:545">{`האתר נבנה ועוצב ע"י: אביב דרעי 2025`}</p>
      </div>
      <div className="absolute left-[528px] size-[230px] top-[1809px]" data-node-id="98:503" data-name="ornament / ring">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="230" src={imgOrnamentRing} width="230" />
      </div>
      <div className="absolute left-[548px] size-[190px] top-[1829px]" data-node-id="98:504" data-name="About round image">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="190" src={imgAboutRoundImage} width="190" />
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.7)] border-solid left-[1254px] overflow-clip rounded-[23px] size-[46px] top-[2389px]" data-node-id="98:505" data-name="Tile number 01">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[22px] not-italic text-[20px] text-center text-white top-[10.5px] whitespace-nowrap" data-node-id="98:506">
          01
        </p>
      </div>
      <div className="absolute bg-white left-[959px] overflow-clip rounded-[20px] size-[40px] top-[2510px]" data-node-id="98:507" data-name="Tile arrow">
        <div className="absolute left-[11px] size-[18px] top-[11px]" data-node-id="98:508" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.7)] border-solid left-[837px] overflow-clip rounded-[23px] size-[46px] top-[2389px]" data-node-id="98:510" data-name="Tile number 02">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[22px] not-italic text-[20px] text-center text-white top-[10.5px] whitespace-nowrap" data-node-id="98:511">
          02
        </p>
      </div>
      <div className="absolute bg-white left-[542px] overflow-clip rounded-[20px] size-[40px] top-[2510px]" data-node-id="98:512" data-name="Tile arrow">
        <div className="absolute left-[11px] size-[18px] top-[11px]" data-node-id="98:513" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.7)] border-solid left-[419px] overflow-clip rounded-[23px] size-[46px] top-[2389px]" data-node-id="98:515" data-name="Tile number 03">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[22px] not-italic text-[20px] text-center text-white top-[10.5px] whitespace-nowrap" data-node-id="98:516">
          03
        </p>
      </div>
      <div className="absolute bg-white left-[144px] overflow-clip rounded-[20px] size-[40px] top-[2750px]" data-node-id="98:517" data-name="Tile arrow">
        <div className="absolute left-[11px] size-[18px] top-[11px]" data-node-id="98:518" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.7)] border-solid left-[1254px] overflow-clip rounded-[23px] size-[46px] top-[2622px]" data-node-id="98:520" data-name="Tile number 04">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[22px] not-italic text-[20px] text-center text-white top-[10.5px] whitespace-nowrap" data-node-id="98:521">
          04
        </p>
      </div>
      <div className="absolute bg-white left-[548px] overflow-clip rounded-[20px] size-[40px] top-[2750px]" data-node-id="98:522" data-name="Tile arrow">
        <div className="absolute left-[11px] size-[18px] top-[11px]" data-node-id="98:523" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
        </div>
      </div>
      <div className="absolute h-[160px] left-[902px] rounded-[23px] top-[5173px] w-[420px]" data-node-id="98:525" data-name="For whom image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23px] size-full" src={imgForWhomImage} />
      </div>
      <div className="absolute border border-[rgba(255,255,255,0.55)] border-solid h-[136px] left-[914px] rounded-[13px] top-[5185px] w-[396px]" data-node-id="114:560" data-name="detail / inset frame" />
      <div className="[word-break:break-word] absolute bg-[#f3eee8] h-[190px] left-[1132px] opacity-60 overflow-clip rounded-[23px] text-right top-[5643px] w-[250px]" data-node-id="98:527" data-name="Peek – נועה ש.">
        <p className="-translate-x-full absolute font-['Heebo:Regular'] font-normal leading-[27px] left-[228px] text-[16px] text-[rgba(30,30,30,0.8)] top-[24px] w-[206px]" dir="auto" data-node-id="98:528">
          הרפלקסולוגיה בהריון הייתה בשבילי הזמן הכי שקט בשבוע. דבי יודעת בדיוק איפה לגעת – ומתי פשוט להקשיב.
        </p>
        <p className="-translate-x-full absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[228px] text-[#6b5446] text-[14px] top-[150px] whitespace-nowrap" dir="auto" data-node-id="98:529">
          נועה ש. · רפלקסולוגיה בהריון
        </p>
      </div>
      <div className="[word-break:break-word] absolute bg-[#f3eee8] h-[190px] left-[58px] opacity-60 overflow-clip rounded-[23px] text-right top-[5643px] w-[250px]" data-node-id="98:530" data-name="Peek – מיכל ל.">
        <p className="-translate-x-full absolute font-['Heebo:Regular'] font-normal leading-[27px] left-[228px] text-[16px] text-[rgba(30,30,30,0.8)] top-[24px] w-[206px]" dir="auto" data-node-id="98:531">
          הגעתי עם כאבי גב שליוו אותי שנים. אחרי כמה טיפולים אצל דבי הרגשתי שאני מקבלת את הגוף שלי בחזרה.
        </p>
        <p className="-translate-x-full absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[228px] text-[#6b5446] text-[14px] top-[150px] whitespace-nowrap" dir="auto" data-node-id="98:532">
          מיכל ל. · עיסוי רפואי
        </p>
      </div>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#6b5446] text-[28px] text-right top-[1270px] whitespace-nowrap" data-node-id="103:503">
        <p className="leading-[38px] mb-0" dir="auto">
          המסע שלי לעולם הטיפול:
        </p>
        <p className="leading-[38px]" dir="auto">
          מחיבור אישי לשליחות מקצועית
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[32px] left-[1322px] text-[19px] text-[rgba(30,30,30,0.85)] text-right top-[1394px] w-[560px]" dir="auto" data-node-id="103:505">
        מאז ומתמיד הרגשתי חיבור עמוק לעולם הטיפול, אבל הדרך שלי לשם לא הייתה פשוטה. לפני כ-6 שנים חלמתי ללמד ולהעניק מהידע שלי בתחום העיסוי, אך החיים הובילו אותי למסע אישי של התפתחות רגשית ומנטלית.
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[32px] left-[1322px] text-[19px] text-[rgba(30,30,30,0.85)] text-right top-[1504px] w-[560px]" dir="auto" data-node-id="103:506">
        בשנה האחרונה עברתי חוויה מטלטלת – איבדתי אדם יקר למשפחתי, מה שגרם לי להבין עד כמה מגע יכול להיות כלי ריפוי עמוק, פיזית ונפשית. במהלך הדרך חוויתי טיפולי רפלקסולוגיה שהשפיעו עליי בצורה מדהימה, וזו הייתה נקודת המפנה שבה החלטתי להתמקצע בתחום ולהעניק לאחרות את מה שאני קיבלתי.
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:SemiBold'] font-semibold leading-[normal] left-[1322px] text-[#2b1f1a] text-[20px] text-right top-[1688px] whitespace-nowrap" dir="auto" data-node-id="103:507">
        מקצועיות, למידה והתאמה אישית לכל אישה:
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[32px] left-[1322px] text-[19px] text-[rgba(30,30,30,0.85)] text-right top-[1727px] w-[560px]" dir="auto" data-node-id="103:508">
        למדתי במכללת LFA אצל המורה המוביל בתחום, ורכשתי כלים עוצמתיים שמאפשרים לי להתאים את הטיפול לכל אישה, בהתאם לצרכים הייחודיים שלה. אני מאמינה שהחיבור בין הגוף לנפש הוא המפתח לבריאות מיטבית, ומטרתי היא לעזור לכל אישה למצוא את הרוגע, האיזון והשחרור שהיא זקוקה לו.
      </p>
      <div className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[0] left-[1322px] not-italic text-[#6b5446] text-[22px] text-right top-[2991px] whitespace-nowrap" data-node-id="108:503">
        <p className="leading-[30px] mb-0" dir="auto">
          תני לכפות הרגליים
        </p>
        <p className="leading-[30px]" dir="auto">
          לספר את הסיפור שלך
        </p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[30px] left-[1013px] not-italic text-[#6b5446] text-[22px] text-right top-[2991px] whitespace-nowrap" dir="auto" data-node-id="108:504">
        כשכל הטוב מתחבר יחד
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[30px] left-[704px] not-italic text-[#6b5446] text-[22px] text-right top-[2991px] whitespace-nowrap" dir="auto" data-node-id="108:505">
        חום שעוטף אותך ברוגע
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[30px] left-[395px] not-italic text-[#6b5446] text-[22px] text-right top-[2991px] whitespace-nowrap" dir="auto" data-node-id="108:506">
        ניקוי רעלים ושחרור אמיתי
      </p>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[normal] left-[1322px] not-italic text-[#6b5446] text-[30px] text-right top-[3561px] whitespace-nowrap" dir="auto" data-node-id="109:499">
        קודם כל – כי מגיע לך את הטוב ביותר!
      </p>
      <div className="absolute h-[10px] left-[1172px] overflow-clip top-[1366px] w-[150px]" data-node-id="114:499" data-name="detail / divider">
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-0 top-[5px] w-[62px]" data-node-id="114:500" data-name="Rectangle" />
        <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="114:501">
          <div className="-rotate-45 flex-none">
            <div className="bg-[rgba(107,84,70,0.8)] relative size-[6px]" data-name="Rectangle" />
          </div>
        </div>
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="114:502" data-name="Rectangle" />
      </div>
      <div className="absolute flex h-[120px] items-center justify-center left-[770px] top-[1110px] w-[96px]" data-node-id="114:504">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[120px] overflow-clip relative w-[96px]" data-name="detail / line-art sprig">
            <div className="absolute inset-[5.33%_15%_2.67%_15%]" data-node-id="114:505" data-name="Group">
              <div className="absolute inset-[-0.45%_-0.74%]">
                <img alt="" className="block max-w-none size-full" src={imgGroup4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[10px] left-[1172px] overflow-clip top-[2335px] w-[150px]" data-node-id="114:514" data-name="detail / divider">
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-0 top-[5px] w-[62px]" data-node-id="114:515" data-name="Rectangle" />
        <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="114:516">
          <div className="-rotate-45 flex-none">
            <div className="bg-[rgba(107,84,70,0.8)] relative size-[6px]" data-name="Rectangle" />
          </div>
        </div>
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="114:517" data-name="Rectangle" />
      </div>
      <div className="absolute flex items-center justify-center left-[1315.5px] size-[14.142px] top-[3759.33px]" data-node-id="114:522">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#2b1f1a] border-[#2b1f1a] border-[1.2px] border-solid relative size-[10px]" data-name="node" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1006.5px] size-[14.142px] top-[3759.33px]" data-node-id="114:523">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#f3eee8] border-[#2b1f1a] border-[1.2px] border-solid relative size-[10px]" data-name="node" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[697.5px] size-[14.142px] top-[3759.33px]" data-node-id="114:524">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#f3eee8] border-[#2b1f1a] border-[1.2px] border-solid relative size-[10px]" data-name="node" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[388.5px] size-[14.142px] top-[3759.33px]" data-node-id="114:525">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#f3eee8] border-[#2b1f1a] border-[1.2px] border-solid relative size-[10px]" data-name="node" />
        </div>
      </div>
      <div className="absolute h-[80px] left-[58px] overflow-clip top-[3423px] w-[64px]" data-node-id="114:527" data-name="detail / line-art sprig">
        <div className="absolute inset-[5.33%_15%_2.67%_15%]" data-node-id="114:528" data-name="Group">
          <div className="absolute inset-[-0.68%_-1.12%]">
            <img alt="" className="block max-w-none size-full" src={imgGroup5} />
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1326px] size-[8.485px] top-[4846.56px]" data-node-id="114:558">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[6px]" data-name="eyebrow diamond" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1326px] size-[8.485px] top-[6899.56px]" data-node-id="114:559">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[6px]" data-name="eyebrow diamond" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[757px] size-[9.899px] top-[4875.05px]" data-node-id="114:561">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[409px] size-[9.899px] top-[4875.05px]" data-node-id="114:562">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[757px] size-[9.899px] top-[5025.05px]" data-node-id="114:563">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[409px] size-[9.899px] top-[5025.05px]" data-node-id="114:564">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[757px] size-[9.899px] top-[5175.05px]" data-node-id="114:565">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[409px] size-[9.899px] top-[5175.05px]" data-node-id="114:566">
        <div className="-rotate-45 flex-none">
          <div className="bg-[#6b5446] relative size-[7px]" data-name="marker" />
        </div>
      </div>
      <div className="absolute h-[10px] left-[645px] overflow-clip top-[5605px] w-[150px]" data-node-id="114:567" data-name="detail / divider">
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-0 top-[5px] w-[62px]" data-node-id="114:568" data-name="Rectangle" />
        <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="114:569">
          <div className="-rotate-45 flex-none">
            <div className="bg-[rgba(107,84,70,0.8)] relative size-[6px]" data-name="Rectangle" />
          </div>
        </div>
        <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="114:570" data-name="Rectangle" />
      </div>
      <div className="absolute bg-[#f3eee8] h-[642px] left-[118px] overflow-clip rounded-[28px] top-[6082px] w-[1204px]" data-node-id="116:499" data-name="Gift card – שובר מתנה">
        <div className="absolute border border-[rgba(43,31,26,0.12)] border-solid h-[614px] left-[14px] rounded-[20px] top-[14px] w-[1176px]" data-node-id="116:500" data-name="detail / inset frame" />
        <div className="absolute h-[562px] left-[40px] rounded-[20px] top-[40px] w-[560px]" data-node-id="116:501" data-name="Gift Image">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full" src={imgGiftImage} />
        </div>
        <div className="absolute border border-[rgba(255,255,255,0.6)] border-solid h-[538px] left-[52px] rounded-[14px] top-[52px] w-[536px]" data-node-id="116:502" data-name="detail / inset frame" />
        <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.22)] border border-[rgba(255,255,255,0.6)] border-solid h-[40px] left-[379px] overflow-clip rounded-[999px] top-[64px] w-[197px]" data-node-id="116:505" data-name="detail / photo caption">
          <p className="[word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[17px] text-[#2b1f1a] text-[15px] top-[8px] whitespace-nowrap" dir="auto" data-node-id="116:506">
            שובר דיגיטלי או מודפס
          </p>
          <div className="absolute flex items-center justify-center left-[176px] size-[8.485px] top-[10.76px]" data-node-id="116:507">
            <div className="-rotate-45 flex-none">
              <div className="bg-[#2b1f1a] relative size-[6px]" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Medium'] font-medium leading-[normal] left-[1072px] text-[#6b5446] text-[18px] text-right top-[86px] tracking-[0.72px] whitespace-nowrap" dir="auto" data-node-id="116:508">
          מתנה מהלב
        </p>
        <div className="absolute bg-[#6b5446] h-[1.5px] left-[1084px] top-[99px] w-[40px]" data-node-id="116:509" data-name="eyebrow line" />
        <div className="absolute flex items-center justify-center left-[1128px] size-[8.485px] top-[91.56px]" data-node-id="116:510">
          <div className="-rotate-45 flex-none">
            <div className="bg-[#6b5446] relative size-[6px]" data-name="Rectangle" />
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Bellefair:Regular'] leading-[60px] left-[1124px] not-italic text-[#1e1e1e] text-[52px] text-right top-[128px] whitespace-nowrap" dir="auto" data-node-id="116:511">
          שובר מתנה
        </p>
        <div className="absolute h-[10px] left-[974px] overflow-clip top-[206px] w-[150px]" data-node-id="116:512" data-name="detail / divider">
          <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-0 top-[5px] w-[62px]" data-node-id="116:513" data-name="Rectangle" />
          <div className="absolute bg-[rgba(107,84,70,0.55)] h-px left-[88px] top-[5px] w-[62px]" data-node-id="116:514" data-name="Rectangle" />
          <div className="absolute flex items-center justify-center left-[75px] size-[8.485px] top-[-3.44px]" data-node-id="116:515">
            <div className="-rotate-45 flex-none">
              <div className="bg-[rgba(107,84,70,0.8)] relative size-[6px]" data-name="Rectangle" />
            </div>
          </div>
        </div>
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[34px] left-[1124px] text-[21px] text-[rgba(30,30,30,0.82)] text-right top-[236px] w-[440px]" dir="auto" data-node-id="116:516">
          המתנה הכי טובה – לאהובות שלך, או לעצמך. רגע של שקט ורוגע, בטיפול לבחירתה.
        </p>
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-[684px] top-[330px] w-[440px]" data-node-id="116:517" data-name="hairline" />
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[1084px] text-[#1e1e1e] text-[18px] text-right top-[344px] whitespace-nowrap" dir="auto" data-node-id="116:519">
          לבחירה מכל ארבעת הטיפולים
        </p>
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-[684px] top-[382px] w-[440px]" data-node-id="116:520" data-name="hairline" />
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[1084px] text-[#1e1e1e] text-[18px] text-right top-[396px] whitespace-nowrap" dir="auto" data-node-id="116:522">
          מעוצב ומוכן למסירה
        </p>
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-[684px] top-[434px] w-[440px]" data-node-id="116:523" data-name="hairline" />
        <p className="-translate-x-full [word-break:break-word] absolute font-['Heebo:Regular'] font-normal leading-[normal] left-[1084px] text-[#1e1e1e] text-[18px] text-right top-[448px] whitespace-nowrap" dir="auto" data-node-id="116:525">
          הזמנה פשוטה בוואטסאפ
        </p>
        <div className="absolute bg-[rgba(43,31,26,0.12)] h-px left-[684px] top-[486px] w-[440px]" data-node-id="116:526" data-name="hairline" />
        <div className="absolute bg-[#2b1f1a] content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[874px] rounded-[999px] top-[516px] w-[250px]" data-node-id="116:527" data-name="CTA – להזמנת שובר מתנה">
          <div className="relative shrink-0 size-[26px]" data-node-id="I116:527;8:64" data-name="Icon">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
          </div>
          <p className="[word-break:break-word] font-['Heebo:Medium'] font-medium leading-[normal] relative shrink-0 text-[23px] text-white whitespace-nowrap" dir="auto" data-node-id="I116:527;8:63">
            להזמנת שובר מתנה
          </p>
        </div>
        <div className="absolute h-[100px] left-[640px] overflow-clip top-[512px] w-[80px]" data-node-id="116:532" data-name="detail / line-art sprig">
          <div className="absolute inset-[5.33%_15%_2.67%_15%]" data-node-id="116:533" data-name="Group">
            <div className="absolute inset-[-0.54%_-0.89%]">
              <img alt="" className="block max-w-none size-full" src={imgGroup6} />
            </div>
          </div>
        </div>
        <div className="absolute contents h-[111.454px] left-[113.29px] top-[279.07px] w-[181.348px]" data-node-id="119:503" data-name="voucher print">
          <div className="absolute flex h-[76.885px] items-center justify-center left-[113.29px] top-[279.07px] w-[175.872px]" data-node-id="116:503">
            <div className="-rotate-9 flex-none">
              <div className="h-[50.918px] relative w-[170px]" data-name="logo on voucher">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogo} />
              </div>
            </div>
          </div>
          <div className="absolute flex h-[40.023px] items-center justify-center left-[158.37px] top-[344.87px] w-[100.704px]" data-node-id="116:504">
            <div className="-rotate-9 flex-none">
              <p className="[word-break:break-word] font-['Bellefair:Regular'] leading-[normal] not-italic relative text-[#6b5446] text-[22px] tracking-[2.64px] whitespace-nowrap" dir="auto">
                שובר מתנה
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-[1104px] size-[20px] top-[345.5px]" data-node-id="119:510" data-name="bullet">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBullet} />
        </div>
        <div className="absolute left-[1104px] size-[20px] top-[397.5px]" data-node-id="119:513" data-name="bullet">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBullet} />
        </div>
        <div className="absolute left-[1104px] size-[20px] top-[449.5px]" data-node-id="119:516" data-name="bullet">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBullet} />
        </div>
      </div>
    </div>
  );
}