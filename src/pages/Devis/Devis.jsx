import styles from "./devis.module.css";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  Select,
  Radio,
} from "@mantine/core";

export const Devis = () => {
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
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <div className={styles.root}>
      <div className={styles.imgPano}></div>
      <div
        style={{
          marginTop: "60px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "20px",
        }}
      >
        <div>Votre bien</div>
        <div>
          <Box mx="auto">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
              <Select
                label="Type de bien..."
                placeholder="Type de bien..."
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
              />
              <Radio.Group
                label="Vous souhaitez"
                withAsterisk
                {...form.getInputProps("wish")}
              >
                <Group>
                  <Radio label="Vendre" value="sell" />
                  <Radio label="Louer" value="rent" />
                </Group>
              </Radio.Group>
              <Radio.Group
                label="Installation elec +15ans"
                withAsterisk
                {...form.getInputProps("electric15")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <Select
                withAsterisk
                label="Nombre de pièces..."
                placeholder="Nombre de pièces..."
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
              <Radio.Group
                label="Installation gaz +15ans"
                withAsterisk
                {...form.getInputProps("gaz15")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                </Group>
              </Radio.Group>
              <TextInput
                withAsterisk
                label="Surface habitable m²"
                {...form.getInputProps("surface")}
              />
              <Select
                withAsterisk
                label="Date de construction"
                placeholder="Date de construction"
                data={[
                  "Avant Janvier 1949",
                  "Avant Juillet 1997",
                  "Après Juillet 1997",
                  "Après Juillet 1997 mais plus de 15 ans",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("constructionDate")}
              />
              <Select
                withAsterisk
                label="Chauffage"
                placeholder="Chauffage"
                data={[
                  "Gaz",
                  "Electrique",
                  "Bois",
                  "Fioul",
                  "Autre",
                  "Je ne sais pas",
                ]}
                {...form.getInputProps("heating")}
              />
              <Select
                withAsterisk
                label="Gaz"
                placeholder="Gaz"
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
              />
              <Radio.Group
                label="Copropriété"
                withAsterisk
                {...form.getInputProps("coOwnership")}
              >
                <Group>
                  <Radio label="Oui" value="yes" />
                  <Radio label="Non" value="no" />
                  <Radio label="Je ne sais pas" value="dontKnow" />
                </Group>
              </Radio.Group>
              <TextInput
                withAsterisk
                label="Adresse"
                autoComplete="street-address"
                {...form.getInputProps("adress")}
              />
              <TextInput
                withAsterisk
                label="Code postal"
                autoComplete="postal-code"
                {...form.getInputProps("postalCode")}
              />
              <TextInput
                withAsterisk
                label="Ville"
                autoComplete="address-level2"
                {...form.getInputProps("city")}
              />
              <TextInput
                label="Informations complémentaires"
                placeholder="Informations complémentaires"
                {...form.getInputProps("moreInfo")}
              />
              <TextInput
                withAsterisk
                label="Prénom"
                placeholder="Prénom"
                autoComplete="given-name"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                withAsterisk
                label="Nom"
                placeholder="Nom"
                autoComplete="family-name"
                {...form.getInputProps("lastName")}
              />
              <TextInput
                withAsterisk
                label="Email"
                placeholder="your@email.com"
                {...form.getInputProps("email")}
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
