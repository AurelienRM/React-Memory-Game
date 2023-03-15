import { Typography } from '../atom/Typography';
import { MemoryCard } from './MemoryCard';
import { useMemory } from './MemoryProvider';

export const MemoryBoard = () => {
  const { cards, returnCard } = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid w-max grid-cols-6 grid-rows-6 gap-2">
      {cards?.map((card) => (
        <MemoryCard onClick={() => returnCard(card)} key={card.id} card={card}>
          {card.emoji}
        </MemoryCard>
      ))}
    </div>
  );
};
