type Team = {
  id: number;
  name: string;
  job: string;
  comment: string;
};

type CardColor = 'blue' | 'purple' | 'green' | 'gray';
type CardModel = 'oldest' | 'edge' | 'explorer' | 'newest';

type CommentRes = {
  id: string;
  obj: CardModel;
  color: CardColor;
  name: string;
  comment: string;
  createdAt: string;
};
