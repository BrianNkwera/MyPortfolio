import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="Tools I use on daily basis to create my masterpieces"
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use{' '}
                    <Link href="https://vscodium.com/">
                      Visual Studio And Visual Studio Code
                    </Link>{' '}
                    as my text editors, with a Dark theme (as any standard developer 😏)
                  </ListItem>
                  <ListItem>
                    Chrome is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> and{' '}
                    <Link href="https://vuejs.org/">Vue</Link> are my front end Javascript
                    library of choice. I especially love the component-centric model and
                    the reusability of components. Though I like vue a little more due to
                    it's relative simpler state management.
                  </ListItem>
                  <ListItem>
                    For the backend, I am a huge fan of <Link href="https://nodejs.org/en">NodeJS</Link>, though I am currently
                    looking into other backend framework such as ASP.net and Laravel (not
                    huge fan of php, but given it's popularity I think it is something
                    worth looking into)
                  </ListItem>
                  <ListItem>
                    For the database I usually use either MongoDB for No-SQL database or
                    Microsoft SQL Server and MySQL, for SQL Databases. The decision
                    usually comes from the requirements of the database structure.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
