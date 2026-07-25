import { profile } from "../data/portfolio";
import SafeImg from "./Safeimg";

export default function Hero(){
    return (
        <section className="hero section" id="hero">
            <div className= "container">
                 {/*写真載せる所*/}
                <div className="avatar-placeholder">
                    <SafeImg
                    src={profile.avatar}
                    alt={profile.name}
                    fallback={profile.nameEn.charAt(0)}
                    />
                </div>
                    <p className="hero-eyebrow">Protfolio</p>

                    {/*名前表示*/}
                    <h1 className="hero-name">
                        <span className="gradient">{profile.name}</span>
                        <span className="hero-name-en">{profile.nameEn}</span>
                    </h1>

                    <p className="hero-role">{profile.role}</p>

                    {/*モットー(座右の銘)表示 */}
                    {profile.motto && (
                        <blockquote className="hero-motto">
                            <span className="hero-motto-mark"></span>
                            {profile.motto}
                            <span className="hero-motto-mark"></span>
                        </blockquote>
                    )}
                    <div className="hero-actions">
                        <a href="#works" className="btn byn-primary">制作物を見る</a>
                        <a href="#contact" className="btn btn-outline">連絡する</a>
                    </div>
            </div>
            <div className="hero-scroll">scroll</div>
        </section>
    )
}