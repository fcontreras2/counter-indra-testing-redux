import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { decrement, increment, reset } from "../../features/counter/counterSlide";

const Counter = () => {
  const counter = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Container maxWidth="xs">
      <Grid container flexDirection={"column"} pt={10}>
        <Typography variant="h4" component={"h1"}>
          App Counter
        </Typography>
        <Typography variant="h6" component={"p"}>
          Contador: {counter}
        </Typography>
      </Grid>
      <Grid container pt={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => dispatch(increment())}>
            Incrementar
          </Button>
          <Button onClick={() => dispatch(decrement())}>
            Decrementar
          </Button>
          <Button
            color="secondary"
            onClick={() => dispatch(reset())}          >
            Reiniciar
          </Button>
        </ButtonGroup>
      </Grid>
    </Container>
  );
};

export default Counter;
