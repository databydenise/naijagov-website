import type { ProfileAccount, ProfileDetails } from "@/lib/api/profile";
import { mockUser } from "./user";

/**
 * Seed fixtures for the profile. Deliberately fictional: placeholder name and
 * street, an example.com address, and a phone number of zeros. Do not make
 * any of it more realistic.
 */
export const mockProfileAccount: ProfileAccount = {
  fullName: mockUser.fullName,
  email: mockUser.email,
  memberSince: "September 2026",
};

export const mockProfileDetails: ProfileDetails = {
  preferredName: "Ada",
  dateOfBirth: "1 January 1990",
  stateOfOrigin: "Lagos",
  phone: "0800 000 0000",
  addressLine: "00 Placeholder Street",
  city: "Ikeja",
  state: "Lagos",
};
