<script
  lang="ts"
  module
>
  export interface Project extends Record<string, string | number | undefined> {
    title: string;
    description: string;
    company?: string;
    image: string;
    year: number;
    link?: string;
  }
</script>

<script lang="ts">
  interface Props {
    project: Project;
  }

  const { project }: Props = $props();
</script>

<a
  href={project.link ?? "#"}
  target={project.link ? "_blank" : "_self"}
>
  <img
    src={project.image}
    alt={project.title}
    class="aspect-video w-full rounded-t-lg object-cover lg:rounded-lg"
  />

  <div
    class="group rounded-lg bg-gradient-to-b from-transparent from-50% to-yellow/90 to-50% bg-[length:100%_200%] transition-all duration-500 hover:bg-[0_100%] hover:backdrop-blur lg:absolute lg:inset-0"
  >
    <div
      class="flex flex-col items-center justify-center gap-4 bg-yellow p-4 text-center transition-all duration-500 group-hover:translate-y-0 lg:absolute lg:inset-0 lg:translate-y-[100%] lg:bg-transparent"
    >
      <div>
        <h3 class="text-xl font-semibold">{project.title}</h3>

        <p class="text-xs uppercase tracking-wider text-gray-600">
          {project.company ?? "Freelance"}
        </p>

        <p class="px-2 py-1 text-sm tracking-wide text-gray-500">
          {project.year}
        </p>
      </div>

      <div class="lg:px-6">
        <p class="text-xs text-gray-700">{project.description}</p>
      </div>

      {#if !project.link}
        <p
          class="rounded bg-gray-300 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-gray-400"
        >
          Link Unavailable
        </p>
      {/if}
    </div>
  </div>
</a>
