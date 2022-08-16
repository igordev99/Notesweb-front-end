import { RiShutDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Container, Profile, Logout} from "./styles";

export function Header(){

    return(
        <Container>
            <Profile to ="/profile">
                <img src="https://github.com/igordev99.png"
                alt="Foto do usário"/>
                <div>
                    <span>Bem-vindo</span>
                    <strong>Igor Fernandes</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    );
}