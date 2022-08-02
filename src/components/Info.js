
export default function Info(){
    return(
        <div className="info">
            <div className="info-container">
                <img src="my-image.jpg" alt="" className="info-image" />
                <div className="content">
                    <h2 className="info-heading">Ayush</h2>
                    <h3 className="info-title">Frontend Developer</h3>
                    <p className="info-desc">Ayush.website</p>
                    <div className="link">
                        <a href="https://github.com" className="github-link" target="_blank" rel="noopener noreferrer"><img className="github-logo" src="links/github-image.png" alt="github" /> GitHub</a>
                    </div>
                </div>    
            </div>
        </div>
    )
}