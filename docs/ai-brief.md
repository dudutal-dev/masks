# Brief for an external writing model: scenes for Masks

Copy everything below the line into your model, add your own instructions about tone and content, attach the template file from the app (More → Import scenes from a JSON file → Download JSON template), and ask for the output as one JSON file.

---

## What the app is

Masks is a private role-play app for one couple (two adults), used on a phone, in Hebrew with an English option. An evening is two scenes. A scene is a frame for improvised role play:

1. **Stage**: what the room pretends to be, props, approximate duration.
2. **Two secret role cards**, one per partner. The phone is handed over so each partner reads only their own card: who the character is, how to play it, a **secret goal** the other partner does not know, and an opening line. The secret goals should pull in different directions so the scene has tension without a script.
3. **Beats**: three stages shown one at a time with a "next beat" button. Beat 1 builds tension, beat 2 crosses one line, beat 3 is the climax of the scene. The couple plays each beat in character before moving on.
4. Every scene ends with a short built-in "out of character" step, and the evening ends with an "out of character" card (both built in; do not write them).

How the app presents a scene (so the texts fit the screens): step 1 shows `title`, `premise`, `setting`, `props` and `min` to both partners together. Steps 2 and 3 show each role card alone, labelled "How to play" (`how`), "Secret. Only you know" (`secret`) and, for D, "Your opening line. The scene starts with it" (`opener`); for S the opener is labelled "Your first line, as a reply", so S's opener must work as an answer to D's. Step 4 tells the couple to put the phone down and that D opens, then shows the beats one at a time with a timer of about `min` / 3 minutes per beat (write `min` as the total for all three beats). Beat 1 is labelled "tension", beat 2 "crossing a line", beat 3 "open"; these labels appear only when there are exactly three beats, so always write three.

Roles: **D** is the initiator (the partner who opens the scene), **S** is the responder. Which real partner is D changes from scene to scene, so every text must work for either gender on either side (see placeholders).

The app also generates image and video prompts for each scene (the couple feeds them to their own generators together with a reference photo of themselves). You can write those prompts yourself in the `prompts` field; otherwise the app derives them from `shot`.

## Output format

Return **only valid JSON**, UTF-8, no markdown fences, no commentary:

```
{"scenes":[ <scene>, <scene>, ... ]}
```

Each `<scene>`:

```
{
 "id": "unique-slug",                    // latin letters, digits, hyphens; unique across the file
 "cat": "<category id>",                 // one of the ids listed below
 "lvl": 1 | 2 | 3,                       // 1 warm-up, 2 medium, 3 intense; the evening pairs a 1-2 with a 3
 "min": 25,                              // approximate minutes
 "img": "mask",                          // icon id from the list below
 "he": {                                 // Hebrew, required
  "title": "...",
  "premise": "1-2 sentences: who, where, what happens. Use {D} and {S}.",
  "setting": "The stage: room, light, who is where when the scene starts.",
  "props": "Props, comma separated.",
  "D": { "who": "the initiator's character", "how": "how to play it (3-4 short sentences)", "secret": "המטרה הסודית: ...", "opener": "״opening line in quotes״" },
  "S": { "who": "the responder's character", "how": "...", "secret": "המטרה הסודית: ...", "opener": "״...״" },
  "beats": ["beat 1", "beat 2", "beat 3"]
 },
 "en": { same structure in English, optional but recommended },
 "shot": "English, 3-6 sentences: a cinematic description of the scene for image/video generation: who stands or lies where and facing which way, where hands and mouths are, what moves, and a final sentence starting with 'End frame:' that describes the last held frame.",
 "prompts": {                            // optional; if present, used as-is
  "image": "a complete image prompt in English for one still frame",
  "video": "a complete video prompt in English (about 10 seconds, one continuous shot): start position, the movement, end frame"
 }
}
```

## Placeholders (use them, do not write real names)

- `{D}` = the initiator's name, `{S}` = the responder's name. The app fills them in.
- `{d:male form|female form}` picks the verb/adjective form by the initiator's gender; `{s:male form|female form}` by the responder's gender. Hebrew example: `{d:תן|תני} ל{S} פקודה. {s:הוא מבצע|היא מבצעת} מיד.` Nesting is allowed.
- In role cards, neutral Hebrew (infinitives: "לבחור שם חדש", "לא להסגיר") avoids most gender forms.
- In `shot` and `prompts`, `{D}` and `{S}` become "the man" / "the woman" according to who initiates, so write anatomy and positions around those two words rather than around names.

## Category ids

strangers = זרים ופיתוי · work = עבודה וכוח · service = שירות ולקוחות · authority = סמכות ומדים · care = בדיקה וטיפול · fantasy = פנטזיה ותחפושות · forbidden = אסור · control = משחק כוח · swap = החלפת זהויות · silent = בלי מילים · spy = ריגול ומסתורין · art = אמנות וגוף · game = הימורים ומשחקים · remote = מרחוק ובטלפון · time = זמן אחר

## Icon ids

blindfold, kneel, figure, hourglass, rope, back, shoe, garter, hand, gloves, lips, tongue, whisper, eye, mask, headphones, collar, ring, leash, cuffs, scarf, whip, paddle, candle, ice, feather, clothespin, toy, lock, key, chain, heart, bed, chair, mirror, lamp, camera, phone, blanket, bath, oil, spoon, brush, hanger, speech, cup, dice, stopwatch, marker, music, water, flame, stop, gear, corset, bite

## Practical limits

- Keep each text field under about 60 words; beats under about 70 words each. The phone screen is small.
- Hebrew quotes: use ״ ״ for dialogue inside strings, and escape any straight double quotes inside JSON strings.
- Deliver in batches of one category (2-4 scenes) per answer to avoid truncated JSON. Each batch is a complete `{"scenes":[...]}` file; the app can import many files, and a scene with an existing `id` replaces the old one.
