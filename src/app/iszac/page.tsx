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
      <Page
        color={Color3.fromHex("FFFF00")}
        scale
        bg="center/50px 50px repeating-linear-gradient(45deg, #80808010, #80808010 25%, transparent 25%, transparent 50%, #80808010 50%, #80808010 75%, transparent 75%, transparent 100%)"
      >
        <h1>Warning</h1>
        <p>
          This part of the site goes into <b>mental health</b> and{" "}
          <b>figuring out whether we're a system or not.</b>
          <br />
          If you're not comfortable with that kind of stuff, you can{" "}
          <a href="/">go back home</a> and go on like nothing ever happened.
        </p>
        <p>
          And if you just believe that{" "}
          <strong>systems can only come forth from trauma</strong> and not
          speculation, please understand that the reason this is all happening
          in the first place (the possible trauma) is included within the
          speculation.
          <br />
          Trauma comes in different shapes and sizes, so what may be obvious to
          you may not be so obvious to others.
        </p>
        <p>
          <b>Simply put, please be respectful.</b> We'll thank you for your
          patience! :]
        </p>
        <p>
          Check out{" "}
          <a href="https://blog.abtmtr.link/stories/" target="_blank">
            Iszac's blog
          </a>{" "}
          if you'd like to learn more.
          <br />
          With all of that said, feel free to continue.
        </p>
        <AccessibilityBox />
      </Page>
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
        <p>Honestly, there's not much to write home about him.</p>
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
          to take the backseat and front only when things are just right for
          him.
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
          We proudly make up MeowcaTheoRange! What this makes MeowcaTheoRange
          specifically is still up for debate.
        </p>
        <p>
          We're currently wondering whether or not we're a{" "}
          <strong>system</strong>. We probably wouldn't be traumagenic, and
          we're still figuring things out between us and our switches.
        </p>
        <p>
          It could also be some sort of other thing, but further investigation
          would be needed.
        </p>
        <p>
          It's honestly quite hard to tell traits between <strong>Iszac</strong>{" "}
          and <strong>Theo</strong> from a future perspective, due to our poor
          memory. It's not impossible, but it is hard.
        </p>
        <p>
          Feel free to read{" "}
          <a href="https://blog.abtmtr.link/stories/" target="_blank">
            Iszac's blog
          </a>{" "}
          for more information - Theo moved some of his experiences trying to
          find Iszac over there because he thought it fit.
        </p>
        <h2>Cool facts</h2>
        <p>
          <b>Iszac</b> prefers having his own side of things, finding it rude to
          use anything that he knows Theo would mind. Therefore, he owns a few
          accounts, and Theo owns his own accounts.
        </p>
        <p>
          We're speculating being a system primarily due to our{" "}
          <strong>given name</strong> seemingly not cutting it anymore, as well
          as us preferring plural references.
        </p>
        <p>
          We're honestly a bit hopeful that we are a system, though too much
          excitement may push unrealistic expectations about who we are. We're
          trying not to push it because we're honestly still not sure if we're
          thinking about it right.
        </p>
        <p>
          Neither <strong>Iszac</strong> nor <strong>Theo</strong> have specific
          roles like "protector" or "trauma holder", probably because we're not
          traumagenic, as stated before.
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
