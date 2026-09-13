import type { ComponentType } from "react";
import type { Slide } from "../deck-data";
import { Ask } from "./Ask";
import { Category } from "./Category";
import { Close } from "./Close";
import { Demo } from "./Demo";
import { How } from "./How";
import { Numbers } from "./Numbers";
import { Output } from "./Output";
import { Pain } from "./Pain";
import { Skill } from "./Skill";
import { Standby } from "./Standby";
import { Team } from "./Team";
import { Title } from "./Title";
import { Tokens } from "./Tokens";
import { Use } from "./Use";
import { VsRag } from "./VsRag";
import { What } from "./What";
import { WhyFail } from "./WhyFail";

export type ScreenProps = { slide: Slide };

/** Screens that have been designed. Anything not in here still renders the
 *  placeholder, so the deck stays clickable end to end while it is built one
 *  section at a time. */
export const screens: Record<string, ComponentType<ScreenProps>> = {
  standby: Standby,
  title: Title,
  pain: Pain,
  "why-fail": WhyFail,
  category: Category,
  skill: Skill,
  what: What,
  how: How,
  "vs-rag": VsRag,
  demo: Demo,
  output: Output,
  numbers: Numbers,
  use: Use,
  ask: Ask,
  team: Team,
  tokens: Tokens,
  close: Close,
};
