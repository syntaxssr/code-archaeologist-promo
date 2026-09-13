import type { ComponentType } from "react";
import type { Slide } from "../deck-data";
import { Pain } from "./Pain";
import { Standby } from "./Standby";
import { Title } from "./Title";

export type ScreenProps = { slide: Slide };

/** Screens that have been designed. Anything not in here still renders the
 *  placeholder, so the deck stays clickable end to end while it is built one
 *  section at a time. */
export const screens: Record<string, ComponentType<ScreenProps>> = {
  standby: Standby,
  title: Title,
  pain: Pain,
};
