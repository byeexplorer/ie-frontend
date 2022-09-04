type Team = {
  id: number;
  name: string;
  job: string;
  comment: string;
};

type CommentRes = {
  color: 'blue' | 'purple' | 'green' | 'gray';
  obj: 'oldest' | 'explorer' | 'simple' | 'edge';
  userName: string;
  userComment: string;
  createdAt: Date;
};
