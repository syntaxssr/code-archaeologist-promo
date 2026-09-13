import type { ComponentType } from "react";
import { Standby } from "./Standby";
import { Title } from "./Title";

/** Screens that have been designed. Anything not in here still renders the
 *  placeholder, so the deck stays clickable end to end while it is built one
 *  section at a time. */
export const screens: Record<string, ComponentType> = {
  standby: Standby,
  title: Title,
};
