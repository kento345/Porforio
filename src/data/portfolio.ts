//プロフィール情報定義
export interface Profile{
    name: string //漢字
    nameEn:string//ローマ字
    role:string//ロール
    school:string //学校名
    department:string//専攻名
    graduationYear:string//卒業年度
    bio:string//自己紹介
    motto:string//モットー
    avatar:string//顔写真パス
    links:{
        github:string //githubのURL
        twitter:string | null//X
        gmail:string //mailアドレス
    }
}

export interface Skill{
    name:string//名前
    version:string | null//バージョン情報
    level:number//スキルレベル
    category:string//カテゴリー
    capabilities:string[]//できること
    note:string | null//実装経験
}

export interface Venue{
    name:string//名前 
    date:string//日時
}

export interface Work{
    id:number//連番
    title:string//タイトル
    genre:string//ジャンル
    category:string//カテゴリー
    thumbail:string//サムネイル
    sceenshots:string[]//スクショ
    description:string//作品概要説明
    tags:string[]//タグ
    platform:string[]//プラットフォーム
    period:string//期間
    team:string//製作チーム
    role:string//実装担当箇所
    github:string//GithubのURL
    link:string//ゲーム公開リンク
    venues:Venue[]//出展・公開先
    techPoints:string | null//技術ポイント
    desigNotes:string | null//設計上の工夫
    implementationTheme:string | null//実装解説テーマ
    troublesooting:string | null//詰まった問題と解決策
    performance:string|null//パフォーマンス改善の工夫
}

export interface GameJam{
    name:string//名前
    date:string//日時
    them:string//情報
    description:string//作品詳細
    platform:string//プラットフォーム
    role:string//担当箇所
    team:string//チーム情報
    result:string | null//結果
    url:string | null//URL
    reflection:string//学び
}

export type CertStatus = "取得済み" | "受験予定" | "取得予定" | "学習中";

export interface Certification{
    name:string //資格名
    date:string//日時
    category:string//カテゴリー
    score:string//スコア
    status:CertStatus
}

export interface TimelineItem{
    year:string//年
    event:string//イベント
}

export const profile: Profile ={
    name: "南部健人",
    nameEn: "Kento Nambu",
    role: "プログラマー",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月卒業見込み",
    bio: "心配性な性格でゲーム制作を行うとき。\nアクションを一つ作ってもほかにも方法がなのかを探して何個か作り、納得が行くものを使用して調べて作ったときは分かるまで何度も見返して理解しようとする姿勢が強みです。",
    motto: "「塵も積もれば山となる」",
    avatar: "images/avater.jpg",
    links: {
        github: "https://github.com/",
        twitter: null,
        gmail: "KTC24a31a0043@edu.kyoto-tech.ac.jp",
    }
}

export const skills: Skill[] =[
    {
        name: "Unity",
        version: null,
        level: 80,
        category: "game",
        capabilities: ["3D/2Dゲーム開発",],
        note: null
    }
]

export const works:Work[] =[
    {
        id: 2,
        title: "未食伝説",
        genre: "2DアクションRPG",
        category: "game",
        thumbail: "",
        sceenshots: [],
        description: "",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "2024年10月~2025年2月(5ヶ月)",
        team: "チーム13名(プランナー３,プログラマー5,デザイナー5)",
        role: "プログラマー",
        github: "https://github.com/kento345/Farst-Goudou",
        link: "",
        venues: [{name:"",date:''}],
        techPoints: "・TextMeshProを使って日本語表記\n・Buttonをアイコンにして押すとTextに説明表示",
        desigNotes: "・アイコンをButoonで使用",
        implementationTheme: null,
        troublesooting: "Playerが取得したアイテムとインベントリー同期-> Playerのアイテム取得も一緒に作る\n 料理作成if分で何パターンも作った->Swich分などで作る",
        performance: null
    },
    {
        id: 3,
        title: "喫茶ぱずふれっくす",
        genre: "3Dパズルアクション",
        category: "game",
        thumbail: "",
        sceenshots: [],
        description: "反射させてプレイヤーをゴールに飛ばす",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "2025年5月～7月(3ヶ月)",
        team: "チーム11名(プランナー2,プログラマー4,デザイナー5)",
        role: "プログラマー",
        github: "https://github.com/Momiji25315/pazuhurekkusu.git",
        link: "",
        venues: [{name:"",date:''}],
        techPoints: "・Rayを使ってオブジェクトをtつかみ落とす",
        desigNotes: "・PlayerInputSystemを使用してPlayer操作",
        implementationTheme: null,
        troublesooting: "・正方形じゃないオブジェクトに子供オブジェクトを付けると子供オブジェクトを回転させたときに伸びる-> 空オブジェクトを親オブジェクトにしてやる",
        performance: null
    },
    {
        id: 4,
        title: "RUMBULE TUMBULE",
        genre: "3Dアクション",
        category: "game",
        thumbail: "",
        sceenshots: [],
        description: "",
        tags: ["Unity","C#"],
        platform: ["Windows"],
        period: "2025年10月～2026年製作中",
        team: "チーム10名(プランナー,２プログラマー３,デザイナー5)",
        role: "プログラマー",
        github: "https://ktc-git.kitsune-cs.dev/kento/RumbuleTumbule",
        link: "",
        venues: [],
        techPoints: "InputSystemを使用してPlayer参加を作成Colliderを使用して攻撃範囲を限定する",
        desigNotes: "・PlayeerのScriptをBOTでも使用",
        implementationTheme: null,
        troublesooting: "・参加したPlayerの識別->InputSystemにInputSystemIndexで識別させる",
        performance: null
    }
]

export const gameJams: GameJam[] = [
    {
        name: "BitSummit",
        date: "",
        them: "",
        description: "3Dパズルアクション,反射させてプレイヤーをゴールに飛ばす",
        platform: "Windows",
        role: "プログラマー(オブジェクトの移動)",
        team: "チーム11名(プランナー2,プログラマー4,デザイナー5)",
        result: null,
        url: "https://github.com/Momiji25315/pazuhurekkusu.git",
        reflection: ""
    }
]

export const certifications: Certification[] =[
    {
        name: "MOS Excel",
        date: "2025年2月",
        category: "",
        score: "",
        status: "取得済み"
    }
]

export const timeline:TimelineItem[] = [
    {
        year: "",
        event: ""
    }
]