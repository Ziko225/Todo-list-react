import Section from "../../common/Section"
import Header from "../../common/Header"
import Main from "../../common/Main"
import Nav from "../../common/Nav";
import { Article, Content, Img, Title } from "./styled";

function Autor() {
    return (
        <>
            <Nav />
            <Main>
                <Header title="O autorze" />
                <Section
                    title="Nazar Bychyk"
                    body={
                        <Article>
                            <Content>
                                <Title>Witam wszystkich!</Title> <br />
                                Nazywam się Nazar, mam 22 lata.<br />
                                Urodziłem się w mieście niedaleko Tarnopola leżącym na terenach Ukrainy.<br />
                                W wieku 17 lat przyjechałem do Warszawy.<br />
                                Lubię jachty a całkiem niedawno polubiłem programować!
                            </Content>
                            <Img src={require("./author.jpeg")} alt={"Author"}></Img>
                        </Article>}>
                </Section>
            </Main>
        </>
    );
};

export default Autor;
