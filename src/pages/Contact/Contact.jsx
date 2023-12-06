import styles from "./contact.module.css";
import { useForm } from "@mantine/form";
import { TextInput, Box, Group, Button, Textarea, Checkbox,Anchor} from "@mantine/core";
import emailJs from "@emailjs/browser";

export const Contact = () => {
  emailJs.init("yij5B0qq7jkBd8l4B");

  const form = useForm({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const sendEmail = (values) => {
    emailJs.send("service_j6i38ke", "template_zitqhso", {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
      phoneNumber: values.phoneNumber,
    });
  };

  return (
    <div className={styles.root}>
        <div className={styles.backgroundImg}>
        <div className={styles.divSize}>
          <h1>Nous contacter</h1>
          <div className={styles.block}>
            <p>Nous contacter</p>
          </div>
        </div>
      </div>
      <div className={styles.divForm}>
        <div>
          <p>Remplissez le formulaire ci dessous pour nous contacter</p>
        </div>
        <div>
          <Box>
            <form className={styles.form} onSubmit={form.onSubmit(sendEmail)}>
              <TextInput
                withAsterisk
                label="Nom"
                {...form.getInputProps("lastName")}
                required
              />
              <TextInput
                withAsterisk
                label="Prénom"
                {...form.getInputProps("firstName")}
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
              <Checkbox
               className={styles.marginTop}
                defaultChecked
                label={
                  <>
                    En cochant cette case, j accepte la{' '}
                    <Anchor href="/" target="_blank" inherit>
                    Politique de confidentialité de ce site
                    </Anchor>
                    </>
                       } />
              <Group justify="center" mt="md">
                <Button type="submit" className={styles.marginTop}>Envoyer</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};
