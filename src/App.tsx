import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GameGrid />
        </GridItem>
      </Show>

      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
