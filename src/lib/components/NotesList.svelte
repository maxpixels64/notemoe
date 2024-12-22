<script>
    let { list } = $props();
    import * as Card from "$lib/components/ui/card";

    import { liveQuery } from "dexie";
    import { db } from "../../db";

    let notes = liveQuery(
    () => db.notes.toArray()
  );
</script>

    {#if $notes}
      {#each $notes as note (note.id)}
      <a href="/notes/{note.id}">
      <Card.Root>
        <Card.Header>
          <Card.Title>{note.title}</Card.Title>
          <Card.Description>{note.timestamp}</Card.Description>
        </Card.Header>
        <Card.Content>
          <p>{note.content}</p>
        </Card.Content>
      </Card.Root>
      </a>
      {/each}
    {/if}