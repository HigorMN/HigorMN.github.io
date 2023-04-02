import { useMemo, useState } from 'react';
import animationContext from '.';

const AnimationProvider = ({ children }) => {
  const [location, setLocation] = useState('/');
  const [visibleContent, setVisibleContent] = useState('/');

  const handleNavigate = ({ target: { name } }) => {
    setVisibleContent(name);
    setTimeout(() => {
      setLocation(name);
    }, 400);
  };

  const value = useMemo(
    () => ({
      location,
      handleNavigate,
      visibleContent,
      setVisibleContent,
    }),
    [location, visibleContent]
  );

  return (
    <animationContext.Provider value={value}>
      {children}
    </animationContext.Provider>
  );
};

export default AnimationProvider;
