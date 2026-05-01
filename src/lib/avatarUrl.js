/**
 * Avatars: Google users keep their Google photo; everyone else gets a stable
 * illustration from DiceBear’s free HTTP API (https://www.dicebear.com).
 */
const DICEBEAR_BASE = 'https://api.dicebear.com/7.x/notionists/svg';

export function isGoogleUser(user) {
  if (!user?.providerData?.length) return false;
  return user.providerData.some((p) => p.providerId === 'google.com');
}

/** @param {import('firebase/auth').User | null} user @param {Record<string, unknown> | null} profile Firestore users/{uid} */
export function getAvatarDisplayUrl(user, profile) {
  if (!user) return '';
  if (isGoogleUser(user) && user.photoURL) return user.photoURL;
  const seed = (profile && typeof profile.avatarSeed === 'string' && profile.avatarSeed) || user.uid;
  const params = new URLSearchParams({
    seed,
    backgroundColor: 'c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf',
  });
  return `${DICEBEAR_BASE}?${params.toString()}`;
}
