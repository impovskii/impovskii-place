import "./style.css"
import gitHubIcon from "./../../img/icons/gitHub-black.svg"

function BtnGitHub (props) {
    return (
        <>
            <a href={props.link} target="_blank" className="btn-outline">
                <img src={gitHubIcon} alt="" />
                    GitHub репозиторий
            </a>
        </>
    )
}

export default BtnGitHub