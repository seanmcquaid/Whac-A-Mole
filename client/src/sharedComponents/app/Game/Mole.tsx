import React from 'react';

type MoleProps = {
  isVisible: boolean;
  onClick: () => void;
};

const Mole: React.FC<MoleProps> = React.memo(({ isVisible, onClick }) =>
  isVisible ? <li onClick={onClick}>Visible</li> : <li>Hidden</li>
);

export default Mole;
