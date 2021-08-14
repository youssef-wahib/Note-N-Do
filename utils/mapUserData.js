export const mapUserData = (user) => {
  const { uid, email, xa, displayName, photUrl } = user;
  return {
    id: uid,
    email,
    token: xa,
    name: displayName,
    profilePic: photUrl,
  };
};
