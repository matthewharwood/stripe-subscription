export interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName: string;
  stripeId?: string;
  subscriptionId?: string;
  status?: string;
  currentUsage?: number;
}
