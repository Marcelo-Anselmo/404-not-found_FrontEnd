import "./index.scss";
import unifgLogo from "../../../public/unifg_logo_azul.png";

const Header = () => {
    return (
        <>
            <header>
                <img src={unifgLogo} alt="logo da Unifg" />
                <nav>
                    <ul>
                        <li>
                            <a href="#aboutSection">Sobre</a>
                            {/* <Link to={"aboutSection"}>Sobre</Link> */}
                        </li>
                        <li>
                            <a href="#memberSection">Equipe</a>
                            {/* <Link to={"#membrosSection"}>Equipe</Link> */}
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
