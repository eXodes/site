<script lang="ts">
  import { base } from "$app/paths";
  import { Link } from "ui";

  interface Social {
    name: string;
    href: string;
    icon: string;
  }

  const SOCIAL: Social[] = [
    {
      name: "Bluesky",
      href: "https://exodes.bsky.social",
      icon: base + "/images/social/bluesky.svg",
    },
    {
      name: "X",
      href: "https://x.com/eXodes",
      icon: base + "/images/social/x.svg",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/exod3s",
      icon: base + "/images/social/facebook.svg",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/exodes/",
      icon: base + "/images/social/instagram.svg",
    },
    {
      name: "WhatsApp",
      href: "https://whatsapp.exodes.net",
      icon: base + "/images/social/whatsapp.svg",
    },
  ];
</script>

<svelte:head>
  <title>Exo Des</title>
</svelte:head>

<main
  class="container mx-auto flex min-h-screen flex-col justify-center gap-8 px-6 py-10 lg:gap-20"
>
  <h1 class="font-display text-8xl text-picton-blue-900">
    <img
      src={base + "/images/hello.svg"}
      alt="Hello"
      class="h-12 w-auto stroke-picton-blue-900 lg:h-24"
    />
  </h1>

  <p class="text-lg leading-[2rem] lg:text-3xl lg:leading-[3rem]">
    I’m Exo. I’m a self-taught <Link href={base + "/past-projects"}>UI Engineer</Link> based in Selangor.
    I currently work as Frontend Enginer for <Link
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

  <footer class="flex w-full">
    <ul class="flex gap-6">
      {#each SOCIAL as { name, href, icon }}
        <li class="h-5 w-5 lg:h-6 lg:w-6">
          <a href={href}>
            <img
              class="opacity-70 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0"
              alt={name}
              src={icon}
            />
          </a>
        </li>
      {/each}
    </ul>
  </footer>
</main>
