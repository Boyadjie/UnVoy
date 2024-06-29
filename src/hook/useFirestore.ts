import {useState, useEffect} from 'react';

import {
  collection,
  onSnapshot,
  QuerySnapshot,
  DocumentData as FirebaseDocumentData,
} from 'firebase/firestore';

import {db} from '../firebase';

interface DocumentData {
  id: string;
  [key: string]: unknown;
}

export const useFirestore = (collectionName: string) => {
  const [docs, setDocs] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const colRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(
      colRef,
      (snapshot: QuerySnapshot<FirebaseDocumentData>) => {
        const documents: DocumentData[] = [];
        snapshot.forEach((doc) => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [collectionName]);

  return {docs, loading, error};
};
