import { Lock, Person, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
} from "@mui/material";
import { Field, FieldProps, Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";

const initialValues = {
  username: "",
  password: "",
};

interface FormValues {
  username: string;
  password: string;
}

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const onSubmit = (values: FormValues) => {
    console.log("Form Values:", values);
  };

  return (
    <Paper
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {({ submitForm, isValid, setTouched }) => (
          <Card elevation={5}>
            <CardHeader title="Login"></CardHeader>
            <CardContent>
              <Stack direction={"column"} spacing={2}>
                <Field name="username">
                  {({ meta: { touched, error }, field }: FieldProps) => (
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="username" required>
                        Username
                      </InputLabel>
                      <OutlinedInput
                        {...field}
                        id="username"
                        type="text"
                        label="Username"
                        error={Boolean(touched && error)}
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <Person />
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                      {touched && error && (
                        <Alert severity="error">{error}</Alert>
                      )}
                    </FormControl>
                  )}
                </Field>
                <Field name="password">
                  {({ meta: { touched, error }, field }: FieldProps) => (
                    <FormControl variant="outlined">
                      <InputLabel htmlFor="password" required>
                        Password
                      </InputLabel>
                      <OutlinedInput
                        {...field}
                        id="password"
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        error={Boolean(touched && error)}
                        startAdornment={
                          <InputAdornment position="start">
                            <IconButton>
                              <Lock />
                            </IconButton>
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              onClick={() => setShowPassword((prev) => !prev)}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      ></OutlinedInput>
                      {touched && error && (
                        <Alert severity="error">{error}</Alert>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Stack>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button>SignUp</Button>
              <Button
                variant="contained"
                onClick={() => {
                  if (isValid) submitForm();
                  else setTouched({ username: true, password: true });
                }}
              >
                Login
              </Button>
            </CardActions>
          </Card>
        )}
      </Formik>
    </Paper>
  );
}

export default LoginPage;
