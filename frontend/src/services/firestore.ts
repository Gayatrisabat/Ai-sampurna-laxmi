import { db } from '../firebase'
import { collection, doc, getDoc, setDoc, updateDoc, serverTimestamp, query, orderBy, limit, getDocs, addDoc } from 'firebase/firestore'
import type { UserProfile, Badge } from '../store/useAppStore'

export async function upsertUser(user: UserProfile) {
  if (!db) return
  const ref = doc(db, 'users', user.uid)
  const snapshot = await getDoc(ref)
  if (snapshot.exists()) return
  await setDoc(ref, {
    uid: user.uid,
    displayName: user.displayName || null,
    email: user.email || null,
    phoneNumber: user.phoneNumber || null,
    photoURL: user.photoURL || null,
    points: 0,
    badges: [],
    createdAt: serverTimestamp(),
  })
}

export async function savePoints(uid: string, points: number) {
  if (!db) return
  const ref = doc(db, 'users', uid)
  await updateDoc(ref, { points })
}

export async function saveBadges(uid: string, badges: Badge[]) {
  if (!db) return
  const ref = doc(db, 'users', uid)
  await updateDoc(ref, { badges })
}

export async function getWeeklyLeaderboard(limitCount = 20) {
  const ref = collection(db, 'users')
  const q = query(ref, orderBy('points', 'desc'), limit(limitCount))
  const snap = await getDocs(q)
  return snap.docs.map((d) => d.data() as any)
}

export async function listThreads(limitCount = 50) {
  const ref = collection(db, 'threads')
  const q = query(ref, orderBy('createdAt', 'desc'), limit(limitCount))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }))
}

export async function addThread(title: string, authorUid: string | null) {
  const ref = collection(db, 'threads')
  await addDoc(ref, { title, posts: 0, createdAt: serverTimestamp(), authorUid: authorUid || null })
}