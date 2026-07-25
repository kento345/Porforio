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
    result:string//結果
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
    role: "",
    school: "京都デザイン＆テクノロジー専門学校",
    department: "スーパーゲームクリエイター専攻",
    graduationYear: "2028年3月卒業見込み",
    bio: "",
    motto: "",
    avatar: "",
    links: {
        github: "https://github.com/",
        twitter: null,
        gmail: ""
    }
}

export const skills: Skill[] =[
    {
        name: "Unity",
        version: null,
        level: 60,
        category: "game",
        capabilities: ["3D/2Dゲーム開発",],
        note: null
    }
]

export const works:Work[] =[
    {
        id: 1,
        title: "未食伝説",
        genre: "2DアクションRPG",
        category: "game",
        thumbail: "",
        sceenshots: [],
        description: "",
        tags: ['Unity','C#'],
        platform: ['Windows'],
        period: "",
        team: "",
        role: "プログラマー",
        github: "",
        link: "",
        venues: [{name:"",date:''}],
        techPoints: null,
        desigNotes: null,
        implementationTheme: null,
        troublesooting: null,
        performance: null
    },
    {
        id: 2,
        title: "喫茶ぱずふれっくす",
        genre: "",
        category: "",
        thumbail: "",
        sceenshots: [],
        description: "",
        tags: [],
        platform: [],
        period: "",
        team: "",
        role: "",
        github: "",
        link: "",
        venues: [{name:"",date:''}],
        techPoints: null,
        desigNotes: null,
        implementationTheme: null,
        troublesooting: null,
        performance: null
    }
]

export const gameJams: GameJam[] = [
    {
        name: "",
        date: "",
        them: "",
        description: "",
        platform: "",
        role: "",
        team: "",
        result: "",
        url: null,
        reflection: ""
    }
]

export const certifications: Certification[] =[
    {
        name: "",
        date: "",
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