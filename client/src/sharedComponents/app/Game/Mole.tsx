import React from 'react';

type MoleProps = {
  isHidden: boolean;
  onClick: () => void;
};

const Mole: React.FC<MoleProps> = React.memo(({ isHidden, onClick }) =>
  isHidden ? <li>Hidden</li> : <li onClick={onClick}>Visible</li>
);

export default Mole;
