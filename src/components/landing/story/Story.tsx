import {storyStepsData} from '../../../data/landingPageStory';
import {TextAndImg} from '../../blocs/withText/TextAndImg';
import styles from './story.module.css';

export const Story = () => {
  return (
    <section id="story" className={styles.storyContainer}>
      {storyStepsData.map(({text, imgUrl}, id) => {
        const imgPosition = id % 2 === 1 ? 'right' : 'left';

        return (
          <TextAndImg
            key={`story-${id + 1}`}
            pictureDetails={{url: imgUrl, alt: '', position: imgPosition}}
            textContent={text}
            subtitle={`${id + 1}`}
          />
        );
      })}
    </section>
  );
};
