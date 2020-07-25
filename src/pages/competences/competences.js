import React from 'react';
import '../pages.scss'

function Competences() {
  return (
    <div id="competences" className = "article">
        <div className="artcile__title --reverted">Competences</div>
        <div className = "article__box --spaced">
            <div className = "article__image --competences"> 
                <div className = "article__sub-title">Career</div>
                <div className = "article__sub-text">
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <span>Companies i've worked :</span>
                    <p>Faculdade Pitágoras</p>
                </div>
            </div>
            <div className = "article__image --competences --spaced-middle">
                <div className = "article__sub-title">Web Front End</div>
                <div className = "article__sub-text">
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <span>Languages I speak :</span>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>SCSS</p>
                    <p>Javascript</p>
                    <p>React.Js</p>
                    <span>Dev Tools:</span>
                    <p>Github</p>
                    <p>Terminal</p>
                </div>
            </div>
            <div className = "article__image --competences">
                <div className = "article__sub-title">Programming</div>
                <div className = "article__sub-text">
                    <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    <span>Languages I speak :</span>
                    <p>C</p>
                    <p>C#</p>
                    <p>Java</p>
                    <span>Dev Tools:</span>
                    <p>Visual Studio</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Competences;