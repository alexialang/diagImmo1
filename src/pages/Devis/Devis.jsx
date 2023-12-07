import styles from "./devis.module.css";
import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Box, Select, Radio,Checkbox,Anchor  } from "@mantine/core";
import emailJs from "@emailjs/browser";

export const Devis = () => {
  emailJs.init("yij5B0qq7jkBd8l4B");

  const form = useForm({
    initialValues: {
      type: "",
      wish: "",
      electric15: "",
      gaz15: "",
      rooms: "",
      surface: "",
      constructionDate: "",
      heating: "",
      gazType: "",
      coOwnership: "",
      adress: "",
      postalCode: "",
      city: "",
      moreInfo: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:""
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const sendEmail = (values) => {
    emailJs.send("service_j6i38ke", "template_64iijd5", {
      type: values.type,
      wish: values.wish,
      electric15: values.electric15,
      gaz15: values.gaz15,
      rooms: values.rooms,
      surface: values.surface,
      constructionDate: values.constructionDate,
      heating: values.heating,
      gazType: values.gazType,
      coOwnership: values.coOwnership,
      adress: values.adress,
      postalCode: values.postalCode,
      city: values.city,
      moreInfo: values.moreInfo,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: values.phoneNumber,
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.backgroundImg}>
        <div className={styles.divSize}>
          <h1>Devis</h1>
          <div className={styles.block}>
            <p>Devis</p>
          </div>
        </div>
      </div>
      <div className={styles.divForm}>
        <div>
          <Box>
            <form className={styles.form} onSubmit={form.onSubmit(sendEmail)}>
            <div className={styles.colorBox2}>
                <h2>Votre bien</h2>
              </div>
              <Select
                className={styles.marginTop}
                label="Type de bien "
                placeholder="---"
                data={[
                  "Un appartement",
                  "Une maison",
                  "Un immeuble",
                  "Un local conmercial",
                  "Des parties communes",
                  "Un terrain",
                  "Une cave",
                  "Un garage",
                  "Autre",
                ]}
                {...form.getInputProps("type")}
                required
              />
              <Radio.Group
                className={styles.marginTop}
                label="Vous souhaitez "
                withAsterisk
                required
                {...form.getInputProps("wish")}
              >
                <Group>
                  <Radio label="Vendre" value="vendre" />
                  <Radio label="Louer" value="louer" />
                </Group>
              </Radio.Group>

              <Select
                className={styles.marginTop}
                withAsterisk
                required
                label="Nombre de pièces..."
                placeholder="---"
                data={[
                  "Chambre (< 12m²)",
                  "Studio",
                  "2 pièces",
                  "3 pièces",
                  "4 pièces",
                  "5 pièces",
                  "6 pièces",
                  "7 pièces",
                  "8 pièces",
                  "9 pièces",
                  "10 pièces",
                ]}
                {...form.getInputProps("rooms")}
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Surface habitable m²"
                {...form.getInputProps("surface")}
                required
              />
               <Radio.Group
                className={styles.marginTop}
                label="Copropriété"
                withAsterisk
                required
                {...form.getInputProps("coOwnership")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                  <Radio label="Je ne sais pas" value="dontKnow" />
                </Group>
              </Radio.Group>
              <Select
                className={styles.marginTop}
                withAsterisk
                label="Date de construction"
                placeholder="---"
                data={[
                  "Avant Janvier 1949",
                  "Avant Juillet 1997",
                  "Après Juillet 1997",
                  "Après Juillet 1997 mais plus de 15 ans",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("constructionDate")}
                required
              />
              <Select
                className={styles.marginTop}
                withAsterisk
                label="Chauffage"
                placeholder="---"
                data={[
                  "Gaz",
                  "Electrique",
                  "Bois",
                  "Fioul",
                  "Autre",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("heating")}
                required
              />
              <Select
                className={styles.marginTop}
                withAsterisk
                label="Gaz"
                placeholder="---"
                data={[
                  "Aucune installation",
                  "Gaz de ville",
                  "Gaz en citerne",
                  "Gaz en bouteille",
                  "Présence d'un compteur gaz sans abonement",
                  "Autre",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("gazType")}
                required
              />
              <Radio.Group
                className={styles.marginTop}
                required
                label="Installation elec +15ans"
                withAsterisk
                {...form.getInputProps("electric15")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <Radio.Group
                className={styles.marginTop}
                label="Installation gaz +15ans"
                withAsterisk
                {...form.getInputProps("gaz15")}
                required
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Adresse"
                autoComplete="street-address"
                {...form.getInputProps("adress")}
                required
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Code postal"
                autoComplete="postal-code"
                {...form.getInputProps("postalCode")}
                required
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Ville"
                autoComplete="address-level2"
                {...form.getInputProps("city")}
                required
              />
              <TextInput
                className={styles.marginTop}
                label="Informations complémentaires"
                {...form.getInputProps("moreInfo")}
                required
              />
              <div className={styles.colorBox2}>
                <h2>Vos Informations Personelles</h2>
              </div>
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Prénom"
                autoComplete="given-name"
                {...form.getInputProps("firstName")}
                required
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Nom"
                autoComplete="family-name"
                {...form.getInputProps("lastName")}
                required
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Numéro de téléphone"
                {...form.getInputProps("phoneNumber")}
                required
              />
              <TextInput
                className={styles.marginTop}
                withAsterisk
                label="Email"
                {...form.getInputProps("email")}
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
              <Group justify="center" mt="md" >
                <Button type="submit" color="" className={styles.marginTop}>Envoyer</Button>
              </Group>
            </form>
          </Box>
        </div>
      </div>
    </div>
  );
};
