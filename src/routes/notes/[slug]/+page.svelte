<script lang="ts">
    
    import * as Resizable from "$lib/components/ui/resizable";
    import * as Card from "$lib/components/ui/card";
    import * as Select from "$lib/components/ui/select";
    import { Button } from "$lib/components/ui/button";
    import { Textarea } from "$lib/components/ui/textarea";

    import type { PageData } from './$types';
    import { db } from "../../../db";

    export let data: PageData;
    console.log(data)
    import NotesList from "$lib/components/NotesList.svelte";
  import { onMount } from "svelte";

    async function createNote() {
      const note = await db.notes.add({
        title: "Unitled Note",
        timestamp: new Date().getTime(),
        content: "amogus"
      });
      console.log(note);
    }

    async function editNote() {
        await db.notes.update(Number(data.slug), {content: "hi"})
    }

    let note: Note | undefined;

    onMount(async () => {
        note = await db.notes.get(Number(data.slug));
    })
</script>

<Resizable.PaneGroup class="h-full" direction="horizontal">
  <Resizable.Pane class="p-4" defaultSize={25}>
    <Select.Root>
      <Select.Trigger class="w-[180px]">
        <Select.Value placeholder="Workspace" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="light">Default</Select.Item>
        <Select.Item value="dark">Homework</Select.Item>
        <Select.Item value="system">Coding</Select.Item>
      </Select.Content>
    </Select.Root>
    <Button on:click={createNote}>+</Button>
    <NotesList list="default" />
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane class="p-4">
    <h1 class="text-3xl font-semibold">{note?.title}</h1>
    <Textarea value={note?.content} on:change={async () => await db.notes.update(Number(data.slug), {content: value})} />
  </Resizable.Pane>
</Resizable.PaneGroup>