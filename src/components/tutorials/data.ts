import { useCallback, useState } from "react"

export type Track = "firm" | "government"
export type Tutorial = { title: string; thumbnail: string; videos: [title: string, driveId: string][] }

export const driveEmbed = (id: string) => `https://drive.google.com/file/d/${id}/preview`

export const TRACKS: Record<Track, { label: string; path: string; icon: string; img: string; desc: string; tutorials: Tutorial[] }> = {
  firm: {
    label: "For Firms",
    path: "/tutorials/firms",
    icon: "building-factory-2",
    img: "https://images.unsplash.com/photo-1462206092226-f46025ffe607?q=80&w=1200&auto=format&fit=crop",
    desc: "Learn how to integrate ETS into your firm's workflow and enhance your project management.",
    tutorials: [
      { title: "Registering your firm", thumbnail: "firm-01", videos: [["Apply to join ETS", "1-WTQ-jvBFKWbjbw_BxMxBEdYYeyik48h"], ["Activate your primary manager account", "1IW8MczxRnK50A-7zjmZhFLdF9jqb_ghr"]] },
      { title: "Building your team", thumbnail: "firm-02", videos: [["Add an administrator", "1SJlcDzMRGYG25BfBlcDj7CCEuE-3mtYR"]] },
      {
        title: "Bidding in a primary auction",
        thumbnail: "firm-03",
        videos: [
          ["Join an auction", "1moA2Vx2XKKVsRxYjTwh5v_nGpr1O9SBt"],
          ["Place your bids (open and sealed)", "1UU03NxBxKxDtmOkUbZMheF7NfulnNw53"],
          ["Approve the bids (pricing)", "1l8daD9cj5tb10DEn5yONn0CZoB4eI-10"],
          ["Approve the bids (review)", "1FNfRrH7xmjFUTPdZTQwX9KE-57e4q9jh"],
          ["Final approval - the bids enter the auction", "1QQF0WdmSbFJ5uBKnWD5i9AfSF0oyercP"],
          ["Your auction results", "1w5xdQhMQylY8uI8fD0mvjEJfXJ5YVmWJ"],
        ],
      },
      {
        title: "Auctioning permits on the secondary market",
        thumbnail: "firm-04",
        videos: [
          ["Create a secondary auction", "1-vnlkDAwNTcFWZxvCW2Nhn5wDN3vi0rf"],
          ["Approve the quantity", "1gpEmGYob_Bax79xDwxtjVaTYys5BusNA"],
          ["Approve the pricing and terms", "1rxEbFJ6Xjkx-EK8tkYCvuMe3bOiz6cvI"],
          ["Final firm approval", "1tx9tvJEQya_g3aK1dTE3QCvniAr6YDeC"],
        ],
      },
      {
        title: "Selling permits on the spot market",
        thumbnail: "firm-05",
        videos: [
          ["Create a spot sale", "1T25jfaln01spkpsdKD9GIwirp1IYnFvW"],
          ["Approve the quantity", "1r6LZGi114KLk7bDq0FSzPdHN7YsHSHry"],
          ["Approve the pricing", "1h8FCdbZZd6VKFGCK_hcjNZM4uGAb6cx7"],
          ["Final firm approval", "1klw4qSDgLKzwOJwBuMwQxk7qdqQWGYMc"],
        ],
      },
      {
        title: "Buying from the spot market",
        thumbnail: "firm-06",
        videos: [
          ["Buy from a spot listing", "1g3KSGZ5aPIjtaObx42A5O3-rTs-NCozw"],
          ["Confirm the order", "1CjVPKkOF6a2GfJVtG1qrTMo9hyHjmX8x"],
          ["Confirm delivery", "1DpBlCavaxgBB5vcTZylmOwS2Np691OBy"],
        ],
      },
      { title: "Registering carbon credits", thumbnail: "firm-07", videos: [["Register your carbon credits", "152aZCiKVoi3Z50PQk6FR9nmRW-DpTeTI"]] },
    ],
  },
  government: {
    label: "For The Government",
    path: "/tutorials/government",
    icon: "building-bank",
    img: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=1200&auto=format&fit=crop",
    desc: "Discover the administrative features of ETS and how to manage your organization's account effectively.",
    tutorials: [
      { title: "Firm Approval", thumbnail: "gov-01", videos: [["Firm Approval", "1DmJV57j4Xx-EJAdrJHnziT1JVuw44gBB"]] },
      { title: "Cycle & Auction Creation", thumbnail: "gov-02", videos: [["Cycle & Auction Creation", "1cok2Sy8DE8EEuEFSV0igjmJrdgphTZ5T"]] },
    ],
  },
}

export const pad = (n: number) => String(n).padStart(2, "0")
export const plural = (n: number, w: string) => `${n} ${w}${n === 1 ? "" : "s"}`

const WATCHED_KEY = "ets-tutorials-watched"

/** Watched video ids, remembered per browser. */
export const useWatched = () => {
  const [watched, setWatched] = useState<Record<string, boolean>>(() => {
    try { return JSON.parse(localStorage.getItem(WATCHED_KEY) || "{}") } catch { return {} }
  })
  const markWatched = useCallback((id: string) => setWatched(w => {
    if (w[id]) return w
    const next = { ...w, [id]: true }
    try { localStorage.setItem(WATCHED_KEY, JSON.stringify(next)) } catch { /* private mode: progress just isn't kept */ }
    return next
  }), [])
  return [watched, markWatched] as const
}
