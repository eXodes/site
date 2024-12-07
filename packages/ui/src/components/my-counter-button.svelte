<script lang="ts">
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button
  class="rounded-xl border-2 border-orange-500 px-4 py-2"
  on:click={handleClick}
>
  Clicks: {count}
</button>
