<script>
    import * as Resizable from "$lib/components/ui/resizable";
    import * as Card from "$lib/components/ui/card";
</script>

<Resizable.PaneGroup class="h-full" direction="horizontal">
  <Resizable.Pane class="p-4" defaultSize={25}>
    <Card.Root>
      <Card.Header>
        <Card.Title>My first note</Card.Title>
        <Card.Description>11:48 PM</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
    </Card.Root>
    <Card.Root>
      <Card.Header>
        <Card.Title>My first note</Card.Title>
        <Card.Description>11:48 PM</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card Content</p>
      </Card.Content>
    </Card.Root>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane class="p-4">
    <h1 class="text-3xl font-semibold">My first note</h1>
  </Resizable.Pane>
</Resizable.PaneGroup>