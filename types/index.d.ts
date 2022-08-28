type Team = {
  id: number;
  name: string;
  job: string;
  comment: string;
};

type CardBlue = {
  type: 'blue';
  color: '#6702ff';
};
type CardGreen = {
  type: 'green';
  color: '#485A00';
};
type CardPurple = {
  type: 'purple';
  color: '#8c20b1';
};
type CardIndigo = {
  type: 'indigo';
  color: '#6792FF';
};

type GuestCard = {
  type: 'blue' | 'green' | 'purple' | 'indigo';
};
