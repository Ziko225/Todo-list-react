import { Block, Header, Content } from "./styled"

const Section = ({ title, body, content, buttons }) => (
    <Block>
        <Header>{title} {buttons}</Header>
        <Content>{body}</Content>
        {content}
    </Block>
);

export default Section;