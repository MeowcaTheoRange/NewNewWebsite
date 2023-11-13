/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
"use client";
import AccessibilityBox from "@/components/AccssibilityBox/AccessibilityBox";
import Floaty from "@/components/Floaty/Floaty";
import Footer from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import ScrollBackInd from "@/components/ScrollBackInd/ScrollBackInd";
import SpeedDial from "@/components/SpeedDial/SpeedDial";
import { Color3 } from "@/utility/color";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  const body = useRef<HTMLDivElement>(null);

  // TIME
  const dateObj = new Date();
  const [time, setTime] = useState("00:00:00 PM");
  const [date, setDate] = useState("0/0/0000");
  let animFrame = useRef(0);

  // hot reloading memory saver
  useEffect(() => {
    window.cancelAnimationFrame(animFrame.current);
  }, []);
  useEffect(() => {
    function setTheTime() {
      dateObj.setTime(Date.now());
      setTime(
        dateObj.toLocaleTimeString("en-US", {
          minute: "2-digit",
          hour: "2-digit",
          timeZone: "America/Chicago",
        })
      );
      setDate(
        dateObj.toLocaleDateString("en-US", {
          weekday: "long",
          day: "2-digit",
          month: "long",
          timeZone: "America/Chicago",
        })
      );
      animFrame.current = window.requestAnimationFrame(setTheTime);
    }
    animFrame.current = window.requestAnimationFrame(setTheTime);
  }, []);

  return (
    <div
      className="body"
      ref={body}
      onScroll={(e) => {
        const target = e.target as HTMLDivElement;
        const curPage = Math.round(target.scrollTop / target.clientHeight);
        if (curPage != page) setPage(curPage);
      }}
    >
      <ScrollBackInd hide={page <= 0} scroll={body.current} time={time} />
      <Page color={Color3.fromHex("FF4000")} cut>
        <h1>
          Who's Theo?&nbsp;
          <p className="chip">he/him</p>
        </h1>
        <p>
          Well, that's a hard question to answer. Some would say that Theo is
          the me that's always been here.
        </p>
        <p>
          We do know that Theo primarily sits in front, only ever leaving when
          he needs some time to figure things out.
        </p>
        <p>
          He's a proud sysadmin, taking care of the technological side of things
          when he can.
        </p>
        <AccessibilityBox />
        <Floaty>
          <img src="/whoami/theo_4x.png"></img>
        </Floaty>
      </Page>
      <Page color={Color3.fromHex("00c0FF")} cut>
        <h1>
          Who's Iszac?&nbsp;
          <p className="chip">he/they/it</p>
        </h1>
        <p>
          Ice cream, cotton candy, any brightly-coloured sweet treat would
          describe him quite well.
        </p>
        <p>
          Sometimes we describe him as my true autistic self, one unregulated by
          the bounds of what is "cringe" in my head, but we're also still not
          sure yet.
        </p>
        <p>
          Iszac isn't very enthusiastic about fronting at the moment, preferring
          to take the backseat and front only when things are just right for him.
        </p>
        <p>
          He's more creative, not too interested in sysadmining but more
          interested in expressing himself with whatever means necessary.
        </p>
        <Floaty>
          <img src="/whoami/iszac_4x.png"></img>
        </Floaty>
      </Page>
      <Page color={Color3.fromHex("FFFFFF")} cut>
        <h1>
          Who do you make up?
          <p className="chip">plural they</p>
          <p className="chip">he/him</p>
        </h1>
        <p>
          We proudly make up MeowcaTheoRange! How MeowcaTheoRange is made up specifically is still under debate.
        </p>
        <p>
          We're currently debating on whether or not we're a <strong>system</strong>,
          especially because that's what we think is the best explanation to our
          mental situation at the moment.
        </p>
      </Page>
      <Page color={Color3.fromHex("c0c0c0")}>
        <h1>What accounts do you run?</h1>
        <p>Let's see...</p>
        <h2>Iszac runs</h2>
        <SpeedDial
          services={[
            {
              name: "iszac.abtmtr.link on Discord",
            },
            {
              name: "@mtr@local.abtmtr.link",
              url: "https://local.abtmtr.link/mtr",
            },
            {
              name: "@stories@blog.abtmtr.link",
              url: "https://blog.abtmtr.link/stories",
            },
            {
              name: "MeowcaTheoRange on mspfa.com",
              url: "https://mspfa.com/user/?u=109014333296332953331",
            },
            {
              name: "ko-fi.com/meowcatheorange",
              url: "https://ko-fi.com/meowcatheorange",
            },
          ]}
        />
        <h2>Theo runs</h2>
        <SpeedDial
          services={[
            {
              name: "abtmtr.link on Discord",
            },
            {
              name: "@meowcatheorange@moth.zone",
              url: "https://moth.zone/meowcatheorange",
            },
            {
              name: "@mtr@blog.abtmtr.link",
              url: "https://blog.abtmtr.link/mtr",
            },
            {
              name: "github.com/MeowcaTheoRange",
              url: "https://github.com/MeowcaTheoRange",
            },
            {
              name: "beta.trollcall.xyz",
              url: "https://beta.trollcall.xyz/",
            },
            {
              name: "Our home server",
            },
          ]}
        />
        <h2>We both run...</h2>
        <SpeedDial
          services={[
            {
              name: "abtmtr.link",
              url: "https://abtmtr.link/",
            },
            {
              name: "me@abtmtr.link",
              url: "mailto:me@abtmtr.link",
            },
            {
              name: "@ro@translunar.academy",
              url: "https://social.translunar.academy/ro",
            },
            {
              name: "@mtr@img.abtmtr.link",
              url: "https://img.abtmtr.link/",
            },
            {
              name: "MeowcaTheoRange on beta.trollcall.xyz",
              url: "https://beta.trollcall.xyz/clan/meowcatheorange",
            },
          ]}
        />
        <p>
          This should be a reliable enough index of where we are and what we do.
        </p>
        <p>
          <strong>
            Also, if any accounts aren't listed here and don't link back to
            abtmtr.link, it's most likely not us or inactive!
          </strong>
        </p>
      </Page>
      <Page color={Color3.fromHex("000000")}></Page>
      <Footer />
    </div>
  );
}
