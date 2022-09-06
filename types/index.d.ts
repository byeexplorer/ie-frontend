type Team = {
  id: number;
  name: string;
  job: string;
  comment: string;
};

type CardColor = 'blue' | 'purple' | 'green' | 'gray';
type CardModel = 'ie-95' | 'ie-97' | 'ie-edge1' | 'ie-edge2';

type CommentRes = {
  obj: 'oldest' | 'explorer' | 'simple' | 'edge';
  userName: string;
  userComment: string;
  createdAt: Date;
};
