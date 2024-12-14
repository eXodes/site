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
  class="font-medium bg-[length:100%_200%] transition-all duration-500 bg-gradient-to-b from-transparent from-50% to-yellow to-50% border-b-4 border-yellow px-0.5 -mx-0.5 hover:bg-[0_100%] hover:border-b-2"
  href={href}
  target={external ? "_blank" : undefined}
>
  {@render children()}
</a>
