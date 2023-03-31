import { AboutArea, AboutDiv, AboutSection } from "./style";
import { Container } from "@/styles/Global";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";

export const About = (): JSX.Element => {
  return (
    <AboutSection id="about">
      <Container>
        <AboutArea>
          <UserImage
            src={`https://github.com/${userData.githubUser}.png`}
            alt={userData.nameUser}
            title={userData.nameUser}
            width={"248px"}
            height={"248px"}
          />
          <AboutDiv>
            <p>
              I'm a Front-End Developer graduated from Kenzie Academy Brasil,
              with experience in HTML, CSS, JavaScript, React, Styled
              Components, TypeScript and Git. I'm currently studying Back-end
              Development, where I've already learned PostgreSQL, NodeJs,
              Express, TypeORM, Jest (integration and unit tests), Python and
              Django. Recently I started studying MongoDB.
            </p>
            <p>
              I am also studying Computer Science with an emphasis on Full Stack
              at Faculdade Descomplica and complementing this knowledge already
              acquired through courses at Origamid, Rocketseat and Udemy.
            </p>
            <p>
              I consider myself an organized, proactive, determined, curious and
              flexible person, fascinated by knowledge, with a great desire to
              grow, learn and improve myself.
            </p>
            <p>
              Additional knowledge: Agile Methodologies (Scrum and Kanban),
              Figma, VS Code, Github, DBeaver, Insomnia.
            </p>
            <p>
              Learning languages: Spanish (basic-intermediate), English (basic)
              and French (basic)
            </p>
          </AboutDiv>
        </AboutArea>
      </Container>
    </AboutSection>
  );
};
