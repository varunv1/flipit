import React, { useEffect, useMemo, useState } from "react";
import { Button, Icon, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import img from "./image_processing20220722-28208-yfhczu.gif";
function App() {
  const [team1, setTeam1] = useState("A");
  const [team2, setTeam2] = useState("B");
  const [isFlipping, setIsFlipping] = useState(false);
  const flipHandler = () => {
    setIsFlipping(true);
  };
  const [animation, setAnimation] = useState(true);

  useEffect(() => {
    if (isFlipping) {
      setTimeout(() => {
        setAnimation(false);
      }, 1500);
    }
  }, [isFlipping]);

  const whoWon = useMemo(() => {
    if (isFlipping) {
      return Math.floor(Math.random() * 1000) % 2 === 0 ? "Team 1" : "Team 2";
    }
    return "No winner";
  }, [isFlipping, team1, team2]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {!isFlipping && (
        <Box
          padding={10}
          sx={{
            border: "2px solid rgba(0,0,0,0.2)",
            borderRadius: "16px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
            },
          }}
        >
          <TextField
            label="Team A"
            variant="outlined"
            onChange={(e) => setTeam1(e.target.value)}
            value={team1}
          />
          <Box
            component="span"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap={1}
            padding={5}
          >
            <SportsCricketIcon fontSize="large" color="action" />
            V/S
          </Box>
          <TextField
            label="Team B"
            variant="outlined"
            onChange={(e) => setTeam2(e.target.value)}
            value={team2}
          />
          <Button
            variant="contained"
            color="success"
            onClick={flipHandler}
            sx={{
              display: "block",
              margin: "auto",
              marginTop: "22px",
            }}
            size="large"
          >
            Toss
          </Button>
        </Box>
      )}

      {isFlipping && (
        <Box>
          {animation && (
            <img
              width={400}
              height={400}
              src={img}
              alt="flipping image"
              style={{ borderRadius: "12px" }}
            />
          )}
          {!animation && (
            <Box>
              {`${whoWon} won the TOSS`}
              <Button
                variant="contained"
                color="success"
                onClick={() => setIsFlipping(false)}
                sx={{
                  display: "block",
                  margin: "auto",
                  marginTop: "22px",
                }}
                size="large"
              >
                Toss Again
              </Button>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

export default App;
