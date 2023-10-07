import React from "react";
import PlayBox from "components/PlayBox";
import soundsJson from "../sounds.json";

import { NavLink } from "react-router-dom";
import { Icon } from "components/Icons";
import Song from "components/Song";

export default function Home() {
  const items = soundsJson;

  const singer = [
    {
      id: 1,
      position: "Originals",
      name: "ZenVibes",
      image: "logo.png",
    },
  ];

  const mixer = soundsJson.filter((item) => item.id < 10);

  return (
    <div>
      {/* <div>
        <h3 className="text-3xl text-white font-bold tracking-tight mb-6">
          Recommendations
        </h3>
        <div className="grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all">
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
            />
            <h4 className="text-[16px] font-bold p-4">Latests Tracks</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://i.scdn.co/image/ab67706f000000026e65f020506feb291e366012"
            />
            <h4 className="text-[16px] font-bold p-4">Türkçe 2000'ler</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://i.scdn.co/image/ab67706f00000002170d1a781c222aaca28081b4"
            />
            <h4 className="text-[16px] font-bold p-4">Hot Hits Turkey</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://i.scdn.co/image/ab67616d0000b273ba632c08e3ca8342c20017a5"
            />
            <h4 className="text-[16px] font-bold p-4">Beyaz</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>

          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default"
            />
            <h4 className="text-[16px] font-bold p-4">Daily Mix 1</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>
          <div className="flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded">
            <img
              className="w-[5rem] h-[5rem]"
              src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default"
            />
            <h4 className="text-[16px] font-bold p-4">Daily Mix 2</h4>
            <button className="w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
              <Icon name="play" />
            </button>
          </div>
        </div>
      </div> */}
      <div className="flex justify-between items-end mb-4">
        <PlayBox title={"Latest Tracks"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items
          .filter((item) => item.id < 10)
          .map((item) => (
            <Song item={item} key={item.id} />
          ))}
      </div>
      <div className="flex justify-between items-end mb-4">
        <PlayBox title={"All Tracks"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6">
        {items.map((item) => (
          <Song item={item} key={item.id} />
        ))}
      </div>
      {/* <div className="flex justify-between items-end mb-4 mt-6">
        <PlayBox title={"Türkçe pop kadın yıldızlar"} />
        <PlayBox see />
      </div> */}
      {/* <div className="grid grid-cols-5 gap-x-6 mb-8">
        {mixer.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={
              "bg-footer rounded p-4 transition-all hover:bg-menubg group"
            }
          >
            <div className="relative ">
              <img
                className="w-auto h-auto inset-0 object-cover mb-4"
                src={item.image}
              />
              <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                <Icon name="play" />
              </button>
            </div>
            <span className="font-semibold text-white text-[16px] whitespace-nowrap">
              {item.name}
            </span>{" "}
            <br />
            <span className="mt-1 text-[14px] text-link">{item.position}</span>
          </NavLink>
        ))}
      </div> */}
      <div className="flex justify-between items-end mb-4 mt-6">
        <PlayBox title={"Artists"} />
        <PlayBox see />
      </div>
      <div className="grid grid-cols-5 gap-x-6 mb-8">
        {singer.map((item) => (
          <NavLink
            key={item.id}
            to="/"
            className={
              "bg-footer rounded p-4 transition-all hover:bg-menubg group"
            }
          >
            <div className="relative ">
              <img
                className="w-auto h-auto inset-0 object-cover mb-4 rounded-full"
                src={item.image}
              />
              <button className="w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100">
                <Icon name="play" />
              </button>
            </div>
            <span className="font-semibold text-white text-[16px] whitespace-nowrap">
              {item.name}
            </span>{" "}
            <br />
            <span className="mt-1 text-[14px] text-link">{item.position}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
