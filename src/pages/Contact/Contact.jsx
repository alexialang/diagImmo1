import styles from "./contact.module.css";
import { useForm } from "@mantine/form";
import { TextInput, Box, Group, Button, Textarea, Checkbox,Anchor,Popover, Text,} from "@mantine/core";
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
      {/* Section a propos */}
      <section>

        <div className={styles.blockQuiSommesNous}>
          <div><h2>Qui somme nous ?</h2></div>
            <div className={styles.txt}>
              <p>Notre entreprise de diagnostic immobilier, active dans les départements 57, 54 et 55, excelle dans la fourniture de diagnostics conformes aux normes réglementaires. Forts d’une équipe expérimentée, nous assurons une expertise technique complète, une conformité rigoureuse, une réactivité accrue et une transparence totale. Couvrant divers diagnostics, nous facilitons des transactions immobilières sûres et transparentes pour nos clients, qu’il s’agisse de ventes ou locations.
              </p>
            </div>
        </div>
      </section>
      <div className={styles.divForm}>
        <div>
          <p>Remplissez le formulaire ci dessous pour nous contacter :</p>
        </div>
        <div>
          <Box>
            <form className={styles.form} onSubmit={form.onSubmit(sendEmail)}>
              <h2>Formulaire de contact</h2>
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
                    En cochant cette case, j’accepte la{' '}
                    <Anchor href="/conf" target="_blank" inherit>
                    Politique de confidentialité de ce site
                    </Anchor>
                    </>
                       } />

              <Group justify="center" mt="md">

              <Popover width={200} position="bottom" withArrow shadow="md">
              <Popover.Target>
                <Button type="submit" className={styles.marginTop}>Envoyer</Button>
                </Popover.Target>
              <Popover.Dropdown>
              <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
              </Popover.Dropdown>
              </Popover>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};
