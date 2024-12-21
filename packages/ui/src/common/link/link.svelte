<script lang="ts">
  import { type Snippet } from "svelte";
  import { type HTMLAnchorAttributes } from "svelte/elements";

  interface Props extends HTMLAnchorAttributes {
    children: Snippet;
    href: string;
    external?: boolean;
  }

  const { children, href, external, ...props }: Props = $props();
</script>

<a
  {...props}
  class="-mx-0.5 border-b-4 border-yellow bg-gradient-to-b from-transparent from-50% to-yellow to-50% bg-[length:100%_200%] px-0.5 font-medium transition-all duration-500 hover:border-b-2 hover:bg-[0_100%]"
  href={href}
  target={external ? "_blank" : undefined}
>
  {@render children()}
</a>
