import * as yup from "yup";
import { Grid } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function ProjectForm({}) {
  const defaultValues = {
    name: "",
    description: "",
    overview: "",
    tools: [],
    ImageURL: "",
  };

  const projectFormSchema = yup.object().shape({
    name: yup.string().required("You need to add a name."),
    description: yup.string(),
    overview: yup.string(),
    tools: yup.array(),
    ImageURL: yup.string(),
  });

  const { control } = useForm({
    defaultValues,
    resolver: yupResolver(projectFormSchema),
    mode: "all",
  });

  return (
    <form>
      <Grid container spacing={4}>
        <Grid item>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                label="Project Name"
                variant="outlined"
                fullWidth
                error={!!fieldState.error}
                helperText={fieldState.error}
              />
            )}
          ></Controller>
        </Grid>
      </Grid>
    </form>
  );
}
