import classes from "./contact.module.css";
import { useForm } from "@mantine/form";
import { TextInput, Box, Group, Button, Textarea } from "@mantine/core";
import emailJs from "@emailjs/browser";

export const Contact = () => {
  emailJs.init("yij5B0qq7jkBd8l4B");

  const form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const sendEmail = (values) => {
    emailJs.send("service_j6i38ke", "template_zitqhso", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.imgPano}></div>
      <div className={classes.divForm}>
        <div>
          <p>Remplissez le formulaire ci dessous pour nous contacter</p>
        </div>
        <div>
          <Box>
            <form onSubmit={form.onSubmit(sendEmail)}>
              <TextInput
                withAsterisk
                label="Nom"
                {...form.getInputProps("firstName")}
                required
              />
              <TextInput
                withAsterisk
                label="Prénom"
                {...form.getInputProps("Name")}
                required
              />
              <TextInput
                withAsterisk
                label="E-mail"
                {...form.getInputProps("email")}
                required
              />
              <TextInput
                withAsterisk
                label="Numéro de téléphone"
                {...form.getInputProps("phoneNumber")}
                required
              />
              <Textarea
                label="Message"
                autosize
                minRows={2}
                {...form.getInputProps("message")}
                required
              />
              <Group justify="flex-end" mt="md">
                <Button type="submit">Submit</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};
