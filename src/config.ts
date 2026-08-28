import {
  assertWallpaperDefinition,
  createDialogueLineResolver,
  defineWallpaper,
} from "ba-memorial-lobby-wallpaper-runtime";

export type VoiceLocale = "ja" | "zh-cn" | "ko";
export type SubtitleLocale = "zh-cn" | "ja" | "ko" | "en";

// ---------------------------------------------------------------------------
// Project identity.
//
// This file is the single source of truth for character-specific content.
// Replace every placeholder value with the actual character data before
// building a wallpaper from this template. See docs/CREATING-A-PROJECT.md.
// ---------------------------------------------------------------------------
export const PROJECT = {
  id: "blue-archive-konoka",
  slug: "konoka",
  title: "Konoka",
  editionLabel: `PUBLIC EDITION · ${__WALLPAPER_VERSION__}`,
} as const;

export const VOICE_LOCALES: readonly VoiceLocale[] = ["ja","ko"];
export const SUBTITLE_LOCALES: readonly SubtitleLocale[] = ["ja","ko","en"];

export const BGM = {
  title: "Daily Routine 247",
  path: `./assets/${PROJECT.slug}/bgm/my-character-bgm.flac`,
} as const;

export interface DialogueLine {
  id: string;
  text: Record<SubtitleLocale, string>;
}

export interface DialogueDefinition {
  index: number;
  motionAnimation: string;
  attachmentAnimation: string;
  duration: number;
  lines: readonly DialogueLine[];
}

// Replace the placeholder model/animation/bone values below with values
// obtained from `npm run inspect:spine` after placing the real model in
// local-assets/original/model/.
export const MODEL = {
  binary: `./assets/${PROJECT.slug}/model/my-character.skel`,
  atlases: {
    "2k": `./assets/${PROJECT.slug}/model/my-character.atlas`,
    "4k": `./assets/${PROJECT.slug}/model-4k/my-character.atlas`,
    "8k": `./assets/${PROJECT.slug}/model-8k/my-character.atlas`,
  },
  spineVersion: "4.2.33",
  introAnimation: "Start_Idle_01",
  idleAnimation: "Idle",
  designViewport: {
    width: 2560,
    height: 1600,
    centerX: 0,
    centerY: 900,
  },
  tracks: {
    base: 0,
    motion: 1,
    attachment: 2,
  },
  interaction: {
    eyeBone: "Touch_Eye",
    headControlBone: "Touch_Point",
    headAnchorBone: "Touch_Point_Key",
    lookAnimation: "Look_01_M",
    lookEndMotionAnimation: "LookEnd_01_M",
    lookEndAttachmentAnimation: "LookEnd_01_A",
    patMotionAnimation: "Pat_01_M",
    patAttachmentAnimation: "Pat_01_A",
    patEndMotionAnimation: "PatEnd_01_M",
    patEndAttachmentAnimation: "PatEnd_01_A",
    headRadius: { x: 270, y: 230 },
    bodyFromHead: { x: -70, y: -610, radiusX: 620, radiusY: 900 },
    eyeClamp: { x: 112.5, y: 200 },
    patClamp: 34,
    dragThresholdPixels: 9,
    cooldownSeconds: 0.55,
    dialogueGraceSeconds: 0.75,
  },
} as const;

// Example dialogue placeholders. Replace the ids with the real event ids used
// by the voice files and fill in the localized subtitle text.
export const DIALOGUES: readonly DialogueDefinition[] = [
  {
    "index": 1,
    "motionAnimation": "Talk_01_M",
    "attachmentAnimation": "Talk_01_A",
    "duration": 15.833333969116211,
    "lines": [
      {
        "id": "ch0264_memoriallobby_1_1",
        "text": {
          "zh-cn": "",
          "ja": "あーあ、びしょ濡れ……。",
          "ko": "아-아, 쫄딱 젖었네.",
          "en": "Ah, ah, I'm soaked."
        }
      },
      {
        "id": "ch0264_memoriallobby_1_2",
        "text": {
          "zh-cn": "",
          "ja": "うぅ……さっむ。",
          "ko": "으으…… 추워.",
          "en": "Ugh... I'm cold."
        }
      }
    ]
  },
  {
    "index": 2,
    "motionAnimation": "Talk_02_M",
    "attachmentAnimation": "Talk_02_A",
    "duration": 20.666667938232422,
    "lines": [
      {
        "id": "ch0264_memoriallobby_2_1",
        "text": {
          "zh-cn": "",
          "ja": "降り始めちゃいましたね。",
          "ko": "비, 결국 내리기 시작했네요.",
          "en": "It's really coming down."
        }
      },
      {
        "id": "ch0264_memoriallobby_2_2",
        "text": {
          "zh-cn": "",
          "ja": "夜までは止まないらしいのに……\nはぁ……。\nまぁ、頭を冷やすには\nちょうどよかったっすかね。",
          "ko": "밤까지 안 그칠 거라던데……\n하아…….\n뭐, 머리도 식히고 마침 좋슴다.",
          "en": "Apparently, it's not going to stop until later tonight. *sigh*\nWell, I guess it's nice to take a beat and regroup."
        }
      }
    ]
  },
  {
    "index": 3,
    "motionAnimation": "Talk_03_M",
    "attachmentAnimation": "Talk_03_A",
    "duration": 19.33333396911621,
    "lines": [
      {
        "id": "ch0264_memoriallobby_3_1",
        "text": {
          "zh-cn": "",
          "ja": "はぇ？ああ、うーん。",
          "ko": "네? 아아, 으음-",
          "en": "Hm? Ah, well..."
        }
      },
      {
        "id": "ch0264_memoriallobby_3_2",
        "text": {
          "zh-cn": "",
          "ja": "悔しくないって言ったら\n嘘になるっすよ。",
          "ko": "속상하지 않았다면,\n거짓말임다.",
          "en": "I'd be lying if I said I wasn't disappointed."
        }
      },
      {
        "id": "ch0264_memoriallobby_3_3",
        "text": {
          "zh-cn": "",
          "ja": "いろいろ無駄骨になるわ、\n濡れ鼠になるわ……。",
          "ko": "이것저것 허탕 쳤고,\n쫄딱 젖어버렸고…….",
          "en": "I wasted my time, and I'm drenched..."
        }
      }
    ]
  },
  {
    "index": 4,
    "motionAnimation": "Talk_04_M",
    "attachmentAnimation": "Talk_04_A",
    "duration": 18.33333396911621,
    "lines": [
      {
        "id": "ch0264_memoriallobby_4_1",
        "text": {
          "zh-cn": "",
          "ja": "でも、占いの通りっす。",
          "ko": "그래도, 운세대로 됐슴다.",
          "en": "But still, today went just like my horoscope said it would."
        }
      },
      {
        "id": "ch0264_memoriallobby_4_2",
        "text": {
          "zh-cn": "",
          "ja": "バディが隣にいたから、\n良い1日になりました。\n……先生のおかげっすよ。",
          "ko": "버디가 옆에 있으니,\n좋은 하루가 됐네요.\n……선생님 덕분임다.",
          "en": "It ended up being a nice day with a buddy by my side.\n...It's all thanks to you."
        }
      }
    ]
  },
  {
    "index": 5,
    "motionAnimation": "Talk_05_M",
    "attachmentAnimation": "Talk_05_A",
    "duration": 26.666667938232422,
    "lines": [
      {
        "id": "ch0264_memoriallobby_5_1",
        "text": {
          "zh-cn": "",
          "ja": "だから、どちらかというと――",
          "ko": "그러니, 어느 쪽이냐면-",
          "en": "So, if I had to say..."
        }
      },
      {
        "id": "ch0264_memoriallobby_5_2",
        "text": {
          "zh-cn": "",
          "ja": "幸せです。",
          "ko": "행복합니다.",
          "en": "I'm happy."
        }
      },
      {
        "id": "ch0264_memoriallobby_5_3",
        "text": {
          "zh-cn": "",
          "ja": "……あっ、いや、その！",
          "ko": "……앗 아뇨, 그!",
          "en": "...Ah, wait, I mean!"
        }
      },
      {
        "id": "ch0264_memoriallobby_5_4",
        "text": {
          "zh-cn": "",
          "ja": "こうやって雨宿りもできて、\nラッキーで幸せだなって意味で！\nそ、それだけ……っすから……。",
          "ko": "이렇게 비 피할 곳도 있어서\n럭키-! 그래서 행복하구나-\n라는 의미에서!\n그, 그런 거…… 임다…….",
          "en": "It was really lucky that we found shelter from the rain so quickly! That's why I'm happy!\nTh-That was the...gist of it..."
        }
      }
    ]
  }
] as const;

export function voicePath(eventId: string, locale: VoiceLocale): string {
  return `./assets/${PROJECT.slug}/audio/${locale}/${eventId.toLowerCase()}.ogg`;
}

export const WALLPAPER_DEFINITION = defineWallpaper({
  schemaVersion: 1,
  id: PROJECT.id,
  model: {
    binary: MODEL.binary,
    atlases: MODEL.atlases,
    spineVersion: MODEL.spineVersion,
    designViewport: MODEL.designViewport,
  },
  animations: {
    intro: MODEL.introAnimation,
    idle: MODEL.idleAnimation,
    tracks: MODEL.tracks,
  },
  interactions: {
    eyeBone: MODEL.interaction.eyeBone,
    headControlBone: MODEL.interaction.headControlBone,
    headAnchorBone: MODEL.interaction.headAnchorBone,
    look: {
      animation: MODEL.interaction.lookAnimation,
      endMotionAnimation: MODEL.interaction.lookEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.lookEndAttachmentAnimation,
    },
    pat: {
      motionAnimation: MODEL.interaction.patMotionAnimation,
      attachmentAnimation: MODEL.interaction.patAttachmentAnimation,
      endMotionAnimation: MODEL.interaction.patEndMotionAnimation,
      endAttachmentAnimation: MODEL.interaction.patEndAttachmentAnimation,
    },
    headRadius: MODEL.interaction.headRadius,
    bodyFromHead: MODEL.interaction.bodyFromHead,
    eyeClamp: MODEL.interaction.eyeClamp,
    patClamp: MODEL.interaction.patClamp,
    dragThresholdPixels: MODEL.interaction.dragThresholdPixels,
    cooldownSeconds: MODEL.interaction.cooldownSeconds,
    dialogueGraceSeconds: MODEL.interaction.dialogueGraceSeconds,
  },
  dialogues: DIALOGUES.map((dialogue) => ({
    index: dialogue.index,
    motionAnimation: dialogue.motionAnimation,
    attachmentAnimation: dialogue.attachmentAnimation,
    durationSeconds: dialogue.duration,
    lines: dialogue.lines,
  })),
  audio: {
    bgm: BGM,
    voicePath,
    voiceLocales: VOICE_LOCALES,
    subtitleLocales: SUBTITLE_LOCALES,
  },
});

assertWallpaperDefinition(WALLPAPER_DEFINITION);

export const findDialogueLine = createDialogueLineResolver(
  WALLPAPER_DEFINITION.dialogues,
);
