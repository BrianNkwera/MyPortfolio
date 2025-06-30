import gamestackTexture2Large from '~/assets/fitaboMobile.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/fitaboMobile.png';
import gamestackTextureLarge from '~/assets/fitabo.png';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/fitabo.png';
import sliceTextureLarge from '~/assets/bafredo.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/bafredo.png';
import sprTextureLarge from '~/assets/fitaboHome.png';
import sprTexturePlaceholder from '~/assets/fitaboHome.png';
import sprTexture from '~/assets/fitaboHome.png';
import jitangaze from '~/assets/Jitangaze.png'
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// // Prefetch draco decoader wasm
// export const links = () => {
//   return [
//     {
//       rel: 'prefetch',
//       href: '/draco/draco_wasm_wrapper.js',
//       as: 'script',
//       type: 'text/javascript',
//       importance: 'low',
//     },
//     {
//       rel: 'prefetch',
//       href: '/draco/draco_decoder.wasm',
//       as: 'fetch',
//       type: 'application/wasm',
//       importance: 'low',
//     },
//   ];
// };

export const meta = () => {
  return baseMeta({
    title: '',
    description: ``,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="We're Fitabo"
        description="Online platform For Booking Fitness service Providers. Personal Trainers, Gyms and wellness providers"
        buttonText="View project"
        buttonLink="http://wearefitabo.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Fitabo Progressive Web App"
        description="Your Mobile Fitness App. For Tracking Your Fitness Goals And Automatic Generated Fitness Routines to fit your needs"
        buttonText="View website"
        buttonLink="http://wearefitabo.com/"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Bafredo Electronic"
        description="An online one stop shop for electronics components, boards & gadgets"
        buttonText="View project"
        buttonLink="https://bafredo.co.tz/"
        model={{
          type: 'laptop',
          alt: 'Bafredo Electronics',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={4}
        alternate={true}
        title="Jitangaze"
        description="Ad-Classified Selling And Buying center connecting local buyers and sellers"
        buttonText="View project"
        buttonLink="https://jitangaze.co.tz/"
        model={{
          type: 'laptop',
          alt: 'Jitangaze.co.tz',
          textures: [
            {
              srcSet: `${jitangaze} 800w, ${jitangaze} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
