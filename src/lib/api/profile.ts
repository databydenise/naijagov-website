import { mockProfileAccount, mockProfileDetails } from "@/mocks/profile";
import { simulate } from "./simulate";

export interface ProfileAccount {
  fullName: string;
  email: string;
  /** Display-ready, e.g. "September 2026". */
  memberSince: string;
}

/** Every value is display-ready — nothing here is parsed or formatted. */
export interface ProfileDetails {
  preferredName: string;
  dateOfBirth: string;
  stateOfOrigin: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
}

export interface Profile {
  account: ProfileAccount;
  /** `null` until the demo details are filled in. */
  details: ProfileDetails | null;
}

/** The signed-in account. Details always start empty. */
export function getProfile(): Promise<Profile> {
  return simulate({ account: { ...mockProfileAccount }, details: null });
}

/** The fictional details behind the profile's "Fill with demo data" button. */
export function getDemoDetails(): Promise<ProfileDetails> {
  return simulate({ ...mockProfileDetails });
}
