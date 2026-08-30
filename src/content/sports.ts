import goalDiggersTrophyAbay from "@/assets/goal-diggers-trophy-abay.jpg";
import goalDiggersTeam from "@/assets/goal-diggers-team.jpg";
import fieldTheoryTeam from "@/assets/field-theory-team.jpg";
import gocBestGk2021 from "@/assets/goc-best-gk-2021.jpg";
import gocBestGk2019 from "@/assets/goc-best-gk-2019.jpg";
import gocDgapWin2019 from "@/assets/goc-dgap-win-2019.jpg";
import dynamoClubImage from "@/assets/dynamo-club.jpg";

export const soccer = {
  intro:
    "Soccer has been a constant in my life. I play in goal, though I will take an outfield spot when the team needs one.",
  currentTeam: {
    team: "Goal Diggers",
    league: "7v7 Indoor Coed Soccer — NJ Coed Sports",
    leagueUrl: undefined as string | undefined,
    recentResult: "Winners — 8v8 Fall Sunday Night Soccer (Fall 2025)",
    photos: [
      {
        src: goalDiggersTrophyAbay,
        alt: "Abay holding Goal Diggers trophy after the 8v8 Fall Sunday Night Soccer final",
        caption: "Goal Diggers — 8v8 Fall Sunday Night Soccer champions.",
      },
      {
        src: goalDiggersTeam,
        alt: "Goal Diggers team with the championship trophy",
        caption: "Goal Diggers team celebrating the championship win.",
      },
    ],
  },
  miptHighlights: {
    description:
      "Before moving to the U.S. I played in college tournaments at MIPT for a team called Field Theory. We won the league, and I was named Best Goalkeeper of the Tournament.",
    photo: {
      src: fieldTheoryTeam,
      alt: "Field Theory team photo",
      caption: "Field Theory — MIPT league champions.",
    },
  },
  gameOfTheCentury: {
    description:
      'MIPT has a tradition called the "Game of the Century": departments play each other 6v6, almost continuously, for twenty-four hours, with short breaks for entertainment. I played in it three times for my department and was named Best Goalkeeper of the Game twice.',
    badges: ["3× Represented", "2× Best Goalkeeper"],
    gallery: [
      {
        src: gocBestGk2021,
        alt: "Best Goalkeeper award, Game of the Century 2021",
        caption: "Best Goalkeeper — Game of the Century (May 2021)",
      },
      {
        src: gocBestGk2019,
        alt: "Best Goalkeeper award with other distinguished players, Game of the Century 2019",
        caption: "Best Goalkeeper — Game of the Century (2019)",
      },
      {
        src: gocDgapWin2019,
        alt: "DGAP team winning photo with final score table, Game of the Century 2019",
        caption: "DGAP team — Game of the Century champions (2019)",
      },
    ],
  },
};

export interface WrestlingTimelineItem {
  era: string;
  title: string;
  description: string;
  image?: { src: string; alt: string; caption: string };
  link?: { url: string; label: string };
}

export const wrestling = {
  intro: "I started wrestling as a kid and have never really stopped.",
  narrative: [
    "I wrestled Greco-Roman through school, then moved to judo and sambo at the Dynamo Club at Beverly Hills High School, under coach Boris Brezhnev. Most of what I know technically comes from those years.",
    "At MIPT I trained on and off, around coursework. I have picked judo back up at Rutgers and train there now — it is the part of the week that has nothing to do with a desk.",
  ],
  timeline: [
    {
      era: "School",
      title: "Greco-Roman Wrestling",
      description:
        "Greco-Roman wrestling through my school years.",
    },
    {
      era: "High School",
      title: "Dynamo Club — Judo & Sambo",
      description:
        "Judo and sambo under coach Boris Brezhnev. Most of my technique comes from here.",
      image: {
        src: dynamoClubImage,
        alt: "Dynamo Club — judo practice with coach Boris Brezhnev",
        caption: "Dynamo Club — training under Boris Brezhnev.",
      },
      link: {
        url: "https://www.facebook.com/DynamoClub",
        label: "Dynamo Club on Facebook",
      },
    },
    {
      era: "MIPT",
      title: "Judo Practice",
      description: "Judo on and off, around coursework.",
    },
    {
      era: "Rutgers",
      title: "Continuing Judo",
      description: "Still training judo, now at Rutgers.",
    },
  ] satisfies WrestlingTimelineItem[],
};
