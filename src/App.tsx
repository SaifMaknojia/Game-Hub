import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./component/GameGrid";
import Navbar from "./component/Navbar";
import GenreList from "./component/GenreList";

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
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area="main">
        {" "}
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
