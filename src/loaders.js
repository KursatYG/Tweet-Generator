import React from 'react';
import ContentLoader from 'react-content-loader';

const AvatarLoader = (props) => (
  <ContentLoader
    speed={2}
    width={60}
    height={48}
    viewBox="0 0 60 48"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="85" y="59" rx="3" ry="3" width="88" height="6" />
    <rect x="10" y="86" rx="3" ry="3" width="52" height="6" />
    <rect x="-176" y="103" rx="3" ry="3" width="410" height="6" />
    <rect x="-176" y="119" rx="3" ry="3" width="380" height="6" />
    <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
    <circle cx="-90" cy="68" r="20" />
    <circle cx="24" cy="24" r="24" />
  </ContentLoader>
);

export { AvatarLoader };
