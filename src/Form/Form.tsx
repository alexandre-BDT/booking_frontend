import React, { useState } from "react"
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material"
import { steps } from "../Types/Forms"
import "./Form.css"

const step1: steps[] = [
  {
    text: "Browse available design",
    value: "design",
    annotation: null,
    action: () => { }
  },
  {
    text: "Custom design",
    value: "custom",
    annotation: "+150 usd",
    action: () => { }
  },
]

const Form = () => {
  const [selected, setSelected] = useState<"custom" | "design">("design")

  return (
    <Box className="form-container">
      <Grid container spacing={3}>
        <h2>Select</h2>
        <Grid item xs={12}>
          <FormGroup>
            {
              step1.map((elem, index: number) => (
                <FormControlLabel control={<Checkbox value={elem.value} defaultChecked={index === 0} />} label={elem.text} />
              ))
            }
          </FormGroup>
        </Grid>
        <Grid item xs={12}>
          <Button>Next</Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Form