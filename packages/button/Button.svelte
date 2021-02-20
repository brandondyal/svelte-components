<script>
  export let text;
  export let classNames = '';
  export let handleClick;
  export let isDisabled = null;
</script>

<button class="{ classNames }" on:click="{ handleClick }" disabled={ isDisabled }>{ text }</button>