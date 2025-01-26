import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
  Timestamp,
} from "firebase/firestore";
import { Proposal } from "@/types/proposal";
import { db } from "@/app/firebase";

// Helper function to serialize dates
const serializeProposal = (proposal: any): Proposal => {
  const serialized = { ...proposal };

  // Convert Firestore Timestamp to ISO string
  if (proposal.createdAt && proposal.createdAt instanceof Timestamp) {
    serialized.createdAt = proposal.createdAt.toDate().toISOString();
  }
  if (proposal.updatedAt && proposal.updatedAt instanceof Timestamp) {
    serialized.updatedAt = proposal.updatedAt.toDate().toISOString();
  }

  return serialized;
};

export const proposalsService = {
  deleteProposal: async (userId: string, proposalId: string) => {
    const proposalRef = doc(db, "proposals", proposalId);
    await deleteDoc(proposalRef);
  },

  createProposal: async (userId: string, data: Partial<Proposal>) => {
    try {
      const proposalsRef = collection(db, "proposals");
      const docRef = await addDoc(proposalsRef, {
        ...data,
        userId,
        createdAt: Timestamp.now(),
        status: "draft",
        content: data.content || [],
        clientPassword: Math.random().toString(36).slice(-8),
      });

      return docRef.id;
    } catch (error) {
      console.error("Error creating proposal:", error);
      throw error;
    }
  },

  async getProposalByIdAndPassword(id: string, password: string) {
    try {
      const docRef = doc(db, "proposals", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        return null;
      }

      const proposal = serializeProposal({
        id: docSnap.id,
        ...docSnap.data(),
      });

      if (proposal.status === "draft" || proposal.clientPassword === password) {
        return proposal;
      }

      return null;
    } catch (error) {
      console.error("Error getting proposal:", error);
      throw error;
    }
  },

  async getUserProposals(userId: string) {
    try {
      const proposalsRef = collection(db, "proposals");
      const q = query(proposalsRef, where("userId", "==", userId));
      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map((doc) =>
        serializeProposal({
          id: doc.id,
          ...doc.data(),
        }),
      );
    } catch (error) {
      console.error("Error getting user proposals:", error);
      throw error;
    }
  },

  async updateProposal(id: string, data: Partial<Proposal>) {
    try {
      const docRef = doc(db, "proposals", id);

      // Recursive function to sanitize the object
      const sanitizeData = (input: any): any => {
        if (Array.isArray(input)) {
          // Recursively sanitize each element in the array
          return input.map((item) => sanitizeData(item));
        } else if (input && typeof input === "object") {
          // Recursively sanitize each key-value pair in the object
          return Object.fromEntries(
            Object.entries(input).map(([key, value]) => [
              key,
              sanitizeData(value),
            ]),
          );
        } else {
          // Convert undefined to null for non-object/array values
          return input === undefined ? null : input;
        }
      };

      // Sanitize the data object
      const sanitizedData = sanitizeData(data);

      console.log("Sanitized Data:", sanitizedData);
      await updateDoc(docRef, sanitizedData);
    } catch (error) {
      console.error("Error updating proposal:", error);
      throw error;
    }
  },
};
