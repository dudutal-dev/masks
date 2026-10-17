// פירוט הסצנות: במה, אביזרים, קלפי תפקיד (D = היוזם/ת, S = המגיב/ה), שלבים. דו-לשוני. נוצר אוטומטית.
// eslint-disable-next-line no-unused-vars
const SCENES = {
 "st01": {
  "he": {
   "title": "זרים בבר",
   "premise": "{D} {d:נכנס|נכנסת} לבר שבו {S} {s:יושב|יושבת} לבד. אתם לא מכירים. עשרים דקות של פלירטוט מאפס.",
   "setting": "הסלון הוא בר: אור חלש, שני כיסאות ליד השולחן, משקה לכל אחד. {S} כבר שם. {D} יוצא/ת מהחדר ונכנס/ת מחדש.",
   "props": "שני משקאות, מוזיקה שקטה, בגד שלא לובשים ביום-יום.",
   "D": {
    "who": "אדם זר, בעיר ללילה אחד.",
    "how": "לבחור שם חדש. לשאול ולהקשיב באמת, לא להסגיר דבר מהחיים האמיתיים. המגע הראשון רק אחרי שהשיחה מתחממת, וקטן.",
    "secret": "המטרה הסודית: לקבל מ{S} הזמנה להמשיך את הערב, בלי לבקש אותה במילים.",
    "opener": "״הכיסא הזה תפוס, או שהלילה שלי עומד להשתפר?״"
   },
   "S": {
    "who": "מקומי/ת, יצא/ה לשתות לבד אחרי שבוע ארוך.",
    "how": "לא להקל. קשה להשגה בחמש הדקות הראשונות, ואז סימנים קטנים: צחוק, מבט ארוך, נגיעה ״בטעות״.",
    "secret": "המטרה הסודית: לגרום ל{D} להגיד בקול, במילים, מה הוא/היא רוצה מהערב הזה, לפני שמסכימים לכל דבר.",
    "opener": "״תלוי מה שותים.״"
   },
   "beats": [
    "היכרות מאפס: שמות בדויים, מאיפה, למה כאן. אסור להזכיר שום דבר אמיתי. מי שנשבר וצוחק שותה לגימה.",
    "החימום: המרחק בין הכיסאות מתקצר. נגיעה ראשונה. שאלה אחת אישית מדי, ותשובה כנה.",
    "ההצעה: אחד מכם אומר בקול מה יקרה אם תמשיכו. השני מתמקח על פרט אחד. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Strangers at a bar",
   "premise": "{D} walks into a bar where {S} is sitting alone. You have never met. Twenty minutes of flirting from zero.",
   "setting": "The living room is a bar: low light, two chairs at a table, a drink each. {S} is already there. {D} leaves the room and comes back in.",
   "props": "Two drinks, quiet music, something you would not wear on an ordinary day.",
   "D": {
    "who": "A stranger, in town for one night.",
    "how": "Pick a new name. Ask and really listen, give nothing away from real life. First touch only once the talk heats up, and small.",
    "secret": "Secret goal: get {S} to invite you to continue the evening, without ever asking for it in words.",
    "opener": "\"Is this seat taken, or is my night about to improve?\""
   },
   "S": {
    "who": "A local, out for a drink alone after a long week.",
    "how": "Do not make it easy. Hard to get for the first five minutes, then small signs: a laugh, a long look, an \"accidental\" touch.",
    "secret": "Secret goal: make {D} say out loud, in words, what they want from this evening before you agree to anything.",
    "opener": "\"Depends what you are drinking.\""
   },
   "beats": [
    "Meeting from zero: fake names, where from, why here. Nothing real may be mentioned. Whoever breaks and laughs takes a sip.",
    "Warming up: the distance between the chairs shrinks. First touch. One question that is too personal, and an honest answer.",
    "The proposal: one of you says out loud what happens if you continue. The other negotiates one detail. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "st02": {
  "he": {
   "title": "דייט עיוור שהשתבש",
   "premise": "אפליקציית היכרויות שלחה אתכם לאותו שולחן. הפרופילים שיקרו, שניכם יודעים, ושניכם מחליטים להישאר.",
   "setting": "שולחן ערוך לשניים, נר אחד. כל אחד מגיע עם ״פרופיל״ מומצא: שם, מקצוע, מה מחפשים.",
   "props": "נר, שני פתקים עם ״הפרופיל״, משקה.",
   "D": {
    "who": "מי שכתב/ה בפרופיל ״מחפש/ת משהו רציני״ ומתכוון/ת להפך.",
    "how": "להתחיל מנומס, ואז לשאול שאלות ישירות יותר ויותר, כאילו זה חלק מהריאיון. לא לגעת עד השלב השני.",
    "secret": "המטרה הסודית: שהדייט יודה בקול בפנטזיה אחת אמיתית. ואז להציע לממש אותה הערב.",
    "opener": "״אז... התמונות שלך היו ישנות, או שבאמת ככה?״"
   },
   "S": {
    "who": "מי ששיקר/ה על הגיל, על הגובה ועל ״לא בדייט ראשון״.",
    "how": "לענות בכנות מביכה. לשאול בחזרה. בשלב השני לקום ״לרגע״ ולחזור בלי פריט לבוש אחד, בלי להגיד מילה על זה.",
    "secret": "המטרה הסודית: לגרום ל{D} להציע לעזוב את השולחן לפני ש״המנה העיקרית״ מגיעה.",
    "opener": "״אני אגיד מה היה שקר בפרופיל שלי אם תגיד/י קודם.״"
   },
   "beats": [
    "הריאיון: שאלות של דייט ראשון שהופכות אישיות. כל שקר שנחשף מהפרופיל = חובה לענות על שאלה אחת בכנות מלאה.",
    "מתחת לשולחן: רגליים, ידיים, פריט לבוש אחד נעלם. השיחה ממשיכה כאילו כלום.",
    "הדייט השני מיד: עוזבים את השולחן ומממשים את מה שנאמר בשלב הראשון. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Blind date gone sideways",
   "premise": "A dating app sent you to the same table. The profiles lied, you both know it, and you both decide to stay.",
   "setting": "A table set for two, one candle. Each arrives with an invented \"profile\": name, job, what they are looking for.",
   "props": "A candle, two notes with the \"profile\", a drink.",
   "D": {
    "who": "The one whose profile said \"looking for something serious\" and means the opposite.",
    "how": "Start polite, then ask more and more direct questions, as if it were part of the interview. No touching until the second beat.",
    "secret": "Secret goal: the date admits one real fantasy out loud. Then offer to make it happen tonight.",
    "opener": "\"So... were your photos old, or is this really you?\""
   },
   "S": {
    "who": "The one who lied about age, height and \"not on a first date\".",
    "how": "Answer with embarrassing honesty. Ask back. In the second beat, get up \"for a moment\" and come back missing one item of clothing, without a word about it.",
    "secret": "Secret goal: make {D} suggest leaving the table before the \"main course\" arrives.",
    "opener": "\"I will tell you what was a lie in my profile if you go first.\""
   },
   "beats": [
    "The interview: first-date questions that turn personal. Every exposed profile lie = one question that must be answered with full honesty.",
    "Under the table: legs, hands, one item of clothing disappears. The conversation goes on as if nothing happened.",
    "Second date, immediately: leave the table and act out what was said in the first beat. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "wk01": {
  "he": {
   "title": "ריאיון עבודה",
   "premise": "{D} {d:מראיין|מראיינת} את {S} לתפקיד שאף אחד לא מגדיר במדויק. השאלות נהיות אישיות, והמועמד/ת רוצה את העבודה מאוד.",
   "setting": "שולחן, שני כיסאות משני צדדיו, דף ״קורות חיים״. {D} בבגדים רשמיים, {S} בבגדי ריאיון.",
   "props": "דף ועט, משקפיים אם יש, שעון על השולחן.",
   "D": {
    "who": "מנהל/ת שמחליט/ה לבד מי מתקבל.",
    "how": "טון מקצועי ויבש גם כשהשאלות כבר לא מקצועיות. לבקש ״להדגים״ דברים. בלי מגע: רק מילים ומבטים.",
    "secret": "המטרה הסודית: שהמועמד/ת יציע/תציע בעצמו/ה משהו כדי לקבל את העבודה, בלי שתרמוז/י ישירות.",
    "opener": "״ספר/י לי על עצמך. ודלג/י על החלק המשעמם.״"
   },
   "S": {
    "who": "מועמד/ת שצריך/ה את העבודה ומוכן/ה להרבה.",
    "how": "לענות על כל שאלה, גם המביכה, כאילו היא לגיטימית. לשבת זקוף/ה. לפתוח כפתור אחד בכל שלב ״כי חם״.",
    "secret": "המטרה הסודית: לגרום למראיין/ת לאבד את הטון המקצועי פעם אחת. אז העבודה שלך, ואת/ה קובע/ת את התנאים.",
    "opener": "״תודה שהזמנתם אותי. אני מתאים/ה יותר ממה שכתוב בדף.״"
   },
   "beats": [
    "שאלות רגילות שמתעקמות: ״מה החולשה שלך״, ״איך את/ה עם לחץ״, ״עד כמה את/ה גמיש/ה״. כל תשובה חייבת להיות כנה.",
    "הדגמה: המראיין/ת מבקש/ת להדגים ״יכולת״ אחת, בלי מגע. המועמד/ת בוחר/ת איך.",
    "ההחלטה: ״התקבלת״ או ״עוד שלב״, והתנאים נאמרים בקול. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Job interview",
   "premise": "{D} interviews {S} for a job nobody quite defines. The questions get personal, and the candidate wants the job badly.",
   "setting": "A desk, two chairs on either side, a \"CV\" sheet. {D} in formal clothes, {S} dressed for an interview.",
   "props": "A sheet and a pen, glasses if you have them, a watch on the desk.",
   "D": {
    "who": "A manager who alone decides who gets hired.",
    "how": "A dry professional tone even when the questions stop being professional. Ask them to \"demonstrate\" things. No touching: only words and looks.",
    "secret": "Secret goal: the candidate offers something to get the job, by themselves, without you hinting directly.",
    "opener": "\"Tell me about yourself. Skip the boring part.\""
   },
   "S": {
    "who": "A candidate who needs this job and is ready for a lot.",
    "how": "Answer every question, even the embarrassing ones, as if it were legitimate. Sit up straight. Open one button at each stage \"because it is warm\".",
    "secret": "Secret goal: make the interviewer lose the professional tone once. Then the job is yours, and you set the terms.",
    "opener": "\"Thank you for inviting me. I fit better than the sheet says.\""
   },
   "beats": [
    "Normal questions that bend: \"what is your weakness\", \"how are you under pressure\", \"how flexible are you\". Every answer must be honest.",
    "Demonstration: the interviewer asks for one \"skill\" to be demonstrated, without touching. The candidate chooses how.",
    "The decision: \"hired\" or \"one more round\", and the terms are said out loud. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "wk02": {
  "he": {
   "title": "שעות נוספות",
   "premise": "כולם הלכו הביתה. {D} ו{S} נשארו לסיים פרויקט, האור במשרד כבוי חוץ ממנורה אחת, ומתיחות של חודשים נגמרת הלילה.",
   "setting": "שולחן עבודה עם מחשב או ניירות, מנורת שולחן אחת, שאר האורות כבויים. בגדי עבודה.",
   "props": "מחשב נייד או דפים, שתי כוסות קפה, מנורה.",
   "D": {
    "who": "הקולגה שתמיד נשאר/ת אחרון/ה ותמיד מסתכל/ת שנייה יותר מדי.",
    "how": "לעבוד ״ברצינות״ חמש דקות ולתת למבטים לעשות את העבודה. הערה ראשונה על משהו קטן. מגע ראשון: להזיז שיער, לתקן צווארון.",
    "secret": "המטרה הסודית: שמה שקורה יקרה כאן, במשרד, כשהמחשב עדיין דולק. אם עוברים לחדר אחר, הפסדת.",
    "opener": "״את/ה יודע/ת שאנחנו היחידים בקומה, נכון?״"
   },
   "S": {
    "who": "הקולגה שמעמיד/ה פנים שלא שם/ה לב כבר חודשים.",
    "how": "להישאר ממוקד/ת בעבודה כמה שיותר זמן, להגיב למגע בלי להסתכל. ואז, ברגע אחד, להפסיק להעמיד פנים לגמרי.",
    "secret": "המטרה הסודית: להגיד ל{D} בקול, לפני שמשהו קורה, את כל מה שחשבת עליו/ה בישיבות. בפירוט. רק אז.",
    "opener": "״עוד עמוד אחד ואני הולך/ת הביתה.״"
   },
   "beats": [
    "עבודה: חמש דקות של עבודה אמיתית, עם הערות קטנות, מבטים, ברך שנוגעת. האור נשאר מנורה אחת.",
    "הווידוי: אחד מכם מפסיק לעבוד ואומר בקול מה הוא/היא חשב/ה בישיבות. השני מקשיב/ה עד הסוף ורק אז עונה.",
    "השולחן: ניירות נופלים. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״. אחרי: מסדרים את השולחן בשקט, ו״נתראה מחר״."
   ]
  },
  "en": {
   "title": "Overtime",
   "premise": "Everyone went home. {D} and {S} stayed to finish a project, the office is dark except one lamp, and months of tension end tonight.",
   "setting": "A work desk with a laptop or papers, one desk lamp, all other lights off. Work clothes.",
   "props": "A laptop or papers, two coffee cups, a lamp.",
   "D": {
    "who": "The colleague who always stays last and always looks a second too long.",
    "how": "Work \"seriously\" for five minutes and let the looks do the job. A first remark about something small. First touch: moving hair, fixing a collar.",
    "secret": "Secret goal: whatever happens, happens here, in the office, with the laptop still on. If you move to another room, you lost.",
    "opener": "\"You know we are the only ones on the floor, right?\""
   },
   "S": {
    "who": "The colleague who has pretended not to notice for months.",
    "how": "Stay focused on the work as long as possible, respond to touch without looking. Then, in one moment, stop pretending completely.",
    "secret": "Secret goal: tell {D} out loud, before anything happens, everything you thought about them in meetings. In detail. Only then.",
    "opener": "\"One more page and I am going home.\""
   },
   "beats": [
    "Work: five minutes of real work, with small remarks, looks, a knee touching. The light stays one lamp.",
    "The confession: one of you stops working and says out loud what they thought about in meetings. The other listens to the end and only then answers.",
    "The desk: papers fall. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\". After: tidy the desk quietly, and \"see you tomorrow\"."
   ]
  }
 },
 "sv01": {
  "he": {
   "title": "המעסה",
   "premise": "{D} {d:מעסה|מעסה} ב״ספא״, {S} {s:הזמין|הזמינה} עיסוי רגיל. הידיים גולשות קצת מעבר, ואף אחד לא מתלונן.",
   "setting": "מגבת על המיטה, שמן חם, נר, מוזיקת ספא. {S} שוכב/ת על הבטן. {D} דופק/ת על הדלת ונכנס/ת.",
   "props": "שמן עיסוי, שתי מגבות, מוזיקה שקטה.",
   "D": {
    "who": "מעסה מקצועי/ת עם ידיים טובות מדי ושיקול דעת גמיש.",
    "how": "להתחיל בעיסוי אמיתי: עשר דקות של גב וכתפיים ברצינות. לשאול ״הלחץ בסדר?״ כל כמה דקות, גם כשהידיים כבר במקומות אחרים. המגבת זזה ״בטעות״.",
    "secret": "המטרה הסודית: שהלקוח/ה יבקש/תבקש במילים ״גם שם״. לא לפני שזה נאמר.",
    "opener": "״שלום, אני המעסה שלך להיום. נוח ככה?״"
   },
   "S": {
    "who": "לקוח/ה שבא/ה להירגע ומעמיד/ה פנים שלא שם/ה לב.",
    "how": "עיניים עצומות. להגיב בגוף, לא במילים, כמה שיותר זמן. להגיד ״גם שם״ רק כשבאמת אי אפשר אחרת.",
    "secret": "המטרה הסודית: להסתובב בשלב השלישי ולהגיד למעסה מה כולל ״הטיפול המלא״. ואז לקבל אותו.",
    "opener": "״יש לי כתפיים תפוסות. ו... בעצם הכול תפוס.״"
   },
   "beats": [
    "עיסוי אמיתי: גב, כתפיים, רגליים, בשמן, עשר דקות. ״הלחץ בסדר?״ המגבת יורדת סנטימטר כל פעם.",
    "הגלישה: הידיים עוברות קרוב. הלקוח/ה נושם/ת אחרת. ״גם שם״ נאמר, ורק אז הידיים ממשיכות.",
    "הטיפול המלא: הלקוח/ה מסתובב/ת ואומר/ת מה כלול. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The masseur",
   "premise": "{D} is a massage therapist at a \"spa\", {S} booked a regular massage. The hands drift a little beyond, and nobody complains.",
   "setting": "A towel on the bed, warm oil, a candle, spa music. {S} lies face down. {D} knocks on the door and comes in.",
   "props": "Massage oil, two towels, quiet music.",
   "D": {
    "who": "A professional therapist with hands that are too good and flexible judgment.",
    "how": "Start with a real massage: ten serious minutes of back and shoulders. Ask \"is the pressure okay?\" every few minutes, even when the hands are elsewhere. The towel moves \"by accident\".",
    "secret": "Secret goal: the client asks in words \"there too\". Not before it is said.",
    "opener": "\"Hello, I am your therapist today. Comfortable like this?\""
   },
   "S": {
    "who": "A client who came to relax and pretends not to notice.",
    "how": "Eyes closed. Respond with the body, not words, for as long as possible. Say \"there too\" only when there is truly no other way.",
    "secret": "Secret goal: turn over in the third beat and tell the therapist what the \"full treatment\" includes. Then receive it.",
    "opener": "\"My shoulders are tight. And... everything is tight, actually.\""
   },
   "beats": [
    "Real massage: back, shoulders, legs, with oil, ten minutes. \"Is the pressure okay?\" The towel drops a centimeter each time.",
    "The drift: the hands pass close. The client breathes differently. \"There too\" is said, and only then the hands continue.",
    "The full treatment: the client turns over and says what is included. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "sv02": {
  "he": {
   "title": "צילומים",
   "premise": "{D} {d:צלם|צלמת}, {S} {s:דוגמן|דוגמנית}, סשן ״אמנותי״. כל פריים דורש קצת פחות בגד וקצת יותר תנוחה.",
   "setting": "קיר ריק או סדין כרקע, מנורה חזקה, הטלפון של {D} כמצלמה. {S} מגיע/ה עם שלוש שכבות בגדים.",
   "props": "טלפון, מנורה, סדין, כיסא, שלוש שכבות.",
   "D": {
    "who": "צלם/ת אמנות עם חזון ברור ובלי בושה להגיד אותו.",
    "how": "להורות על תנוחות במדויק: ״סנטר למעלה, יד על הירך״. להגיד למה כל פריים יפה. להתקרב כדי ״לתקן״ תנוחה. לצלם באמת, ולמחוק יחד בסוף.",
    "secret": "המטרה הסודית: שהדוגמן/ית יציע/תציע בעצמו/ה את הפריים הכי חשוף של הסשן.",
    "opener": "״האור מושלם עליך. נתחיל לבוש/ה ונראה לאן זה הולך.״"
   },
   "S": {
    "who": "דוגמן/ית שרוצה את התמונות הכי טובות ומגלה שהמצלמה מחממת.",
    "how": "לעשות כל תנוחה שנאמרת, בלי להתווכח, ולהחזיק אותה. לשאול ״ככה?״ ולזוז קצת מעבר. שכבה יורדת בכל שלב.",
    "secret": "המטרה הסודית: לגרום לצלם/ת להניח את המצלמה ולהצטרף לפריים. מהרגע הזה לא מצלמים.",
    "opener": "״אני לא יודע/ת מה לעשות עם הידיים. תגיד/י לי.״"
   },
   "beats": [
    "שכבה ראשונה: תנוחות לבושות, הוראות מדויקות, המצלמה קרובה. הצלם/ת מתקן/ת ביד סנטר, ברך, יד.",
    "שכבה שנייה: תנוחות פתוחות יותר, הצלם/ת מתאר/ת בקול מה רואים בעדשה. הדוגמן/ית מציע/ה פריים.",
    "המצלמה מונחת: הצלם/ת נכנס/ת לפריים. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״. התמונות נמחקות יחד."
   ]
  },
  "en": {
   "title": "Photo shoot",
   "premise": "{D} is a photographer, {S} a model, an \"art\" session. Every frame calls for a little less clothing and a little more pose.",
   "setting": "A bare wall or a sheet as backdrop, a strong lamp, {D}'s phone as the camera. {S} arrives in three layers of clothing.",
   "props": "A phone, a lamp, a sheet, a chair, three layers.",
   "D": {
    "who": "An art photographer with a clear vision and no shame about saying it.",
    "how": "Direct poses precisely: \"chin up, hand on the hip\". Say why each frame is beautiful. Step in to \"fix\" a pose. Really take photos, and delete them together at the end.",
    "secret": "Secret goal: the model suggests the most exposed frame of the session by themselves.",
    "opener": "\"The light is perfect on you. Let's start dressed and see where it goes.\""
   },
   "S": {
    "who": "A model who wants the best photos and discovers the camera turns them on.",
    "how": "Do every pose named, without arguing, and hold it. Ask \"like this?\" and move a little beyond. One layer comes off per beat.",
    "secret": "Secret goal: make the photographer put the camera down and join the frame. From that moment nothing is photographed.",
    "opener": "\"I never know what to do with my hands. Tell me.\""
   },
   "beats": [
    "First layer: clothed poses, precise directions, the camera close. The photographer adjusts chin, knee, hand by touch.",
    "Second layer: more open poses, the photographer describes out loud what the lens sees. The model suggests a frame.",
    "Camera down: the photographer steps into the frame. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\". The photos are deleted together."
   ]
  }
 },
 "au01": {
  "he": {
   "title": "עצירה בצד הדרך",
   "premise": "{D} {d:שוטר|שוטרת} {d:שעצר|שעצרה} את {S} בלילה בכביש ריק. הרישיון לא בסדר, והדוח יכול להיעלם.",
   "setting": "שני כיסאות זה לצד זה כ״מושבי רכב״, אור של פנס טלפון. {S} ״נוהג/ת״, {D} מגיע/ה מבחוץ ודופק/ת על ״החלון״.",
   "props": "פנס, ״רישיון״ (כרטיס כלשהו), משקפי שמש גם בלילה.",
   "D": {
    "who": "שוטר/ת שלא ממהר/ת לשום מקום הלילה.",
    "how": "לדבר בסמכות שקטה. לבקש מסמכים, ״לצאת מהרכב״, ״ידיים על המכסה״. חיפוש יסודי ואיטי. כל שאלה נשאלת פעם אחת.",
    "secret": "המטרה הסודית: שהנהג/ת יציע/תציע ״לסדר את זה״ בעצמו/ה. לא להציע ראשון/ה.",
    "opener": "״רישיון ורישוי. את/ה יודע/ת למה עצרתי אותך?״"
   },
   "S": {
    "who": "נהג/ת שעשה/תה משהו לא בסדר ומנסה לצאת מזה בחן.",
    "how": "להיות מנומס/ת מדי. לענות ״כן, אדוני/גברתי״. לציית להוראות לאט. לחפש את הרגע שבו השוטר/ת מסתכל/ת שנייה יותר מדי, ולהשתמש בו.",
    "secret": "המטרה הסודית: לגרום לשוטר/ת להוריד את משקפי השמש. ברגע שהם יורדים, הדוח נעלם ואת/ה קובע/ת מה קורה.",
    "opener": "״ערב טוב. עברתי את המהירות? זה הכביש, הוא מפתה.״"
   },
   "beats": [
    "המסמכים: שאלות, תשובות מנומסות מדי, ״צא/י מהרכב״. ידיים על המכסה. חיפוש איטי ויסודי, מכף רגל ועד כתף.",
    "המשא ומתן: ״יש דרך לסדר את זה״. ההצעה נאמרת בקול, בפירוט, והשוטר/ת שוקל/ת בשתיקה ארוכה.",
    "המשקפיים יורדים: הדוח נקרע. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Pulled over",
   "premise": "{D} is a police officer who stopped {S} at night on an empty road. The license is not in order, and the ticket could disappear.",
   "setting": "Two chairs side by side as \"car seats\", a phone torch for light. {S} is \"driving\", {D} arrives from outside and knocks on the \"window\".",
   "props": "A torch, a \"license\" (any card), sunglasses even at night.",
   "D": {
    "who": "An officer in no hurry to be anywhere tonight.",
    "how": "Speak with quiet authority. Ask for documents, \"step out of the vehicle\", \"hands on the hood\". A slow, thorough search. Every question is asked once.",
    "secret": "Secret goal: the driver offers to \"sort this out\" by themselves. Do not offer first.",
    "opener": "\"License and registration. Do you know why I stopped you?\""
   },
   "S": {
    "who": "A driver who did something wrong and is trying to charm their way out.",
    "how": "Be too polite. Answer \"yes, officer\". Obey orders slowly. Look for the moment the officer looks a second too long, and use it.",
    "secret": "Secret goal: make the officer take off the sunglasses. The moment they come off, the ticket disappears and you decide what happens.",
    "opener": "\"Good evening. Was I speeding? It is the road, it is tempting.\""
   },
   "beats": [
    "The documents: questions, answers that are too polite, \"step out of the vehicle\". Hands on the hood. A slow, thorough search, from ankle to shoulder.",
    "The negotiation: \"there is a way to sort this out\". The offer is said out loud, in detail, and the officer considers it in a long silence.",
    "Sunglasses off: the ticket is torn up. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "au02": {
  "he": {
   "title": "חדר חקירות",
   "premise": "{D} {d:חוקר|חוקרת}, {S} {s:חשוד|חשודה} שמסתיר/ה משהו. אין עורך דין, אין שעון, ויש רק דרך אחת לצאת מהחדר.",
   "setting": "כיסא אחד באמצע החדר, מנורה שמכוונת אליו, שאר החדר חשוך. {S} על הכיסא. {D} מסתובב/ת סביב.",
   "props": "מנורת שולחן, כיסא, כוס מים אחת (רק לחוקר/ת), צעיף לכיסוי עיניים.",
   "D": {
    "who": "חוקר/ת סבלני/ת שיודע/ת שהזמן לטובתו/ה.",
    "how": "לשאול את אותה שאלה שלוש פעמים בשלוש דרכים. לשתוק הרבה. להתקרב מאחור. לכבות את האור ולהדליק. ״אנחנו יודעים הכול, רק רוצים לשמוע ממך.״",
    "secret": "המטרה הסודית: הווידוי: שהחשוד/ה יספר/תספר פנטזיה אמיתית אחת בגוף ראשון, בפירוט. רק אז ״החקירה״ נגמרת, ומה שהודה בו קורה.",
    "opener": "״שב/י בנוח. זה ייקח כמה שתרצה/י שזה ייקח.״"
   },
   "S": {
    "who": "חשוד/ה שמתכחש/ת לכול ונהנה/ית מתשומת הלב יותר מדי.",
    "how": "לשקר יפה בשלב הראשון. להישבר לאט. לדרוש מים ולא לקבל. כשמודים, להודות במשהו אמיתי.",
    "secret": "המטרה הסודית: לגרום לחוקר/ת לשבת על הכיסא במקומך לפני סוף הסצנה. ברגע שזה קורה, התפקידים מתהפכים.",
    "opener": "״אין לי מה להגיד. ואין לכם כלום.״"
   },
   "beats": [
    "השאלות: אותה שאלה בשלוש דרכים, שתיקות ארוכות, האור נכבה ונדלק. החשוד/ה משקר/ת יפה.",
    "הלחץ: כיסוי עיניים, לחישה באוזן, יד על הכתף. ״אנחנו יודעים.״ החשוד/ה מתחיל/ה להישבר.",
    "הווידוי: פנטזיה אמיתית, בגוף ראשון, בפירוט. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Interrogation room",
   "premise": "{D} is an interrogator, {S} a suspect hiding something. No lawyer, no clock, and only one way out of the room.",
   "setting": "One chair in the middle of the room, a lamp pointed at it, the rest dark. {S} on the chair. {D} circles around.",
   "props": "A desk lamp, a chair, one glass of water (for the interrogator only), a scarf as a blindfold.",
   "D": {
    "who": "A patient interrogator who knows time is on their side.",
    "how": "Ask the same question three times in three ways. Stay silent a lot. Approach from behind. Switch the light off and on. \"We know everything, we just want to hear it from you.\"",
    "secret": "Secret goal: the confession: the suspect tells one real fantasy in the first person, in detail. Only then the \"interrogation\" ends, and what was confessed happens.",
    "opener": "\"Sit comfortably. This will take as long as you want it to take.\""
   },
   "S": {
    "who": "A suspect who denies everything and enjoys the attention too much.",
    "how": "Lie beautifully in the first beat. Break slowly. Demand water and not get it. When confessing, confess something real.",
    "secret": "Secret goal: make the interrogator sit in the chair in your place before the scene ends. The moment it happens, the roles flip.",
    "opener": "\"I have nothing to say. And you have nothing.\""
   },
   "beats": [
    "The questions: the same question three ways, long silences, the light off and on. The suspect lies beautifully.",
    "The pressure: a blindfold, a whisper in the ear, a hand on the shoulder. \"We know.\" The suspect starts to break.",
    "The confession: a real fantasy, first person, in detail. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ca01": {
  "he": {
   "title": "בדיקה שנתית",
   "premise": "{S} {s:הגיע|הגיעה} לבדיקה שגרתית. {D} {d:הוא הרופא|היא הרופאה}, והבדיקה היום יסודית במיוחד.",
   "setting": "מגבת על המיטה כ״מיטת בדיקה״, אור חזק, {D} עם ״חלוק״ (חולצה לבנה) ופנקס. {S} נכנס/ת ומתבקש/ת להתפשט ״עד הנוחות״.",
   "props": "חולצה לבנה, פנקס, שעון, מגבת.",
   "D": {
    "who": "רופא/ה יסודי/ת, קול שקט, שאלות ישירות.",
    "how": "לשאול שאלות רפואיות ״רגילות״ שהופכות אישיות: שינה, תיאבון, מה גורם לדופק לעלות. לבדוק דופק ונשימה באמת. להורות במדויק: ״שכב/י. נשום/נשמי עמוק. תגיד/י לי אם זה רגיש.״",
    "secret": "המטרה הסודית: שהמטופל/ת יתלונן/תתלונן על ״תסמין״ שדורש בדיקה אינטימית יותר, בעצמו/ה.",
    "opener": "״שב/י. מה מביא אותך היום? הכול, לא רק מה שכתבת בטופס.״"
   },
   "S": {
    "who": "מטופל/ת שמגיע/ה לבדיקה רגילה ומגלה שהרופא/ה מצליח/ה להסמיק אותו/ה.",
    "how": "לענות בכנות על כל שאלה. לציית להוראות. לשאול ״זה נורמלי?״ על כל דבר. להמציא תסמין אחד שדורש תשומת לב.",
    "secret": "המטרה הסודית: לגרום לרופא/ה להוריד את הפנקס ולהגיד ״זה כבר לא מקצועי״. אז הבדיקה נגמרת, ומה שנשאר הוא לא בדיקה.",
    "opener": "״בעיקרון הכול בסדר. בעיקרון.״"
   },
   "beats": [
    "האנמנזה: שאלות רגילות שהופכות אישיות. דופק, נשימה, ״תגיד/י לי אם זה רגיש״. המטופל/ת מסמיק/ה.",
    "התסמין: המטופל/ת מתלונן/ת על משהו שדורש בדיקה יסודית יותר. הרופא/ה מסביר/ה כל שלב לפני שעושה אותו.",
    "הפנקס מונח: ״זה כבר לא מקצועי.״ מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Annual check-up",
   "premise": "{S} came for a routine check-up. {D} is the doctor, and today the examination is especially thorough.",
   "setting": "A towel on the bed as an \"exam table\", strong light, {D} in a \"coat\" (white shirt) with a notepad. {S} comes in and is asked to undress \"to comfort\".",
   "props": "A white shirt, a notepad, a watch, a towel.",
   "D": {
    "who": "A thorough doctor, quiet voice, direct questions.",
    "how": "Ask \"normal\" medical questions that turn personal: sleep, appetite, what makes the pulse rise. Really check pulse and breathing. Direct precisely: \"Lie down. Breathe deep. Tell me if this is tender.\"",
    "secret": "Secret goal: the patient complains, by themselves, of a \"symptom\" that needs a more intimate examination.",
    "opener": "\"Sit. What brings you in today? Everything, not just what you wrote on the form.\""
   },
   "S": {
    "who": "A patient who came for a routine check-up and finds the doctor can make them blush.",
    "how": "Answer every question honestly. Obey instructions. Ask \"is that normal?\" about everything. Invent one symptom that needs attention.",
    "secret": "Secret goal: make the doctor put the notepad down and say \"this is not professional anymore\". Then the exam is over, and what remains is not an exam.",
    "opener": "\"Basically everything is fine. Basically.\""
   },
   "beats": [
    "History: normal questions that turn personal. Pulse, breathing, \"tell me if this is tender\". The patient blushes.",
    "The symptom: the patient complains of something that needs a more thorough examination. The doctor explains every step before doing it.",
    "Notepad down: \"This is not professional anymore.\" From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ca02": {
  "he": {
   "title": "משמרת לילה",
   "premise": "{S} {s:מאושפז|מאושפזת} ללילה, לא יכול/ה לישון. {D} {d:האח|האחות} במשמרת הלילה, והמחלקה ריקה.",
   "setting": "המיטה כמיטת בית חולים, אור קטן אחד, {S} מתחת לשמיכה. {D} נכנס/ת ״לבדוק״ כל כמה דקות.",
   "props": "שמיכה, כוס מים, מדחום או שעון, חולצה לבנה.",
   "D": {
    "who": "אח/ות שמטפל/ת יותר טוב ממה שהתפקיד דורש.",
    "how": "לדבר בלחש, המחלקה ישנה. לסדר שמיכה, לבדוק חום ביד על המצח, לשאול ״כואב כאן?״. להישאר כל פעם דקה יותר. בלי שום דבר שלא ״טיפולי״, עד שהמטופל/ת מבקש/ת.",
    "secret": "המטרה הסודית: שהמטופל/ת יבקש/תבקש ״להישאר עוד קצת״ שלוש פעמים. בפעם השלישית נשארים.",
    "opener": "״עוד ער/ה? אני כאן עד הבוקר, אפשר לצלצל בכל רגע.״"
   },
   "S": {
    "who": "מטופל/ת שלא כואב לו/ה כלום, רק משעמם וחם.",
    "how": "להמציא כאב קטן בכל ביקור, במקום אחר. להודות. לבקש מים. לשאול שאלות אישיות על החיים של האח/ות. לבקש ״עוד קצת״.",
    "secret": "המטרה הסודית: לגרום לאח/ות להיכנס מתחת לשמיכה ״רק לרגע״.",
    "opener": "״אי אפשר לישון כאן. את/ה יכול/ה לשבת רגע?״"
   },
   "beats": [
    "הביקורים: כל כמה דקות ביקור קצר בלחש: שמיכה, מצח, ״כואב כאן?״. כל ביקור ארוך יותר בדקה.",
    "״להישאר עוד קצת״: האח/ות יושב/ת על קצה המיטה, שיחה בלחש, יד שנשארת. הבקשה השלישית.",
    "מתחת לשמיכה: ״רק לרגע״. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Night shift",
   "premise": "{S} is in hospital for the night and cannot sleep. {D} is the nurse on the night shift, and the ward is empty.",
   "setting": "The bed as a hospital bed, one small light, {S} under the blanket. {D} comes in \"to check\" every few minutes.",
   "props": "A blanket, a glass of water, a thermometer or a watch, a white shirt.",
   "D": {
    "who": "A nurse who cares better than the job requires.",
    "how": "Whisper, the ward is asleep. Fix the blanket, check for fever with a hand on the forehead, ask \"does it hurt here?\". Stay a minute longer each time. Nothing that is not \"clinical\", until the patient asks.",
    "secret": "Secret goal: the patient asks you to \"stay a little longer\" three times. The third time, you stay.",
    "opener": "\"Still awake? I am here until morning, you can ring any time.\""
   },
   "S": {
    "who": "A patient with nothing hurting, just bored and warm.",
    "how": "Invent a small pain at every visit, somewhere else. Say thank you. Ask for water. Ask personal questions about the nurse's life. Ask for \"a little longer\".",
    "secret": "Secret goal: make the nurse get under the blanket \"just for a moment\".",
    "opener": "\"Nobody can sleep here. Can you sit for a moment?\""
   },
   "beats": [
    "The visits: every few minutes a short whispered visit: blanket, forehead, \"does it hurt here?\". Each visit a minute longer.",
    "\"Stay a little longer\": the nurse sits on the edge of the bed, whispered talk, a hand that stays. The third request.",
    "Under the blanket: \"just for a moment\". From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "fa01": {
  "he": {
   "title": "הערפד/ית",
   "premise": "לילה, בית ישן, {S} לבד. {D} {d:הוא ערפד|היא ערפדית} שאסור לו/לה להיכנס בלי הזמנה. ההזמנה היא כל הסצנה.",
   "setting": "אור נרות בלבד. {S} ״בבית״, {D} מחוץ לדלת החדר. {D} נכנס/ת רק אחרי שמוזמן/ת במילים.",
   "props": "נרות, חלוק או בגד ארוך כהה, יין אדום בכוס.",
   "D": {
    "who": "ערפד/ית בן/בת מאות שנים, סבלני/ת, מנומס/ת, רעב/ה.",
    "how": "לא לעבור את הסף עד שנאמר ״היכנס/י״. לדבר לאט, במשפטים ישנים. להבטיח מה יקרה אחרי ההזמנה, בפירוט, ולקיים. הנשיכה היא נשיקה ארוכה על הצוואר, לא יותר.",
    "secret": "המטרה הסודית: שההזמנה תיאמר שלוש פעמים, בכל פעם בקול יותר בטוח. אחרי השלישית, ״הקורבן״ שייך/ת לך עד הבוקר.",
    "opener": "״אני לא יכול/ה להיכנס. את/ה יודע/ת את זה. אז למה פתחת את הדלת?״"
   },
   "S": {
    "who": "בן/בת אדם שיודע/ת בדיוק מה עומד בפתח, ופותח/ת בכל זאת.",
    "how": "לפחד ולרצות באותו זמן. לשאול מה יקרה. לדרוש הבטחות. להזמין רק אחרי שההבטחות מספקות. אחרי הנשיכה: להפסיק להתנגד לגמרי.",
    "secret": "המטרה הסודית: לגרום לערפד/ית להבטיח דבר אחד שהוא/היא לא יכול/ה לעמוד בו, ולהשתמש בזה בבוקר.",
    "opener": "״אני יודע/ת מה את/ה. תגיד/י לי קודם מה את/ה רוצה.״"
   },
   "beats": [
    "הסף: הערפד/ית בחוץ, בן/בת האדם בפנים. שאלות, הבטחות, פחד ורצון. ההזמנה הראשונה נאמרת בלחש.",
    "ההזמנה: שלוש פעמים, בקול עולה. הערפד/ית נכנס/ת. הנשיכה: נשיקה ארוכה על הצוואר שמשנה הכול.",
    "עד הבוקר: ״הקורבן״ שייך/ת. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The vampire",
   "premise": "Night, an old house, {S} alone. {D} is a vampire who cannot enter without an invitation. The invitation is the whole scene.",
   "setting": "Candlelight only. {S} \"at home\", {D} outside the bedroom door. {D} enters only after being invited in words.",
   "props": "Candles, a robe or a long dark garment, red wine in a glass.",
   "D": {
    "who": "A vampire centuries old, patient, polite, hungry.",
    "how": "Do not cross the threshold until \"come in\" is said. Speak slowly, in old sentences. Promise what will happen after the invitation, in detail, and keep it. The bite is a long kiss on the neck, no more.",
    "secret": "Secret goal: the invitation is said three times, each time in a surer voice. After the third, the \"victim\" belongs to you until morning.",
    "opener": "\"I cannot come in. You know that. So why did you open the door?\""
   },
   "S": {
    "who": "A human who knows exactly what stands at the door, and opens it anyway.",
    "how": "Be afraid and want it at the same time. Ask what will happen. Demand promises. Invite only once the promises are enough. After the bite: stop resisting completely.",
    "secret": "Secret goal: make the vampire promise one thing they cannot keep, and use it in the morning.",
    "opener": "\"I know what you are. Tell me first what you want.\""
   },
   "beats": [
    "The threshold: the vampire outside, the human inside. Questions, promises, fear and desire. The first invitation is whispered.",
    "The invitation: three times, in a rising voice. The vampire enters. The bite: a long kiss on the neck that changes everything.",
    "Until morning: the \"victim\" belongs. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "fa02": {
  "he": {
   "title": "המלכה והמשרת / המלך והמשרתת",
   "premise": "{D} {d:מלך|מלכה} בערב שבו החצר ריקה. {S} {s:המשרת|המשרתת} היחיד/ה שנשאר/ה. כל בקשה של המלכות היא פקודה, וכל פקודה מנומסת להפליא.",
   "setting": "כיסא גבוה כ״כס״, {D} יושב/ת עם משקה. {S} עומד/ת במרחק שלושה צעדים ומתקרב/ת רק כשקוראים.",
   "props": "כיסא גבוה, כוס, צעיף או שמיכה כגלימה, פעמון קטן או כוס שמקישים עליה.",
   "D": {
    "who": "מלך/מלכה משועמם/ת, מנומס/ת, שרגיל/ה שהכול מגיע.",
    "how": "לא לקום מהכס כל הסצנה. לבקש דברים קטנים בנימוס מושלם: ״הבא/י לי״, ״כרע/י״, ״קרוב יותר״. לשבח בקול כשמבצעים יפה. לדבר על המשרת/ת בגוף שלישי.",
    "secret": "המטרה הסודית: שהמשרת/ת יבקש/תבקש בעצמו/ה רשות לגעת בכתר, כלומר במלכות. רק אז יורדים מהכס.",
    "opener": "״כולם הלכו. נשארת רק את/ה. זה מזל שלך או שלי?״"
   },
   "S": {
    "who": "משרת/ת נאמן/ה שיודע/ת את מקומו/ה ויודע/ת גם איך להזיז אותו.",
    "how": "״כן, הוד מלכותך״ על הכול. להתקרב צעד בכל בקשה. לבצע כל דבר לאט ויפה מדי. לבקש רשות לפני כל מגע.",
    "secret": "המטרה הסודית: לגרום למלכות לקום מהכס. ברגע שהמלך/ה עומד/ת, החצר שייכת למשרת/ת עד הבוקר.",
    "opener": "״הוד מלכותך קרא/ה לי?״"
   },
   "beats": [
    "הבקשות: משקה, כרית, נעל שמורידים, ברך שכורעים עליה. צעד קרוב יותר בכל בקשה. ״כן, הוד מלכותך.״",
    "הרשות: המשרת/ת מבקש/ת רשות לגעת, פעם אחר פעם, ומקבל/ת אותה בנימוס מלכותי. הכס לא זז.",
    "הכס מתרוקן: המלכות קמה. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The queen and the servant",
   "premise": "{D} is the monarch on an evening when the court is empty. {S} is the only servant left. Every royal request is an order, and every order is impeccably polite.",
   "setting": "A high chair as a \"throne\", {D} seated with a drink. {S} stands three steps away and approaches only when called.",
   "props": "A high chair, a glass, a scarf or blanket as a cloak, a small bell or a glass to tap.",
   "D": {
    "who": "A bored, polite monarch used to everything arriving.",
    "how": "Do not get off the throne for the whole scene. Ask for small things with perfect manners: \"bring me\", \"kneel\", \"closer\". Praise out loud when it is done beautifully. Speak of the servant in the third person.",
    "secret": "Secret goal: the servant asks, by themselves, permission to touch the crown, meaning royalty. Only then you come down from the throne.",
    "opener": "\"Everyone left. Only you remain. Is that your luck or mine?\""
   },
   "S": {
    "who": "A loyal servant who knows their place and also knows how to move it.",
    "how": "\"Yes, your majesty\" to everything. One step closer with every request. Do everything slowly and too beautifully. Ask permission before every touch.",
    "secret": "Secret goal: make the monarch rise from the throne. The moment the monarch stands, the court belongs to the servant until morning.",
    "opener": "\"Your majesty called for me?\""
   },
   "beats": [
    "The requests: a drink, a cushion, a shoe removed, a knee to kneel on. One step closer with every request. \"Yes, your majesty.\"",
    "Permission: the servant asks permission to touch, again and again, and receives it with royal manners. The throne does not move.",
    "The throne empties: royalty rises. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "fo01": {
  "he": {
   "title": "השכן/ה",
   "premise": "{D} {d:השכן|השכנה} מהדלת ממול {d:בא|באה} ״לשאול סוכר״ בשעה שלא שואלים סוכר. {S} לבד בבית, ושניכם יודעים שהסוכר הוא תירוץ.",
   "setting": "המטבח. {S} בבגדי בית. {D} דופק/ת על הדלת עם כוס ריקה.",
   "props": "כוס ריקה, סוכר, בגדי בית, קומקום.",
   "D": {
    "who": "השכן/ה שתמיד אומר/ת שלום במדרגות שנייה ארוכה מדי.",
    "how": "להיכנס ״לרגע״ ולא ללכת. לשים לב בקול לפרטים בבית ובשכן/ה. לעמוד קרוב מדי במטבח הצר. לדבר על ״הקירות הדקים״.",
    "secret": "המטרה הסודית: שהשכן/ה יציע/תציע קפה בעצמו/ה, ואחר כך ״להישאר עוד קצת״. לא לבקש.",
    "opener": "״נגמר לי הסוכר. באמת. בערך.״"
   },
   "S": {
    "who": "השכן/ה שמחכה לדפיקה הזאת כבר חודשיים.",
    "how": "להעמיד פנים שזה מפתיע. להכין קפה לאט מדי. לעבור ליד במטבח הצר בלי לזוז הצידה. לשאול על הקירות הדקים ועל מה שומעים דרכם.",
    "secret": "המטרה הסודית: לגרום ל{D} להודות שהוא/היא שמע/ה משהו דרך הקיר. ברגע שזה נאמר, הסוכר נשכח.",
    "opener": "״סוכר? בשעה כזאת? תיכנס/י.״"
   },
   "beats": [
    "הסוכר: כוס ריקה, מטבח צר, ״רק לרגע״. הערות על הבית, מרחק שמתקצר, קפה שמתכונן לאט מדי.",
    "הקירות הדקים: מה שומעים דרכם. וידוי קטן, ואז גדול. היד על המשטח ליד היד.",
    "הסוכר נשכח: מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The neighbor",
   "premise": "{D}, the neighbor from across the hall, comes \"to borrow sugar\" at an hour when nobody borrows sugar. {S} is home alone, and you both know the sugar is an excuse.",
   "setting": "The kitchen. {S} in home clothes. {D} knocks on the door with an empty cup.",
   "props": "An empty cup, sugar, home clothes, a kettle.",
   "D": {
    "who": "The neighbor who always says hello on the stairs a second too long.",
    "how": "Come in \"for a moment\" and do not leave. Notice details in the home and in the neighbor out loud. Stand too close in the narrow kitchen. Talk about \"the thin walls\".",
    "secret": "Secret goal: the neighbor offers coffee by themselves, and later \"stay a little longer\". Do not ask.",
    "opener": "\"I ran out of sugar. Really. Roughly.\""
   },
   "S": {
    "who": "The neighbor who has been waiting for this knock for two months.",
    "how": "Pretend it is a surprise. Make coffee far too slowly. Pass by in the narrow kitchen without stepping aside. Ask about the thin walls and what one hears through them.",
    "secret": "Secret goal: make {D} admit they heard something through the wall. The moment it is said, the sugar is forgotten.",
    "opener": "\"Sugar? At this hour? Come in.\""
   },
   "beats": [
    "The sugar: an empty cup, a narrow kitchen, \"just for a moment\". Remarks about the home, a shrinking distance, coffee that takes too long.",
    "The thin walls: what one hears through them. A small confession, then a big one. A hand on the counter next to a hand.",
    "The sugar is forgotten: From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "fo02": {
  "he": {
   "title": "החדר הלא נכון",
   "premise": "{S} {s:נכנס|נכנסת} לחדר מלון ומגלה זר/ה במיטה. טעות של הקבלה. אף אחד לא ממהר לקרוא למישהו.",
   "setting": "חדר השינה הוא חדר מלון. {D} כבר במיטה, אור מנורה אחת. {S} נכנס/ת עם ״מזוודה״ ומפתח.",
   "props": "תיק או מזוודה, חלוק רחצה, שני מפתחות או כרטיסים.",
   "D": {
    "who": "אורח/ת שהגיע/ה ראשון/ה, נינוח/ה מדי בשביל מישהו שנתפס.",
    "how": "לא לקום מהמיטה. להתייחס למצב כאל בדיחה טובה ולהציע ״להתחלק״. לתת ל{S} לעשות את הצעד הראשון, ואז לא לעצור.",
    "secret": "המטרה הסודית: ש{S} יחליט/תחליט להישאר בחדר הזה בקול רם, לפני שמישהו נוגע במישהו.",
    "opener": "״את/ה בחדר הלא נכון. או שאני. בכל מקרה, המיטה גדולה.״"
   },
   "S": {
    "who": "נוסע/ת אחרי טיסה ארוכה, רוצה רק מקלחת ומיטה.",
    "how": "לנסות להתקשר לקבלה ״ואף אחד לא עונה״. להיכנס למקלחת באמת ולצאת בחלוק. ברגע שיש מגע, להיות זה שמבקש בקול מה הוא/היא רוצה.",
    "secret": "המטרה הסודית: שהשם האמיתי ייאמר רק ברגע האחרון של הסצנה, ולא לפני.",
    "opener": "״זה חדר 214? כי זה גם המפתח שלי.״"
   },
   "beats": [
    "הוויכוח: מי יוצא. אף אחד. {S} הולך/ת למקלחת, {D} נשאר/ת במיטה. הדלת נשארת פתוחה.",
    "החלוק: {S} חוזר/ת בחלוק. {D} מתאר/ת בקול מה הוא/היא רואה. ההחלטה להישאר נאמרת בקול.",
    "המיטה הגדולה: מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״. השם נאמר רק בסוף."
   ]
  },
  "en": {
   "title": "The wrong room",
   "premise": "{S} walks into a hotel room and finds a stranger in the bed. A front-desk mistake. Nobody is in a hurry to call anyone.",
   "setting": "The bedroom is a hotel room. {D} is already in bed, one lamp on. {S} comes in with a \"suitcase\" and a key.",
   "props": "A bag or suitcase, a bathrobe, two keys or cards.",
   "D": {
    "who": "A guest who arrived first, far too relaxed for someone who got caught.",
    "how": "Do not get out of bed. Treat the situation as a good joke and offer to \"share\". Let {S} make the first move, then do not stop.",
    "secret": "Secret goal: {S} decides out loud to stay in this room, before anyone touches anyone.",
    "opener": "\"You are in the wrong room. Or I am. Either way, the bed is big.\""
   },
   "S": {
    "who": "A traveler after a long flight who only wants a shower and a bed.",
    "how": "Try to call reception \"and nobody answers\". Take a real shower and come out in the robe. Once there is touching, be the one who asks out loud for what they want.",
    "secret": "Secret goal: the real name is said only in the last moment of the scene, and not before.",
    "opener": "\"Is this 214? Because this is my key too.\""
   },
   "beats": [
    "The argument: who leaves. Nobody. {S} goes to shower, {D} stays in bed. The door stays open.",
    "The robe: {S} comes back in the robe. {D} describes out loud what they see. The decision to stay is said out loud.",
    "The big bed: From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\". The name is said only at the end."
   ]
  }
 },
 "co01": {
  "he": {
   "title": "מכירה פומבית",
   "premise": "{D} {d:קנה|קנתה} את {S} לערב אחד במכירה פומבית. החוזה ברור: הערב שייך לקונה, ולדמות יש רק זכות אחת, מילת העצירה.",
   "setting": "{S} עומד/ת באמצע החדר, {D} יושב/ת ומסתכל/ת. ״החוזה״ הוא דף עם שלוש שורות שכותבים יחד לפני שמתחילים.",
   "props": "דף ועט, כיסא, סרט או צעיף כ״תג״.",
   "D": {
    "who": "קונה שבחן/ה את הסחורה היטב לפני שהרים/ה את היד.",
    "how": "לכתוב יחד את החוזה: שלושה דברים שהערב כולל, בתוך הגבולות. ואז להפסיק לשאול ולהתחיל להורות: בשקט, בביטחון, בלי להסביר. להסתכל הרבה לפני שנוגעים.",
    "secret": "המטרה הסודית: ש{S} יגיד/תגיד ״אני שלך הערב״ בלי שנדרש/ה. ואז לממש את החוזה סעיף סעיף.",
    "opener": "״שילמתי הרבה. בוא/י נוודא ששווה.״"
   },
   "S": {
    "who": "מי שנמכר/ה ובחר/ה להימכר, ונהנה/ית מהבחירה.",
    "how": "לעמוד ישר, להסתכל למטה, לדבר רק כשנשאל/ת. לבצע הוראות במדויק ולאט. לא ליזום כלום עד הסעיף האחרון בחוזה.",
    "secret": "המטרה הסודית: לגרום לקונה להגיד ״בבקשה״ פעם אחת לפני סוף הערב. אז הסעיף האחרון בחוזה נכתב על ידך.",
    "opener": "״החוזה אומר ערב אחד. איפה מתחילים?״"
   },
   "beats": [
    "החוזה: שלוש שורות שכותבים יחד, בתוך הגבולות. חתימה. הקונה מסתכל/ת דקה שלמה בלי לדבר.",
    "הסעיפים: אחד אחד, בהוראות שקטות. ״אני שלך הערב״ נאמר, או לא. הקונה לא מסביר/ה.",
    "הסעיף האחרון: מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The auction",
   "premise": "{D} bought {S} for one evening at an auction. The contract is clear: the evening belongs to the buyer, and the character has only one right, the stop word.",
   "setting": "{S} stands in the middle of the room, {D} sits and watches. \"The contract\" is a sheet with three lines you write together before starting.",
   "props": "A sheet and a pen, a chair, a ribbon or scarf as a \"tag\".",
   "D": {
    "who": "A buyer who examined the goods well before raising a hand.",
    "how": "Write the contract together: three things the evening includes, within the limits. Then stop asking and start directing: quietly, confidently, without explaining. Look for a long time before touching.",
    "secret": "Secret goal: {S} says \"I am yours tonight\" without being told to. Then fulfil the contract clause by clause.",
    "opener": "\"I paid a lot. Let's make sure it was worth it.\""
   },
   "S": {
    "who": "Someone who was sold and chose to be sold, and enjoys the choice.",
    "how": "Stand straight, look down, speak only when asked. Follow orders precisely and slowly. Initiate nothing until the last clause of the contract.",
    "secret": "Secret goal: make the buyer say \"please\" once before the evening ends. Then the last clause of the contract is written by you.",
    "opener": "\"The contract says one evening. Where do we start?\""
   },
   "beats": [
    "The contract: three lines written together, within the limits. A signature. The buyer looks for a full minute without speaking.",
    "The clauses: one by one, in quiet orders. \"I am yours tonight\" is said, or not. The buyer does not explain.",
    "The last clause: From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "co02": {
  "he": {
   "title": "המהפנט/ת",
   "premise": "{D} {d:מהפנט|מהפנטת} ו{S} {s:מתנדב|מתנדבת} מהקהל. אחרי ״שלוש, שתיים, אחת״ הגוף של {S} מציית לכל מילה, ושניכם יודעים שזה משחק, וזה מה שהופך אותו לטוב.",
   "setting": "{S} יושב/ת על כיסא מול {D}. נר או אור אחד. ״הקהל״ הוא החדר הריק.",
   "props": "כיסא, שעון על שרשרת או משהו שמתנדנד, נר.",
   "D": {
    "who": "מהפנט/ת במה, קול רך, ביטחון מוחלט.",
    "how": "לספור לאחור לאט. לתת ״הצעות״ במקום פקודות: ״היד שלך כבדה. היא רוצה לרדת.״ להתחיל בדברים תמימים (לצחוק, לשכוח מספר) ולהתקדם לאט. לבדוק בקול שהמתנדב/ת ״עמוק״ לפני כל שלב.",
    "secret": "המטרה הסודית: ש{S} יבקש/תבקש בעצמו/ה ״עמוק יותר״. אז ההצעה הבאה היא זו שחיכית לה.",
    "opener": "״תסתכל/י על זה. רק על זה. שלוש... שתיים...״"
   },
   "S": {
    "who": "מתנדב/ת ספקן/ית שמופתע/ת כמה טוב זה עובד.",
    "how": "להתנגד בהתחלה ולהיכנע בחיוך. לבצע כל ״הצעה״ כאילו היא מגיעה מבפנים. לדבר בקול איטי. לבקש ״עמוק יותר״ כשמוכנים.",
    "secret": "המטרה הסודית: להעמיד פנים שהתעוררת באמצע, ברגע הכי פחות נוח למהפנט/ת, ואז להפוך את הכיוון: את/ה סופר/ת לאחור.",
    "opener": "״זה לא עובד עליי. אבל תנסה/י.״"
   },
   "beats": [
    "הספירה: שלוש, שתיים, אחת. הצעות תמימות: היד כבדה, שוכחים מספר, צוחקים בלי סיבה. ״עמוק?״ ״עמוק.״",
    "״עמוק יותר״: ההצעות מתקדמות, לאט, כל אחת נבדקת בקול. הגוף מציית למילים.",
    "ההתעוררות: מישהו סופר לאחור. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The hypnotist",
   "premise": "{D} is a hypnotist and {S} a volunteer from the audience. After \"three, two, one\" {S}'s body obeys every word, and you both know it is a game, which is what makes it good.",
   "setting": "{S} sits on a chair facing {D}. A candle or one light. \"The audience\" is the empty room.",
   "props": "A chair, a watch on a chain or anything that swings, a candle.",
   "D": {
    "who": "A stage hypnotist, soft voice, total confidence.",
    "how": "Count down slowly. Give \"suggestions\" instead of orders: \"Your hand is heavy. It wants to go down.\" Start with innocent things (laugh, forget a number) and progress slowly. Check out loud that the volunteer is \"deep\" before every step.",
    "secret": "Secret goal: {S} asks by themselves for \"deeper\". Then the next suggestion is the one you were waiting for.",
    "opener": "\"Look at this. Only at this. Three... two...\""
   },
   "S": {
    "who": "A skeptical volunteer surprised by how well it works.",
    "how": "Resist at first and surrender with a smile. Carry out every \"suggestion\" as if it came from inside. Speak slowly. Ask for \"deeper\" when ready.",
    "secret": "Secret goal: pretend to wake up in the middle, at the least convenient moment for the hypnotist, and then reverse the direction: you count down.",
    "opener": "\"This does not work on me. But try.\""
   },
   "beats": [
    "The count: three, two, one. Innocent suggestions: the hand is heavy, a number is forgotten, laughter for no reason. \"Deep?\" \"Deep.\"",
    "\"Deeper\": the suggestions progress, slowly, each checked out loud. The body obeys the words.",
    "Waking up: someone counts down. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "sw01": {
  "he": {
   "title": "אני את/ה",
   "premise": "הערב כל אחד משחק את השני. {D} {d:הוא|היא} {S}, ו{S} {s:הוא|היא} {D}: הקול, ההרגלים, הדרך שבה כל אחד מפלרטט. מוגזם מותר.",
   "setting": "הסלון. כל אחד לובש פריט אחד של השני. מתחילים מחיבוק ״רגיל״ של ערב רגיל, ומשם הכול הפוך.",
   "props": "פריט לבוש של השני, הטלפון של השני (לצילום סלפי אחד במצב דמות), משקה שהשני אוהב.",
   "D": {
    "who": "{S}. בדיוק {S}: הביטויים, הנדנודים הקטנים, מה שהוא/היא עושה כשרוצה.",
    "how": "לחקות באהבה ובהגזמה. לפתוח במשפט שהשני אומר תמיד. ליזום בדיוק כמו שהשני יוזם, כולל הדברים שהוא/היא ״אף פעם לא עושה״.",
    "secret": "המטרה הסודית: לגרום ל{S} להגיד ״אני לא ככה!״ ואז להוכיח שכן, עם דוגמה מהשבוע האחרון.",
    "opener": "המשפט ש{S} אומר/ת הכי הרבה בערב רגיל."
   },
   "S": {
    "who": "{D}. בדיוק {D}: הביטחון או הביישנות, הקצב, הידיים.",
    "how": "לשחק את השני כפי שהיית רוצה שיהיה, לא רק כפי שהוא. להגיב למה שהשני עושה ״בתור את/ה״ בלי לשבור.",
    "secret": "המטרה הסודית: לעשות משהו ש{D} תמיד רוצה שתעשה/י ולא עושה/ה, ״כי ככה {D} עושה״. לראות אם הוא/היא שם/ה לב.",
    "opener": "המשפט ש{D} אומר/ת כשהוא/היא רוצה משהו."
   },
   "beats": [
    "ערב רגיל, הפוך: שיחה על היום, כל אחד בתור השני. מי שצוחק ראשון מקבל ״הערה״ מהדמות שלו.",
    "הפיתוי ההפוך: כל אחד מפתה כמו שהשני מפתה. ההגזמה מותרת, הדיוק מרגש יותר.",
    "הרגע שבו שניכם מבינים משהו על עצמכם. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "I am you",
   "premise": "Tonight each of you plays the other. {D} is {S}, and {S} is {D}: the voice, the habits, the way each one flirts. Exaggeration allowed.",
   "setting": "The living room. Each wears one item of the other's clothes. Start from a \"regular\" hug of a regular evening, and from there everything is reversed.",
   "props": "An item of the other's clothing, the other's phone (for one selfie in character), a drink the other likes.",
   "D": {
    "who": "{S}. Exactly {S}: the expressions, the little nags, what they do when they want something.",
    "how": "Imitate with love and exaggeration. Open with the sentence the other always says. Initiate exactly as the other initiates, including the things they \"never do\".",
    "secret": "Secret goal: make {S} say \"I am not like that!\" and then prove they are, with an example from the past week.",
    "opener": "The sentence {S} says most on a regular evening."
   },
   "S": {
    "who": "{D}. Exactly {D}: the confidence or the shyness, the pace, the hands.",
    "how": "Play the other as you wish they were, not only as they are. React to what the other does \"as you\" without breaking.",
    "secret": "Secret goal: do something {D} always wants you to do and you don't, \"because that is how {D} does it\". See if they notice.",
    "opener": "The sentence {D} says when they want something."
   },
   "beats": [
    "A regular evening, reversed: talk about the day, each as the other. Whoever laughs first gets a \"remark\" from their character.",
    "The reversed seduction: each seduces the way the other seduces. Exaggeration is allowed, accuracy is more exciting.",
    "The moment you both understand something about yourselves. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "sw02": {
  "he": {
   "title": "התאומ/ה המרושע/ת",
   "premise": "{S} {s:חוזר|חוזרת} הביתה, אבל מי שמחכה הוא לא {D}. זה/זו התאומ/ה, שמעולם לא סיפרו עליו/ה, וההבדל היחיד: בלי שום עכבות.",
   "setting": "{D} מחכה בבית בבגד או בתסרוקת ששונים מהרגיל. {S} ״נכנס/ת הביתה״ מהדלת. אור אחר מהרגיל.",
   "props": "פריט לבוש שלא לובשים, שפתון או בושם אחר, כוס שכבר מזוגה.",
   "D": {
    "who": "התאומ/ה: אותם פנים, אפס עכבות, מדבר/ת על {D} בגוף שלישי.",
    "how": "להכחיש בשלווה שאת/ה {D}. לספר ״סודות״ על {D} (מה הוא/היא באמת רוצה). להיות ישיר/ה במקומות ש{D} מהסס/ת. בלי מגע עד שהשני/ה מבקש/ת בקול.",
    "secret": "המטרה הסודית: ש{S} יגיד/תגיד בקול דבר אחד שהוא/היא מעדיף/ה בתאומ/ה על פני {D}. ואז לממש בדיוק את זה.",
    "opener": "״{D}? לא, הוא/היא יצא/ה. אני נשארתי לחכות לך.״"
   },
   "S": {
    "who": "בן/בת הזוג שחוזר/ת הביתה ומבין/ה מהר, ומחליט/ה לשתף פעולה.",
    "how": "לפקפק, לחקור, לשאול שאלות על {D} שאף פעם לא שאלת. להתמסר רק אחרי שהתאומ/ה הוכיח/ה שהוא/היא ״אחר/ת״.",
    "secret": "המטרה הסודית: לגרום לתאומ/ה להודות במשהו ש{D} ״אף פעם לא היה/תה מודה בו״. אז ההחלטה מי נשאר בבית הלילה היא שלך.",
    "opener": "״מה עשית עם ה{d:בן|בת} זוג שלי?״"
   },
   "beats": [
    "הפגישה: הכחשות, סודות על {D}, שאלות שלא שואלים. המרחק נשמר.",
    "ההוכחה: התאומ/ה עושה דבר אחד ש{D} מהסס/ת לעשות. {S} מבקש/ת בקול את ההמשך.",
    "מי נשאר הלילה: מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The evil twin",
   "premise": "{S} comes home, but the one waiting is not {D}. It is the twin nobody ever mentioned, and the only difference: no inhibitions at all.",
   "setting": "{D} waits at home in clothes or a hairstyle unlike the usual. {S} \"comes home\" through the door. Different light than usual.",
   "props": "An item of clothing you never wear, a different lipstick or perfume, a glass already poured.",
   "D": {
    "who": "The twin: the same face, zero inhibitions, speaks of {D} in the third person.",
    "how": "Calmly deny being {D}. Tell \"secrets\" about {D} (what they really want). Be direct where {D} hesitates. No touching until the other asks out loud.",
    "secret": "Secret goal: {S} says out loud one thing they prefer in the twin over {D}. Then do exactly that.",
    "opener": "\"{D}? No, they went out. I stayed to wait for you.\""
   },
   "S": {
    "who": "The partner who comes home, understands quickly, and decides to play along.",
    "how": "Doubt, investigate, ask questions about {D} you never asked. Give in only after the twin has proven they are \"different\".",
    "secret": "Secret goal: make the twin admit something {D} \"would never admit\". Then the decision of who stays home tonight is yours.",
    "opener": "\"What did you do with my partner?\""
   },
   "beats": [
    "The meeting: denials, secrets about {D}, questions nobody asks. The distance is kept.",
    "The proof: the twin does one thing {D} hesitates to do. {S} asks out loud for the continuation.",
    "Who stays tonight: From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "si01": {
  "he": {
   "title": "נשף מסכות אילם",
   "premise": "נשף שבו אסור לדבר. שתי מסכות, מוזיקה, ואף מילה. כל מה שרוצים להגיד עובר דרך העיניים והידיים.",
   "setting": "אור נר, מוזיקה איטית, מסכות (גם צעיף קשור על העיניים העליונות עובד). מהרגע שהמסכות עולות, שתיקה מוחלטת. מילה = עונש קטן שמוסכם מראש.",
   "props": "שתי מסכות או צעיפים, מוזיקה, משקה.",
   "D": {
    "who": "אורח/ת בנשף שבחר/ה דווקא את האדם שלא מכיר/ה.",
    "how": "להזמין לריקוד ביד מושטת, לא במילה. להוביל את הקצב. לגעת רק איפה שהשני/ה ״מרשה״ במבט. ללמד את השני/ה סימן אחד.",
    "secret": "המטרה הסודית: שהשני/ה יסיר/תסיר את המסכה בעצמו/ה, בלי שביקשת. רק אז מותר לדבר, במשפט אחד.",
    "opener": "יד מושטת, בלי מילה."
   },
   "S": {
    "who": "אורח/ת שהגיע/ה לבד ומחליט/ה שהלילה לא מדברים.",
    "how": "לענות רק בגוף. להמציא שני סימנים: ״כן״ ו״לאט״. להשתמש בהם הרבה. להישאר עם המסכה כמה שיותר.",
    "secret": "המטרה הסודית: לגרום לשני/ה לפלוט מילה אחת לפני שהמסכה יורדת. אם הצלחת, את/ה בוחר/ת מה קורה אחרי.",
    "opener": "מבט ארוך, ואז להסיט את העיניים ראשון/ה."
   },
   "beats": [
    "הריקוד: יד מושטת, גוף צמוד, אפס מילים. סימנים מומצאים ל״כן״ ול״לאט״.",
    "המגע: ידיים שמבקשות רשות במבט ומקבלות אותה בעיניים. המסכות נשארות.",
    "המסכה יורדת, או המילה נפלטת. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Silent masquerade",
   "premise": "A ball where talking is forbidden. Two masks, music, and not a word. Everything you want to say passes through the eyes and the hands.",
   "setting": "Candlelight, slow music, masks (a scarf tied over the upper face works too). From the moment the masks go on, total silence. A word = a small penalty agreed in advance.",
   "props": "Two masks or scarves, music, a drink.",
   "D": {
    "who": "A guest at the ball who chose the one person they do not know.",
    "how": "Invite to dance with an offered hand, not a word. Lead the pace. Touch only where the other \"allows\" with a look. Teach the other one sign.",
    "secret": "Secret goal: the other removes their own mask, without you asking. Only then may you speak, one sentence.",
    "opener": "An offered hand, without a word."
   },
   "S": {
    "who": "A guest who came alone and decides that tonight nobody speaks.",
    "how": "Answer only with the body. Invent two signs: \"yes\" and \"slower\". Use them a lot. Keep the mask on as long as possible.",
    "secret": "Secret goal: make the other let slip one word before the mask comes off. If you succeed, you choose what happens after.",
    "opener": "A long look, then be the first to look away."
   },
   "beats": [
    "The dance: an offered hand, bodies close, zero words. Invented signs for \"yes\" and \"slower\".",
    "The touch: hands that ask permission with a look and receive it with the eyes. The masks stay on.",
    "The mask comes off, or the word slips out. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "si02": {
  "he": {
   "title": "שפה זרה",
   "premise": "{D} {d:תייר|תיירת} שלא {d:מדבר|מדברת} מילה בשפה שלכם. {S} {s:מנסה|מנסה} לעזור. ג׳יבריש, ידיים, ופנטומימה שהולכת ונעשית ברורה מדי.",
   "setting": "״רחוב״: {S} עומד/ת, {D} ניגש/ת עם מפה או טלפון. {D} מדבר/ת רק בשפה מומצאת כל הסצנה.",
   "props": "מפה או טלפון, תיק, כובע של תייר.",
   "D": {
    "who": "תייר/ת אבוד/ה שמבין/ה הכול ומעמיד/ה פנים שלא.",
    "how": "לדבר רק ג׳יבריש, עם אינטונציה אמיתית. להסביר בפנטומימה מה את/ה ״מחפש/ת״: מלון, אוכל, ואז דברים אחרים. להתקרב ״כדי להראות במפה״.",
    "secret": "המטרה הסודית: שהשני/ה יבין/תבין בלי אף מילה משותפת מה את/ה באמת מבקש/ת, ויגיד/תגיד את זה בקול בשפה שלו/ה.",
    "opener": "משפט ארוך בג׳יבריש, בטון של שאלה, עם המפה הפוכה."
   },
   "S": {
    "who": "מקומי/ת אדיב/ה שהולך/ת רחוק מדי כדי לעזור.",
    "how": "לדבר רק בשפה שלך, לאט ובקול, כאילו זה עוזר. לנחש בקול מה התייר/ת רוצה. לנחש לא נכון בכוונה כמה פעמים.",
    "secret": "המטרה הסודית: ללמד את התייר/ת מילה אחת בשפה שלך, מילה שקשורה למה שאת/ה רוצה שיקרה, ולגרום לו/לה להשתמש בה.",
    "opener": "״צריך/ה עזרה? איפה את/ה צריך/ה להגיע?״"
   },
   "beats": [
    "האבוד/ה: מפה, ג׳יבריש, ניחושים לא נכונים בכוונה. הפנטומימה מתחילה תמימה.",
    "השיעור: מילה אחת נלמדת, בקול, עם חזרות. הפנטומימה כבר לא תמימה.",
    "ההבנה: מה שמבקשים נאמר בקול, בשפה אחת לפחות. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Foreign language",
   "premise": "{D} is a tourist who does not speak a word of your language. {S} tries to help. Gibberish, hands, and a pantomime that becomes far too clear.",
   "setting": "\"A street\": {S} stands, {D} approaches with a map or a phone. {D} speaks only an invented language for the whole scene.",
   "props": "A map or a phone, a bag, a tourist hat.",
   "D": {
    "who": "A lost tourist who understands everything and pretends not to.",
    "how": "Speak only gibberish, with real intonation. Explain in pantomime what you are \"looking for\": a hotel, food, then other things. Come closer \"to point on the map\".",
    "secret": "Secret goal: the other understands, without a single shared word, what you are really asking for, and says it out loud in their language.",
    "opener": "A long sentence of gibberish, in a questioning tone, with the map upside down."
   },
   "S": {
    "who": "A kind local who goes much too far to help.",
    "how": "Speak only your language, slowly and loudly, as if that helps. Guess out loud what the tourist wants. Guess wrong on purpose a few times.",
    "secret": "Secret goal: teach the tourist one word in your language, a word connected to what you want to happen, and make them use it.",
    "opener": "\"Need help? Where do you need to get to?\""
   },
   "beats": [
    "The lost one: a map, gibberish, deliberately wrong guesses. The pantomime starts innocent.",
    "The lesson: one word is taught, out loud, with repetitions. The pantomime is no longer innocent.",
    "The understanding: what is being asked is said out loud, in at least one language. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "sp01": {
  "he": {
   "title": "פגישה עם סיסמה",
   "premise": "שני סוכנים שלא נפגשו מעולם. סיסמה, תשובה, ומסירת ״חבילה״. אף אחד לא בטוח שהשני הוא מי שהוא אומר, ולכן בודקים. ביסודיות.",
   "setting": "״בית קפה״ או ״ספסל״: שני כיסאות גב אל גב בהתחלה. כל אחד מחזיק ״חבילה״ (מעטפה) שבה כתוב מה הוא רוצה מהערב.",
   "props": "שתי מעטפות עם פתק בפנים, משקפי שמש, עיתון או ספר.",
   "D": {
    "who": "סוכן/ת שהגיע/ה למסור, וחושד/ת שזו מלכודת.",
    "how": "להגיד את הסיסמה בלי להסתכל. לבדוק את השני/ה: שאלות מכשילות, ״תוכיח/י שאת/ה אמיתי/ת״. למסור את המעטפה רק אחרי בדיקה גופנית ״לנשק״.",
    "secret": "המטרה הסודית: שהשני/ה יפתח/תפתח את המעטפה שלך ויקרא/תקרא בקול מה כתוב בה, לפני שאת/ה פותח/ת את שלו/ה.",
    "opener": "״הקפה כאן גרוע.״ (הסיסמה. התשובה הנכונה: ״אבל הנוף טוב.״)"
   },
   "S": {
    "who": "סוכן/ת כפול/ה שבא/ה לקחת את החבילה ולא למסור.",
    "how": "לענות על הסיסמה נכון, ואז לטעות ״בטעות״ בפרט אחד כדי לראות מה קורה. להסכים לבדיקה גופנית ולהחזיר אחת, יסודית יותר.",
    "secret": "המטרה הסודית: להחליף את המעטפות בלי שהשני/ה ישים/תשים לב, כך שמה שייקרא בקול יהיה מה שאת/ה רוצה.",
    "opener": "״אבל הנוף טוב.״ ואז, בלחש: ״עוקבים אחריי.״"
   },
   "beats": [
    "הסיסמה: גב אל גב, סיסמה ותשובה, חשד. ״תוכיח/י.״",
    "הבדיקה: חיפוש ״נשק״ הדדי, איטי, מקצועי לגמרי, עד שהוא כבר לא.",
    "המעטפות נפתחות, או מוחלפות. מה שכתוב נקרא בקול. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Meeting with a password",
   "premise": "Two agents who have never met. A password, a reply, and a \"package\" handover. Neither is sure the other is who they say, so they check. Thoroughly.",
   "setting": "\"A café\" or \"a bench\": two chairs back to back at first. Each holds a \"package\" (an envelope) with what they want from the evening written inside.",
   "props": "Two envelopes with a note inside, sunglasses, a newspaper or a book.",
   "D": {
    "who": "An agent who came to deliver and suspects a trap.",
    "how": "Say the password without looking. Test the other: trick questions, \"prove you are real\". Hand over the envelope only after a physical \"weapons\" check.",
    "secret": "Secret goal: the other opens your envelope and reads out loud what is written in it, before you open theirs.",
    "opener": "\"The coffee here is bad.\" (The password. The right reply: \"But the view is good.\")"
   },
   "S": {
    "who": "A double agent who came to take the package, not to deliver.",
    "how": "Answer the password correctly, then \"accidentally\" get one detail wrong to see what happens. Agree to the physical check and return one, more thorough.",
    "secret": "Secret goal: swap the envelopes without the other noticing, so that what is read out loud is what you want.",
    "opener": "\"But the view is good.\" Then, in a whisper: \"I am being followed.\""
   },
   "beats": [
    "The password: back to back, password and reply, suspicion. \"Prove it.\"",
    "The check: a mutual \"weapons\" search, slow, entirely professional, until it is not.",
    "The envelopes are opened, or swapped. What is written is read out loud. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "sp02": {
  "he": {
   "title": "הסוד שבכספת",
   "premise": "{D} {d:פורץ|פורצת} כספות שנתפס/ה בעבודה. {S} {s:הוא בעל|היא בעלת} הבית שחזר/ה מוקדם. במקום להזעיק מישהו, {S} מציע/ה עסקה.",
   "setting": "חדר השינה חשוך, פנס. {D} ״בעיצומה של פריצה״ ליד ארון או מגירה. {S} מדליק/ה אור פתאום.",
   "props": "פנס, ״כספת״ (קופסה) עם פתק בפנים, חבל או צעיף, כובע כהה.",
   "D": {
    "who": "פורץ/ת מקצועי/ת, קר/ת רוח, שלא רגיל/ה להיתפס.",
    "how": "לא להתנצל. להציע ללכת ״בלי רעש״. להתמקח. להסכים לתנאים של בעל/ת הבית לאט, אחד אחד, כאילו זה מחיר.",
    "secret": "המטרה הסודית: לגרום לבעל/ת הבית לפתוח את ה״כספת״ בעצמו/ה ולהראות לך מה בפנים (הפתק: מה הוא/היא רוצה הערב). ואז זה שלך.",
    "opener": "״את/ה אמור/ה לחזור רק מחר. בלי להזעיק אף אחד, בוא/י נדבר.״"
   },
   "S": {
    "who": "בעל/ת בית שחזר/ה מוקדם ומוצא/ת שזה מעניין יותר מלקרוא למישהו.",
    "how": "להיות רגוע/ה מדי. לשאול מה חיפשו. להציע עסקה: הפורץ/ת נשאר/ת, ובתמורה עושה/ה מה שמבקשים. להכתיב תנאים בביטחון.",
    "secret": "המטרה הסודית: לגרום לפורץ/ת להודות מה באמת בא/ה לקחת, במילים. לפי הכלל: הפורץ/ת לא עוזב/ת לפני שהודה/תה.",
    "opener": "״אור. אל תזוז/י. אתה/את יודע/ת שאני יכול/ה להזעיק משטרה. אני לא אעשה את זה. עדיין.״"
   },
   "beats": [
    "התפיסה: אור פתאום, ידיים למעלה, שאלות. ההצעה לעסקה.",
    "התנאים: בעל/ת הבית מכתיב/ה, הפורץ/ת מתמקח/ת ומסכים/ה לאט. הכספת נשארת סגורה.",
    "הכספת נפתחת, או ההודאה נאמרת. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The secret in the safe",
   "premise": "{D} is a safecracker caught at work. {S} is the homeowner who came back early. Instead of calling anyone, {S} proposes a deal.",
   "setting": "The bedroom dark, a torch. {D} \"in the middle of a break-in\" by a closet or a drawer. {S} switches on the light suddenly.",
   "props": "A torch, a \"safe\" (a box) with a note inside, a rope or a scarf, a dark hat.",
   "D": {
    "who": "A professional burglar, cool-headed, not used to getting caught.",
    "how": "Do not apologize. Offer to leave \"without noise\". Negotiate. Agree to the homeowner's terms slowly, one by one, as if it were a price.",
    "secret": "Secret goal: make the homeowner open the \"safe\" themselves and show you what is inside (the note: what they want tonight). Then it is yours.",
    "opener": "\"You were supposed to be back tomorrow. Without calling anyone, let's talk.\""
   },
   "S": {
    "who": "A homeowner who came back early and finds this more interesting than calling anyone.",
    "how": "Be far too calm. Ask what they were looking for. Offer a deal: the burglar stays, and in return does what is asked. Dictate terms with confidence.",
    "secret": "Secret goal: make the burglar admit what they really came to take, in words. By the rule: the burglar does not leave before confessing.",
    "opener": "\"Light. Don't move. You know I could call the police. I won't. Yet.\""
   },
   "beats": [
    "The catch: sudden light, hands up, questions. The deal is proposed.",
    "The terms: the homeowner dictates, the burglar negotiates and agrees slowly. The safe stays closed.",
    "The safe opens, or the confession is said. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ar01": {
  "he": {
   "title": "צייר/ת ודוגמן/ית",
   "premise": "{D} {d:צייר|ציירת} ו{S} {s:דוגמן|דוגמנית} לציור. הדוגמן/ית לא זז/ה, הצייר/ת מתאר/ת בקול כל קו, והמכחול הוא טוש רחיץ על העור.",
   "setting": "{S} על כיסא או על המיטה, בתנוחה שנקבעת. {D} עם ״מכחול״ (טוש רחיץ או אצבע עם שמן) ו״בד״ (הגוף). אור אחד חזק.",
   "props": "טוש רחיץ לגוף או שמן, מגבת, אור.",
   "D": {
    "who": "אמן/ית עם עין איטית ובלי בושה לתאר מה הוא/היא רואה.",
    "how": "לקבוע תנוחה ולא לתת לזוז. לתאר בקול כל קו לפני שמציירים אותו על העור. לצייר לאט, במקומות שהולכים ונהיים אישיים.",
    "secret": "המטרה הסודית: שהדוגמן/ית יבקש/תבקש לצייר במקום שאת/ה ״עוד לא הגעת אליו״. רק אז מציירים שם.",
    "opener": "״אל תזוז/י. אני מתחיל/ה מהצוואר.״"
   },
   "S": {
    "who": "דוגמן/ית שמנסה לא לזוז ולא להגיב, ונכשל/ת לאט.",
    "how": "להחזיק תנוחה. להגיב בנשימה, לא במילים. ״לזוז״ רק כשבאמת אי אפשר, ואז לבקש סליחה כדמות.",
    "secret": "המטרה הסודית: לגרום לאמן/ית להניח את המכחול ולהשתמש בידיים. ברגע שזה קורה, הציור נגמר ואת/ה קובע/ת את התנוחה הבאה.",
    "opener": "״איפה את/ה רוצה אותי?״"
   },
   "beats": [
    "הקווים הראשונים: תנוחה נקבעת, הצוואר, הכתפיים, תיאור בקול. הדוגמן/ית לא זז/ה.",
    "הציור יורד: מקומות אישיים יותר, קווים איטיים יותר. בקשה אחת של הדוגמן/ית.",
    "המכחול מונח. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״. הציור נשטף יחד אחר כך."
   ]
  },
  "en": {
   "title": "Painter and model",
   "premise": "{D} is a painter and {S} a model for a painting. The model does not move, the painter describes every line out loud, and the brush is a washable marker on the skin.",
   "setting": "{S} on a chair or on the bed, in a pose that is set. {D} with a \"brush\" (a washable marker or an oiled finger) and a \"canvas\" (the body). One strong light.",
   "props": "A washable body marker or oil, a towel, a light.",
   "D": {
    "who": "An artist with a slow eye and no shame about describing what they see.",
    "how": "Set a pose and do not let them move. Describe every line out loud before drawing it on the skin. Draw slowly, in places that get more and more personal.",
    "secret": "Secret goal: the model asks you to draw in a place you \"have not reached yet\". Only then draw there.",
    "opener": "\"Don't move. I am starting from the neck.\""
   },
   "S": {
    "who": "A model trying not to move and not to react, and slowly failing.",
    "how": "Hold the pose. React with breath, not words. \"Move\" only when it is truly impossible, then apologize in character.",
    "secret": "Secret goal: make the artist put down the brush and use their hands. The moment it happens, the painting is over and you set the next pose.",
    "opener": "\"Where do you want me?\""
   },
   "beats": [
    "The first lines: a pose is set, the neck, the shoulders, description out loud. The model does not move.",
    "The painting travels: more personal places, slower lines. One request from the model.",
    "The brush is put down. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\". The painting is washed off together afterwards."
   ]
  }
 },
 "ar02": {
  "he": {
   "title": "הפסל/ת והפסל",
   "premise": "{S} {s:הוא|היא} פסל שיש. {D} {d:הפסל|הפסלת} שמעצב/ת אותו, איבר אחר איבר, ומגלה שהפסל מתחמם תחת הידיים.",
   "setting": "{S} עומד/ת או יושב/ת, עיניים עצומות, ״לא יכול/ה לזוז״ עד שמזיזים אותו/ה. {D} מסדר/ת את התנוחה ביד.",
   "props": "סדין לבן, אור חזק אחד, מוזיקה קלאסית.",
   "D": {
    "who": "פסל/ת שמאמין/ה שהחומר מגיב למגע.",
    "how": "להזיז את הפסל רק בידיים: זרוע, סנטר, ברך. לדבר אל הפסל כאילו הוא לא שומע. לשבח את ״החומר״. להתקרב אט אט ל״פרטים העדינים״.",
    "secret": "המטרה הסודית: שהפסל ״יתעורר״ ויזוז מעצמו פעם אחת, ואז להעמיד פנים שלא קרה ולהמשיך לפסל, קרוב יותר.",
    "opener": "״עוד לא מוכן. הזרוע לא נכונה.״"
   },
   "S": {
    "who": "פסל שיש שמתחיל להרגיש ולא אמור.",
    "how": "לא לזוז בכלל. להישאר בכל תנוחה שמסדרים. ״להתעורר״ רק פעם אחת, לרגע, במקום שבו המגע חזק מדי. ואז לחזור להיות שיש.",
    "secret": "המטרה הסודית: לגרום לפסל/ת לנשק את הפסל ״כדי לבדוק אם הוא חם״. אחרי הנשיקה הפסל חי ועושה מה שהוא רוצה.",
    "opener": "שתיקה. פסלים לא מדברים."
   },
   "beats": [
    "הפיסול: תנוחה שמסתדרת ביד, איבר אחרי איבר, דיבור אל החומר. הפסל קפוא.",
    "הפרטים העדינים: מגע קרוב יותר, הפסל ״מתעורר״ לרגע ונעשה שיש שוב.",
    "הבדיקה אם הוא חם. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The sculptor and the statue",
   "premise": "{S} is a marble statue. {D} is the sculptor shaping it, limb by limb, and discovers the statue warming under their hands.",
   "setting": "{S} stands or sits, eyes closed, \"unable to move\" until moved. {D} arranges the pose by hand.",
   "props": "A white sheet, one strong light, classical music.",
   "D": {
    "who": "A sculptor who believes the material responds to touch.",
    "how": "Move the statue only with your hands: an arm, the chin, a knee. Talk to the statue as if it cannot hear. Praise the \"material\". Slowly approach the \"fine details\".",
    "secret": "Secret goal: the statue \"wakes\" and moves by itself once, then pretend it did not happen and keep sculpting, closer.",
    "opener": "\"Not ready yet. The arm is wrong.\""
   },
   "S": {
    "who": "A marble statue that starts to feel and is not supposed to.",
    "how": "Do not move at all. Stay in any pose you are arranged in. \"Wake\" only once, for a moment, where the touch is too strong. Then be marble again.",
    "secret": "Secret goal: make the sculptor kiss the statue \"to check if it is warm\". After the kiss the statue is alive and does what it wants.",
    "opener": "Silence. Statues do not speak."
   },
   "beats": [
    "The sculpting: a pose arranged by hand, limb by limb, talking to the material. The statue is frozen.",
    "The fine details: closer touch, the statue \"wakes\" for a moment and becomes marble again.",
    "The check whether it is warm. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ga01": {
  "he": {
   "title": "קלפים על וידויים",
   "premise": "משחק קלפים פשוט (מלחמה או הגבוה מנצח). מי שמפסיד סיבוב בוחר: וידוי אמיתי, או פריט לבוש, או ״משימה״ שהמנצח/ת כותב/ת בפתק.",
   "setting": "שולחן או מיטה, חפיסת קלפים, פתקים ועט. שלוש ערימות: ״וידוי״, ״בגד״, ״משימה״.",
   "props": "חפיסת קלפים, פתקים, עט, משקה.",
   "D": {
    "who": "קלפן/ית ותיק/ה שיודע/ת שהמשחק הוא רק תירוץ.",
    "how": "לשחק באמת ולהפסיד לפעמים בכוונה. לכתוב משימות שמסלימות לאט: הראשונות תמימות, האחרונות לא. לשאול שאלות וידוי שאף פעם לא שאלת.",
    "secret": "המטרה הסודית: שהשני/ה יבחר/תבחר ״וידוי״ שלוש פעמים ברצף. אז מותר לך לקבוע את המשימה האחרונה של הערב.",
    "opener": "״הגבוה מנצח. המפסיד/ה בוחר/ת: וידוי, בגד, או משימה. את/ה ראשון/ה.״"
   },
   "S": {
    "who": "שחקן/ית שמעדיף/ה להפסיד בחוכמה.",
    "how": "להפסיד כשמתאים לך. לבחור ״משימה״ מוקדם כדי לראות לאן הפתקים הולכים. לכתוב משימות שמחייבות את השני/ה להגיד משהו, לא רק לעשות.",
    "secret": "המטרה הסודית: לגרום ל{D} להתוודות על דבר אחד שהוא/היא ״אף פעם לא היה/תה מספר/ת״. ברגע שזה נאמר, המשחק נגמר ואת/ה מנצח/ת.",
    "opener": "״אני אף פעם לא מפסיד/ה. חוץ מכשאני רוצה.״"
   },
   "beats": [
    "הסיבובים הראשונים: וידויים קטנים, פריט אחד, משימות תמימות. הפתקים נשמרים.",
    "ההסלמה: המשימות כבר לא תמימות, הווידויים כבר לא קטנים. אחד מכם מפסיד בכוונה.",
    "המשימה האחרונה של הערב נקראת בקול. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Cards for confessions",
   "premise": "A simple card game (war, or highest wins). Whoever loses a round chooses: a real confession, an item of clothing, or a \"dare\" the winner writes on a note.",
   "setting": "A table or the bed, a deck of cards, notes and a pen. Three piles: \"confession\", \"clothing\", \"dare\".",
   "props": "A deck of cards, notes, a pen, a drink.",
   "D": {
    "who": "A veteran card player who knows the game is just an excuse.",
    "how": "Really play and sometimes lose on purpose. Write dares that escalate slowly: the first innocent, the last not. Ask confession questions you never asked.",
    "secret": "Secret goal: the other chooses \"confession\" three times in a row. Then you set the last dare of the evening.",
    "opener": "\"Highest wins. The loser chooses: confession, clothing or dare. You first.\""
   },
   "S": {
    "who": "A player who prefers to lose wisely.",
    "how": "Lose when it suits you. Choose \"dare\" early to see where the notes are going. Write dares that make the other say something, not just do.",
    "secret": "Secret goal: make {D} confess one thing they \"would never tell\". The moment it is said, the game is over and you win.",
    "opener": "\"I never lose. Except when I want to.\""
   },
   "beats": [
    "The first rounds: small confessions, one item, innocent dares. The notes are kept.",
    "The escalation: the dares are no longer innocent, the confessions no longer small. One of you loses on purpose.",
    "The last dare of the evening is read out loud. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ga02": {
  "he": {
   "title": "קזינו של טובות",
   "premise": "{D} {d:מנהל|מנהלת} קזינו פרטי, {S} {s:שחקן|שחקנית} שנגמר לו/לה הכסף. מכאן מהמרים על טובות, והבית תמיד מנצח. כמעט.",
   "setting": "שולחן, ״ז׳יטונים״ (מטבעות, גפרורים), קוביות או קלפים. {D} עומד/ת, {S} יושב/ת. כל ז׳יטון = טובה אחת שנכתבת מראש.",
   "props": "מטבעות או גפרורים, קוביות, פתקים, משקה.",
   "D": {
    "who": "בעל/ת הקזינו, חייכן/ית, לא מפסיד/ה אף פעם, עד שמשתלם להפסיד.",
    "how": "לנהל את המשחק בביטחון. לקבוע מה שווה כל ז׳יטון. לגבות ״חובות״ מיד, במקום, בחיוך. להפסיד פעם אחת גדולה בכוונה, מאוחר.",
    "secret": "המטרה הסודית: שהשחקן/ית יהמר/תהמר על ״הכול״ בעצמו/ה, במילים. אז הבית גובה הכול, לאט.",
    "opener": "״נגמר לך הכסף? יש מטבע אחר. שב/י.״"
   },
   "S": {
    "who": "שחקן/ית שמהמר/ת כי אוהב/ת להפסיד לאדם הזה.",
    "how": "להמר בזהירות בהתחלה, לשלם חובות בלי להתווכח, ואז להמר בגדול. לדרוש לגבות כשמנצחים, בלי בושה.",
    "secret": "המטרה הסודית: לנצח פעם אחת ולגבות מהבית טובה שהבית ״לא נותן אף פעם״. להחליט מראש מה היא, ולהגיד אותה בקול רק כשזוכים.",
    "opener": "״מה המטבע? ומה שווה ז׳יטון אחד כאן?״"
   },
   "beats": [
    "הכללים: ערך הז׳יטונים נכתב, ההימורים קטנים, החובות נגבים מיד ובחיוך.",
    "ההימור הגדול: ״הכול״ נאמר בקול, או הבית מפסיד פעם אחת וטובה ״שלא נותנים״ נגבית.",
    "הגבייה האחרונה: מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Casino of favors",
   "premise": "{D} runs a private casino, {S} is a player who ran out of money. From here you bet favors, and the house always wins. Almost.",
   "setting": "A table, \"chips\" (coins, matches), dice or cards. {D} stands, {S} sits. Every chip = one favor written in advance.",
   "props": "Coins or matches, dice, notes, a drink.",
   "D": {
    "who": "The casino owner, smiling, never loses, until losing pays.",
    "how": "Run the game with confidence. Set what each chip is worth. Collect \"debts\" immediately, on the spot, with a smile. Lose one big round on purpose, late.",
    "secret": "Secret goal: the player bets \"everything\" by themselves, in words. Then the house collects everything, slowly.",
    "opener": "\"Out of money? There is another currency. Sit.\""
   },
   "S": {
    "who": "A player who gambles because they love losing to this person.",
    "how": "Bet carefully at first, pay debts without arguing, then bet big. Demand to collect when you win, without shame.",
    "secret": "Secret goal: win once and collect from the house a favor the house \"never gives\". Decide in advance what it is, and say it out loud only when you win.",
    "opener": "\"What is the currency? And what is one chip worth here?\""
   },
   "beats": [
    "The rules: the value of the chips is written, the bets are small, debts are collected immediately with a smile.",
    "The big bet: \"everything\" is said out loud, or the house loses once and a favor \"never given\" is collected.",
    "The last collection: From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "re01": {
  "he": {
   "title": "מספר לא מזוהה",
   "premise": "{S} לבד בחדר אחד, {D} בחדר אחר. הטלפון מצלצל ממספר לא מזוהה. קול זר, שיודע עליך יותר מדי, ומבקש דברים קטנים.",
   "setting": "שני חדרים, דלת סגורה, שיחת טלפון (או וידאו בלי פנים). {D} משנה קצת את הקול.",
   "props": "שני טלפונים, חדר עם דלת, אור חלש.",
   "D": {
    "who": "קול בטלפון. לא מזדהה. יודע פרטים שרק אדם קרוב יודע.",
    "how": "לדבר לאט, בשקט. להוכיח שאת/ה ״רואה״ (לתאר מה השני/ה לובש/ת). לבקש דברים קטנים: לכבות אור, לפתוח כפתור, לתאר בקול. לא לבוא לחדר עד שמזמינים.",
    "secret": "המטרה הסודית: שהשני/ה יגיד/תגיד ״תבוא/י״ בקול, לטלפון. רק אז הדלת נפתחת.",
    "opener": "״אל תנתק/י. את/ה לא מכיר/ה אותי, אבל אני יודע/ת איפה את/ה יושב/ת עכשיו.״"
   },
   "S": {
    "who": "מי שעונה/ה לשיחה ולא מנתק/ת, בניגוד לכל היגיון.",
    "how": "להיות חשדן/ית, ואז סקרן/ית. לציית לבקשות קטנות ולתאר בקול מה את/ה עושה. לשאול ״מי זה״ ולא לקבל תשובה. לא להזמין מהר.",
    "secret": "המטרה הסודית: לגרום לקול להסגיר את עצמו: לצחוק, או להגיד את השם שלך בטון שרק {D} אומר. אז את/ה קובע/ת מה קורה כשהדלת נפתחת.",
    "opener": "״הלו? מי זה?״"
   },
   "beats": [
    "השיחה: קול זר, פרטים שרק קרוב יודע, חשד שהופך לסקרנות. בקשה קטנה ראשונה.",
    "ההוראות מרחוק: דברים קטנים שנעשים ומתוארים בקול, דלת סגורה, נשימה בטלפון.",
    "״תבוא/י.״ הדלת נפתחת. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Unknown number",
   "premise": "{S} alone in one room, {D} in another. The phone rings from an unknown number. A strange voice that knows too much about you, and asks for small things.",
   "setting": "Two rooms, a closed door, a phone call (or video without faces). {D} changes their voice a little.",
   "props": "Two phones, a room with a door, low light.",
   "D": {
    "who": "A voice on the phone. Does not identify. Knows details only someone close knows.",
    "how": "Speak slowly, quietly. Prove you \"see\" (describe what the other is wearing). Ask for small things: turn off a light, open a button, describe out loud. Do not come to the room until invited.",
    "secret": "Secret goal: the other says \"come\" out loud, into the phone. Only then the door opens.",
    "opener": "\"Don't hang up. You don't know me, but I know where you are sitting right now.\""
   },
   "S": {
    "who": "The one who answers the call and does not hang up, against all logic.",
    "how": "Be suspicious, then curious. Obey small requests and describe out loud what you are doing. Ask \"who is this\" and get no answer. Do not invite quickly.",
    "secret": "Secret goal: make the voice give itself away: laugh, or say your name in the tone only {D} uses. Then you decide what happens when the door opens.",
    "opener": "\"Hello? Who is this?\""
   },
   "beats": [
    "The call: a strange voice, details only someone close knows, suspicion turning into curiosity. A first small request.",
    "Orders from afar: small things done and described out loud, a closed door, breathing into the phone.",
    "\"Come.\" The door opens. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "re02": {
  "he": {
   "title": "הודעות מחדר לחדר",
   "premise": "אסור לדבר ואסור להיפגש. שני חדרים, שני טלפונים, ורק הודעות כתובות. כל הודעה היא הוראה או וידוי. הפגישה מגיעה רק בסוף.",
   "setting": "כל אחד בחדר אחר. שיחה בהודעות בלבד. כל הודעה: או הוראה קטנה לשני/ה, או וידוי. לא עונים על שאלות בקול.",
   "props": "שני טלפונים, שני חדרים, טיימר ל-20 דקות.",
   "D": {
    "who": "מי ששולח/ת את ההודעה הראשונה, ומכתיב/ת את הקצב.",
    "how": "להתחיל בהוראה קטנה (״תכבה/י אור״). לדרוש תמונה של ״הוכחה״ לכל הוראה (צילום של האור הכבוי, של היד, של הכתף). להסלים לאט. לכתוב וידוי אחד על כל שתי הוראות.",
    "secret": "המטרה הסודית: שהשני/ה ישלח/תשלח תמונה שלא ביקשת. אז מותר לך לכתוב את ההוראה האחרונה: איפה נפגשים ואיך.",
    "opener": "הודעה: ״אל תדבר/י. רק תקרא/י. תכבה/י את האור ותשלח/י לי תמונה.״"
   },
   "S": {
    "who": "מי שמקבל/ת הוראות בכתב ומגלה שזה קל יותר מבקול.",
    "how": "לבצע ולשלוח הוכחה. לענות על כל וידוי בווידוי. לשאול שאלה אחת בכתב שבקול לא היית שואל/ת.",
    "secret": "המטרה הסודית: לגרום ל{D} לכתוב הודעה שהוא/היא לא היה/תה אומר/ת בקול לעולם. לשמור אותה. ואז להזמין לחדר שלך, לא ללכת לשלו/ה.",
    "opener": "הודעה: ״קראתי. מה עכשיו?״"
   },
   "beats": [
    "ההודעות הראשונות: הוראות קטנות, הוכחות מצולמות, וידוי אחד.",
    "ההסלמה בכתב: מה שלא אומרים בקול נכתב. שאלה אחת, תשובה אחת.",
    "ההוראה האחרונה: איפה נפגשים. הדלת. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״. התמונות נמחקות יחד."
   ]
  },
  "en": {
   "title": "Messages from room to room",
   "premise": "No talking and no meeting. Two rooms, two phones, and only written messages. Every message is an order or a confession. The meeting comes only at the end.",
   "setting": "Each in a different room. A conversation in messages only. Every message: either a small order to the other, or a confession. No questions answered out loud.",
   "props": "Two phones, two rooms, a 20-minute timer.",
   "D": {
    "who": "The one who sends the first message and sets the pace.",
    "how": "Start with a small order (\"turn off the light\"). Demand a \"proof\" photo for every order (the light off, a hand, a shoulder). Escalate slowly. Write one confession per two orders.",
    "secret": "Secret goal: the other sends a photo you did not ask for. Then you may write the last order: where you meet and how.",
    "opener": "Message: \"Don't talk. Just read. Turn off the light and send me a photo.\""
   },
   "S": {
    "who": "The one who takes written orders and finds it easier than out loud.",
    "how": "Carry out and send proof. Answer every confession with a confession. Ask one question in writing you would not ask out loud.",
    "secret": "Secret goal: make {D} write a message they would never say out loud. Keep it. Then invite them to your room, do not go to theirs.",
    "opener": "Message: \"Read it. Now what?\""
   },
   "beats": [
    "The first messages: small orders, photo proofs, one confession.",
    "Written escalation: what is not said out loud gets written. One question, one answer.",
    "The last order: where you meet. The door. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\". The photos are deleted together."
   ]
  }
 },
 "ti01": {
  "he": {
   "title": "הפעם הראשונה, מחדש",
   "premise": "חזרה לדייט הראשון שלכם, אבל הפעם שניכם יודעים מה יקרה. אותו מקום, אותם משפטים שאתם זוכרים, ומה שלא העזתם אז.",
   "setting": "לשחזר כמה שאפשר: מה שתיתם, איפה ישבתם, מה לבשתם. כל אחד אומר משפט אחד שהוא זוכר מהערב ההוא.",
   "props": "המשקה של אז, שיר של אז, בגד שדומה.",
   "D": {
    "who": "את/ה, בערב ההוא, עם כל מה שאת/ה יודע/ת היום.",
    "how": "לשחזר את ההתחלה בדיוק. ואז, ברגע שאת/ה זוכר/ת שהיססת, לעשות את ההפך. להגיד את מה שרצית להגיד אז.",
    "secret": "המטרה הסודית: לגרום לשני/ה להודות מה הוא/היא חשב/ה עליך באותו ערב ולא אמר/ה. ואז לעשות את זה.",
    "opener": "המשפט הראשון שאמרת באותו ערב, מילה במילה אם אפשר."
   },
   "S": {
    "who": "את/ה, בערב ההוא, עם כל מה שאת/ה יודע/ת היום.",
    "how": "לשחק את עצמך של אז: הביישנות או הביטחון. להיות מופתע/ת מה שהשני/ה עושה אחרת. להסכים למה שלא הסכמת אז, אם את/ה רוצה.",
    "secret": "המטרה הסודית: לעשות דבר אחד שרצית לעשות בערב ההוא ולא העזת, בלי להסביר. לראות אם השני/ה מזהה.",
    "opener": "המשפט הראשון שענית באותו ערב."
   },
   "beats": [
    "השחזור: אותם משפטים, אותו מקום, אותו משקה. לזכור יחד איפה הייתה ההיסוס.",
    "הסטייה: מה שלא נאמר אז נאמר. מה שלא נעשה אז נעשה, בלי להסביר.",
    "הסוף שהיה צריך להיות. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "The first time, again",
   "premise": "Back to your first date, but this time you both know what will happen. The same place, the lines you remember, and what you did not dare then.",
   "setting": "Recreate as much as possible: what you drank, where you sat, what you wore. Each says one line they remember from that evening.",
   "props": "The drink from then, a song from then, similar clothes.",
   "D": {
    "who": "You, on that evening, with everything you know today.",
    "how": "Recreate the start exactly. Then, the moment you remember hesitating, do the opposite. Say what you wanted to say then.",
    "secret": "Secret goal: make the other admit what they thought about you that evening and did not say. Then do it.",
    "opener": "The first line you said that evening, word for word if you can."
   },
   "S": {
    "who": "You, on that evening, with everything you know today.",
    "how": "Play yourself of then: the shyness or the confidence. Be surprised by what the other does differently. Agree to what you did not agree to then, if you want.",
    "secret": "Secret goal: do one thing you wanted to do that evening and did not dare, without explaining. See if the other recognizes it.",
    "opener": "The first line you answered with that evening."
   },
   "beats": [
    "The reenactment: the same lines, the same place, the same drink. Remember together where the hesitation was.",
    "The deviation: what was not said then is said. What was not done then is done, without explaining.",
    "The ending that should have been. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 },
 "ti02": {
  "he": {
   "title": "בר חשאי, 1926",
   "premise": "איסור משקאות. בר מחתרתי מאחורי דלת מכולת. {D} {d:מנהל|מנהלת} את המקום, {S} {s:לקוח|לקוחה} חדש/ה שהביא/ה סיסמה נכונה ושאלות לא נכונות.",
   "setting": "אור צהוב, ג׳אז ישן, כוסות קטנות. {S} ״דופק/ת״ בדלת עם סיסמה. {D} פותח/ת חריץ ובודק/ת.",
   "props": "מוזיקת ג׳אז, כובע או מגבעת, צעיף, ״משקה אסור״.",
   "D": {
    "who": "בעל/ת הבר, שמריח/ה שוטר/ת סמוי/ה מרחוק, ומסתקרן/ת בכל זאת.",
    "how": "לדבר בסלנג של פעם. לבדוק את הלקוח/ה: מי שלח, מה שותים. להכניס רק אחרי ״חיפוש״. למזוג ולהשאיר את היד על הכוס עוד רגע.",
    "secret": "המטרה הסודית: לגרום ללקוח/ה להודות שהוא/היא ״מהמשטרה״, בצחוק או ברצינות, ואז להחליט מה עושים עם שוטר/ת בבר חשאי.",
    "opener": "״סיסמה. ומי שלח אותך, כי הפרצוף שלך לא מוכר לי.״"
   },
   "S": {
    "who": "לקוח/ה חדש/ה, אולי שוטר/ת סמוי/ה, אולי סתם סקרן/ית.",
    "how": "להגיד את הסיסמה ולטעות במילה אחת. להסתכל יותר מדי על הבר, ועל בעל/ת הבר. להציע ״לשמור על הסוד״ תמורת משהו.",
    "secret": "המטרה הסודית: לקבל מבעל/ת הבר את המשקה ״שלא מגישים״, שהוא פתק עם מה שהוא/היא רוצה הלילה. ואז לשתות אותו.",
    "opener": "״ציפור אמרה לי שיש כאן משהו טוב יותר ממיץ.״"
   },
   "beats": [
    "הדלת: סיסמה, חשד, ״חיפוש״, כניסה. משקה ראשון, היד על הכוס.",
    "הסוד: ההצעה ״לשמור על הסוד״, ההודאה, ההחלטה מה עושים עם זה.",
    "המשקה שלא מגישים. מכאן הסצנה ממשיכה לאן ששניכם לוקחים אותה, בתוך הדמויות. הגבולות שסימנתם במסך ״גבולות״ תקפים גם לדמויות, ומילת העצירה מוציאה מהסצנה בשנייה. כשנגמר, עוברים ל״יציאה מהדמות״."
   ]
  },
  "en": {
   "title": "Speakeasy, 1926",
   "premise": "Prohibition. An underground bar behind a grocery door. {D} runs the place, {S} is a new customer who brought the right password and the wrong questions.",
   "setting": "Yellow light, old jazz, small glasses. {S} \"knocks\" on the door with a password. {D} opens a slit and checks.",
   "props": "Jazz music, a hat or a fedora, a scarf, a \"forbidden drink\".",
   "D": {
    "who": "The bar owner, who can smell an undercover cop from afar, and gets curious anyway.",
    "how": "Speak in old slang. Test the customer: who sent them, what they drink. Let them in only after a \"search\". Pour and leave your hand on the glass a moment longer.",
    "secret": "Secret goal: make the customer admit they are \"with the police\", joking or serious, then decide what to do with a cop in a speakeasy.",
    "opener": "\"Password. And who sent you, because I don't know your face.\""
   },
   "S": {
    "who": "A new customer, maybe an undercover cop, maybe just curious.",
    "how": "Say the password and get one word wrong. Look too long at the bar, and at the owner. Offer to \"keep the secret\" in exchange for something.",
    "secret": "Secret goal: get from the owner the drink \"they don't serve\", which is a note with what they want tonight. Then drink it.",
    "opener": "\"A little bird told me there is something better than juice here.\""
   },
   "beats": [
    "The door: password, suspicion, a \"search\", entry. A first drink, a hand on the glass.",
    "The secret: the offer to \"keep the secret\", the admission, the decision what to do with it.",
    "The drink they don't serve. From here the scene continues wherever the two of you take it, in character. The limits you marked on the \"Limits\" screen apply to the characters too, and the stop word ends the scene in a second. When it is over, move on to \"Out of character\"."
   ]
  }
 }
};
