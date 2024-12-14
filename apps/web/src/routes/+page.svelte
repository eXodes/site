<script lang="ts">
  import { Link } from "ui";

  const SOCIAL = [
    {
      name: "Bluesky",
      href: "https://exodes.bsky.social",
      icon: "/images/social/bluesky.svg",
    },
    {
      name: "X",
      href: "https://x.com/eXodes",
      icon: "/images/social/x.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/exod3s",
      icon: "/images/social/facebook.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/exodes/",
      icon: "/images/social/instagram.svg",
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.exodes.net",
      icon: "/images/social/whatsapp.svg",
    },
  ];
</script>

<svelte:head>
  <title>Exo Des</title>
</svelte:head>

<main
  class="min-h-screen w-full flex flex-col gap-8 lg:gap-20 px-6 py-10 lg:px-40 justify-center bg-picton-blue-500"
>
  <h1 class="text-8xl font-display text-picton-blue-900">
    <img
      src="/images/hello.svg"
      alt="Hello"
      class="w-auto h-12 lg:h-24 stroke-picton-blue-900"
    />
  </h1>

  <p class="text-lg lg:text-3xl leading-[2rem] lg:leading-[3rem]">
    I’m Exo. I’m a self-taught <Link
      href="https://web.exodes.net"
      external>UI Engineer</Link
    > based in Selangor. I currently work as Frontend Enginer for <Link
      href="https://www.hypefast.id"
      external>Hypefast</Link
    >
    and I dabble with <Link
      href="https://www.behance.net/exodes"
      external>graphic design</Link
    > on the side. I also do
    <Link
      href="https://www.flickr.com/photos/exodes"
      external>photography</Link
    >
    as well as
    <Link
      href="https://www.youtube.com/playlist?list=PLRCk8ZrqaXj9JYeKG-hCbgnOp_2o2V5o2"
      external>videography</Link
    >. I spend most of my time tinkering with Javascript frameworks while creating my own
    <Link
      href="https://github.com/eXodes/gene-ui"
      external>UI Library</Link
    >, and some other projects. During my free time, I enjoy <Link
      href="https://trakt.tv/users/exodes/history/shows"
      external>TV series</Link
    > such as Fringe, Timeless, Battlestar Galactica and sometimes
    <Link
      href="https://trakt.tv/users/exodes/history/movies"
      external>movies</Link
    >
    too. Did I mention that I <Link
      href="https://blog.exodes.net"
      external>blog</Link
    > too? If you want to hire me, you can reach me <Link href="mailto:hello@exodes.net">here</Link
    >.
  </p>

  <footer class="w-full flex">
    <ul class="flex gap-6">
      {#each SOCIAL as { name, href, icon }}
        <li class="w-5 h-5 lg:w-6 lg:h-6">
          <a href={href}>
            <img
              class="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200"
              alt={name}
              src={icon}
            />
          </a>
        </li>
      {/each}
    </ul>
  </footer>
</main>
