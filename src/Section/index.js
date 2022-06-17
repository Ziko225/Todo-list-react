import {Block, Header, Content} from "./styled"

const Section = ({ title, body, content, buttons }) => (
    <Block>
        <Header className="section__header">{title} {buttons}</Header>
        <Content className="section__body">{body}</Content>
        {content}
    </Block>
);

export default Section;