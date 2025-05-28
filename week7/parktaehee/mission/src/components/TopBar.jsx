import { useGameStore } from "../hooks/useGameStore";

const TopBar = () => {
  const score = useGameStore((e) => e.score);
  const message = useGameStore((e) => e.message);
  return (
    <div>
      <h3>점수: {score}/5</h3>
      <p>{message}</p>
    </div>
  );
};

export default TopBar;
