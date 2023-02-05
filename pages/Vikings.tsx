import VikingCard from "../components/VikingCard";
import { Viking } from "../lib/vikings";
import styles from "../styles/Home.module.css";

interface Props {
  vikings: Viking[];
}

const Vikings: React.FunctionComponent<Props> = ({ vikings }) => (
  <div className={styles.vikings}>
    {vikings.map((viking) => (
      <VikingCard key={viking.fullName} viking={viking} />
    ))}
  </div>
);
export default Vikings;
