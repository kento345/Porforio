import { Link, Navigate, useParams } from "react-router-dom";
import { works } from "../data/portfolio";
import SafeImg from "../components/Safeimg";
import type { ReactNode } from "react";


function Section({title, children}: {title:string;children: ReactNode}){
    return (
        <div className="wd-section">
            <h2 className="wd-section-title">{title}</h2>
            <div className="wd-section-body">{children}</div>
        </div>
    )
}

function MetaRow({label,value}:{label:string;value:string | undefined}){
    return(
        <div className="wd-meta-row">
            <dt className="wd-meta-label">{label}</dt>
            <dt className="wd-meta-value">{value}</dt>
        </div>
    )
}

export default function WorkDetail(){
    const {id} = useParams()
    const work = works.find((w)=>w?.id === Number(id))

    if(!work) return <Navigate to="/" replace/>

    return (
        <div className="wd-page">
            <div className="container">
                <Link to="/#works" className="wd-back">
                    ←作品一覧に戻る
                </Link>

                <div className="wd-hero">
                    <div className="wd-hero-thumbnail">
                        <SafeImg
                         src={work.thumbail}
                         alt={work.title}
                         fallback="No Image..."
                         />
                    </div>
                    <div className="wd-hero-info">
                        <p  className="work-category-badge">{work.genre}</p>
                        <h1 className="wd-title">{work.title}</h1>
                        <p className="wd-description">{work.description}</p>
                    </div>
                </div>

                <Section title="基本情報">
                    <dl className="wd-meta-grid">
                        <MetaRow label="制作期間" value={work.period}/>
                        <MetaRow label="チーム構成" value={work.team}/>
                        <MetaRow label="担当箇所" value={work.role}/>
                        <MetaRow label="プラットフォーム" value={work.platform?.join(' / ')}/>
                    </dl>
                </Section>

                <div className="wd-tech-grid">
                    {work.techPoints &&(
                        <Section title="こだわり技術ポイント">
                            <p className="wd-text">{work.techPoints}</p>
                        </Section>
                    )}
                    {work.desigNotes &&(
                        <Section title="設計上の工夫">
                            <p className="wd-text">{work.desigNotes}</p>
                        </Section>
                    )}
                    {work.implementationTheme &&(
                        <Section title="実装解説">
                            <p className="wd-text">{work.implementationTheme}</p>
                        </Section>
                    )}
                    {work.troublesooting &&(
                        <Section title="詰まった問題と解決策">
                            <p className="wd-text">{work.troublesooting}</p>
                        </Section>
                    )}
                    {work.performance &&(
                        <Section title="パフォーマンス改善の工夫">
                            <p className="wd-text">{work.performance}</p>
                        </Section>
                    )}
                </div>
            </div>
        </div>
    )
}