import {teamData} from '../../../data/landingPageTeam';
import {Member} from './Member';
import styles from './team.module.css';

export const Team = () => {
  return (
    <section className={styles.team}>
      <h1>l’équipe uncover</h1>
      <div className={styles.membersContainer} id="team">
        {teamData.map(({nom, prenom, post, profilePicture}, id) => {
          return (
            <Member
              key={`story-${id + 1}`}
              name={`${nom} ${prenom}`}
              post={post}
              profilePicture={profilePicture}
            />
          );
        })}
      </div>
    </section>
  );
};
