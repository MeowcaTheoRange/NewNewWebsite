/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
"use client";
import AccessibilityBox from "@/components/AccssibilityBox/AccessibilityBox";
import ColourChip from "@/components/ColourChip/ColourChip";
import Floaty from "@/components/Floaty/Floaty";
import Footer from "@/components/Footer/Footer";
import Page from "@/components/Page/Page";
import ProjectList, { Project } from "@/components/ProjectList/ProjectList";
import ScrollBackInd from "@/components/ScrollBackInd/ScrollBackInd";
import SpeedDial from "@/components/SpeedDial/SpeedDial";
import Time from "@/components/Time/Time";
import LastFM from "@/components/net/LastFM/LastFM";
import { Color3 } from "@/utility/color";
import { Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-Space-Grotesk",
});

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

  // LAST FM
  let [player, setPlayer] = useState<{ [key: string]: any } | null | undefined>(
    null
  );
  const FMGate = useRef(true);
  useEffect(() => {
    async function LastFMGet() {
      FMGate.current = false;
      const api_key = "8f9b0255cc55a19f82d37c22600aff1a";
      const LAST_FM_URL = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=MeowcaTheoRange&api_key=${api_key}&format=json&extended=1&limit=1`;
      const res = await fetch(LAST_FM_URL);
      setPlayer(await res.json());
      setTimeout(() => LastFMGet(), 20000);
    }
    if (FMGate.current) LastFMGet();
  }, []);

  // Gallery
  let [images, setImages] = useState<Project[]>([
    {
      name: "See More",
      description: "blog.abtmtr.link",
      url: "https://blog.abtmtr.link/",
    },
  ]);
  const ImageGate = useRef(true);
  useEffect(() => {
    async function ImageGet() {
      ImageGate.current = false;
      const IMAGE_URL = `https://img.abtmtr.link/api/collections/mtr/posts`;
      const res = await fetch(IMAGE_URL);
      const gallery = (await res.json()).data;
      setImages([
        ...gallery.posts?.map((imagePost: any) => ({
          name: imagePost.title,
          description: imagePost.body.replace(
            /^!\[.*?\]\((.*?)\).*(?:\n\nCharacters:.*?\n\n)(.*)\n\n.*$/gs,
            "$2"
          ),
          image: imagePost.images[0] ?? null,
          url: "https://img.abtmtr.link/" + imagePost.slug,
        })),
        {
          name: "See More",
          description: "img.abtmtr.link",
          url: "https://img.abtmtr.link/",
        },
      ]);
    }
    if (ImageGate.current) ImageGet();
  }, []);

  // Gallery
  let [blog, setBlog] = useState<Project[]>([
    {
      name: "See More",
      description: "blog.abtmtr.link",
      url: "https://blog.abtmtr.link/mtr/",
    },
  ]);
  const BlogGate = useRef(true);
  useEffect(() => {
    async function BlogGet() {
      BlogGate.current = false;
      const BLOG_URL = `https://blog.abtmtr.link/api/collections/mtr/posts`;
      const res = await fetch(BLOG_URL);
      const blogss = (await res.json()).data;
      setBlog([
        ...blogss.posts?.map((blogPost: any) => ({
          name: blogPost.title,
          description: blogPost.body.replace(/#\w*/g, ""),
          url: "https://blog.abtmtr.link/mtr/" + blogPost.slug,
        })),
        {
          name: "See More",
          description: "blog.abtmtr.link",
          url: "https://blog.abtmtr.link/mtr/",
        },
      ]);
    }
    if (BlogGate.current) BlogGet();
  }, []);

  // Gallery
  let [repos, setRepos] = useState<Project[]>([
    {
      name: "See More",
      description: "github.com",
      url: "https://github.com/MeowcaTheoRange",
    },
  ]);
  const GithubGate = useRef(true);
  useEffect(() => {
    async function GithubGet() {
      GithubGate.current = false;
      const GITHUB_URL = `https://api.github.com/users/meowcatheorange/starred`;
      const res = await fetch(GITHUB_URL);
      const reposs = (await res.json())?.filter(
        (x: any) => x.owner.login == "MeowcaTheoRange"
      );
      console.log(reposs);
      setRepos([
        ...reposs?.map((repository: any) => ({
          name: repository.name,
          description: repository.description ?? "No description",
          url: repository.html_url,
        })),
        {
          name: "See More",
          description: "github.com",
          url: "https://github.com/MeowcaTheoRange",
        },
      ]);
    }
    if (GithubGate.current) GithubGet();
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
      <ScrollBackInd
        hide={page <= 0}
        player={player}
        time={time}
        scroll={body.current}
      />
      <Page
        color={Color3.fromHex("ff4000")}
        bg={`linear-gradient(0deg, #200800ee, #200800ee)${
          player?.recenttracks.track[0].image[2]["#text"] != null
            ? `, no-repeat center/cover url("${player.recenttracks.track[0].image[2]["#text"]}")`
            : ""
        }`}
        id="top"
      >
        <h1 aria-label="About M T R dot Link">
          ABTMTR
          <wbr />
          .LINK
        </h1>
        <Time time={time} date={date} />
        <AccessibilityBox />
        <Floaty>
          <LastFM player={player} />
        </Floaty>
        <Floaty start>
          <p className="hv">Scroll down for more!</p>
        </Floaty>
      </Page>
      <Page color={Color3.fromHex("FFFFFF")} id="hi">
        <h1>Welcome 👋</h1>
        <p>
          We're <b>MeowcaTheoRange</b>{" "}
          <small aria-label="Pronounced: meow, cuh, the, oh, range">
            (miau-kuh-thee~oh-ray~nj)
          </small>
          .
          <br />
          We make up a web developer, Fediverse enthusiast, and compulsory
          Minnesotan.
        </p>
        <p>
          We're made up of two identities, Iszac and Theo.
          <br />
          This site was originally written by Theo, so it will go on from his
          perspective.
          <br />
          <a href="/iszac">Learn more about us</a>
        </p>
        <p className="chip">Male</p>
        <p className="chip">Minor</p>
        <p className="chip">Autistic</p>
        <h2>Hey, I'm Theo.</h2>
        <p>I run this domain and all of the services on it.</p>
        <p>
          My favourite hobbies are <strong>programming</strong>,{" "}
          <strong>drawing</strong>,{" "}
          <strong>occasionally making small bits of music</strong>,{" "}
          <strong>obsessing over fonts</strong>, and{" "}
          <strong>being pedantic</strong>.
        </p>
        <p>
          You may see parts of all of these aspects within this website. Please
          tread carefully.
        </p>
        <p>
          Some other important things I think you should know about me are...
        </p>
        <ul>
          <li>Please be patient with me.</li>
          <li>
            Please be understanding! Ask me for clarification if required.
          </li>
          <li>
            I don't really like small talk - keep if brief if you want to check
            up on me, please.
          </li>
          <li>
            I'm not one to pick sides at first, usually. Being an "all or
            nothing" kind of person isn't my thing, and if you don't like that,
            feel free to tell me why your side is good.
          </li>
          <li>
            I like getting tangled up in drama, but I'm not a spiteful person -
            I'm usually only in it for the correlations.
          </li>
          <li>
            You may see me hyperfixate on random stuff, like{" "}
            <a href="#sc_fonts" className="inline">
              certain fonts
            </a>{" "}
            or public transit.
          </li>
        </ul>
        <p>I believe in...</p>
        <ul>
          <li>Self-hosting important or personal infrastructure</li>
          <li>Free and open-source material</li>
          <li>Privacy as a basic human right</li>
          <li>Trans rights & gay rights</li>
          <li>
            Autistic superiority <span className="hv">/joke</span>
          </li>
        </ul>
        <p>Check me out on:</p>
        <SpeedDial
          services={[
            {
              name: "moth.zone",
              url: "https://moth.zone/meowcatheorange",
              purpose: "The Fediverse",
            },
            {
              name: "discord.com",
              url: "http://discord.trollcall.xyz/",
            },
            {
              name: "github.com",
              url: "http://github.com/MeowcaTheoRange",
            },
            {
              name: "ko-fi.com",
              url: "https://ko-fi.com/meowcatheorange",
            },
            {
              name: "mspfa.com",
              url: "https://mspfa.com/user/?u=109014333296332953331",
            },
            {
              name: "beta.trollcall.xyz",
              url: "https://beta.trollcall.xyz/clan/meowcatheorange",
              golden: true,
            },
          ]}
        />
      </Page>
      <Page color={Color3.fromHex("00c0ff")}>
        <h1>What's on this domain?</h1>
        <p>
          Here's a quick list of all of the web services on this domain right
          now.
        </p>
        <ProjectList
          projects={[
            {
              name: "abtmtr.link",
              description: "You are here!",
              url: "https://abtmtr.link/",
            },
            {
              name: "abs.abtmtr.link",
              description:
                "An instance of ABS, a link normalizer for personal use.",
              url: "https://abs.abtmtr.link/",
            },
            {
              name: "blog.abtmtr.link",
              description: "An instance of WriteFreely, used for my blog(s).",
              url: "https://blog.abtmtr.link/",
            },
            {
              name: "cdn.abtmtr.link",
              description:
                "A CDN full of images I use, usually for my blog or gallery.",
              url: "https://cdn.abtmtr.link/",
            },
            {
              name: "img.abtmtr.link",
              description:
                "An instance of WriteFreely, used as an art gallery.",
              url: "https://img.abtmtr.link/",
            },
            {
              name: "local.abtmtr.link",
              description: "An instance of Akkoma, running on a home server.",
              url: "https://local.abtmtr.link/",
            },
          ]}
          markdown
        />
        <h2>Planned services</h2>
        <p>What I would like to put on this domain sometime in the future.</p>
        <ProjectList
          projects={[
            {
              name: "Drawpile",
              description:
                "Running Drawpile on my domain, for use by friends and such.",
              url: "https://pile.abtmtr.link/",
            },
            {
              name: "Minecraft",
              description:
                "Replace the craft.trollcall.xyz server with something a little nicer.",
              url: "https://craft.abtmtr.link/",
            },
          ]}
          markdown
        />
        <h2>
          L10n <small>(localization)</small>
        </h2>
        <p>What services I'd like to put on my server computer at home.</p>
        <ProjectList
          projects={[
            {
              name: "blog.abtmtr.link",
              description:
                "It's running on Oracle Cloud right now. That's not good.",
              url: "https://blog.abtmtr.link/",
            },
            {
              name: "img.abtmtr.link",
              description: "Ditto.",
              url: "https://img.abtmtr.link/",
            },
          ]}
          markdown
        />
      </Page>
      <Page color={Color3.fromHex("FF80C0")} id="currents" preview>
        <h1>Current Obsessions</h1>
        <p>
          I'm into a lot of stuff. As of this site's publication, you'll
          probably see me indulging in:
        </p>
        <ul>
          <li>
            <a
              href="https://social.translunar.academy/@winter"
              className="inline"
            >
              @winter@translunar.academy
            </a>
            's fic{" "}
            <a href="https://translunar.academy/fic/Aetherglow" target="_blank">
              Ætherglow
            </a>
          </li>
          <li>Discussion of autism</li>
          <li>Discussion and usage of the Fediverse</li>
          <li>
            <a href="https://homestuck.com/" target="_blank">
              Homestuck
            </a>{" "}
            and related properties
          </li>
          <li>
            Adventures on{" "}
            <a href="https://mspfa.com/" target="_blank">
              MSPFA
            </a>
            , sometimes
          </li>
          <li>Using React or Next.js</li>
          <li>Creating alternatives to both because I'm just that cool</li>
          <li>Anti-JS practices</li>
          <li>Art and drawing</li>
          <li>Using Blender</li>
          <li>The MetroTransit bus system</li>
        </ul>
        <p>and possibly much more that I can't even remember.</p>
        <p>
          Want to know more? Below is my display of some of these things in
          sections. Enjoy!
        </p>
      </Page>
      <Page color={Color3.fromHex("80FF00")} preview id="sc_programming">
        <h1>Programming</h1>
        <p>I like using what some call "programming languages".</p>
        <p>
          What do I call them? None of your business. All you have to know is
          that I use <strong>TypeScript</strong>, <strong>React</strong>, and{" "}
          <strong>Haxe</strong>.
        </p>
        <p>
          I also know <strong>JavaScript</strong> and some <strong>Bash</strong>{" "}
          in case of emergency.
        </p>
        <ProjectList projects={repos} />
      </Page>
      <Page color={Color3.fromHex("80ffff")} preview floaty id="sc_fonts">
        <h1>Fonts</h1>
        <p>I also like UI and UI design. This includes fonts, quite a bit.</p>
        <p>
          Currently, I'm liking the look of <b>Renogare</b>, <b>Lexend Deca</b>,
          and <b>Space Grotesk</b>. This may change.
        </p>
        <p>
          I first used <strong>Space Grotesk</strong> for general-purpose
          applications. This was on my old portfolio site and it's on TrollCall
          right now. I think it just fits TrollCall; it's quirky, geometric, a
          bit alien - it's right at home with the intended vibe of the site.
        </p>
        <p>
          On this website, I'm using <strong>Renogare</strong> as a header/title
          font, and <strong>Lexend Deca</strong> for everything else.
        </p>
        <p>
          I found <strong>Renogare</strong> while playing{" "}
          <strong>Celeste</strong> - yaknow, the game where you climb a huge
          mountain for a few days?
        </p>
        <p>
          <strong>Renogare</strong> is a bold, geometric, display-optimized
          font. It's <i>super</i> cool and I am in love with how it looks.
        </p>
        <p>
          <strong>Lexend Deca</strong> is a very strong second to{" "}
          <strong>Renogare</strong>, primarily used when I can't use{" "}
          <strong>Renogare</strong>, shouldn't use <strong>Renogare</strong>, or
          am using <strong>Renogare</strong> but need something that{" "}
          <i>isn't</i> <strong>Renogare</strong>.
        </p>
        <p>
          <strong>Lexend Deca</strong> is similar-looking to{" "}
          <strong>Renogare</strong>, with a few major differences.{" "}
          <strong>Lexend Deca</strong> loses the geometry, instead opting for a
          beamed I, flat-top A, M, N, et al. t loses its curve, instead going
          straight down.
        </p>
        <p>
          It also has different weights and proper OTF support - plus a bonus
          series of different letter spacing choices under the{" "}
          <strong>Lexend</strong> name. <strong>Deca</strong> is the tightest,
          which is why I chose it.
        </p>
        <p>
          All in all, <strong>Lexend Deca</strong> is a good general-purpose
          font, while still leaving room for <strong>Renogare</strong> to be a
          great display font.
        </p>
        <Floaty>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-Renogare)",
                margin: 0,
              }}
            >
              AaIiLlMm
            </h1>
            <p
              className="hv"
              style={{
                fontFamily: "var(--font-Renogare)",
                margin: 0,
              }}
            >
              Renogare
            </p>
          </div>
          <div>
            <h1
              style={{
                fontFamily: "var(--font-Lexend-Deca)",
                margin: 0,
              }}
            >
              AaIiLlMm
            </h1>
            <p
              className="hv"
              style={{
                fontFamily: "var(--font-Lexend-Deca)",
                margin: 0,
              }}
            >
              Lexend Deca
            </p>
          </div>
          <div className={space_grotesk.variable}>
            <h1
              style={{
                fontFamily: "var(--font-Space-Grotesk)",
                margin: 0,
              }}
            >
              AaIiLlMm
            </h1>
            <p
              className="hv"
              style={{
                fontFamily: "var(--font-Space-Grotesk)",
                margin: 0,
              }}
            >
              Space Grotesk
            </p>
          </div>
        </Floaty>
      </Page>
      <Page color={Color3.fromHex("00c0ff")} id="sc_art">
        <h1>Artistry</h1>
        <p>
          Artistry usually includes writing and drawing. These are the purposes
          for{" "}
          <a href="https://blog.abtmtr.link" className="inline">
            my blog
          </a>{" "}
          and{" "}
          <a href="https://img.abtmtr.link" className="inline">
            my public gallery
          </a>
          .
        </p>
        <ProjectList projects={images} markdown />
        <ProjectList projects={blog} markdown double tooLong />
      </Page>
      <Page color={Color3.fromHex("FFFFFF")} id="branding">
        <h1>Branding</h1>
        <p>
          I don't really have strict branding guidelines, but I do have a few
          important rules if you would like to refer to me in a professional or
          formal context.
        </p>
        <h2>Name</h2>
        <p>
          If you would like to refer to me online, you'll usually be able to use
          my username <b>MeowcaTheoRange</b>. If that's too long, you can always
          shorten it to <strong>MTR</strong>.
        </p>
        <p>
          Please make sure to keep the styling. It's <b>MeowcaTheoRange</b>, not{" "}
          <strong>MeowcatHeOrange</strong>, <strong>MeowcaTheOrange</strong>,
          nor <strong>Meowca Theo Range</strong>.
        </p>
        <p className="hv">
          The styling <strong>meowcatheorange</strong> is OK if necessary.
        </p>
        <p>
          If you would like to refer to me in a more professional context, my
          name <strong>Iszac</strong> or the moniker <strong>Theo Range</strong>{" "}
          will work just as well.
        </p>
        <p className="hv">
          If you are a local organization and would like to refer to me by my
          legal name, please{" "}
          <a href="#hi" className="inline">
            contact me
          </a>{" "}
          and we can probably figure something out.
          <br />
          Local means <strong>within Minnesota</strong>, by the way.
        </p>
        <h2>Colours</h2>
        <p>
          If you would like to use colours to refer to me, whether that be the
          primary color on a card or the color of my name, I recommend you use
          these colours:
        </p>

        <ColourChip colour={new Color3(0, 0.752941176, 1)}>
          <b>Iszac Blue</b>
          <br />
          <small>Primary</small>
        </ColourChip>
        <ColourChip colour={new Color3(1, 0.25, 0)}>
          <b>Rocco Orange</b>
          <br />
          <small>Primary Negative</small>
        </ColourChip>
        <p style={{ color: "#00c0FF" }} className="color-collapse-on-a11y">
          <b>Iszac Blue</b> is literally <strong>Rocco Orange</strong> but
          inverted. This colour is named after <strong>Iszac</strong>, an OC of
          mine that I came up with, for the setting of Ætherglow.
          <br />
          <small>
            ...and then I shortly named myself after said character...
          </small>
          <br />
          If you were to use any of these colours to represnt me as a{" "}
          <strong>person</strong>, use this one.
        </p>
        <p style={{ color: "#FF4000" }} className="color-collapse-on-a11y">
          <b>Rocco Orange</b> is my favourite colour orange, but now more red.
          The name comes from my character <strong>Rocco</strong>, whose hair is
          this colour - though this colour has been applied to more characters
          like <strong>BLEND-1020</strong>.<br />
          If you were to use any of these colours to represnt me as an{" "}
          <strong>entity</strong>, use this one whenever possible.
        </p>
        <br />
        <ColourChip colour={new Color3(0.5, 0, 1)}>
          <b>Grape Soda</b>
          <br />
          <small>Secondary</small>
        </ColourChip>
        <ColourChip colour={new Color3(0.5, 1, 0)}>
          <b>Avalonian Waste</b>
          <br />
          <small>Secondary Negative</small>
        </ColourChip>
        <p style={{ color: "#8000FF" }} className="color-collapse-on-a11y">
          <b>Grape Soda</b> represents my love for grape soda.
          <br />
          My favourite is Fanta Grape. :]
        </p>
        <p style={{ color: "#80FF00" }} className="color-collapse-on-a11y">
          <b>Avalonian Waste</b> is also literally <strong>Grape Soda</strong>{" "}
          but inverted. This represents some{" "}
          <a
            href="https://mlr.fandom.com/wiki/Ayden"
            target="_blank"
            className="inline"
          >
            old lore
          </a>{" "}
          that I'm still screwing with.
        </p>
      </Page>
      <Page color={Color3.fromHex("000000")}></Page>
      <Footer />
    </div>
  );
}
